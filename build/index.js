"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var app = express_1.default();
var port = 3000;
//server configuration
app.listen(port, function () {
    console.info("Server started and listen to port: " + port);
});
app.get("/", function (req, res) {
    res.send("<h1>Main Route</h1>");
});
app.use("/api", routes_1.default);
