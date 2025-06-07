import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  validateRequest,
  registerSchema,
  loginSchema,
  updateProfileSchema,
} from "../utils/validation.js";

const router = express.Router();

router.post("/register", validateRequest(registerSchema), registerUser);
router.post("/login", validateRequest(loginSchema), loginUser);

router.get("/profile", protect, getUserProfile);
router.patch(
  "/profile",
  protect,
  validateRequest(updateProfileSchema),
  updateUserProfile
);

export default router;
