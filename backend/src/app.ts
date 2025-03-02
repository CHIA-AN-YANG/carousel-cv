import express from "express";
import dotenv from "dotenv";
import router from "./api";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const corsOptions = {
  origin: FRONTEND_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});