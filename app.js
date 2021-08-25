const express = require('express');

const app = express();

app.use(require('morgan')('dev'));

app.use(express.static('./assets'));

app.listen(5000, () => console.log('UP:5000 successful'));
