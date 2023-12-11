import { check } from "express-validator";
export const searchItemValidation = [
  check("searchitem", "Search item is required")
    .exists()
    .notEmpty()
    .withMessage("Search item must not be empty")
    .isLength({ max: 50 })
    .withMessage("Search item cannot be at more than 50 characters long"),
];
