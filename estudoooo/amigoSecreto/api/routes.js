const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers');

routes.get('/', Usuario.index);

//rotas de usuarios
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id',Usuario.search)
routes.delete('/api/usuarios/:_id',Usuario.delete)
routes.put('/api/usuarios',Usuario.update);


module.exports = routes;

