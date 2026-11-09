import React, { useState, useEffect, useRef } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const quickQuestions = [
  {
    q: 'How do I apply for 2026–27 Admissions?',
    a: 'You can complete the "Apply Today" form at the top of this page or click "Online Admission Form" in the FAQ section to generate your provisional application slip.',
  },
  {
    q: 'What streams are available in Class XI & XII?',
    a: "St. Michael's offers Science (PCM/PCB/CS), Arts & Humanities, and Commerce streams under MBOSE with dedicated laboratories.",
  },
  {
    q: 'Are scholarships available for rank holders?',
    a: "Yes! St. Michael's SSLC Award Body grants ₹20,000 cash scholarships and 100% tuition waivers to MBOSE State Top 20 Merit holders.",
  },
  {
    q: 'Does the school provide bus transit?',
    a: 'Yes, our 4-route school bus fleet covers Umsning Town Core, Nongpoh Road, Bhoirymbong, Umroi, Umden, and Sumer along the NH-6 corridor.',
  },
];

export const ChatBot: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Welcome to St. Michael's Higher Secondary School, Umsning! How may our admissions & student help desk assist you today?",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (chatOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  const handleQuestionClick = (item: { q: string; a: string }) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: item.q },
      { sender: 'bot', text: item.a },
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const userText = userInput.trim();
    setUserInput('');
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText },
      {
        sender: 'bot',
        text: `Thank you for your enquiry! Our Secretariat at St. Michael's Umsning is available (${SCHOOL_INFO.officeHours}) at ${SCHOOL_INFO.phoneMobile} or ${SCHOOL_INFO.email}.`,
      },
    ]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to top button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Floating Chat Widget */}
      <div className="chatbot-wrapper">
        {showTooltip && !chatOpen && (
          <div className="chatbot-tooltip">
            <span>Ask St. Michael&apos;s Desk</span>
            <button
              type="button"
              className="tooltip-close"
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss tooltip"
            >
              ×
            </button>
          </div>
        )}

        <button
          type="button"
          className="chatbot-fab btn-shine"
          onClick={() => {
            setChatOpen(!chatOpen);
            setShowTooltip(false);
          }}
          aria-label="Toggle live help desk"
        >
          <i className={`fas ${chatOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
        </button>

        {chatOpen && (
          <div className="chatbot-modal" role="dialog" aria-label="St. Michael's Help Desk">
            <div className="chatbot-header">
              <div className="chatbot-title">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>St. Michael&apos;s Help Desk</h4>
                  <span>Online • Admissions &amp; Campus Support</span>
                </div>
              </div>
              <button
                type="button"
                className="chatbot-close-btn"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-quick-questions">
              <p className="quick-label">Quick Questions:</p>
              <div className="quick-chips">
                {quickQuestions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="quick-chip"
                    onClick={() => handleQuestionClick(item)}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="chatbot-input-bar">
              <input
                type="text"
                placeholder="Ask about admissions, fees, streams..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button type="submit" aria-label="Send message">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
