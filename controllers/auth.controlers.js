const { validationResult } = require("express-validator");




const crearUsuario=(req,res)=>
{
   
    const {nombre,edad}=req.body;

    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.json({errors:errors.mapped()});
    }

    if(edad<18){
        return res.json("la edad debe ser mayor a 18")
    }
    
    
   
    res.json({msg:'usuario registrado'});
}


const loginUsuario=(req,res)=>
{
    res.send('usuario logueado');
}


module.exports = {crearUsuario,loginUsuario,};

