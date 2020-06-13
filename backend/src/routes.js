const { Router } = require('express');
const UsuarioController = require('./controllers/UsuarioController');


const routes = Router();

routes.get('/usuario', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);
routes.delete('/removeUsuarios/:id', UsuarioController.delete);
routes.put('/usuarios/:id', UsuarioController.update);
module.exports = routes;