import express from "express";
import image from "./image/image";

const app = express();
const routes = express.Router();

routes.get("/", function (req: express.Request, res: express.Response): void {
  res.send(
    "<p>Please, write url in this way to get desired results:<p><p>http://localhost:{port-number}/api/image?name={image-name.jpg}&width={desired-width}&height={desired-height}</p>"
  );
});

routes.use("/image", image);

export default routes;
