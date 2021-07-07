import sharp from "sharp";
import express from "express";
import { promises as fsPromises } from "fs";

const resize = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  const query = req.query;
  const width = parseInt(query.width as unknown as string);
  const height = parseInt(query.height as unknown as string);
  const imageName = query.name as unknown;
  const cashedFiles = await fsPromises.readdir(`resized-images`);
  const file = cashedFiles.find(
    (file) => file === `${width}-${height}-${imageName}`
  );
  if (file) {
    const image = await fsPromises.readFile(
      `resized-images/${width}-${height}-${imageName as string}`
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<p style="font-weight: bold; font-size: 36px;">Image Previously Resized </p><img src="data:image/jpeg;base64,'
    );
    res.write(Buffer.from(image).toString("base64"));
    res.end('"/>');
    return file;
  } else {
    try {
      const outPutImage = await sharp(`images/${query.name}`)
        .resize(width, height, { fit: "contain" })
        .toFile(`resized-images/${width}-${height}-${imageName as string}`);

      const image = await fsPromises.readFile(
        `resized-images/${width}-${height}-${imageName as string}`
      );
      console.log(image);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<p style="font-weight: bold; font-size: 36px;">Image Resized </p><img src="data:image/jpeg;base64,'
      );
      res.write(Buffer.from(image).toString("base64"));
      res.end('"/>');

      return outPutImage;
    } catch (err) {
      res.send(
        `<p style="text-align: center; font-weight: bold; font-size: 36px;">${err.message}</p>`
      );
      console.info(err.message);
    }
  }
  next();
};

export default resize;
