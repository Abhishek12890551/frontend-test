import express from "express";
import {
  getPreferences,
  savePreferences,
  getDashboardSummary,
} from "../controllers/preferencesController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validateRequest, preferencesSchema } from "../utils/validation.js";

const router = express.Router();

router.use(protect);

router.get("/preferences", getPreferences);
router.post(
  "/preferences",
  validateRequest(preferencesSchema),
  savePreferences
);
router.get("/dashboard-summary", getDashboardSummary);

export default router;
