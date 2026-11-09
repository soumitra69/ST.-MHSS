import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const alertMessages = [
  'Admissions 2026–27 open for Nursery to Class XII (Arts, Science & Commerce)',
  'Congratulations to our MBOSE SSLC State Top 20 Merit Holder felicitated by Hon’ble Chief Minister',
  'St. Michael’s ₹20,000 Academic Merit Scholarship & full tuition waivers open for rank holders',
  'Campus NH-6 bus transit registration open across Umsning, Nongpoh, Bhoirymbong & Sumer routes',
];

interface AlertBarProps {
  onRegisterClick: () => void;
}

export const AlertBar: React.FC<AlertBarProps> = ({ onRegisterClick }) => {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const changeSlide = (newIndex: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentAlert(newIndex);
      setAnimating(false);
    }, 180);
  };

  const handlePrev = () => {
    changeSlide((currentAlert - 1 + alertMessages.length) % alertMessages.length);
  };

  const handleNext = () => {
    changeSlide((currentAlert + 1) % alertMessages.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alertMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="alert-bar"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="alert-row">
          <div className="alert-content">
            <div className="alert-carousel">
              <button
                type="button"
                className="carousel-control prev"
                onClick={handlePrev}
                aria-label="Previous announcement"
              >
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
              </button>

              <div
                className={`alert-message ${animating ? 'fade-out' : 'fade-in'}`}
                aria-live="polite"
              >
                <span className="pulse-dot" aria-hidden="true"></span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  MBOSE • 01961
                </span>
                <p className="alert-text">{alertMessages[currentAlert]}</p>
                <button
                  type="button"
                  className="register-btn btn-shine"
                  onClick={onRegisterClick}
                >
                  APPLY 2026–27
                </button>
              </div>

              <button
                type="button"
                className="carousel-control next"
                onClick={handleNext}
                aria-label="Next announcement"
              >
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="utility-section">
            <div className="utility-links">
              <a
                href={`https://wa.me/${SCHOOL_INFO.phoneMobile.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="utility-link"
              >
                <i className="fab fa-whatsapp text-emerald-400" aria-hidden="true"></i>
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                className="utility-link"
              >
                <i className="fas fa-phone-alt text-amber-300" aria-hidden="true"></i>
                <span>{SCHOOL_INFO.phoneMobile}</span>
              </a>
              <a href="#media-drill" className="utility-link">
                <i className="fas fa-play-circle text-amber-300" aria-hidden="true"></i>
                <span>Campus Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
