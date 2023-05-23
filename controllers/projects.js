const express = require('express');
const Project = require('../models/projects');

function list(req, res, next) {
    Project.find().then(objs => res.status(200).json({
        message: res.__('ok.project'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('bad.project'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Project.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.project'),
        obj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.project'),
        obj:ex
    }));
}

function create(req, res, next) {
    let projectName = req.body.projectName;
    let applicationDate = req.body.applicationDate;
    let startUpDate = req.body.startUpDate;
    let description = req.body.description;
    let projectManager = req.body.projectManager;
    let projectOwner = req.body.projectOwner;
    let developer = req.body.developer;

    let project = new Project({
        projectName:projectName, 
        applicationDate:applicationDate,
        startUpDate: startUpDate,
        description: description,
        projectManager: projectManager,
        projectOwner: projectOwner,
        developer: developer
    });

    project.save().then(obj => res.status(200).json({
        message: res.__('ok.project'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.project'),
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let projectName = req.body.projectName ? req.body.projectName : "";
    let applicationDate = req.body.applicationDate ? req.body.applicationDate : "";
    let startUpDate = req.body.startUpDate ? req.body.startUpDate: "";
    let description = req.body.description ? req.body.description: "";
    let projectManager = req.body.projectManager ? req.body.projectManager: "";
    let projectOwner = req.body.projectOwner ? req.body.projectOwner: "";
    let developer = req.body.developer ? req.body.developer: "";

    let project = new Object({
        _projectName: projectName,
        _applicationDate: applicationDate,
        _startUpDate: startUpDate,
        _description: description,
        _projectManager: projectManager,
        _projectOwner: projectOwner,
        _developer: developer
    });
    
    Project.findOneAndUpdate({"_id":id},project,{new : true})
            .then(obj => res.status(200).json({
                message: res.__('ok.project'),
                obj: obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.project'),
                obj:ex
            }));
}

function update(req, res, next) {
    const id = req.params.id
    let projectName = req.body.projectName;
    let applicationDate = req.body.applicationDate;
    let startUpDate = req.body.startUpDate;
    let description = req.body.description;
    let projectManager = req.body.projectManager;
    let projectOwner = req.body.projectOwner;
    let developer = req.body.developer;

    let project = new Object();

    if(projectName)
        project._projectName = projectName;

    if(applicationDate)
        project._applicationDate = applicationDate;
    
    if(startUpDate)
        project._startUpDate = startUpDate;

    if(description)
        project._description = description;

    if(projectManager)
        project._projectManager = projectManager;
    
    if(projectOwner)
        project._projectOwner = projectOwner;

    if(developer)
        project._developer = developer;

    Project.findOneAndUpdate({"_id":id}, project, {new:true})
            .then(obj => res.status(200).json({
                message: res.__('ok.project'),
                obj: obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.project'),
                obj: ex
            }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Project.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: res.__('ok.project'),
                obj:obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.project'),
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