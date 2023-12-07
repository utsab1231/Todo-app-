import { validationResult } from "express-validator";
import { apiError, apiResponse } from "../../utils/jsonGenerator.js";
import { Todo } from "../../models/todo.model.js";

async function updateTodo(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json(apiError(400, result.array()));
  }
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.body.todo_id, userId: req.userId },
      { $set: { description: req.body.description } },
      { new: true }
    );
    if (todo) {
      res.status(200).json(apiResponse(200, "Todo updated successfully", todo));
    }
  } catch (error) {
    return res.status(500).json(apiError(500, error.message));
  }
}

export default updateTodo;