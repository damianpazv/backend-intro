const express = require('express');
const {crearUsuario,loginUsuario} = require('../controllers/auth.controlers');

const { check } = require('express-validator');
const router= express.Router();


router.post('/new',

[check("nombre","el nombre es obligatorio").not().isEmpty(),
check("edad","edad es obligatorio").not().isEmpty(),
check("password","password debe tener mas de 5 caracteres").not().isLength({min:5})],

crearUsuario);

router.post('/', (loginUsuario))

router.put('/editar', (req, res) => {

    res.send('peticion actualizada');
}) 

router.delete('/borrar', (req, res) => {

    res.send('peticion eliminada');
}) 

module.exports = router;