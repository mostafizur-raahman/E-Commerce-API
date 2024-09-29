import { Schema, model, connect } from 'mongoose';
import { User } from './user.interface';

const userSchema = new Schema<User>({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    picture: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    }
});

const UserModel = model<User>("User", userSchema);

export default UserModel;