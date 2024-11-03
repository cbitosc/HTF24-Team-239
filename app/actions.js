'use server'
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Generate 3 recipes for given prompt dish. The output should be in JSON array format and each object should contain a recipe name field named 'name', description field named 'description', array of ingredients named 'ingredients', and array of step-by-step instructions named 'instructions'.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to generate recipes based on the user prompt
export async function fetchRecipes(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(prompt);
    const recipes = JSON.parse(result.response.text()); 

    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}
