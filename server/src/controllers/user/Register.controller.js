import { validationResult, matchedData } from "express-validator";
import { apiError, apiResponse } from "../../utils/jsonGenerator.js";
import bcrypt from "bcrypt";
import { User } from "../../models/User.model.js";
import jwt from "jsonwebtoken";

async function Register(req, res) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(401).json(apiError(401, result.array()[0].message));
  } else {
    const { password, username, name, email } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    // checking if user exist or not
    const userExists = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (userExists)
      return res.status(401).json(apiError(401, "User already exists"));

    // saving data to database
    try {
      const user = new User({
        username,
        email,
        name,
        password: hashPassword,
      });
      await user.save();
      // not showing password or hash

      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_SECRET);

      res.status(200).json(
        apiResponse(200, "User created successfully", {
          userid: user._id,
          token: token,
        })
      );
    } catch (error) {
      res.status(500).json(apiError(500, error.message));
    }
  }
}

export default Register;
