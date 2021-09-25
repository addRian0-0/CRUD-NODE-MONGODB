//Se usara Router para crear las rutas y exportarlas
const { Router } = require('express');
/* 
Importar los controladores, o sea las acciones que se realizaran
cuando se llame una ruta de nuestro servidor (post, get, put, delete)
*/
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut} = require('../controllers/usuarios');
//Se crea una variable de route para poder exportarla al servidor 
const router = Router();

//Ruta para obtener usuarios (Leer que realiza usuariosGet en '../controllers/usuarios');
router.get('/', usuariosGet);

//Ruta para agregar usuario (Leer que realiza usuariosPost en '../controllers/usuarios');
router.post('/', usuariosPost);

//Ruta para borrar usuario (Leer que realiza usuariosDelete en '../controllers/usuarios');
//Para poder borrar un usuario se necesita su id '/:id' se le pasa el id por los parametros de la peticion
router.delete('/:id', usuariosDelete);

//Ruta para actualizar usuario (Leer que realiza usuariosPut en '../controllers/usuarios');
//Para poder actualizar un usuario se necesita su id '/:id' se le pasa el id por los parametros de la peticion
router.put('/:id', usuariosPut)

module.exports = router;
