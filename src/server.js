"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1.json());
app.get('/', function (request, response) {
    response.json({ message: 'Hello World' });
});
app.listen(3333, function () {
    console.log('🚀 Back-end GoBarber started');
});
