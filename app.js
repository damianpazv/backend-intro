const express = require('express');
require('dotenv').config();


const app = express();


app.use(express.static('public'))

app.use(express.json);


app.get('/', (req, res) => {

    res.send('peticion get');

});

app.post('/', (req, res) => {

    res.send('peticion post recibida');
}) 

app.put('/editar', (req, res) => {

    res.send('peticion actualizada');
}) 

app.delete('/borrar', (req, res) => {

    res.send('peticion eliminada');
}) 



app.use('/auth',require('./routes/auth'))
app.use('/admin',require('./routes/admin'))



app.listen(process.env.PORT,()=>{

    console.log(`servidor corriendo en puerto ${process.env.PORT}`);

});