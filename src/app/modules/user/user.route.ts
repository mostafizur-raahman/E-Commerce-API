import { Router } from "express";
import { userController } from "./user.controller";

const userRoutes = Router();

userRoutes.post('/register', userController.register);
userRoutes.get("/", userController.readUser);
userRoutes.post("/login", userController.userLogin)

export default userRoutes;