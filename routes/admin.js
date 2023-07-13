const express = require('express');
const { cargarUsuarios, crearProducto } = require('../controllers/admin.controllers');
const routerAdmin= express.Router();


routerAdmin.get('/usuarios',cargarUsuarios);

routerAdmin.post("/new",[],crearProducto)


module.exports = routerAdmin;