import express from "express";
import dotenv from "dotenv";
import router from "./api";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});