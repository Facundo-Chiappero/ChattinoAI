import { useChat } from './hooks/useChat';
import EmojiList from './components/EmojiList';
import Chat from './components/Chat';
import Header from './components/Header';

function App() {
  const { msgs, handleSubmit, messagesEndRef } = useChat();

  return (
    <div className="h-[100vh] bg-gray-800 text-white flex flex-col items-center justify-center main">

      <Header />

      <Chat msgs={msgs} handleSubmit={handleSubmit} messagesEndRef={messagesEndRef} />
      <EmojiList />

    </div>
  );
}

export default App;
