import { validationResult } from "express-validator";
import { apiError, apiResponse } from "../../utils/jsonGenerator.js";
import { Todo } from "../../models/Todo.model.js";
import { User } from "../../models/User.model.js";

async function createTodo(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json(apiError(400, result.array()[0].msg));
  } else {
    // requiring user id for todo creation
    try {
      const todo = await Todo.create({
        userId: req.userId,
        description: req.body.description,
      });

      if (todo) {
        await User.findByIdAndUpdate(
          { _id: req.userId },
          {
            $push: { todos: todo },
          }
        );
      }
      return res
        .status(201)
        .json(apiResponse(201, "Todo created succesfully", todo));
    } catch (error) {
      return res
        .status(500)
        .json(apiError(500, "Something went wrong on server"));
    }
  }
}

export default createTodo;
