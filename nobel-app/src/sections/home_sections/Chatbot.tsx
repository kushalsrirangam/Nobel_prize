import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (customInput?: string) => {
    const messageToSend = customInput ?? input;
    if (!messageToSend.trim()) return;

    const userMessage: Message = { role: 'user', content: messageToSend };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });
      const data = await response.json();

      const botReply: Message = { role: 'assistant', content: data.choices[0].message.content };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error('Error sending message:', error);
      const botReply: Message = { role: 'assistant', content: '⚡ Server Error: Please try again.' };
      setMessages((prev) => [...prev, botReply]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    const handleCustomMessage = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const customMessage = customEvent.detail;
      sendMessage(customMessage);
    };
    window.addEventListener('chatbot-send-message', handleCustomMessage);
    return () => window.removeEventListener('chatbot-send-message', handleCustomMessage);
  }, [messages]);

  return (
    <motion.section
      id="chatbot"
      className="my-20 px-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-50 dark:bg-blue-100 rounded-3xl border-4 border-red-400 p-8 max-w-3xl mx-auto shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          🤖 Nobel Prize Chatbot
        </h2>

        {/* 🌟 Suggested Questions */}
        {messages.length === 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              "Who was the youngest Nobel Prize winner?",
              "Tell me about Albert Einstein",
              "Which country has the most Nobel Prizes?",
              "Top 3 women Nobel laureates",
            ].map((question, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(question)}
                className="bg-blue-200 dark:bg-gray-700 hover:bg-blue-300 dark:hover:bg-gray-600 text-blue-800 dark:text-white px-4 py-2 rounded-full text-sm transition-all"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {/* 💬 Chat Messages */}
        <div className="h-[400px] overflow-y-auto bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white self-end'
                  : 'bg-blue-300 dark:bg-gray-700 text-black dark:text-white self-start'
              }`}
            >
              {msg.content}
            </motion.div>
          ))}

          {loading && (
            <motion.div
              className="self-start flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* 📝 Input and Send Button */}
        <div className="flex mt-4">
          <input
            id="chatbot-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about Nobel Prizes..."
            className="flex-1 p-3 rounded-l-lg bg-blue-100 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => sendMessage()}
            className="bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded-r-lg text-blue-700 font-bold flex items-center justify-center"
          >
            ➤
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Chatbot;
