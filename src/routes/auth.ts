import express from "express";
import { signup, signin } from "../controllers/auth";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

// router.get("/google", test);

export default router;
