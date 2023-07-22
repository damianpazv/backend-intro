const express = require('express');
const { cargarUsuarios, crearProducto, cargarProductos, editarProducto, eliminarProducto } = require('../controllers/admin.controllers');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const routerAdmin= express.Router();


routerAdmin.get('/usuarios',cargarUsuarios);

routerAdmin.get('/productos',validarJWT,cargarProductos);

routerAdmin.post("/new",validarJWT,[
    check('name',"el nombre es obligatorio").not().isEmpty(),
    check('price',"el precio es obligatorio").not().isEmpty(),
    check('description',"la descripcion es obligatoria").not().isEmpty(),
],crearProducto);

routerAdmin.put('/editar',validarJWT,editarProducto);

routerAdmin.delete('/eliminar/:id',validarJWT,eliminarProducto);


module.exports = routerAdmin;