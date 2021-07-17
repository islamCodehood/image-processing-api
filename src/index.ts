import express from "express";
import routes from "./routes/routes";

const app = express();
const port = 3888;

app.get("/", function (req: express.Request, res: express.Response): void {
  res.send(
    "<p>Please, write url in this way to get desired results:<p><p>http://localhost:{port-number}/api/image?name={image-name.jpg}&width={desired-width}&height={desired-height}</p>"
  );
});

app.use("/api", routes);

//server configuration
app.listen(port, function (): void {
  console.info(`Server started and listen to port: ${port}`);
});

export default app;
