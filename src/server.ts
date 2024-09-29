import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
    try {
        await mongoose.connect(config.db_url as string);

        console.debug("Database connected success...");

        app.listen(config.port, () => {
            console.log(
                `${new Date()}\nExample app listening on ${config.port}`
            );
        });
    } catch (error) {
        console.log(error);
    }
}

// server started
main();
