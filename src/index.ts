import express from "express";
import routes from "./routes/routes";

const app = express();
const port = 3888;

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("<h1>Main Route</h1>");
});

app.use("/api", routes);

//server configuration
app.listen(port, (): void => {
  console.info(`Server started and listen to port: ${port}`);
});

export default app;
