const express = require('express');
const Task = require('../models/tasks');

function list(req, res, next) {
    Task.find().then(objs => res.status(200).json({
        message: res.__('ok.task'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('bad.task'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Task.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.task'), 
        obj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.task'),
        obj:ex
    }));
}

function create(req, res, next) {
    let description = req.body.description;
    let status = req.body.status;
    let priority = req.body.priority;
    let responsable = req.body.responsable;

    let task = new Task({
        description: description,
        status:status,
        priority:priority,
        responsable:responsable
    });

    task.save().then(obj => res.status(200).json({
        message: res.__('ok.task'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.task'),
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let description = req.body.description ? req.body.description : "";
    let status = req.body.status ? req.body.status : "";
    let priority = req.body.priority ? req.body.priority : "";
    let responsable = req.body.responsable ? req.body.responsable : "";

    let task = new Object({
        _description: description,
        _status: status,
        _priority: priority,
        _responsable: responsable
    });
    
    Task.findOneAndUpdate({"_id":id},task,{new : true})
            .then(obj => res.status(200).json({
                message: res.__('ok.task'),
                obj: obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.task'),
                obj:ex
            }));
}

function update(req, res, next) {
   const id = req.params.id;
   let description = req.body.description;

   let task = new Object();

   if(description)
       task._description = description;

    Task.findOneAndUpdate({"_id":id}, user, {new:true})
        .then(obj => res.status(200).json({
            message: res.__('ok.task'),
            obj: obj
        })).catch(ex => res.status(500).json({
            message: res.__('bad.task'),
            obj: ex
        }))

}

function destroy(req, res, next) {
    const id = req.params.id;
    Task.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: res.__('ok.task'),
                obj:obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.task'),
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