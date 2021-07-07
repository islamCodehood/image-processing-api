import express from "express";
import resize from "../../utilities/resizeImage";

const image = express.Router();

image.get("/", resize, (req, res) => {
    res.end();
});

export default image;
