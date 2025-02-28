import express from "express";
import { generateSelfIntro } from "./controllers.ts";

const router = express.Router();

router.get("/cv-talk", generateSelfIntro);

export default router;
