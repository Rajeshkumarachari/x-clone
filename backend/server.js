import express from "express";
import authRouter from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running from port ${PORT}`);
  connectMongoDB();
});
