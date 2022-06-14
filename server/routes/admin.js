import { Router } from "express";
import { adminPost } from "../controllers/adminPost.js";

const router = new Router();

router.post("/", adminPost);

export default router;
