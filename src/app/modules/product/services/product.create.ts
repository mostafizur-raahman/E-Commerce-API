import { Product } from "../product.interface";
import ProductModel from "../product.model";

export const productCreateIntoDB = async (product: Product) => {
    try {
        const newProduct = await ProductModel.create(product);
        return newProduct;
    } catch (error) {
        throw error;
    }
}