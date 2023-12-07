import { Router } from "express";
import { registerValidation } from "../middleware/registerValidation.middleware.js";
import Register from "../controllers/user/Register.controller.js";
import { loginValidation } from "../middleware/loginValidation.middleware.js";
import Login from "../controllers/user/Login.controller.js";

const userRouter = Router();

userRouter.post("/login", loginValidation, Login);

userRouter.post("/register", registerValidation, Register);


export default userRouter;
