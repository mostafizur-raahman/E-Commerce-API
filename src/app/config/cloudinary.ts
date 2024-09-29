import { v2 as cloudinary } from "cloudinary"
import config from "."

cloudinary.config({
    cloud_name: config.clodinary_api_name,
    api_key: config.clodinary_api_key,
    api_secret: config.cloudinary_secret
})

export default cloudinary