const { response, request } = require('express');

/* cada funcion representa la accion de su ruta (get, post, put delete)
los parametros de la funcion (req, res = response) significan peticion y respuesta 
que es lo necesario para cuando un usuario solicite una peticion a alguna ruta del
servidor */

/* Las respuestas se manejan en formatio json */

const usuariosGet = async (req, res = response) => {
    //Contesta el metodo get en forma de json
    res.json({
        msg: 'get'
    });
}

const usuariosPost = async (req, res = response) => {
    res.json({
        msg: 'post'
    });
}

const usuariosPut = async (req, res = response) => {
    res.json({
        msg: 'put'
    });
}

const usuariosDelete = async (req, res = response) => {
    res.json({
        msg: 'delete'
    });
}

//Exportamos las funciones
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}