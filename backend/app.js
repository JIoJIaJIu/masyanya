var express = require('express');
var fs = require('fs');

var config = require('./config');
var bem = require('./modules/bem');
var logger = require('./modules/logger');

logger.info("Initialization of application");
var app = express();

logger.info("Initialization database");
var Sequelize = require('sequelize');
var db = new Sequelize(config.DB_PATH, config.DB_USERNAME, config.DB_PASSWORD, {
    dialect: 'postgres'
});
var Address = db.import('./modules/models/Address');
var Center = db.import('./modules/models/Center');
var Staff = db.import('./modules/models/Staff');
db.sync();

logger.info("Export static");
app.use(express.static('static'));
app.use(express.static('static/css/'));
app.use('/fonts', express.static('static/fonts', {
    setHeaders: function (res) {
        res.setHeader("Content-Encoding", "gzip");
    }
}));

logger.info("Routing");
app.get('/', function (req, res) {
    logger.info("Request /");

    var bemjson = fs.readFileSync(config.BEMJSON_PATH).toString();
    var html = bem.render(bemjson);
    res.send(html);
});

logger.info("Port %d", config.PORT);
app.listen(config.PORT);
