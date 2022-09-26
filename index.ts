import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { json, urlencoded } from "body-parser";
import { connection } from "./src/config/db";

// routes
import { todoRouter } from "./src/routes/todo";

mongoose.connect(connection, () => {
  console.log("connected to database");
});

const app: Express = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", function (req: Request, res: Response) {
  res.json({ hello: "world" });
});

app.use("/api/todo", todoRouter);

const port = process.env.NODE_DOCKER_PORT || 8080;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
