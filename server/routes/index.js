import { Router } from "express";
import { indexGet } from "../controllers/indexGet";

const router = new Router();

router.get("/", indexGet);

export default router;
