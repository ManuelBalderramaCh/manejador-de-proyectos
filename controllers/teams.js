const express = require('express');
const Team = require('../models/team');
const Member = require('../models/members');

function list(req, res, next) {
    Team.find().then(objs => res.status(200).json({
        message: "Lista de equipos",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Team.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Team con id ${id}`, 
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

async function create(req, res, next) {
    const teamName = req.body.teamName;
    const membersId = req.body.membersId;

    //Puede que nada mas regrese un miembro del equipo
    let members = await Member.findOne({"_id":membersId});

    let team = new Rol({
        teamName: teamName,
        members: members
    });

    team.save().then(obj => res.status(200).json({
        message:"Equipo creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "El equipo no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    const membersId = req.body.membersId ? req.body.membersId : "";
    let teamName = req.body.teamName ? req.body.teamName : "";

    let Team = new Object({
        _teamName: teamName,
        _membersId: membersId
    });
    
    Team.findOneAndUpdate({"_id":id},Team,{new : true})
            .then(obj => res.status(200).json({
                message: "Equipo actualizado correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
   const membersId = req.params.membersId;
   let teamName = req.body.teamName;

   let Team = new Object();

   if(description)
       Team._teamName = teamName;
       Team._membersId = membersId;

    Team.findOneAndUpdate({"_id":id}, Team)
        .then(obj => res.status(200).json({
            message: "Equipo actualizado correctamente",
            obj: obj
        })).catch(ex => res.status(500).json({
            message: "No se pudo reemplazar el equipo",
            obj: ex
        }))

}

function destroy(req, res, next) {
    const id = req.params.id;
    Team.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "Equipo eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar el equipo",
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