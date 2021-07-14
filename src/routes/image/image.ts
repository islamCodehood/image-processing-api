import express from "express";
import displayResizedImage from "../../utilities/displayResizedImage";

const image = express.Router();

image.get(
  "/",
  displayResizedImage,
  (req: express.Request, res: express.Response): void => {
    res.end();
  }
);

export default image;
