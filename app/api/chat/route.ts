import dotenv from "dotenv";
import fs from "fs/promises";
import { encode } from "gpt-tokenizer";
import axios, { AxiosResponse } from "axios";
import { GenerateContentResponse } from '@google/generative-ai';
import path from 'path';

dotenv.config();

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const FILE_PATH = path.join(process.cwd(), "public", "txt/ai-cv.txt");
const MODE = process.env.MODE;
const MAX_TOKENS = 1000;

interface NewGenerateContentResponse extends GenerateContentResponse {
  modelVersion?: string;
}

export async function POST(req: Request) {
  const { message } = await req.json();
  const estimatedTokens = estimateTokens(message);
  const cvContent = await readCVFile(FILE_PATH);

  if (!message.trim()) {
    return new Response(JSON.stringify({ text: "Did you say something? I couldn't hear you." }), { status: 400 });
  }
  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is required in .env file");
    return new Response(JSON.stringify({ text: "Internal server error" }), { status: 500 });
  }
  if (estimatedTokens > MAX_TOKENS) {
    return new Response(JSON.stringify({ text: "Sorry, your question is too long, I cannot answer." }), { status: 400 });
  }
  if (!cvContent) {
    return new Response(JSON.stringify({ text: "Sorry, I cannot answer your question." }), { status: 500 });
  }

  const promptObj = createPrompt(cvContent, message);

  try {
    const response = await axios.post(GEMINI_ENDPOINT, promptObj,
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
      }
    ).then(response => setResponse(response));

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    new Response(JSON.stringify({ text: "Sorry, I cannot reply in the moment 😕" }), { status: 500 });
  };
};

async function readCVFile(filePath: string) {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading CV file:", error);
    return null;
  }
};

function estimateTokens(text: string) {
  return encode(text).length;
};

function createPrompt(cvContent: string, message: string) {
  const prompt = `
    You are now responding **as the owner of this CV**.
    - **NEVER** reveal that you are an AI.
    - **ALWAYS** act professionally, politely, and welcoming.
    - If asked to reply in **Chinese**, **always use Traditional Chinese (zh-TW)**.
    - **Use dialogue style** in your responses, like a natural conversation.
    - **Do NOT format responses in markdown**. Respond in plain text only.
    
    Here is the CV:
    ---
    ${cvContent}
    ---
    
    User's question: ${message}
    
    Respond as if you are the CV owner.
  `;
  return { contents: [{ parts: [{ text: prompt }] }] };
};

function setResponse(response: AxiosResponse<NewGenerateContentResponse>) {
  const genContentResult = response.data;
  const text = genContentResult.candidates?.length ? genContentResult.candidates[0].content.parts[0].text : "";
  return {
    ...(text ? { text } : {}),
    ...(MODE === "debug" && genContentResult.usageMetadata ? { usageMetadata: genContentResult.usageMetadata } : {}),
    ...(MODE === "debug" && genContentResult.modelVersion ? { modelVersion: genContentResult.modelVersion } : {})
  };
}