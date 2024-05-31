const express = require('express');
const router = express.Router();
const tatuajesController = require('../controllers/tatuajesController');
const userController = require('../controllers/userController');
const ilustracionesController = require('../controllers/ilustracionesController');
const carritoController = require('../controllers/carritoController');

// Ruta para mostrar los tatuajes disponibles
router.get('/api/tatuajes', tatuajesController.getTatuajes);
router.delete('/api/tatuajes/:id_tatuaje', tatuajesController.deleteTatuaje);
router.put('/api/tatuajes/:id_tatuaje', tatuajesController.editTatuaje);
router.post('/api/tatuajes', tatuajesController.addTatuaje);

// Ruta para mostrar las ilustraciones disponibles
router.get('/api/ilustraciones', ilustracionesController.getIlustraciones);
router.delete('/api/ilustraciones/:id_ilustracion', ilustracionesController.deleteIlustracion); // Corrección de addIlustracion a deleteIlustracion
router.put('/api/ilustraciones/:id_ilustracion', ilustracionesController.editIlustracion);
router.post('/api/ilustraciones', ilustracionesController.addIlustracion); // Corrección de deleteIlustracion a addIlustracion

// Rutas para el manejo de usuarios
router.post('/api/register', userController.addUser);
router.post('/api/login', userController.loginUser); // Nueva ruta para el inicio de sesión
router.get('/users', userController.getAllUsers);
router.get('/users/:id_user', userController.getUserById);
router.post('/api/signout', userController.handleSignOut);
router.post('/api/isadmin', userController.isAdmin);

// Rutas para el carrito
router.post('/api/carrito', carritoController.addItemToCart);
router.get('/api/carrito/:id_user', carritoController.getCart);
router.delete('/api/carrito/:id_item', carritoController.removeItemFromCart);
router.delete('/api/carrito/empty/:id_user', carritoController.emptyCart);
router.delete('/api/carrito/item/:id_item', carritoController.removeItemFromCart);

module.exports = router;