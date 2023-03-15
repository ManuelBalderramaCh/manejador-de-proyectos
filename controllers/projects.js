const express = require('express');
const { Project } = require('../db');

function list(req, res, next){
    Project.findAll()
          .then(objects => res.json(objects))
          .catch(err => res.send(error));
}

function index(req, res, next) {
    const id = req.params.id;
    Project.findByPk(id)
             .then(object => res.json(object))
             .catch(err => res.send(error));
 }

 function create(req, res, next){
    let nameProject = req.body.nameProject;
    let applicationDate = req.body.applicationDate;
    let startDate = req.body.startDate;
    let description = req.body.description;
    let projectManager = req.body.projectManager;
    let productOwner = req.body.productOwner;
    let team = req.body.team;

    let project = new Object({
        nameProject:nameProject,
        applicationDate:applicationDate,
        startDate:startDate,
        description:description,
        projectManager:projectManager,
        productOwner:productOwner,
        team:team
    });

    Project.create(project)
          .then( obj => res.json(obj))
          .catch( err => res.json(err));
 }

 function replace(req, res, next){
    const id = req.params.id;
    Project.findByPk(id)
          .then((object) => {
            const nameProject = req.body.nameProject ? req.body.nameProject: "";
            const applicationDate = req.body.applicationDate ? req.body.applicationDate: "";
            const startDate = req.body.startDate ? req.body.startDate: "";
            const description = req.body.description ? req.body.description: "";
            const projectManager = req.body.projectManager ? req.body.projectManager: "";
            const productOwner = req.body.productOwner ? req.body.productOwner: "";
            const team = req.body.team ? req.body.team: "";
            object.update({
                nameProject:nameProject,
                applicationDate:applicationDate,
                startDate:startDate,
                description:description,
                projectManager:projectManager,
                productOwner:productOwner,
                team:team
            })
                  .then(obj => res.json(obj))
                  .catch(err => res.send(err));
          })
          .catch(err => res.send(err));
 }

 function update(req, res, next){
    const id = req.params.id;
    Project.findByPk(id)
          .then((object) => {
            const nameProject = req.body.nameProject ? req.body.nameProject: object.nameProject;
            const applicationDate = req.body.applicationDate ? req.body.applicationDate: object.applicationDate;
            const startDate = req.body.startDate ? req.body.startDate: object.startDate;
            const description = req.body.description ? req.body.description: object.description;
            const projectManager = req.body.projectManager ? req.body.projectManager: object.projectManager;
            const productOwner = req.body.productOwner ? req.body.productOwner: object.productOwner;
            const team = req.body.team ? req.body.team: object.team;
            object.update({
                nameProject:nameProject,
                applicationDate:applicationDate,
                startDate:startDate,
                description:description,
                projectManager:projectManager,
                productOwner:productOwner,
                team:team
            })
                  .then(obj => res.json(obj))
                  .catch(err => res.send(err));
          })
          .catch(err => res.send(err));
 }

 function destroy(req, res, next) {
    const id = req.params.id;
    Project.destroy({ where: {id:id}})
            .then(obj => res.json(obj))
            .catch(err => res.send(err));
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};