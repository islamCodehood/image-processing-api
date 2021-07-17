"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var app = express_1.default();
var port = 3888;
app.get("/", function (req, res) {
    res.send("<p>Please, write url in this way to get desired results:<p><p>http://localhost:{port-number}/api/image?name={image-name.jpg}&width={desired-width}&height={desired-height}</p>");
});
app.use("/api", routes_1.default);
//server configuration
app.listen(port, function () {
    console.info("Server started and listen to port: " + port);
});
exports.default = app;
