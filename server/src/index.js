import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import connectDB from "./config/connectDB.config.js";
import todoRouter from "./routes/todo.routes.js";
import tokenValidation from "./middleware/tokenValidation.middleware.js";

// dotenv configuration
dotenv.config();

// database connection
connectDB();

// express middleware and apps
const app = express();
app.use(express.json());
app.use(cors());
// routes
app.use("/api/v1/user", userRouter);

// protected routes
app.use("/api/v1/todo", tokenValidation, todoRouter);

// server listening on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
