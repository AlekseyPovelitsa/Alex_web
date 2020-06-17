"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
var services_1 = require("../services");
exports.registerUser = function (req, res) {
    services_1.servicesRegister(req.body)
        .then(function (user) { return res.json(user); })
        .catch(function (err) { return res.json(err); });
};
exports.loginUser = function (req, res) {
    services_1.servicesLogin(req.body)
        .then(function (user) { return res.json(user); })
        .catch(function (err) { return res.json(err); });
};
