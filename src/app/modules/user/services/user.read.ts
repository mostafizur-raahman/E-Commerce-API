import UserModel from "../user.model";

export const readUserFromDB = async () => {
    try {
        const users = await UserModel.find({});
        return users;
    } catch (error) {
        throw error
    }
}