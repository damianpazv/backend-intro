const Usuario = require("../model/usuario-model");


const cargarUsuarios= async (req,res) =>
{

try {
const usuarios= await Usuario.find();

res.status(200).json({ok:true,
    usuarios,
});


}

catch(error)
{

    console.log(error);
}


};


const crearProducto = async (req, res) =>
{
   
    const {name,price,description}=req.body;

    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.json({errors:errors.mapped(),});
    }

  try{
let usuario= await Usuario.findOne({name});
if(usuario){
    return res.json({msg:"alguno de los datos es incorrecto"})
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

module.exports = {cargarUsuarios,crearProducto};