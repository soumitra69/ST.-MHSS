import React, { useState } from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

const excellenceQuotes = [
  'During the State SSLC Toppers Felicitation, Hon\'ble Chief Minister Conrad K. Sangma and Education Minister Lahkmen Rymbui honored St. Michael\'s student for securing rank in the Meghalaya State Top 20 Order of Merit.',
  'Empowering over 2,000 young boys and girls in Ri Bhoi with disciplined minds, moral conviction, and value-based education under the Catholic Diocese of Shillong since 1961.',
  'St. Michael\'s Secondary School Leaving Certificate Award Body provides ₹20,000 scholarship endowments and full tuition waivers to encourage academic brilliance and holistic growth.',
];

export const ExcellenceSection: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handlePrevQuote = () => {
    setQuoteIndex((prev) => (prev - 1 + excellenceQuotes.length) % excellenceQuotes.length);
  };

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % excellenceQuotes.length);
  };

  return (
    <div id="excellence">
      <section className="toghether">
        <div className="container">
          <div className="toghether-content">
            {/* Left Content */}
            <div className="toghether-left" data-aos="fade-right" data-aos-delay="150">
              <span className="section-eyebrow">OUR LEGACY SINCE 1961</span>
              <h2>
                Together we have
                <br />
                achieved excellence
              </h2>
              <div className="toghether-img">
                <button
                  type="button"
                  className="quote-arrow-btn"
                  onClick={handlePrevQuote}
                  aria-label="Previous highlight"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className="quote-arrow-btn"
                  onClick={handleNextQuote}
                  aria-label="Next highlight"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="toghather-right" data-aos="fade-left" data-aos-delay="250">
              <div className="quote-box">
                <i className="fas fa-quote-left quote-icon"></i>
                <p key={quoteIndex} className="quote-fade">
                  {excellenceQuotes[quoteIndex]}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Wide Banner Image */}
          <div className="excellence-banner-wrapper" data-aos="fade-up" data-aos-delay="350">
            <img
              src={resolveSchoolAsset('./Assets/Rectangle 25.png')}
              alt="St. Michael's Umsning Campus Excellence"
              className="excellence-main-banner"
            />
          </div>
        </div>
      </section>

      <section className="achievedment">
        <div className="container">
          <div className="achievedment-img">
            <div className="achievement-card first-img" data-aos="fade-up" data-aos-duration="900">
              <div className="achievement-img-wrap">
                <img src={resolveSchoolAsset('./Assets/Rectangle 27.png')} alt="St. Michael's school community at a state felicitation" />
              </div>
              <p>
                MBOSE has recognized ST. MICHAEL'S with distinction for consistent 100% board clearance and academic honors.
              </p>
            </div>

            <div
              className="achievement-card second-img featured-achievement"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="achievement-img-wrap">
                <img src={resolveSchoolAsset('./Assets/Rectangle 28.png')} alt="A student receiving an academic award" />
                <div className="achievement-badge-overlay">
                  <span>STATE MERIT HONOUR</span>
                </div>
              </div>
            </div>

            <div className="achievement-card third-img" data-aos="fade-up" data-aos-duration="900" data-aos-delay="150">
              <div className="achievement-img-wrap">
                <img src={resolveSchoolAsset('./Assets/Rectangle 29.png')} alt="Students celebrating their academic achievements" />
              </div>
              <p>
                Hon'ble Chief Minister Conrad K. Sangma felicitating our scholar for state board rank excellence in Shillong.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
