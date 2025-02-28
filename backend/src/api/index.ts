import express from "express";
import aiRoutes from "./aiRoute";

const router = express.Router();

router.use("/ai", aiRoutes);
export default router;