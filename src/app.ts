import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes";

// Setup
const app = express();
dotenv.config();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use("/", indexRouter);

export default app;
