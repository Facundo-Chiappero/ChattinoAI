import { useState, useRef, useEffect } from 'react';
import { ERROR, HOST_BACKEND_URL, INITIAL_CHAT, ROLES } from '../utils/constants';

export const useChat = () => {

  const [msgs, setMsgs] = useState(INITIAL_CHAT);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  const handleSubmit = async (input) => {
    if (input.length === 0) return;

    const newMsg = { role: ROLES.USER, parts: [{ text: input }] };
    setMsgs((prevMsgs) => [...prevMsgs, newMsg]);

    // this one is for local
    const backend = import.meta.env.VITE_BACKEND_URL

    // this one is for host, make sure to change its value
    // const backend = HOST_BACKEND_URL

    try {
      const response = await fetch(`${backend}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: msgs, input: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      updateBotMessage(data.response);
    } catch (error) {
      console.error('Error sending message:', error);
      handleError();
    }
  };

  const updateBotMessage = (chunkText) => {
    setMsgs((prevMsgs) => {
      const lastBotMsg = prevMsgs[prevMsgs.length - 1];
      if (lastBotMsg && lastBotMsg.role === ROLES.BOT) {
        return [
          ...prevMsgs.slice(0, -1),
          { ...lastBotMsg, parts: [{ text: chunkText }] },
        ];
      }
      return [
        ...prevMsgs,
        { role: ROLES.BOT, parts: [{ text: chunkText }] },
      ];
    });
  };

  const handleError = () => {
    setMsgs((prevMsgs) => [
      ...prevMsgs,
      {
        role: ROLES.BOT,
        parts: [
          {
            text: ERROR,
          },
        ],
      },
    ]);
  };

  return { msgs, handleSubmit, messagesEndRef };
};