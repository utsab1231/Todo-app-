import { check } from "express-validator";

const todoValidation = [
  check("description", "Todo description is required")
    .exists()
    .notEmpty()
    .withMessage("Todo description must not be empty"),
];

export default todoValidation;
