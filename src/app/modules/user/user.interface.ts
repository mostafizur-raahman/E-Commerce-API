export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    picture?: string;
    gender: "male" | "female";
}