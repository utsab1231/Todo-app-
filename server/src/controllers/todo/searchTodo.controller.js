import { validationResult } from "express-validator";
import { User } from "../../models/User.model.js";
import { apiError, apiResponse } from "../../utils/jsonGenerator.js";

async function searchTodo(req, res) {
  const searchItem = req.body.searchitem;
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json(apiError(400, result.array()[0].msg));
  }
  try {
    const list = await User.findById(req.userId)
      .select("-password") // filtering password out from user
      .populate("todos") // populating todos array on list
      .exec(); // executing query
    const searchRegItem = new RegExp(searchItem, "i");
    const filteredtodos = list.todos.filter((todo) => {
      if (todo.description.match(searchRegItem)) {
        return true;
      }
    });
    return res.status(200).json(apiResponse(200, "Todo list", filteredtodos));
  } catch (error) {
    return res.status(500).json(apiError(500, error.message));
  }
}

export default searchTodo;
