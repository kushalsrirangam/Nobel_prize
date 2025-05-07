// server/server.js

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5000;

// Load OpenAI API Key from environment variables
const apiKey = process.env.OPENAI_API_KEY;

app.use(cors());
app.use(express.json());

// Load Nobel dataset
let dataset = [];
try {
  const rawData = fs.readFileSync('./nobel_prize_cleaned_no_geo_shape.json', 'utf8');
  dataset = JSON.parse(rawData);
  console.log(`✅ Nobel dataset loaded: ${dataset.length} entries`);
} catch (error) {
  console.error('❌ Failed to load Nobel dataset:', error);
}

// Main chatbot route
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  const userMessage = messages?.[messages.length - 1]?.content?.toLowerCase();

  if (!userMessage) {
    return res.status(400).json({ error: 'No user message provided.' });
  }

  // Dataset Matching
  const matches = dataset.filter(item => {
    const year = item?.award_year?.toString();
    const category = item?.category?.toLowerCase();
    const laureate = item?.laureate_name?.toLowerCase();

    return (
      (laureate && userMessage.includes(laureate)) ||
      (category && userMessage.includes(category)) ||
      (year && userMessage.includes(year))
    );
  });

  if (matches.length > 0) {
    const datasetAnswer = matches.map(m =>
      `🏆 ${m.laureate_name || "Unknown Laureate"} won the Nobel Prize in ${m.category || "Unknown Category"} (${m.award_year || "Unknown Year"}).\nReason: ${m.motivation || "No motivation available."}`
    ).join('\n\n');

    return res.json({
      choices: [{ message: { content: datasetAnswer } }]
    });
  }

  // If no dataset match, fallback to OpenAI
  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
        stream: false,
      }),
    });

    const data = await openaiResponse.json();
    res.json(data);
  } catch (error) {
    console.error('❌ OpenAI API Error:', error);
    res.status(500).json({ error: 'Failed to get response from OpenAI.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
