var vm = require('vm');
var fs = require('fs');
var util = require('util');

var config = require('../config');
var logger = require('./logger');

var BEM = {
    render: function (bemjson) {
        logger.info("Render bemjson");
        if (!this._sandbox)
            this._sandbox = this._load();

        var json = typeof bemjson == 'object' ? JSON.stringify(bemjson) : bemjson;
        var js = util.format("BEMHTML.apply(%s);", json);
        console.log(json);
        return vm.runInContext(js, this._sandbox);
    },

    _load: function () {
        logger.info("Loading bemhtml..");
        var bemhtml = fs.readFileSync(config.BEMHTML_PATH);
        var sandbox = vm.createContext();
        vm.runInContext(bemhtml, sandbox);
        return sandbox;
    },

    _sandbox: null
}

module.exports = BEM
