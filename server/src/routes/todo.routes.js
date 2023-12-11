import { Router } from "express";
import createTodo from "../controllers/todo/createTodo.controller.js";
import todoValidation from "../middleware/todoValidation.middleware.js";
import getTodo from "../controllers/todo/getTodo.controller.js";
import { check } from "express-validator";
import markTodo from "../controllers/todo/markTodo.controller.js";
import updateTodo from "../controllers/todo/updateTodo.controller.js";
import deleteTodo from "../controllers/todo/deleteTodo.controller.js";
import searchTodo from "../controllers/todo/searchTodo.controller.js";
import { searchItemValidation } from "../middleware/searchValidation.middleware.js";

const todoRouter = Router();

todoRouter.get("/gettodo", getTodo);

//protected routes

// ----------------------------------------------------------------

//creating todo
todoRouter.post("/createtodo", todoValidation, createTodo);

// ----------------------------------------------------------------

// changing mark for todo
todoRouter.post(
  "/marktodo",
  [
    check("todo_id", "Todo id is required")
      .exists()
      .notEmpty()
      .withMessage("Todo id should not be empty"),
  ],
  markTodo
);

// ----------------------------------------------------------------

// updating todo
todoRouter.post(
  "/updatetodo",
  [
    check("todo_id", "Todo id is required")
      .exists()
      .notEmpty()
      .withMessage("Todo id should not be empty"),
    check("description", "Description is required")
      .exists()
      .notEmpty()
      .withMessage("Description should not be empty"),
  ],
  updateTodo
);

// ----------------------------------------------------------------

// deleting todo
todoRouter.post(
  "/deletetodo",
  [
    check("todo_id", "Todo id is required")
      .exists()
      .notEmpty()
      .withMessage("Todo id should not be empty"),
  ],
  deleteTodo
);

// searching for todo
todoRouter.post("/searchtodo", searchItemValidation, searchTodo);

export default todoRouter;
