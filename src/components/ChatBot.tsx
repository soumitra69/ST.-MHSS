import React, { useState, useEffect } from 'react';

const quickQuestions = [
  {
    q: 'How do I apply for 2026 Admissions?',
    a: 'You can fill out the "Apply Today" registration form at the top of this page or click "APPLY NOW" in the header.',
  },
  {
    q: 'What streams are available in Class XI?',
    a: 'St. Michael offers Science, Arts/Humanities, and Commerce streams under MBOSE with full lab facilities and scholarships.',
  },
  {
    q: 'Are scholarships available for rank holders?',
    a: 'Yes! St. Michael SSLC Award Body grants ₹20,000 cash scholarships and full tuition waivers to state board distinction holders.',
  },
  {
    q: 'Does the school provide bus transit?',
    a: 'Yes, our 4-route school bus fleet covers Umsning, Nongpoh, Bhoirymbong, Umroi, and Sumer along the NH-6 corridor.',
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
      text: "Welcome to St. Michael's Umsning! How may our admissions & student help desk assist you today?",
    },
  ]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        text: 'Thank you for reaching out! Our administrative team at St. Michael\'s Umsning is available Mon-Fri (8:30 AM – 3:30 PM) at +91 94361 02845 or stmichaelumsning@gmail.com.',
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
          <div className="chatbot-tooltip animate-bounce">
            <span>Ask St. Michael Desk</span>
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
          <div className="chatbot-modal" data-aos="zoom-in-up" data-aos-duration="300">
            <div className="chatbot-header">
              <div className="chatbot-title">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>St. Michael's Help Desk</h4>
                  <span>Online • Serving 2,000 Students</span>
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
            </div>

            <div className="chatbot-quick-questions">
              <p className="quick-label">Frequently Asked:</p>
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
                placeholder="Type your question..."
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
