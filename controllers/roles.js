const express = require('express');
const Rol = require('../models/rol');

function list(req, res, next) {
    Rol.find().then(objs => res.status(200).json({
        message: res.__('ok.rol'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('bad.rol'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Rol.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.rol'), 
        obj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.rol'),
        obj:ex
    }));
}

function create(req, res, next) {
    let description = req.body.description;

    let rol = new Rol({
        description: description
    });

    rol.save().then(obj => res.status(200).json({
        message: res.__('ok.rol'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.rol'),
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let description = req.body.description ? req.body.description : "";

    let rol = new Object({
        _description: description
    });
    
    Rol.findOneAndUpdate({"_id":id},rol,{new : true})
            .then(obj => res.status(200).json({
                message: res.__('ok.rol'),
                obj: obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.rol'),
                obj:ex
            }));
}

function update(req, res, next) {
   const id = req.params.id;
   let description = req.body.description;

   let rol = new Object();

   if(description)
       rol._description = description;

    Rol.findOneAndUpdate({"_id":id}, user, {new:true})
        .then(obj => res.status(200).json({
            message: res.__('ok.rol'),
            obj: obj
        })).catch(ex => res.status(500).json({
            message: res.__('bad.rol'),
            obj: ex
        }))

}

function destroy(req, res, next) {
    const id = req.params.id;
    Rol.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: res.__('ok.rol'),
                obj:obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.rol'),
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