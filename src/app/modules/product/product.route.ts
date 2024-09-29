import { Router } from "express";
import upload from "../../middleware/multerConfig";
import { productController } from "./product.controller";

const productRoutes = Router();

productRoutes.post(
    "/create",
    upload.fields([{ name: "images", maxCount: 5 }]),
    productController.create
);

productRoutes.get("/read");
productRoutes.patch("/update");
productRoutes.delete("/delete");

export default productRoutes;
