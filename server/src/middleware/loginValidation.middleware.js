import { check } from "express-validator";

export const loginValidation = [
  //should export array otherwise will not work as middleware
  check("username")
    .exists() // checks for username exist or not,
    .withMessage("Username is required") // if not exist then throw error with this message
    .escape() // sanitize the username and remove any html or script tag
    .trim() // remove any trailing space at the beginning or at the end
    .isAlphanumeric() // check if the username contains only letters and numbers
    .withMessage("Username must be alphanumeric")
    .isLength({ min: 6, max: 20 }) // check for username length
    .withMessage("Username must be at least 6 characters long"),

  check("password")
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];
