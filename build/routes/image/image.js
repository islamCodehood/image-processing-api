"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
var image = express_1.default.Router();
image.get("/", function (req, res) {
    var query = req.query;
    var imageName = query.name;
    var width = query.width;
    var height = query.height;
    resizeImage_1.default(imageName, width, height);
    res.send(req.query);
});
exports.default = image;
