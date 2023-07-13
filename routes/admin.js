const express = require('express');
const { cargarUsuarios, crearProducto, cargarProductos, editarProducto, eliminarProducto } = require('../controllers/admin.controllers');
const { check } = require('express-validator');
const routerAdmin= express.Router();


routerAdmin.get('/usuarios',cargarUsuarios);

routerAdmin.get('/productos',cargarProductos);

routerAdmin.post("/new",[
    check('name',"el nombre es obligatorio").not().isEmpty(),
    check('price',"el precio es obligatorio").not().isEmpty(),
    check('description',"la descripcion es obligatoria").not().isEmpty(),
],crearProducto);

routerAdmin.put('/editar',editarProducto);

routerAdmin.delete('/eliminar/:id',eliminarProducto);


module.exports = routerAdmin;