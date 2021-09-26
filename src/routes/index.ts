import express from "express";

const indexRouter = express.Router();

indexRouter.get("/", (_, res) => {
  res.json({
    message: "Hello, world!",
  });
});

export default indexRouter;
