// const ImageKit = require("imagekit");

// const imagekit = new ImageKit({
//     publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//     urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
// });

// async function uploadFile(file, fileName) {
//     const result = await imagekit.upload({
//         file: file, // required
//         fileName: fileName, // required
//     })

//     return result; // Return the URL of the uploaded file
// }

// module.exports = {
//     uploadFile
// }



const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(fileBuffer, fileName) {
  try {
    // Convert buffer to base64
    const base64File = fileBuffer.toString("base64");

    const result = await imagekit.upload({
      file: base64File, // ✅ must be base64 string
      fileName: fileName,
      folder: "/reelbite", // optional, helps keep files organized
    });

    // ✅ Return only what you actually need
    return {
      url: result.url,
      fileId: result.fileId,
      thumbnailUrl: result.thumbnailUrl,
    };
  } catch (error) {
    console.error("ImageKit upload failed:", error.message);
    throw new Error("Failed to upload file to ImageKit");
  }
}

module.exports = { uploadFile };
