"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var handlers_1 = require("./handlers");
exports.router = express_1.Router();
exports.router.post("/register", handlers_1.registerUser);
exports.router.post("/login", handlers_1.loginUser);
