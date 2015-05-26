var express = require('express');
var fs = require('fs');

var config = require('./config');
var bem = require('./modules/bem');
var logger = require('./modules/logger');

logger.info("Initialization of application..");
var app = express();

app.use(express.static('static'));
app.use(express.static('static/css/'));

app.get('/', function (req, res) {
    logger.info("Request /");

    var bemjson = fs.readFileSync(config.BEMJSON_PATH).toString();
    var html = bem.render(bemjson);
    res.send(html);
});

logger.info("Port %d", config.PORT);
app.listen(config.PORT);
