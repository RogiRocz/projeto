const express = require('express');
const UserController = require('./controllers/UserController');
const OngController = require('./controllers/OngController');
const DoadorController = require('./controllers/DoadorController');
const routes = express.Router();

routes.post('/users', UserController.create);

routes.get('/ongs', OngController.index);
routes.delete('/ongs/:id', OngController.delete);
routes.put('/ongs/:id', OngController.update);

routes.get('/doadores', DoadorController.index);
routes.put('/doadores/:id', DoadorController.update);
routes.delete('/doadores/:id', DoadorController.delete);

module.exports = routes;
