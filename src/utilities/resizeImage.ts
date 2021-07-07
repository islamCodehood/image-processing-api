import sharp from "sharp";
import express from "express";
import { promises as fsPromises } from "fs";

const resize = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  const query = req.query;
  //convert width and height values to numbers
  const width = parseInt(query.width as unknown as string);
  const height = parseInt(query.height as unknown as string);

  const imageName = query.name as unknown;
  //check if image previously resized and present in cash
  const cashedFiles = await fsPromises.readdir(`resized-images`);
  const file = cashedFiles.find(
    (file) => file === `${width}-${height}-${imageName}`
  );
  if (file) {
    const image = await fsPromises.readFile(
      `resized-images/${width}-${height}-${imageName as string}`
    );

    //display the resized image as a response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<p style="text-align: center; font-weight: bold; font-size: 36px;">Image Previously Resized </p><img style="margin-right: auto; margin-left: auto; display: block;" src="data:image/jpeg;base64,'
    );
    res.write(Buffer.from(image).toString("base64"));
    res.end('"/>');
    return file;
  } else {
    try {
      //if not present in cash resize it.
      const outPutImage = await sharp(`images/${query.name}`)
        .resize(width, height, { fit: "contain" })
        .toFile(`resized-images/${width}-${height}-${imageName as string}`);

      const image = await fsPromises.readFile(
        `resized-images/${width}-${height}-${imageName as string}`
      );

    //display the resized image as a response
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<p style="text-align: center; font-weight: bold; font-size: 36px;">Image Resized </p><img style="margin-right: auto; margin-left: auto;  display: block;" src="data:image/jpeg;base64,'
      );
      res.write(Buffer.from(image).toString("base64"));
      res.end('"/>');

      return outPutImage;

    } catch (err) {
      if (!imageName) {
        res.send(
          `<p style="text-align: center; font-weight: bold; font-size: 36px;">Please, write the image name!</p>`
        );
      }
      if (!width || !height) {
        res.send(
          `<p style="text-align: center; font-weight: bold; font-size: 36px;">Be sure to add a width and height!</p>`
        );
      }
    }
  }
  next();
};

export default resize;
