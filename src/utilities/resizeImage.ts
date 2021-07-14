import sharp from "sharp";
import express from "express";
import { promises as fsPromises } from "fs";

const resizeImage = async(imageName: string, width: number, height: number): Promise<void> => {
  const images = await fsPromises.readdir(`images`);
  const image = images.find(
    (file) => file === `${imageName}`
  );
    try {
    if (image) {
      await sharp(`images/${imageName}`)
          .resize(width, height, { fit: "contain" })
          .toFile(`resized-images/${width}-${height}-${imageName}`)
    } 
  }
  catch(err) {
    console.error(err)
  }
  
}

export default resizeImage;
