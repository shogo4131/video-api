import express, { Request, Response, ErrorRequestHandler } from "express";
import userRouters from "./routes/user";
import authRouters from "./routes/auth";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRouters);
app.use("/api/auth", authRouters);

export default app;
