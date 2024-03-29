import express from "express";
import {
  addOxygen,
  fetchAddedOxygen,
  deleteOxygen,
  fetchAvailableOxygen,
} from "../controllers/add_oxygen_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/addOxygen", addOxygen);
router.get("/fetchOxygen", fetchAddedOxygen);
router.get("/availableOxygen", fetchAvailableOxygen);
router.delete("/:id", deleteOxygen);

export default router;
