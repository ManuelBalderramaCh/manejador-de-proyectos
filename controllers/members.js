const express = require('express');
const Member = require('../models/members');
const bcrypt = require('bcrypt');

function list(req, res, next) {
    Member.find().then(objs => res.status(200).json({
        message: res.__('ok.member'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('bad.member'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Member.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.member'), 
        obj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.member'),
        obj:ex
    }));
}

async function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;
    let birthDay = req.body.birthDay;
    //curp
    let curp = req.body.curp;
    //rfc
    let rfc = req.body.rfc;
    //address
    let address = req.body.address;
    //role
    let role = req.body.role;
    //abilities
    let abilities = req.body.abilities;
    let email = req.body.email;
    let password = req.body.password;

    let project = req.body.project;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    let member = new Member({
        name:name, 
        lastName:lastName,
        birthDay: birthDay,
        curp: curp,
        rfc: rfc,
        address: address,
        role: role,
        abilities: abilities,
        email: email,
        password: passwordHash,
        project: project,
        salt: salt
    });

    member.save().then(obj => res.status(200).json({
        message: res.__('ok.member'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.member'),
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let name = req.body.name ? req.body.name : "";
    let lastName = req.body.lastName ? req.body.lastName : "";
    let birthDay = req.body.birthDay ? req.body.birthDay: "";
    let curp = req.body.curp ? req.body.curp: "";
    let rfc = req.body.rfc ? req.body.rfc: "";
    let address = req.body.address ? req.body.address: "";
    let role = req.body.role ? req.body.role: "";
    let abilities = req.body.abilities ? req.body.abilities: "";
    let email = req.body.email ? req.body.email: "";
    let password = req.body.password ? req.body.password : "";
    let project = req.body.project ? req.body.project: "";

    let member = new Object({
        _name: name,
        _lastName: lastName,
        _birthDay: birthDay,
        _curp: curp,
        _rfc: rfc,
        _address: address,
        _role: role,
        _abilities: abilities,
        _email: email,
        _password: password,
        _project: project
    });
    
    Member.findOneAndUpdate({"_id":id},member,{new : true})
            .then(obj => res.status(200).json({
                message: res.__('ok.member'),
                obj: obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.member'),
                obj:ex
            }));
}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let birthDay = req.body.birthDay;
    let password = req.body.password;
    let project = req.body.project;

    //curp
    let curp = req.body.curp;
    //rfc
    let rfc = req.body.rfc;
    //address
    let address = req.body.address;
    //role
    let role = req.body.role;
    //abilities
    let abilities = req.body.abilities;    

    let member = new Object();

    if(name)
        member._name = name;

    if(lastName)
        member._lastName = lastName;
    
    if(birthDay)
        member._birthDay = birthDay;

    if(curp)
        member._curp = curp;

    if(rfc)
        member._rfc = rfc;

    if(address)
        member._address = address;

    if(role)
        member._role = role;

    if(abilities)
        member._abilities = abilities;
     
    if(email)
        member._email = email;

    if(password)
        member._password = password;

    if(project)
        member._project = project;

    Member.findOneAndUpdate({"_id":id}, member, {new:true})
          .then(obj => res.status(200).json({
            message: res.__('ok.member'),
            obj: obj
          })).catch(ex => res.status(500).json({
            message: res.__('bad.member'),
            obj: ex
          }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Member.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: res.__('ok.member'),
                obj:obj
            })).catch(ex => res.status(500).json({
                message: res.__('bad.member'),
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