import React, { useRef } from 'react';
import SendSvg from '../assets/SendSvg';

const InputBox = ({ onSubmit }) => {
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = inputRef.current.value.trim();
    if (input.length === 0) return;

    inputRef.current.value = '';
    inputRef.current.readOnly=true
    btnRef.current.classList.add('bg-blue-950')
    btnRef.current.classList.add('hover:bg-blue-950')
    await onSubmit(input);
    inputRef.current.readOnly=false
    btnRef.current.classList.remove('bg-blue-950')
    btnRef.current.classList.remove('hover:bg-blue-950')

  };

  return (
    <form className="flex flex-row justify-around mt-4" onSubmit={handleSubmit}>
      <input
        readOnly={false}
        type="text"
        name="input"
        id="input"
        placeholder="say anything to ChattinoAI"
        className="flex-grow p-2 rounded bg-gray-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer text-white focus:outline-none"
        ref={inputRef}
      />
      <button
        className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 cursor-pointer rounded"
        ref={btnRef}
      >
        <SendSvg />
      </button>
    </form>
  );
};

export default InputBox;
