const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

const {
  env: { PORT: port = 5001},
} = process;

app.use(express.static(path.join(__dirname, '../../../dist/meanMadePortfolio/')));
app.use(parser.urlencoded({ extended:true }));
app.use(parser.json());
app.use(require('./routes/api.router'));

app.listen( port, () => console.log(`listening on port ${port}`));
