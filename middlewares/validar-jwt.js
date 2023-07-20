const express = require('express');
const jwt = require("jsonwebtoken");

const validarJWT =(req,res,next)=>{

const token =req.header("x-token");

if(!token){
    return res.status(401).json({ok:false,mge:"no hay token"})
}

try{
    const payload= jwt.verify(token,process.env.SECRET_JWT);
}
catch(error)
{
    console.error(error);
}
next();


};

module.exports = {validarJWT};