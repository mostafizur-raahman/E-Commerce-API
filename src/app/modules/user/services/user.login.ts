import config from "../../../config";
import { Fault } from "../../../utils/Fault";
import UserModel from "../user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const login = async (data: { email: string, password: string }) => {
    try {
        const user = await UserModel.findOne({
            email: data.email
        })

        if (!user) {
            throw new Fault("User not found", 404);
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.password);

        if (!isPasswordValid) {
            throw new Fault("Invalid credentials", 401);
        }
        const token = jwt.sign(
            { id: user._id, email: user.email },
            config.jwt_secret as string,
            { expiresIn: config.jwt_ttl }
        );

        return { token, user };

    } catch (error) {
        throw error;
    }
}