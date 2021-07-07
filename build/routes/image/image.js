"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
var image = express_1.default.Router();
image.get("/", resizeImage_1.default, function (req, res) {
    res.end();
});
exports.default = image;
