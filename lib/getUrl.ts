import { storage } from "@/appwrite"

const getUrl = async (image: Image) => {
    const url = await storage.getFileView(image.bucketID, image.fileId);

    return url;
}

export default getUrl;