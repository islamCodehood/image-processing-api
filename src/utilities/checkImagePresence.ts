import { promises as fsPromises } from "fs";

const checkImagePresence = async (
  imageName: string
): Promise<Boolean> => {
  const images = await fsPromises.readdir(`images`);
  const file = images.find(
    (file) => file === imageName
  );
  if (file) {
    return true;
  } else {
    return false;
  }
};

export default checkImagePresence;
