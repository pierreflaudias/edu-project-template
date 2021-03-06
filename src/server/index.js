const express = require('express');
const api = require('./api.js');
const config = require('./config.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port);
});

app.use('/notes', api);

app.use('/', express.static(config.static));
