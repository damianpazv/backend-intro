const {Schema,model}=require("mongoose");

const productoSchema=Schema({
name:{
    type: String,
    required: true,
},

price:{
    type:Number,
    required: true,
    
},

description:{
    type:String,
    required: true,

},

});

module.exports= model("Producto",productoSchema);