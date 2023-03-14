const express = require('express');
const { Member } = require('../db');

function list(req, res, next){
    Member.findAll()
          .then(objects => res.json(objects))
          .catch(err => res.send(error));
}

function index(req, res, next) {
    const id = req.params.id;
    Member.findByPk(id)
             .then(object => res.json(object))
             .catch(err => res.send(error));
 }

 function create(req, res, next){
    let name = req.body.name;
    let birthDate = req.body.birthDate;
    let curp = req.body.curp;
    let rfc = req.body.rfc;
    let address = req.body.address;
    let abilities = req.body.abilities;

    let member = new Object({
        name:name,
        birthDate:birthDate,
        curp:curp,
        rfc:rfc,
        address:address,
        abilities:abilities
    });

    Member.create(member)
          .then( obj => res.json(obj))
          .catch( err => res.json(err));
 }

 function replace(req, res, next){
    const id = req.params.id;
    Member.findByPk(id)
          .then((object) => {
            const name = req.body.name ? req.body.name: "";
            const birthDate = req.body.birthDate ? req.body.birthDate: "";
            const curp = req.body.curp ? req.body.curp: "";
            const rfc = req.body.rfc ? req.body.rfc: "";
            const address = req.body.address ? req.body.address: "";
            const abilities = req.body.abilities ? req.body.abilities: "";
            object.update({name: name, birthDate: birthDate, curp: curp, rfc: rfc, address: address, abilities: abilities})
                  .then(obj => res.json(obj))
                  .catch(err => res.send(err));
          })
          .catch(err => res.send(err));
 }

 function update(req, res, next){
    const id = req.params.id;
    Member.findByPk(id)
          .then((object) => {
            const name = req.body.name ? req.body.name: object.name;
            const birthDate = req.body.birthDate ? req.body.birthDate: object.birthDate;
            const curp = req.body.curp ? req.body.curp: object.curp;
            const rfc = req.body.rfc ? req.body.rfc: object.rfc;
            const address = req.body.address ? req.body.address: object.address;
            const abilities = req.body.abilities ? req.body.abilities: object.abilities;
            object.update({name: name, birthDate: birthDate, curp: curp, rfc: rfc, address: address, abilities: abilities})
                  .then(obj => res.json(obj))
                  .catch(err => res.send(err));
          })
          .catch(err => res.send(err));
 }

 function destroy(req, res, next) {
    const id = req.params.id;
    Member.destroy({ where: {id:id}})
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