const express = require('express');

function list(req, res, next) {
    res.send('Lista de miembros');
}

function index(req, res, next) {
    res.send(`Mostrar el miembro numero:  ${req.params.id}`);
}

function create(req, res, next) {
    let name = req.body.name;
    res.send(`Registrar al miembro: ${name}`);
}

function replace(req, res, next) {
    res.send(`Remplazar al miembro:  ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Modificar al miembro:  ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Eliminar al miembro: ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};