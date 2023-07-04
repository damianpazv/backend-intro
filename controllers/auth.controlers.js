const { validationResult } = require("express-validator");




const crearUsuario=(req,res)=>
{
    const {nombre,edad,password}=req.body;

    const errors=validationResult(req);
    
    
    console.log(req.body.nombre)
    res.json({msg:'usuario registrado'});
}


const loginUsuario=(req,res)=>
{
    res.send('usuario logueado');
}


module.exports = {crearUsuario,loginUsuario,};

