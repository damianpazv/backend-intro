const { validationResult } = require("express-validator");
const Usuario=require("../model/usuario-model")

usuarioModel


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
    usuario=new Usuario(req, res);

//encriptar contrseña
const salt = bcrypt.genSaltSync(10);
usuario.password = bcrypt.hashSync(password, salt);

//guardar usuario
    await usuario.save();
  }


    catch(error){
res.json({msg:"error"});
    }
   
    res.json({msg:'usuario registrado'});
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


module.exports = {crearUsuario,loginUsuario,};

