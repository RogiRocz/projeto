const express = require('express');
const UserController = require('./controllers/UserController');
const CasesController = require('./controllers/CaseController');
const OngController = require('./controllers/OngController');
const DoadorController = require('./controllers/DoadorController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

routes.get('/listarong', OngController.index);
routes.get('/listardoador', DoadorController.index);

routes.post('/cases', CasesController.create);
routes.delete('/cases/:id', CasesController.deleteCase);
routes.get('/cases', CasesController.index);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);


module.exports = routes;
