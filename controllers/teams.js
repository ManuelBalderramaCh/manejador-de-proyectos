const express = require('express');
const Team = require('../models/team');
const Member = require('../models/members');

function list(req, res, next) {
    Team.find().then(objs => res.status(200).json({
        message: res.__('ok.team'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('bad.team'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Team.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.team'), 
        obj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.team'),
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
        message: res.__('ok.team'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.team'),
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
                message: res.__('ok.team'),
                obj: obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.team'),
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
            message: res.__('ok.team'),
            obj: obj
        })).catch(ex => res.status(500).json({
            message: res.__('bad.team'),
            obj: ex
        }))

}

function destroy(req, res, next) {
    const id = req.params.id;
    Team.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: res.__('ok.team'),
                obj:obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.team'),
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