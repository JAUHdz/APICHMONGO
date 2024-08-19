const express = require("express");
const mongoose = require("mongoose");


const servmongo = 'mongodb+srv://aldair:1234@cluster0.6aed6jv.mongodb.net/';
const usuariosRutasch = require('./routes/usu_usuarios_ch');
const scannerRutasch = require('./routes/contro_horario');
const usuarioTipoxh = require('./routes/usu_tipo_usuarios');
const usuarioEstadoxh = require('./routes/usu_estado_usuarios');



const cors = require('cors');

const app = express();
const port = 9000;
const dbName = 'AppScanner';


//Cors Permitir solicitudes de todos los origenes
app.use(cors());

app.use(express.json());
app.use('/api', usuariosRutasch);
app.use('/api', scannerRutasch);
app.use('/api', usuarioTipoxh);
app.use('/api', usuarioEstadoxh);


//mongo db conection

mongoose.connect(/* llave para acceder a bd*/ servmongo)
.then(() => {
    console.log('Conectado a Mongo');
})
.catch((error)=> console.error);



app.listen(port, ()=> console.log('El servidor esta escuchando en el puerto', port)); 