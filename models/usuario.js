const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    //Se define el nombre del campo
    nombre: {
        //Que tipo de dato sera
        type: String,
        /* Si es un campo obligatorio, el siguiente argumento
        se lanzara en caso de que no lleve el nombre al momento de 
        tratar agregar un usuario, esta excepcion viene por parte del servidor */
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        //Indica si debe ser unico en todos los modelos de usuarios
        unique: true
    },
    rol: {
        type: String, 
        required: true,
        //Le pre-asigna un valor
        default: "Empleado",
        //Solo se aceptaran los valores del array
        emun: ['ADMIN_TABLE', 'USER_ROLE']
    }

});

module.exports = model('Usuario', UsuarioSchema);