const { GoogleGenerativeAI } = require('@google/generative-ai');
const { INSTRUCTIONS } = require('../src/utils/instructions');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages, input } = JSON.parse(event.body);
    const apiKey = process.env.API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: INSTRUCTIONS,
    });
    const chat = model.startChat({ history: messages });
    const result = await chat.sendMessageStream(input);
    const response = [];
    for await (const chunk of result.stream) {
      response.push(chunk.text());
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.join('') }),
    };
  } catch (error) {
    console.error('Error processing chat request:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) };
  }
};