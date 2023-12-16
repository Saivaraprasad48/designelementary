import {
  createRemainder,
  deleteRemainder,
  getRemainder,
  updateRemainder,
  updateRemainderStatus,
} from "../controllers/remainderController";
import { Router } from "express";
const router = Router();

router.get("/", getRemainder);
router.post("/new", createRemainder);
router.put("/update/:id", updateRemainder);
router.put("/completed/:id", updateRemainderStatus);
router.delete("/delete/:id", deleteRemainder);

export default router;
