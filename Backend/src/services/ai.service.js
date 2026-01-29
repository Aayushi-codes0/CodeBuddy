import fetch from "node-fetch";

const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const MODEL = "deepseek-coder:6.7b";

export default async function aiService(code) {
  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      prompt: `
You are a senior software engineer and code reviewer.

Respond ONLY in this format:

Detected Language:
Issues Found:
Improvements:
Optimized Version:
Final Verdict:

Code:
${code}
`,
      stream: false
    })
  });

  const data = await response.json();
  return data.response;
}
