import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3500;
dotenv.config();

/* DB接続 */
const connect = () => {
  mongoose
    .connect(process.env.DB || "")
    .then(() => console.info("Connected to DB"))
    .catch((err) => {
      if (err instanceof Error) console.error("DB connected error", err);
    });
};

/* サーバー起動 */
app.listen(PORT, () => {
  connect();
  console.info(`server started on ${PORT}`);
});
