// import AWS from "aws-sdk";

// const uploadFileToAWS = async (image, folder = "") => {

//   AWS.config.update({
//     accessKeyId: process.env.REACT_APP_BUCKET_ACCESS_KEY,
//     secretAccessKey: process.env.REACT_APP_BUCKET_SECRET_ACCESS_KEY,
//   });

//   const myBucket = new AWS.S3({
//     params: { Bucket: process.env.REACT_APP_BUCKET_NAME },
//     region: process.env.REACT_APP_BUCKET_REGION,
//   });

//   const key = folder + Date.now() + image.name;
//   const params = {
//     ACL: "public-read",
//     Body: image,
//     Bucket: process.env.REACT_APP_BUCKET_NAME,
//     Key: key,
//   };

//   const res = await myBucket.putObject(params).promise();

//   if (res.$response.error) {
//     console.log("Error uploading image", res.$response.error);
//     return { url: "", success: false };
//   }

//   const S3ImageUrl = `https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com/${key}`;
//   return { url: S3ImageUrl, success: true };

// };

// export default uploadFileToAWS;
