import React, { useState, useEffect, useRef } from 'react';
import { X, Loader } from 'lucide-react';

const Chatbot = ({ setIsOpen, isOpen }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const chatbotRef = useRef(null);

  // Predefined questions and answers
  const faqQuestions = [
    { question: "Just saying hello!", answer: "Hello there! Thanks for reaching out. 😊" },
    { question: "We'd like to hire you", answer: "Great! Let's discuss this further. Please email me at atulxgoyal@gmail.com." }
  ];

  // Initial welcome message
  useEffect(() => {
    setTimeout(() => {
      const introMessage = "Hi! I'm Atul Bot. How can I help you today?";
      setMessages([{ type: 'bot', content: introMessage }]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleQuestionClick = (question) => {
    const selectedQnA = faqQuestions.find((q) => q.question === question);
    setMessages((prev) => [
      ...prev,
      { type: 'user', content: question },
      { type: 'bot', content: selectedQnA.answer }
    ]);
  };

  // Message bubble component
  const MessageBubble = ({ message }) => {
    const isUser = message.type === 'user';
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div
          className={`max-w-[80%] rounded-lg px-4 py-2 ${
            isUser ? 'bg-indigo-700 text-white' : 'transparent bg-gray-400 text-gray-100'
          }`}
        >
          {message.content}
        </div>
      </div>
    );
  };

  return (
    isOpen && (
      <div
        ref={chatbotRef}
        className="fixed top-16 left-4 bg-gradient to-black bg-opacity-190 backdrop-blur-md rounded-2xl shadow-lg w-80 z-50"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 ">
          <h3 className="font-bold text-white">Atul Bot</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="overflow-y-auto h-64 p-4">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Loader className="animate-spin w-8 h-8 text-gray-400" />
            </div>
          ) : (
            messages.map((msg, index) => <MessageBubble key={index} message={msg} />)
          )}
        </div>

        {/* FAQ Buttons */}
        {!isLoading && (
          <div className="mt-4 p-4">
            <p className="text-gray-400 mb-2">How can I assist you?</p>
            <div className="flex flex-col gap-2">
              {faqQuestions.map((q, index) => (
                <button
                  key={index}
                  className="bg-gradient bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition"
                  onClick={() => handleQuestionClick(q.question)}
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Chatbot;




