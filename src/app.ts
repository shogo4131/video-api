import express, { Request, Response, ErrorRequestHandler } from "express";
import userRouters from "./routes/user";
import authRouters from "./routes/auth";

const app = express();

app.use(express.json());
app.use("/api/users", userRouters);
app.use("/api/auth", authRouters);

app.use((err: any, req: Request, res: Response) => {
  const status = err.body || 500;
  const message = err.body || "server error";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

export default app;
