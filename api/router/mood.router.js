<<<<<<< HEAD
import express from "express";
import { addMood, getAllMoods, getAllMoodsForAdmin } from "../controller/mood.controller.js";


const router = express.Router();

// Save mood
router.post("/add", addMood);

// Get mood history
router.get("/all",  getAllMoods);
router.get("/admin/all", getAllMoodsForAdmin);

export default router;
=======
import express from "express";
import { addMood, getAllMoods, getAllMoodsForAdmin } from "../controller/mood.controller.js";


const router = express.Router();

// Save mood
router.post("/add", addMood);

// Get mood history
router.get("/all",  getAllMoods);
router.get("/admin/all", getAllMoodsForAdmin);

export default router;
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
