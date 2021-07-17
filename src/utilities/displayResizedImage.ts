import express from "express";
import checkCachedImages from "./checkCachedImages";
import resizeImage from "./resizeImage";
import { promises as fsPromises } from "fs";
import checkRequest from "./checkRequest";

const displayResizedImage = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  const query = req.query;
  //convert width and height values to numbers
  const width = parseInt(query.width as unknown as string);
  const height = parseInt(query.height as unknown as string);
  const imageName = query.name as string;

  if (checkRequest(imageName, width, height) === "no image name") {
    res.write(
      `<p style="font-size: 18px;">Please, write the image name!</p><p>Please, write url in this way to get desired results:<p><p>http://localhost:{port-number}/api/image?name={image-name.jpg}&width={desired-width}&height={desired-height}</p>`
    );
    return;
  } else if (checkRequest(imageName, width, height) === "no width or height") {
    res.write(
      `<p style="font-size: 18px;">Be sure to add a width and height!</p><p>Please, write url in this way to get desired results:<p><p>http://localhost:{port-number}/api/image?name={image-name.jpg}&width={desired-width}&height={desired-height}</p>`
    );
    return;
  } else if (checkRequest(imageName, width, height) === "image not found") {
    res.write(`<p style="font-size: 18px;">Image not found!</p>`);
    return;
  }

  if (!(await checkCachedImages(imageName, width, height))) {
    await resizeImage(imageName, width, height);
    const image = await fsPromises.readFile(
      `resized-images/${width}-${height}-${imageName as string}`
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<p style="font-size: 18px;">Image Resized </p><img style="margin-right: auto; margin-left: auto;  display: block;" src="data:image/jpeg;base64,'
    );
    res.write(Buffer.from(image).toString("base64"));
    res.end('"/>');
  } else {
    const image = await fsPromises.readFile(
      `resized-images/${width}-${height}-${imageName as string}`
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<p style="font-size: 18px;">Image Resized </p><img style="margin-right: auto; margin-left: auto;  display: block;" src="data:image/jpeg;base64,'
    );
    res.write(Buffer.from(image).toString("base64"));
    res.end('"/>');
  }
  try {
    return;
  } catch (err) {
    console.error(err);
  }

  next();
};

export default displayResizedImage;
