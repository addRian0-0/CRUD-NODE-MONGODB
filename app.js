//Usar las variables de entorno 
require('dotenv').config();

//Se crean variables tipo constantes para usar las librerias
const express = require('express');
const app = express();
const mongoose = require('mongoose');
/* Morgan es opcional, sirve para ver si las peticiones al 
servidor fueron realizadas correctamente */
const morgan = require('morgan');
const cors = require('cors');

//Conexion a base de datos
//Verificar que la base este prendida
try {

    mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Base de datos online');

} catch (error) {
    console.log(error);
    throw new Error('Error a la hora de conectar a la BD');
}

//Empezamos a aplicar las librerias necesarias
app.use(express.json());
app.use(cors());
//Opcional
app.use(morgan('dev'));
app.use(express.static('public'));

//Aqui se ejecutaran las rutas siguiente parte del tutorial escrito en /routes/usuarios.js
//No es necesario especificar la extension del archivo node si le sabe
//Las peticiones se realizaran a 'localhost:8000/usuarios'
app.use('/usuarios', require('./routes/usuarios'));

//Ejecutara el servidor
app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor ejecutandose en servidor: ${process.env.PORT || 8080}`)
});


