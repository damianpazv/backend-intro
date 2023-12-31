const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();


app.use(express.json());
app.use(cors());
dbConnection();

app.use(express.static('public'));



app.get('/', (req, res) => {

    res.send('peticion get');

});

app.use('/auth',require('./routes/auth'));
app.use('/admin',require('./routes/admin'));


app.listen(process.env.PORT,()=>{

    console.log(`servidor corriendo en puerto  ${process.env.PORT}`);

});