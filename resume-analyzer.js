// ai-career-coach-loop.js
import fs from "fs";
import readline from "readline";
import { Anthropic } from "@anthropic-ai/sdk";

// Initialize Claude client
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // set your API key in environment
});

// Utility to load files
function loadFile(path) {
  return fs.readFileSync(path, "utf8");
}

// Load resume and job description once
const resume = loadFile("resume.pdf"); // ideally parsed text from PDF
const jobDesc = loadFile("job_description.txt");

console.log("=== AI Resume + Career Coach ===");
console.log("Files loaded: resume.pdf, job_description.txt");
console.log("Type your questions (e.g., 'How can I improve for a software engineer role?').");
console.log("Type 'exit' to quit.\n");

// Console interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

async function askClaude(query) {
  const prompt = `
You are an AI career coach.
Here is the candidate's resume:
${resume}

Here is the job description:
${jobDesc}

Question: ${query}
Please provide actionable suggestions, including missing skills, tailored bullet points, and industry insights.
`;

  try {
    const response = await client.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 500,
      messages: [{ role: "user", content: prompt }],
    });

    console.log("\n=== Claude's Suggestions ===");
    console.log(response.content[0].text);
    console.log("\n");
  } catch (err) {
    console.error("Error:", err);
  }
}

rl.prompt();

rl.on("line", async (line) => {
  const query = line.trim();
  if (query.toLowerCase() === "exit") {
    rl.close();
    return;
  }
  await askClaude(query);
  rl.prompt();
}).on("close", () => {
  console.log("Goodbye!");
  process.exit(0);
});
