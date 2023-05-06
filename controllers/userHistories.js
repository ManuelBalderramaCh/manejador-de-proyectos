const express = require('express');
const UserHistory = require('../models/userHistory');
const Column = require('../models/column');

function list(req, res, next) {
    UserHistory.find().then(objs => res.status(200).json({
        message: "Lista de historias",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    UserHistory.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Historia con id ${id}`, 
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

async function create(req, res, next) {
    const name = req.body.name;
    const context = req.body.context;
    const priority = req.body.priority;
    const events = req.body.events;
    const columnId = req.body.columnId;

    let column = await Column.findOne({"_id":columnId})

    let userHistory = new UserHistory({
        name: name,
        context: context,
        priority: priority,
        events: events,
        column: column
    });

    userHistory.save().then(obj => res.status(200).json({
        message:"Historia creada correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "La historia no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    const columnId = req.body.columnId ? req.body.columnId: "";
    let name = req.body.name ? req.body.name: "";
    let context = req.body.context ? req.body.context: "";
    let priority = req.body.priority ? req.body.priority: "";
    let events = req.body.events ? req.body.events: "";

    let UserHistory = new Object({
        _name: name,
        _context: context,
        _priority: priority,
        _events: events,
        _columnId: columnId
    });
    
    UserHistory.findOneAndUpdate({"_id":id},UserHistory,{new : true})
            .then(obj => res.status(200).json({
                message: "Historia actualizada correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
   const columnId = req.params.columnId;
   let name = req.body.name;
   let context = req.body.context;
   let priority = req.body.priority;
   let events = req.body.events;

   let UserHistory = new Object();

   if(description){
    UserHistory._name = name;
    UserHistory._context = context;
    UserHistory._priority = priority;
    UserHistory._events = events;
    UserHistory._columnId = columnId;
   }

    UserHistory.findOneAndUpdate({"_id":id}, UserHistory)
        .then(obj => res.status(200).json({
            message: "Historia actualizada correctamente",
            obj: obj
        })).catch(ex => res.status(500).json({
            message: "No se pudo reemplazar la historia",
            obj: ex
        }))

}

function destroy(req, res, next) {
    const id = req.params.id;
    UserHistory.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "Historia eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar la historia",
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