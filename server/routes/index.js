import { Router } from "express";
import { indexGet } from "../controllers/indexGet.js";

const router = new Router();

router.get("/", indexGet);

export default router;
