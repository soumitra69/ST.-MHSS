import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const alertMessages = [
  'Admissions 2026-27 now open for undergraduate and diploma pathways',
  'Scholarships and merit support available for deserving students',
  'Campus life, co-curricular excellence and leadership opportunities are in full swing',
  'Academic counselling and orientation sessions are open for new entrants',
];

interface AlertBarProps {
  onRegisterClick: () => void;
}

export const AlertBar: React.FC<AlertBarProps> = ({ onRegisterClick }) => {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeSlide = (newIndex: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentAlert(newIndex);
      setAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    changeSlide((currentAlert - 1 + alertMessages.length) % alertMessages.length);
  };

  const handleNext = () => {
    changeSlide((currentAlert + 1) % alertMessages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alertMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="alert-bar" data-aos="fade-down" data-aos-duration="800">
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
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className={`alert-message ${animating ? 'fade-out' : 'fade-in'}`}>
                <span className="pulse-dot" aria-hidden="true"></span>
                <p className="alert-text">{alertMessages[currentAlert]}</p>
                <button
                  type="button"
                  className="register-btn btn-shine"
                  onClick={onRegisterClick}
                >
                  REGISTER NOW
                </button>
              </div>

              <button
                type="button"
                className="carousel-control next"
                onClick={handleNext}
                aria-label="Next announcement"
              >
                <i className="fas fa-chevron-right"></i>
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
                <i className="fab fa-whatsapp"></i>
                <span>Whatsapp</span>
              </a>
              <a href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`} className="utility-link">
                <i className="fas fa-phone-alt"></i>
                <span>Call Us</span>
              </a>
              <a href="#campus-life" className="utility-link">
                <i className="fas fa-compass"></i>
                <span>360°</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
