import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { encode } from "gpt-tokenizer";
import { Content, GoogleGenerativeAI, Part } from "@google/generative-ai";
import axios from 'axios';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const DEBUG = process.env.DEBUG ?? false;
const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const MAX_TOKENS = 1000;

interface Message {
  role: 'user' | 'model';
  parts: Part[];
}

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is required in .env file");
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const readCVFile = async (filePath: string) => {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading CV file:", error);
    return null;
  }
};

const estimateTokens = (text: string) => {
  return encode(text).length;
};

export const replyWithCV = async (text: string, reqHistory?: Message[]) => {
  const estimatedTokens = estimateTokens(text);
  const cvPath = path.resolve("ai-cv.txt");
  const cvContent = await readCVFile(cvPath);

  if (estimatedTokens > MAX_TOKENS) {
    return { text: "Sorry, your question is too expensive, I cannot answer." };
  }
  if (!cvContent) {
    return { text: "Sorry, I cannot answer your question." };
  }

  return axios.post(
    GEMINI_ENDPOINT,
    {
      contents: [
        {
          parts: [
            { text: `This is Anna's CV:\n\n${cvContent}\n\n, you are Anna, meeting new friends` },
            { text },
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
  ).then(response => {
    const { promptTokenCount, candidatesTokenCount, totalTokenCount } = response.data.usageMetadata;
    if (DEBUG) {
      return {
        message: response.data.candidates[0].content.parts[0],
        usageMetadata: { promptTokenCount, candidatesTokenCount, totalTokenCount },
        modelVersion: response.data.modelVersion
      };
    } else {
      return {
        message: response.data.candidates[0].content.parts[0]
      };
    }
  });
};
