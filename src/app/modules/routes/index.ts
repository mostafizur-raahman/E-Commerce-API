import { Router } from "express";
import userRoutes from "../user/user.route";
import productRoutes from "../product/product.route";

const router = Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes)

export default router;