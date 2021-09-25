//Se usara Router para crear las rutas y exportarlas
const { Router } = require('express');
/* 
Importar los controladores, o sea las acciones que se realizaran
cuando se llame una ruta de nuestro servidor (post, get, put, delete)
*/
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut} = require('../controllers/usuarios');
//Se crea una variable de route para poder exportarla al servidor 
const router = Router();

//Ruta para obtener usuarios
router.get('/', usuariosGet);

//Ruta para agregar usuario
router.post('/', usuariosPost);

//Ruta para borrar usuario
router.delete('/', usuariosDelete);

//Ruta para actualizar usuario
router.put('/', usuariosPut)

module.exports = router;
