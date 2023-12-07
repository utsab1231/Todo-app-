import { check } from "express-validator";

const todoValidation = [check("description","todo description is required").exists()];


export default todoValidation;