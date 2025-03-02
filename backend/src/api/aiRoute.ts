import { replyWithCV } from "./aiService";
import express, { Request, Response } from 'express';
const router = express.Router();

router.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    res.status(400).send({ error: "message is required in the request body" });
  }
  try {
    replyWithCV(message).then((response) => {
      res.send(response);
    }).catch((error) => {
      console.log(error);
      res.status(200).send({ message: { text: "Sorry, I cannot reply in the moment, I used out all the tokens 😕" } });
      //res.status(500).send({ error });
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to generate gemini cv reply" });
  }
});
router.post("/check", (req, res) => {
  res.send("Hello from Gemini, I am alive");
});
export default router;
