import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
  getAllRooms,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create
router.post("/:hotelid", verifyAdmin, createRoom);

// update
router.put("/:id", verifyAdmin, updateRoom);

// delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// get
router.get("/:id", getSingleRoom);

// getAll
router.get("/", getAllRooms);

export default router;