import { Fault } from "../../../utils/Fault";
import { User } from "../user.interface";
import UserModel from "../user.model";
import bcrypt from "bcrypt"

export const registerUserIntoDB = async (user: User) => {
    try {

        const userExist = await UserModel.findOne({
            email: user.email
        })

        if (userExist) {
            throw new Fault("User already exists", 400)
        }
        if (user.password !== user.confirmPassword) {
            throw new Fault("Passwords do not match", 400);
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);
        const { confirmPassword, ...newUser } = user;

        newUser.password = hashedPassword;

        const result = await UserModel.create(newUser);
        return result;
    } catch (error) {
        throw error
    }
}
