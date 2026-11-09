import React, { useState } from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

const excellenceQuotes = [
  "During the State SSLC Toppers Felicitation, Hon'ble Chief Minister Conrad K. Sangma and Education Minister Lahkmen Rymbui honored St. Michael's student for securing rank in the Meghalaya State Top 20 Order of Merit.",
  'Empowering over 2,000 young boys and girls in Ri Bhoi with disciplined minds, moral conviction, and value-based education under the Catholic Diocese of Shillong since 1961.',
  "St. Michael's Secondary School Leaving Certificate Award Body provides ₹20,000 scholarship endowments and full tuition waivers to encourage academic brilliance and holistic growth.",
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
            <div className="toghether-left" data-aos="fade-right" data-aos-delay="100">
              <span className="section-eyebrow">
                <i className="fas fa-landmark mr-1.5" aria-hidden="true"></i>
                OUR LEGACY SINCE 1961
              </span>
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
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  className="quote-arrow-btn"
                  onClick={handleNextQuote}
                  aria-label="Next highlight"
                >
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
                <span className="ml-2 text-xs font-mono font-semibold text-slate-500">
                  0{quoteIndex + 1} / 0{excellenceQuotes.length}
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="toghather-right" data-aos="fade-left" data-aos-delay="150">
              <div className="quote-box">
                <i className="fas fa-quote-left quote-icon" aria-hidden="true"></i>
                <p key={quoteIndex} className="quote-fade">
                  {excellenceQuotes[quoteIndex]}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Wide Banner Image */}
          <div className="excellence-banner-wrapper" data-aos="fade-up" data-aos-delay="200">
            <img
              src={resolveSchoolAsset('./Assets/Rectangle 25.png')}
              alt="St. Michael's Higher Secondary School Umsning cultural assembly on campus amphitheatre"
              loading="lazy"
              decoding="async"
              className="excellence-main-banner"
            />
          </div>
        </div>
      </section>

      <section className="achievedment">
        <div className="container">
          <div className="achievedment-img">
            <div className="achievement-card first-img" data-aos="fade-up" data-aos-duration="750">
              <div className="achievement-img-wrap">
                <img
                  src={resolveSchoolAsset('./Assets/Rectangle 27.png')}
                  alt="St. Michael's school leadership and dignitaries at the state felicitation ceremony"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p>
                <i className="fas fa-award text-amber-300 mr-1.5" aria-hidden="true"></i>
                MBOSE has recognized ST. MICHAEL&apos;S with distinction for consistent 100% board
                clearance and state-level academic honors.
              </p>
            </div>

            <div
              className="achievement-card second-img featured-achievement"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="achievement-img-wrap">
                <img
                  src={resolveSchoolAsset('./Assets/Rectangle 28.png')}
                  alt="Hon'ble Chief Minister Conrad K. Sangma presenting state merit award to St. Michael's topper"
                  loading="lazy"
                  decoding="async"
                />
                <div className="achievement-badge-overlay">
                  <span>
                    <i className="fas fa-trophy mr-1.5" aria-hidden="true"></i>
                    STATE MERIT HONOUR
                  </span>
                </div>
              </div>
            </div>

            <div
              className="achievement-card third-img"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="120"
            >
              <div className="achievement-img-wrap">
                <img
                  src={resolveSchoolAsset('./Assets/Rectangle 29.png')}
                  alt="St. Michael's ₹20,000 Excellence Cash Award presentation on campus"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p>
                <i className="fas fa-medal text-amber-300 mr-1.5" aria-hidden="true"></i>
                St. Michael&apos;s SSLC Award Body presenting the ₹20,000 cash scholarship cheque to
                our MBOSE State Top 20 rank holder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
