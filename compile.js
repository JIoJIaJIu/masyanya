#!/usr/bin/env node

var fs = require('fs');
fs.readFile('desktop.bundles/index/index.bemjson.js', function (err, Data) {
    var text = Data.toString();
    var content = eval(text);
    var outputString = JSON.stringify(content.content);
    var output = new Buffer('var BEMJSON = ' + outputString + ';');
    fs.writeFile('index.bemjson.js', output, function (err) {
        if (err) throw err
        else console.log('index.bemjson.js generated correctly');
    })
});