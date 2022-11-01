import express from "express";
import { signup } from "../controllers/auth";

const router = express.Router();

router.post("/signup", signup);

// router.get("/singin", test);

// router.get("/google", test);

export default router;
