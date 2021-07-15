import express from "express";

const checkRequest = (
  imageName: string,
  width: number,
  height: number
): string => {
  if (!imageName) {
    return "no image name";
  } else if (!width || !height) {
    return "no width or height";
  }
  return "ok" 
};

export default checkRequest;
