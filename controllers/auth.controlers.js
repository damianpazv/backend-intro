const { validationResult } = require("express-validator");
const Usuario=require("../model/usuario-model");

const bcrypt = require('bcrypt');




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

    res.status(201).json({msg:'usuario registrado'});
  }


    catch(error){
res.ststus(500).json({msg:"error. contactese con el administrador"});
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

        res.status(200).json({msg:"usuario loguedo correctamente"});
    }



    catch(error){
        res.ststus(500).json({msg:"error. contactese con el administrador"});
            }
}




module.exports = {crearUsuario,loginUsuario,};

