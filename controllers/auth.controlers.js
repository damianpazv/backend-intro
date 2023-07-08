const { validationResult } = require("express-validator");
const Usuario=require("../model/usuario-model");

const bcrypt = require('bcrypt');




const crearUsuario= async(req,res)=>
{
   
    const {name,email,password}=req.body;

    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.json({errors:errors.mapped()});
    }

  try{
let usuario= await Usuario.findOne({email});
if(usuario){
    return res.json({msg:"un usuario ya existe con este mail"})
}
    usuario=new Usuario(req.body);
    

//encriptar contrseña
const salt = bcrypt.genSaltSync(10);
usuario.password = bcrypt.hashSync(password, salt);

//guardar usuario
    await usuario.save();

    res.json({msg:'usuario registrado'});
  }


    catch(error){
res.json({msg:"error. contactese con el administrador"});
    }
   
   
}


const loginUsuario=(req,res)=>
{
    const {name,email,password}=req.body;

    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.json({errors:errors.mapped()});
    }
    res.send('usuario logueado');
}

const prueba=(req,res) => {
    res.json("hola");
}


module.exports = {crearUsuario,loginUsuario,prueba};

