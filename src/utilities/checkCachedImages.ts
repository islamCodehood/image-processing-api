import { promises as fsPromises } from "fs";

const checkCachedImages = async (
  imageName: string,
  width: number,
  height: number
): Promise<Boolean> => {
  const cachedFiles = await fsPromises.readdir(`resized-images`);
  console.log(cachedFiles)
  const file = cachedFiles.find(
    (file) => file === `${width}-${height}-${imageName}`
  );
    console.log(file)
  if (file) {
    return true;
  } else {
    return false;
  }
};

export default checkCachedImages;
