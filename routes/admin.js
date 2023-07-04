const express = require('express');
const routerAdmin= express.Router();

routerAdmin.get('/', (req, res) => {

    res.send('peticion get');

});

routerAdmin.post('/', (req, res) => {

    res.send('peticion post recibida');
}) 

routerAdmin.put('/editar', (req, res) => {

    res.send('peticion actualizada');
}) 

routerAdmin.delete('/borrar', (req, res) => {

    res.send('peticion eliminada');
}) 

module.exports = routerAdmin;