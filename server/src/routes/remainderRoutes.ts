import {
  createRemainder,
  deleteRemainder,
  getRemainder,
  updateRemainder,
} from "../controllers/remainderController";
import { Router } from "express";
const router = Router();

router.get("/", getRemainder);
router.post("/new", createRemainder);
router.put("/update/:id", updateRemainder);
router.post("/delete/:id", deleteRemainder);

export default router;
