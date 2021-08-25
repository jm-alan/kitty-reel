const express = require('express');
const { readdirSync } = require('fs');

const app = express();

app.use(require('morgan')('dev'));

app.use(express.static('./assets'));

app.get('/kittyCount', (_req, res) => {
  res.json({ count: readdirSync('./assets/photos').length });
});

app.listen(5000, () => console.log('UP:5000 successful'));
