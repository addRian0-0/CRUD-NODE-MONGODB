const { response, request } = require('express');
/* cada funcion representa la accion de su ruta (get, post, put delete)
los parametros de la funcion (req, res = response) significan peticion y respuesta 
que es lo necesario para cuando un usuario solicite una peticion a alguna ruta del
servidor */
/* Las respuestas se manejan en formatio json */

/* Para poder manejar una base de datos y agregar usuarios con mongoose
tenemmos que tener un modelo creado, este definira los datos que llevara,\
que tipos de datos seran y si deben de ser unicos, este modelo debera estar en codigo
en la siguiente linea se importa, ir al archivo y leerlo */
const Usuario = require('../models/usuario');


const usuariosGet = async (req, res = response) => {

    const [total, usuarios] = await Promise.all([
        //Contara cuantos usuarios hay en el sistema
        Usuario.countDocuments(),
        //Los mostrara, todos
        Usuario.find()
    ]);

    //Contesta el metodo get en forma de json
    res.json({
        usuarios,
        total
    });
}

const usuariosPost = async (req, res = response) => {

    /* nombre, correo, rol, vendran desde la peticion, el frontend
    de igual manera solo se obtienen los que vengan con el nombre exacto
    en formato json */
    const { nombre, correo, rol } = req.body;
    /* Con estos mismos datos se creara un modelo de usuario */
    const usuario = new Usuario({ nombre, correo, rol });
    //Se guardara en la base de datos
    await usuario.save();
    //la respuesta a la peticion sera el usuario agregado
    res.json({
        usuario
    });

}

const usuariosPut = async (req, res = response) => {
    const { id } = req.params;
    const resto = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario
    });
}

const usuariosDelete = async (req, res = response) => {
    //Se obtiene el id de los parametros
    const { id } = req.params;

    //Desactivar el usuario
    const usuario = await Usuario.findByIdAndDelete(id);

    res.json({
        usuario
    });
}

//Exportamos las funciones
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}