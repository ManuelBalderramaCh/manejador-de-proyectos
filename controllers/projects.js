const express = require('express');
const Project = require('../models/projects');
function list(req, res, next) {
    Project.find().then(objs => res.status(200).json({
        message: "Lista de miembros",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Project.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Miembro con id ${id}`, // Interpolacion
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;

    let project = new Project({
        name:name, lastName:lastName
    });

    project.save().then(obj => res.status(200).json({
        message:"Miembro creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Miembro no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let name = req.body.name ? req.body.name : "";
    let lastName = req.body.lastName ? req.body.lastName : "";

    let project = new Object({
        _name: name,
        _lastName: lastName
    });
    //Director.findOneAndUpdate({},director,{}).then().catch();
    Project.findOneAndUpdate({"_id":id},project,{new : true})
            .then(obj => res.status(200).json({
                message: "Miembro actualizado correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
    res.send(`respond with a update director = ${req.params.id}`);
}

function destroy(req, res, next) {
    const id = req.params.id;
    Project.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "Miembro eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar el miembro",
                obj:ex
            }));
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};