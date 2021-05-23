import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  createProductReview,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/:id/reviews").post(protect, createProductReview);
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
