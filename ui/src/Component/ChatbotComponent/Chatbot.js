import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your HappySoul assistant. How can I help you today?",
      isBot: true
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();

    setMessages((prev) => [
      ...prev,
      {
        text: userMsg,
        isBot: false
      }
    ]);

    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botReply =
        "I'm here for you, and I'm listening. Whatever you're going through, please know you don't have to face it alone. Consider reaching out to one of our wonderful experts on this page who can offer more support.";

      const lowerMsg = userMsg.toLowerCase();

      if (/\b(hello|hi)\b/.test(lowerMsg)) {
        botReply = "Hello! How are you feeling today?";
      }

      else if (
        /\b(sad|depressed|depression|down|heartbreak|crying|lonely|nothing|not|not good|feel bad)\b/.test(
          lowerMsg
        )
      ) {
        botReply =
          "I hear you, and I am so sorry you are hurting right now. Please take a deep breath. You are not alone in this, and taking it one step at a time is enough.";
      }

      else if (/\b(anxiety|anxious|stress|panic|broken heart|breakup|broke|feeling alone|lonely)\b/.test(lowerMsg)) {
        botReply =
          "It sounds like you're carrying a lot of weight right now. Try taking slow deep breaths and give yourself a moment to relax.";
      }

      else if (/\b(happy|good|great|best|better|feel good)\b/.test(lowerMsg)) {
        botReply =
          "That's wonderful to hear! Keep spreading positivity and take care of yourself.";
      }

      else if (/\b(joke)\b/.test(lowerMsg)) {
        botReply =
          "Why did the scarecrow win an award? Because he was outstanding in his field!";
      }

      else if (/\b(appointment|book|contact)\b/.test(lowerMsg)) {
        botReply =
          "You can directly contact any of our experts using the phone numbers listed on their profile cards.";
      }

      else if (/\b(tired|exhausted|sleep)\b/.test(lowerMsg)) {
        botReply =
          "It sounds like you need some rest. Try relaxing music or meditation before sleeping.";
      }

      else if (/\b(ok|thank you|thanks|bye|see you)\b/.test(lowerMsg)) {
        botReply =
          "You're very welcome! Take care of yourself and remember that you matter.";
      }

      setMessages((prev) => [
        ...prev,
        {
          text: botReply,
          isBot: true
        }
      ]);

      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chatbot-container">

      {isOpen && (
        <div className="chatbot-window">

          {/* Header */}
          <div className="chatbot-header">
            <h4>HappySoul Assistant</h4>

            <button
              className="close-btn"
              onClick={toggleChat}
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-bubble ${msg.isBot ? 'bot' : 'user'
                  }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="message-bubble bot typing">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            className="chatbot-input-area"
            onSubmit={handleSend}
          >

            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button
              type="submit"
              className="send-btn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                  fill="currentColor"
                />
              </svg>
            </button>

          </form>

          {/* Warning */}
          <div className="chatbot-warning">
            ⚠️ AI responses may be inaccurate. For serious concerns,
            please contact a mental health professional.
          </div>

        </div>
      )}

      {!isOpen && (
        <button
          className="chatbot-fab"
          onClick={toggleChat}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H17V11H7V9ZM7 12H14V14H7V12ZM7 6H17V8H7V6Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}

    </div>
  );
};

export default Chatbot;