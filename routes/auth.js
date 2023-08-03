const express = require('express');
const {crearUsuario,loginUsuario, editarUsuario,} = require('../controllers/auth.controlers');
const { check } = require('express-validator');
const routerAuth= express.Router();


routerAuth.post('/new',

[check('nombre',"el nombre es obligatorio").not().isEmpty(),
 check("email","el email no es valido").not().isEmpty().isEmail(),
check("password","password debe tener mas de 5 caracteres").isLength({
    min:5
 }),
],

crearUsuario);

routerAuth.post('/login',

[check("email","el email no es valido").not().isEmpty().isEmail(),
check("password","password debe tener mas de 5 caracteres").isLength({min:5})]

,loginUsuario);


routerAuth.put("/editar",editarUsuario);


module.exports = routerAuth;