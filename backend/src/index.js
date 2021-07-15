const express = require('express');
//const cors = require('cors');
//const routes = require('./routes');

//app.use(cors());
//converter json em objeto

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const body = req.body;
  console.log(body);

  return res.json({
    evento: 'fazer backend',
    problema: 'fazer',
  });
});

//app.use(routes);

app.listen(3333);
