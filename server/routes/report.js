import { Router } from "express";
import { reportPost } from "../controllers/reportPost.js";

const router = new Router();

router.post("/", reportPost);

export default router;
