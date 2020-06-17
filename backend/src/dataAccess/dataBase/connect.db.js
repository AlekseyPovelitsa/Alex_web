"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.connectMongo = function () {
    mongoose_1.default.connect("mongodb+srv://project:project@cluster0-191bi.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Поключились к БД');
};
