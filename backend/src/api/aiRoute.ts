import { replyWithCV } from "./aiService";
import express, { Request, Response } from 'express';
const router = express.Router();

router.post("/chat", (req, res) => {
  console.log(req.body);
  const { message } = req.body; // Get message from request body

  if (!message) {
    res.status(400).send({ error: "message is required in the request body" });
  }
  try {
    replyWithCV(message).then((response) => {
      console.log(response);
      res.send(response);
    }).catch((error) => {
      console.log(error);
      res.status(500).send({ error });
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to generate gemini cv reply" });
  }
});
router.post("/check", (req, res) => {

  if (req.params) {
    console.log(req.params, "params");
  }
  if (req.query) {
    console.log(req.query, "query");
  }
  if (req.body) {
    console.log(req.body, "body");
  }
  res.send("Hello from Gemini");
});
export default router;
