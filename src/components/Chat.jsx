import InputBox from './InputBox';
import Message from './Message';

export default function Chat({ msgs, messagesEndRef, handleSubmit }) {
  return (
    <div className="min-w-[300px] flex flex-col h-[60vh] sm:w-[80vw] border-2 border-black rounded-lg p-4 pr-2 w-[95vw]">
      <div className="flex flex-col gap-4 overflow-y-scroll flex-grow pr-2">
        {msgs.map((msg, index) => (
          index > 0 && <Message key={index} msg={msg} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <InputBox onSubmit={handleSubmit} />
    </div>
  )
}