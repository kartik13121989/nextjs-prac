
const cloudinary = require('cloudinary').v2;
const api_key = process.env.API_KEY;
const encryption_key = process.env.ENCRYPTION_KEY;
const api_secret = process.env.API_SECRET;
const cloud_name = process.env.CLOUD_NAME;
cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
    secure: true,
});
export default function handler(request, response) {
    cloudinary.uploader.upload(
        "../../files/images/practice-1.jpg",
        {
            type: "authenticated",
            folder: "practice",
            access_control: [{ access_type: "token" }],
            sign_url: true,
        },
        (error, result) => {
            response.status(200).json({
                body: request.body,
                query: request.query,
                cookies: request.cookies,
            });
        }
    );

}