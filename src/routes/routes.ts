import express from "express";
import image from "./image/image";

const app = express();
const routes = express.Router();

routes.get("/", function(req: express.Request, res: express.Response): void {
  res.send("<h2>Routes</h2>");
});

routes.use("/image", image);

export default routes;
