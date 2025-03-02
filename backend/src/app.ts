import express from "express";
import dotenv from "dotenv";
import router from "./api";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your Next.js app's origin
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});