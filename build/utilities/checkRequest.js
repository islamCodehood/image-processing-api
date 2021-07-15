"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRequest = function (imageName, width, height) {
    if (!imageName) {
        return "no image name";
    }
    else if (!width || !height) {
        return "no width or height";
    }
    return "ok";
};
exports.default = checkRequest;
