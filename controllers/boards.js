const express = require('express');
const Board = require('../models/board');

function list(req, res, next) {
    Board.find().then(objs => res.status(200).json({
        message: "Lista de boards",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Board.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Board con id ${id}`, 
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

function create(req, res, next) {
    let name = req.body.name;
    let columna = req.body.columna;

    let board = new Board({
        name: name,
        columna: columna
    });

    board.save().then(obj => res.status(200).json({
        message:"Board creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "El board no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let name = req.body.name ? req.body.name : "";
    let columna = req.body.columna ? req.body.columna: "";

    let rol = new Object({
        _name: name,
        _columna: columna
    });
    
    Board.findOneAndUpdate({"_id":id},rol,{new : true})
            .then(obj => res.status(200).json({
                message: "Board actualizada correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
   const id = req.params.id;
   let name = req.body.name;
   let columna = req.body.columna;

   let board = new Object();

   if(name)
       board._name = name;

    if(columna)
        board._columna = columna

    Board.findOneAndUpdate({"_id":id}, user, {new:true})
        .then(obj => res.status(200).json({
            message: "Board actualizada correctamente",
            obj: obj
        })).catch(ex => res.status(500).json({
            message: "No se pudo reemplazar el rol",
            obj: ex
        }))

}

function destroy(req, res, next) {
    const id = req.params.id;
    Board.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "Board eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar el rol",
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