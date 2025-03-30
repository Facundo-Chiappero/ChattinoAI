const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { MODEL } = require('../src/utils/constants');
const { INSTRUCTIONS } = require('../src/utils/instructions');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: MODEL,
  systemInstruction: INSTRUCTIONS,
});

app.post('/chat', async (req, res) => {
  try {

    const { messages, input } = req.body;
    const chat = model.startChat({ history: messages });
    const result = await chat.sendMessageStream(input);
    const response = [];
    for await (const chunk of result.stream) {
      response.push(chunk.text());
    }
    res.json({ response: response.join('') });
  } catch (error) {
    console.error('Error processing chat request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.BACKEND_URL.split(':')[2] || 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});