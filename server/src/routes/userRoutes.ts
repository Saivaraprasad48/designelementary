import { Router } from "express";
import { getUser, userLogin, userSignup } from "../controllers/userController";
import { authmiddleware } from "middlewares/authMiddleware";
const router = Router();

router.get("/", authmiddleware, getUser);
router.post("/login", userLogin);
router.post("/signup", userSignup);

export default router;
