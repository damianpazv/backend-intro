const { validationResult } = require("express-validator");
const Usuario=require("../model/usuario-model");

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");




const crearUsuario= async(req,res)=>
{
   
    const {name,email,password}=req.body;

    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.json({errors:errors.mapped(),});
    }

  try{
let usuario= await Usuario.findOne({email});
if(usuario){
    return res.status(404).json({msg:"alguno de los datos es incorrecto"})
}
    usuario=new Usuario(req.body);
    

//encriptar contrseña
const salt = bcrypt.genSaltSync(10);
usuario.password = bcrypt.hashSync(password, salt);

//guardar usuario
    await usuario.save();

    //generar JWT
    const payload={
        id:usuario.id,
        name:usuario.name,
        role:usuario.role

    };

    const token=jwt.sign(payload,process.env.SECRET_JWT,
    {
        expiresIn:"2h",
    })

    res.status(201).json({msg:'usuario registrado',token});
  }


    catch(error){
res.status(500).json({msg:"error. contactese con el administrador"});
    }
   
   
}


const loginUsuario=async(req,res)=>
{
    const {email,password}=req.body;

    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.json({errors:errors.mapped()});
    }
    

    try{

        let usuario= await Usuario.findOne({email});
        if(!usuario){
            return res.status(404).json({msg:"alguno de los datos es incorrecto"});
        }

        const validarContraseña= bcrypt.compareSync(password,usuario.password);

        if(!validarContraseña)
        {
res.status(404).json({mge:"alguno de los datos es incorrecto"})
        }

    //generar JWT
    const payload={
        id:usuario.id,
        name:usuario.name,
        role:usuario.role

    };

    const token=jwt.sign(payload,process.env.SECRET_JWT,
        {
            expiresIn:"2h"
        })




        res.status(200).json({msg:"usuario loguedo correctamente",token});
    }



    catch(error){
        res.status(500).json({msg:"error. contactese con el administrador"});
            }
}




module.exports = {crearUsuario,loginUsuario,};

