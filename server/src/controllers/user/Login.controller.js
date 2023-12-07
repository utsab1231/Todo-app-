import { apiError, apiResponse } from "../../utils/jsonGenerator.js";
import { validationResult } from "express-validator";
import { User } from "../../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function Login(req, res) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(422).json(apiError(422, result.array()));
  }
  // ................
  else {
    const { username, password } = req.body;
    // checking if user exist or not
    const userExists = await User.findOne({ username: username });
    if (!userExists) {
      return res
        .status(401)
        .json(apiError(401, "Invalid credentials or User not found"));
    }
    // checking if password is correct or not
    const passwordMatch = bcrypt.compareSync(password, userExists.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json(apiError(401, "Invalid credentials or User not found"));
    }

    const token = jwt.sign(
      { user_id: userExists._id },
      process.env.TOKEN_SECRET
    );
    return res.status(200).json(
      apiResponse(200, "User logged in successfully", {
        userid: userExists._id,
        token: token,
      })
    );
  }
}
export default Login;
