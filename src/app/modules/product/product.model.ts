import { Schema, model } from "mongoose";
import { Product, Variants } from "./product.interface";

const variantSchema = new Schema<Variants>({
    sku: {
        type: String,
    },
    slug: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
});

const productSchema = new Schema<Product>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        sku: {
            type: String,
        },
        slug: {
            type: String,
        },
        description: {
            type: String,
        },
        images: {
            type: [String],
        },
        variants: [variantSchema],
    },
    {
        timestamps: true,
    }
);

const ProductModel = model<Product>("Product", productSchema);

export default ProductModel;
