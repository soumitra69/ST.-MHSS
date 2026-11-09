import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ChatMessage {
  sender: 'desk' | 'user';
  text: string;
  actionHref?: string;
  actionLabel?: string;
}

const QUICK_TOPICS: {
  label: string;
  icon: string;
  reply: string;
  actionHref: string;
  actionLabel: string;
}[] = [
  {
    label: '2026–27 Admission Process',
    icon: 'fas fa-user-graduate',
    reply:
      'Admissions for Academic Session 2026–27 are open from Nursery to Class XII (Science, Arts & Commerce). You can submit an online enquiry or collect forms at the Umsning Secretariat (8:00 AM – 3:30 PM).',
    actionHref: '#apply-form',
    actionLabel: 'Open Admission Form',
  },
  {
    label: 'Fee Structure & Bus Calculator',
    icon: 'fas fa-calculator',
    reply:
      'Use our interactive Fee & Transit Calculator in the Student & Parent Hub to check tuition, laboratory, and NH-6 school bus fees by stage.',
    actionHref: '#hub',
    actionLabel: 'Open Fee Calculator',
  },
  {
    label: 'Class XI–XII Streams Offered',
    icon: 'fas fa-atom',
    reply:
      'St. Michael’s offers MBOSE Higher Secondary Science (PCM/PCB/Computer Sc.), Arts & Humanities, and Commerce with dedicated laboratories and fieldwork.',
    actionHref: '#streams',
    actionLabel: 'Explore XI–XII Streams',
  },
  {
    label: '₹20,000 SSLC Merit Scholarship',
    icon: 'fas fa-trophy',
    reply:
      'St. Michael’s SSLC Award Body grants ₹20,000 cash scholarships and 100% tuition fee waivers to MBOSE State Top 20 rank holders.',
    actionHref: '#toppers',
    actionLabel: 'View State Merit Honors',
  },
  {
    label: 'NH-6 School Bus Routes',
    icon: 'fas fa-bus-alt',
    reply:
      'Our 4-route bus fleet operates daily across Umsning Town Core, Nongpoh Road, Bhoirymbong, Umroi Airport Junction, Umden, and Sumer.',
    actionHref: '#hub',
    actionLabel: 'Check Bus Routes',
  },
];

export const ChatBot: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'desk',
      text: 'Welcome to St. Michael’s Higher Secondary School, Umsning! Choose a topic below or message our Admissions & Parent Help Desk:',
    },
  ]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTopicSelect = (topic: (typeof QUICK_TOPICS)[number]) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: topic.label },
      {
        sender: 'desk',
        text: topic.reply,
        actionHref: topic.actionHref,
        actionLabel: topic.actionLabel,
      },
    ]);
  };

  return (
    <div className="floating-right-dock" aria-label="Quick help desk and back to top controls">
      {/* Interactive Ask / Campus Help Desk Window (Bottom Right) */}
      {chatOpen && (
        <div className="ask-chat-window" role="dialog" aria-label="St. Michael's Help Desk">
          <div className="ask-chat-header">
            <div className="ask-chat-header-info">
              <img src={SCHOOL_INFO.logo} alt="St. Michael's Crest" />
              <div>
                <h4>St. Michael&apos;s Help Desk</h4>
                <span>
                  <i className="fas fa-circle text-emerald-400 text-[8px] mr-1" aria-hidden="true"></i>
                  Admissions &amp; Parent Support
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="ask-chat-close"
              aria-label="Close Help Desk"
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>

          <div className="ask-chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`ask-chat-bubble ${msg.sender}`}>
                <p>{msg.text}</p>
                {msg.actionHref && msg.actionLabel && (
                  <a
                    href={msg.actionHref}
                    onClick={() => setChatOpen(false)}
                    className="ask-chat-action-link"
                  >
                    <span>{msg.actionLabel}</span>
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </a>
                )}
              </div>
            ))}

            <div className="ask-chat-topics">
              <span className="ask-topics-title">
                <i className="fas fa-bolt text-amber-500 mr-1" aria-hidden="true"></i>
                Quick Campus Enquiries
              </span>
              {QUICK_TOPICS.map((topic) => (
                <button
                  key={topic.label}
                  type="button"
                  onClick={() => handleTopicSelect(topic)}
                  className="ask-topic-btn"
                >
                  <i className={`${topic.icon} text-[#1d4ed8]`} aria-hidden="true"></i>
                  <span>{topic.label}</span>
                  <i className="fas fa-chevron-right ml-auto text-[10px] text-slate-400" aria-hidden="true"></i>
                </button>
              ))}
            </div>
          </div>

          <div className="ask-chat-footer">
            <a
              href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
              className="ask-footer-btn call"
            >
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <span>Call Office</span>
            </a>
            <a
              href={`https://wa.me/${SCHOOL_INFO.phoneMobile.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="ask-footer-btn whatsapp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Right-Side Stack: Back to Top + Ask Chat Button */}
      <div className="floating-right-buttons">
        <button
          type="button"
          className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <i className="fas fa-arrow-up" aria-hidden="true"></i>
        </button>

        <button
          type="button"
          className={`ask-chat-trigger ${chatOpen ? 'active' : ''}`}
          onClick={() => setChatOpen((prev) => !prev)}
          aria-expanded={chatOpen}
          aria-label="Open Campus Help Desk Chat"
        >
          <i
            className={`fas ${chatOpen ? 'fa-times' : 'fa-comments'}`}
            aria-hidden="true"
          ></i>
          <span className="ask-chat-label">{chatOpen ? 'Close' : 'Ask Desk'}</span>
        </button>
      </div>
    </div>
  );
};
