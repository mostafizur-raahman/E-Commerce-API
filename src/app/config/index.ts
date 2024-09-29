import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), ".env") });

const getEnvVariable = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;
    if (!value) {
        throw new Error(`Environment variable ${key} is missing or undefined`);
    }
    return value;
};

const config = {
    port: getEnvVariable("PORT", "3000"),
    db_url: getEnvVariable("DATABASE_URL"),
    jwt_secret: getEnvVariable("JWT_SECRET"),
    jwt_ttl: getEnvVariable("JWT_TTL")
};

export default config;
