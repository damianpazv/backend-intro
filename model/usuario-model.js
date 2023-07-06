const {Schema,model}=require("mongoose");

const usuarioSchema=Schema({
name:{
    type: String,
    required: true,
},

email:{
    type:String,
    required: true,
    unique: true,
},

password:{
    type:String,
    required: true,

},
role:
{
    type:String,
    default:"usuario",
}
});

module.exports= model("Usuario",usuarioSchema);