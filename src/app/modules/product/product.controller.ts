import { NextFunction, Request, Response } from "express";
import { productServices } from "./services";
import cloudinary from "../../config/cloudinary";



const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = req.body;
        console.log("files ", req.files);

        const files = req.files as { [filename: string]: Express.Multer.File[] };

        // Check if files were uploaded
        if (!files.images || files.images.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No images uploaded",
            });
        }

        // Upload each image to Cloudinary
        const uploadPromises = files.images.map((file: Express.Multer.File) => {
            return cloudinary.uploader.upload(file.path, {
                folder: "ecommerce-api",
            });
        });

        const uploadResults = await Promise.all(uploadPromises);

        // Extract URLs from the upload results
        const imageUrls = uploadResults.map(result => result.secure_url);

        const productData = {
            ...product,
            images: imageUrls,
        };

        const result = await productServices.productCreateIntoDB(productData);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    } catch (error) {
        next(error)
    }
}


export const productController = {
    create
}