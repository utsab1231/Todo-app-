import { User } from "../../models/User.model.js";
import { apiError, apiResponse } from "../../utils/jsonGenerator.js";

async function getTodo(req, res) {
  try {
    const list = await User.findById(req.userId)
      .select("-password") // filtering password out from user
      .populate("todos") // populating todos array on list
      .exec(); // executing query
    return res.status(200).json(apiResponse(200, "Todo list", list.todos));
  } catch (error) {
    return res.status(500).json(apiError(500, error.message));
  }
}

export default getTodo;
