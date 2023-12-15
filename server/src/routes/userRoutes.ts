import { Router } from "express";
import { userLogin, userSignup } from "../controllers/userController";
const router = Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);

export default router;
