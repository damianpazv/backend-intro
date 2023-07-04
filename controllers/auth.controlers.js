const { validationResult } = require("express-validator");




const crearUsuario=(req,res)=>
{
    const {nombre,edad}=req.body;

    const errors=validationResult(req);
    
    
    console.log(req.body)
    res.json({msg:'usuario registrado'});
}
const loginUsuario=(req,res)=>
{
    res.send('usuario logueado');
}


module.exports = crearUsuario


module.exports=loginUsuario