import { Router } from "express";
import { imgGet } from "../controllers/imgGet.js";

const router = new Router();

router.get("/:id", imgGet);

export default router;
