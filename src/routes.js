const express = require('express');
const proController = require('./proControlers/proController');

//componentes routes que vai gerenciar as rotas 
const routes = express.Router();

routes.get('/', proController.raiz );
routes.get('/produtos', proController.produtos );

module.exports = routes;