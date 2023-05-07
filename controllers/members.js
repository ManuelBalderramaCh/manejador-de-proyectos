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
    let email = req.body.email;
    let password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    let member = new Member({
        name:name, 
        lastName:lastName,
        birthDay: birthDay,
        email: email,
        password: password,
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
    let email = req.body.email ? req.body.email: "";
    let password = req.body.password ? req.body.password : "";

    let member = new Object({
        _name: name,
        _lastName: lastName,
        _birthDay: birthDay,
        _email: email,
        _password: password
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

    let member = new Object();

    if(name)
        member._name = name;

    if(lastName)
        member._lastName = lastName;
    
    if(birthDay)
        memberExpression._birthDay = birthDay;

    if(email)
        member._email = email;

    if(password)
        member._password = password

    Member.findOneAndUpdate({"_id":id}, user, {new:true})
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