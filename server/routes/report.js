import { Router } from "express";
import multer from "multer";
import { reportPost } from "../controllers/reportPost.js";
import { getAllReports } from "../controllers/reportGet.js";
import { reportDel } from "../controllers/reportDel.js";

// init multer
const upload = multer({ dest: "../pictures" });

const router = new Router();

router.get("/", getAllReports);
router.post("/", upload.single("pic"), reportPost);
router.delete("/:id", reportDel);

export default router;
