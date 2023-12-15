import { Router } from "express";
const router = Router();

router.get("/");
router.post("/new");
router.put("/update/:id");
router.post("/delete/:id");

export default router;
