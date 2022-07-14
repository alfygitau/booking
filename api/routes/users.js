import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// update
router.put("/:id", verifyUser, updateUser);
// delete
router.delete("/:id", verifyUser, deleteUser);
// get
router.get("/:id", verifyUser, getSingleUser);
// getAll
router.get("/", verifyAdmin, getAllUsers);

export default router;
