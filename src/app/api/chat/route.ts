import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction:
          "You are a helpful AI assistant for an e-commerce website. Keep answers short and professional.",
      },
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      error.status === 429
    ) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a few seconds and try again.",
        },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
