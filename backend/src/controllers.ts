import { replyWithCV } from "./services.ts";
import { Request, Response } from "express";

export const generateSelfIntro = async (req: Request, res: Response) => {
  if (!req.query.text) {
    res.status(400).json({ error: "Missing text query parameter" });
    return;
  }
  try {
    const result = await replyWithCV(req.query.text);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate gemini cv reply" });
  }
};