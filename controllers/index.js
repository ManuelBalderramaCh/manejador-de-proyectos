const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');



function home(req, res, next) {
    res.render('index', { title: 'Express' });
}

function login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const jwtKey = "4e0214edc70d400e41d26702d7a3ea02";

    User.findOne({"_email":email}).select('_password _salt').then(user => {
        if(user){
            bcrypt.hash(password, user.salt, (err, hash) => {
                if(err){
                    res.status(403).json({
                        message: 'usuario y/o contrasena incorrecto',
                        obj: err
                    });
                 }

                if(hash === user.password){
                    res.status(200).json({
                        message: 'login ok',
                        obj: jwt.sign({data: user.id, exp: Math.floor(Date.now()/1000)+60}, jwtKey)
                    });
                    }else{
                    res.status(403).json({
                        message: 'usuario y/o contrasena incorrecto',
                        obj: null
                    });
                }

            });

        }else{
            res.status(403).json({
                message: 'usuario y/o contrasena incorrecto',
                obj: null
            });
        }
     });
};

module.exports = {
    home, login
}