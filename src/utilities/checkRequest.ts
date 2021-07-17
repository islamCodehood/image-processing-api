import express from "express";
import checkImagePresence from "./checkImagePresence";
const checkRequest = async(
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  if (!imageName) {
    return "no image name";
  } else if (!width || !height) {
    return "no width or height";
  } else if (!await checkImagePresence(imageName)) {
    return "image not found";
  }
  return "ok";
};

export default checkRequest;
