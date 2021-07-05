import sharp from "sharp";


const resize = async (imageName: any, width: any, height: any) => {
  const widthNumber = parseInt(width);
  const heightNumber = parseInt(height);
  console.info(imageName)
  try {
    const outPutImage = await sharp(`images/${imageName}`)
    .resize(widthNumber, heightNumber)
    .toFile(`resized-images/${width}-${height}-${imageName}`);
    return outPutImage;
  }
  catch (e) {
    console.info(e)
  }
  
};

export default resize;
