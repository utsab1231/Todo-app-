import { validationResult } from "express-validator";
import { apiError, apiResponse } from "../../utils/jsonGenerator.js";
import { Todo } from "../../models/todo.model.js";
import { User } from "../../models/User.model.js";

async function deleteTodo(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json(apiError(401, result.array()[0].message));
  }
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.body.todo_id,
      userId: req.userId,
    });
    if (todo) {
      await User.findOneAndUpdate(
        { _id: req.userId },
        { $pull: { todos: todo._id } }
      );
      return res
        .status(200)
        .json(apiResponse(200, "Todo deleted succesfully", null));
    }
  } catch (error) {
    return res.status(500).json(apiError(500, error.message));
  }
}

export default deleteTodo;
