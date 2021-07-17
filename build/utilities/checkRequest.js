"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkImagePresence_1 = __importDefault(require("./checkImagePresence"));
var checkRequest = function (imageName, width, height) {
    if (!imageName) {
        return "no image name";
    }
    else if (!width || !height) {
        return "no width or height";
    }
    else if (!checkImagePresence_1.default(imageName)) {
        return "image not found";
    }
    return "ok";
};
exports.default = checkRequest;
