import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import InputBox from './components/InputBox';
import Message from './components/Message';
import EmojiList from './components/EmojiList';
import INSTRUCTIONS from './instructions';

function Chat() {
	
	
	
	const apiKey = import.meta.env.VITE_API_KEY;
	const genAI = new GoogleGenerativeAI(apiKey);
	
	const model = genAI.getGenerativeModel({
		model: 'gemini-1.5-flash',
		systemInstruction: INSTRUCTIONS,
	});
	
	const [msgs, setMsgs] = useState([
		{
			role: 'user',
			parts: [{ text: '' }],
		},
		{
			role: 'model',
			parts: [{ text: 'Chaora 👋, i\'m a chattino ai, what can i help with?' }],
		},
	]);
	
	const chatRef = useRef(null);
	const messagesEndRef = useRef(null);
	
	useEffect(() => {
		chatRef.current = model.startChat({ history: msgs });
	}, [model, msgs]);
	
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [msgs]);
	
	const handleSubmit = async (input) => {
		if (input.length === 0) return;
		
		const newMsg = { role: 'user', parts: [{ text: input }] };
		setMsgs((prevMsgs) => [...prevMsgs, newMsg]);
		
		try {
			if (!chatRef.current) return;
			
			const result = await chatRef.current.sendMessageStream(input);
			await processBotResponse(result.stream);
		} catch (error) {
			handleError();
		}
	};
	
	const processBotResponse = async (stream) => {
		const botMsgChunks = [];
		for await (const chunk of stream) {
			const chunkText = chunk.text();
			botMsgChunks.push(chunkText);
			updateBotMessage(botMsgChunks.join(''));
		}
	};
	
	const updateBotMessage = (chunkText) => {
		setMsgs((prevMsgs) => {
			const lastBotMsg = prevMsgs[prevMsgs.length - 1];
			if (lastBotMsg && lastBotMsg.role === 'model') {
				return [
					...prevMsgs.slice(0, -1),
					{ ...lastBotMsg, parts: [{ text: chunkText }] },
				];
			}
			return [
				...prevMsgs,
				{ role: 'model', parts: [{ text: chunkText }] },
			];
		});
	};
	
	const handleError = () => {
		setMsgs((prevMsgs) => [
			...prevMsgs,
			{
				role: 'model',
				parts: [
					{
						text: 'It seems there was an error. I would appreciate it if you could report it through this link: https://github.com/Facundo-Chiappero/ChattinoAI/issues',
					},
				],
			},
		]);
	};
	
	
	return (
		<div className="w-[100vw] h-[100vh] bg-gray-800 text-white flex flex-col items-center justify-center main">
		
		<div className='flex flex-col items-center relative top-4'>
		<img src="./chattinoFullBody.png" alt="chattino" className='chattinoFullBody  h-24 w-14 '/>
		<h1 className="text-4xl bg-gray-800">ChattinoAI</h1>
		</div>
		
		<div className="chat min-w-[300px] flex flex-col h-[70vh] sm:w-[80vw] border-2 border-black rounded-lg p-4 pr-2 w-[95vw]">
		<div className="flex flex-col gap-4 overflow-y-auto flex-grow pr-2">
		{msgs.map((msg, index) => (
			index > 0 && <Message key={index} msg={msg} />
		))}
		<div ref={messagesEndRef}></div>
		</div>
		<InputBox onSubmit={handleSubmit} />
		</div>
		<EmojiList />
		</div>
	);
}

export default Chat;
