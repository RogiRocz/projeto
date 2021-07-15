const express = require('express');
//const cors = require('cors');
//const routes = require('./routes');

//app.use(cors());
//converter json em objeto

const app = express();
app.use(express.json());

//app.use(routes);

const port = 3333;
app.listen(port, console.log('Server is running'));
