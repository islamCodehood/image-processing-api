"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = require("fs");
var resize = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var query, width, height, imageName, cashedFiles, file, image, outPutImage, image, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = req.query;
                width = parseInt(query.width);
                height = parseInt(query.height);
                imageName = query.name;
                return [4 /*yield*/, fs_1.promises.readdir("resized-images")];
            case 1:
                cashedFiles = _a.sent();
                file = cashedFiles.find(function (file) { return file === width + "-" + height + "-" + imageName; });
                if (!file) return [3 /*break*/, 3];
                return [4 /*yield*/, fs_1.promises.readFile("resized-images/" + width + "-" + height + "-" + imageName)];
            case 2:
                image = _a.sent();
                //display the resized image as a response
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write('<p style="text-align: center; font-weight: bold; font-size: 36px;">Image Previously Resized </p><img style="margin-right: auto; margin-left: auto; display: block;" src="data:image/jpeg;base64,');
                res.write(Buffer.from(image).toString("base64"));
                res.end('"/>');
                return [2 /*return*/, file];
            case 3:
                _a.trys.push([3, 6, , 7]);
                return [4 /*yield*/, sharp_1.default("images/" + query.name)
                        .resize(width, height, { fit: "contain" })
                        .toFile("resized-images/" + width + "-" + height + "-" + imageName)];
            case 4:
                outPutImage = _a.sent();
                return [4 /*yield*/, fs_1.promises.readFile("resized-images/" + width + "-" + height + "-" + imageName)];
            case 5:
                image = _a.sent();
                //display the resized image as a response
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write('<p style="text-align: center; font-weight: bold; font-size: 36px;">Image Resized </p><img style="margin-right: auto; margin-left: auto;  display: block;" src="data:image/jpeg;base64,');
                res.write(Buffer.from(image).toString("base64"));
                res.end('"/>');
                return [2 /*return*/, outPutImage];
            case 6:
                err_1 = _a.sent();
                if (!imageName) {
                    res.send("<p style=\"text-align: center; font-weight: bold; font-size: 36px;\">Please, write the image name!</p>");
                }
                if (!width || !height) {
                    res.send("<p style=\"text-align: center; font-weight: bold; font-size: 36px;\">Be sure to add a width and height!</p>");
                }
                return [3 /*break*/, 7];
            case 7:
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.default = resize;
