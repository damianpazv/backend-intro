const { validationResult } = require("express-validator");
const Producto = require("../model/producto-model");
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
   
   

    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.json({errors:errors.mapped(),});
    }

  try{

    producto=new Producto(req.body);
    

//guardar producto
    await producto.save();

    res.status(201).json({msg:'producto cargado correctamente'});
  }


    catch(error){
res.status(500).json({msg:"error. contactese con el administrador"});
    }
   
   
}


const cargarProductos= async (req,res) =>
{

try {
const productos= await Producto.find();

res.status(200).json({ok:true,
    productos,
});


}

catch(error)
{

    console.log(error);
}


};

const editarProducto = async(req,res) => {

    try{
        const productoEdit= await Producto.findById(req.body._id);
        console.log(productoEdit);
        if(!productoEdit)
        {
res.status(404),json({
    ok: false,
    mge:"no existe producto con ese ID"});
        }

await Producto.findByIdAndUpdate(req.body._id,req.body);

res.status(200).json({ok: true, mge:"producto editado"});

    }



    catch(error){
        res.status(500).json({msg:"error. contactese con el administrador"});
            }




};

const eliminarProducto= async (req,res) =>{

    try{
        const productoEliminar= await Producto.findById(req.params.id);
        if(!productoEliminar)
        {
res.status(404).json({
    ok: false,
    mge:"no existe producto con ese ID"});
        }

await Producto.findByIdAndDelete(req.params.id);

res.status(200).json({ok: true, mge:"producto eliminado"});

    }



    catch(error){
        res.status(500).json({msg:"error. contactese con el administrador"});
            }





}

module.exports = {cargarUsuarios,crearProducto,cargarProductos,editarProducto,eliminarProducto};