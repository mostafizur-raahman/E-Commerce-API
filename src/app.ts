import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./app/modules/routes";
import { Fault } from "./app/utils/Fault";
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// routes 
app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
    res.json("Hello World!");
});


// global error handeler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof Fault) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    if (err) {
        console.debug(err)
        return res.status(400).json({
            success: false,
            message: "something is wrong.",
        });
    }
});

// not found
app.all("*", (req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: "Not found",
    });
});

export default app;
