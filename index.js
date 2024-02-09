import express from "express";
import mongoose from "mongoose";
import {
  registerValidation,
  loginValidation,
  postCreateValidation,
} from "./validations.js";
import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.1eqr8gu.mongodb.net/blog")
  .then(() => console.log("Database is run"))
  .catch((err) => {
    console.log("Error!", err);
  });

const app = express();
const port = 3333;

app.use(express.json());

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/posts", PostController.getAll);
app.post("/posts", checkAuth, postCreateValidation, PostController.create);
app.get("/posts/:id", PostController.getOne);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch("/posts/:id", PostController.update);

app.listen(port, (err) => {
  if (err) {
    console.log("Ошибка запуска сервера", err);
  }
  console.log(`Server run on port ${port}`);
});
