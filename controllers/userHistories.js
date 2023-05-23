const express = require('express');
const UserHistory = require('../models/userHistory');

function list(req, res, next) {
    UserHistory.find().then(objs => res.status(200).json({
        message: res.__('ok.history'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('bad.history'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    UserHistory.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.history'),
        obj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.history'),
        obj:ex
    }));
}

function create(req, res, next) {
    let name = req.body.name;
    let context = req.body.context;
    let priority = req.body.priority;
   

    let userHistory = new UserHistory({
        name: name,
        context: context,
        priority: priority
    });

    userHistory.save().then(obj => res.status(200).json({
        message: res.__('ok.history'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.history'),
        ex:ex
    }));
}

function replace(req, res, next) {
    let name = req.body.name ? req.body.name: "";
    let context = req.body.context ? req.body.context: "";
    let priority = req.body.priority ? req.body.priority: "";

    let UserHistory = new Object({
        _name: name,
        _context: context,
        _priority: priority,
    });
    
    UserHistory.findOneAndUpdate({"_id":id},UserHistory,{new : true})
            .then(obj => res.status(200).json({
                message: res.__('ok.history'),
                obj: obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.history'),
                obj:ex
            }));
}

function update(req, res, next) {
   const id = req.params.id;
   let name = req.body.name;
   let context = req.body.context;
   let priority = req.body.priority;

   let UserHistory = new Object();

    if(name)
        userHistory._name = name;
   
    if(context)
        userHistory._context = context;

    if(priority)
        userHistory._priority = priority;

    UserHistory.findOneAndUpdate({"_id":id}, UserHistory)
        .then(obj => res.status(200).json({
            message: res.__('ok.history'),
            obj: obj
        })).catch(ex => res.status(500).json({
            message: res.__('bad.history'),
            obj: ex
        }))

}

function destroy(req, res, next) {
    const id = req.params.id;
    UserHistory.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: res.__('ok.history'),
                obj:obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.history'),
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