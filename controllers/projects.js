const express = require('express');

function list(req, res, next) {
    res.send('Lista de proyectos');
}

function index(req, res, next) {
    res.send(`Mostrar el proyecto numero:  ${req.params.id}`);
}

function create(req, res, next) {
    let name = req.body.name;
    res.send(`Registrar al proyecto: ${name}`);
}

function replace(req, res, next) {
    res.send(`Remplazar al proyecto:  ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Modificar al proyecto:  ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Eliminar al proyecto: ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};