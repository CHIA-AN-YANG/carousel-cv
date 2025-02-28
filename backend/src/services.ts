import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { Request, Response } from "express";

dotenv.config();

const GEMINI_API_KEY = 'AIzaSyAWTUz-sanQS_-LWMQGAVxxhNg41OOKklU';
const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const readCVFile = async (filePath: string) => {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading CV file:", error);
    return null;
  }
};
//example query : ?text=WhatsYourName
//{"candidates":[{"content":{"parts":[{"text":"Hi! It's nice to meet you. I'm Anna. What's your name?\n"}],"role":"model"},"finishReason":"STOP","avgLogprobs":-0.14851390231739392}],"usageMetadata":{"promptTokenCount":751,"candidatesTokenCount":22,"totalTokenCount":773,"promptTokensDetails":[{"modality":"TEXT","tokenCount":751}],"candidatesTokensDetails":[{"modality":"TEXT","tokenCount":22}]},"modelVersion":"gemini-2.0-flash"}
export const replyWithCV = async (queryString: string) => {
  const cvPath = path.resolve("../ai-cv.txt");
  const cvContent = await readCVFile(cvPath);


  if (!cvContent) {
    throw new Error("CV file not found or unreadable.");
  }
  const response = await axios.post(
    GEMINI_ENDPOINT,
    {
      contents: [
        {
          parts: [
            { text: `This is Anna's CV:\n\n${cvContent}\n\n, you are Anna, meeting new friends` },
            { text: queryString }, //?text=<question>
          ]
        },
      ]
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
    }
  );
  if (response.data.candidates[0].content.parts[0]) {
    return response.data.candidates[0].content.parts[0];
  }
  throw new Error("No text response from AI");
};

