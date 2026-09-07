import React from 'react';
import {
  FaArrowRight,
  FaCheck,
  FaFileInvoice,
  FaMapMarkerAlt,
  FaShieldAlt,
} from 'react-icons/fa';
import './Home.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>

      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <h1 className="hero-title">
            Customs clearance,
            <span> handled with clarity.</span>
          </h1>

          <p className="hero-description">
            Professional customs clearance and import/export assistance
            with expertise in HS code classification, customs valuation,
            duty assessment, and regulatory compliance.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-primary-btn">
              Get in Touch
              <FaArrowRight />
            </a>

            <a href="#services" className="hero-secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">
                <FaCheck />
              </span>
              <span>Licensed Professional</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <FaCheck />
              </span>
              <span>Import & Export Assistance</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <FaCheck />
              </span>
              <span>Local Customs Expertise</span>
            </div>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="hero-visual">

          <div className="hero-info-card">

            <div className="card-top">
              <div className="card-icon">
                <FaShieldAlt />
              </div>

              <div>
                <span className="card-label">
                  LICENSED PROFESSIONAL
                </span>

                <h2>Birat Neupane</h2>
              </div>
            </div>

            <div className="license-card">
              <span>Customs Agent License</span>

              <strong aria-label="Customs Agent License number 581">581</strong>

              <small>Licensed Customs Professional</small>
            </div>

            <div className="card-details">

              <div className="detail-item">
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>OFFICE</span>

                  <p>
                    Bhairahawa Customs Office
                    <br />
                    Belahiya, Rupandehi
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <FaFileInvoice />
                </div>

                <div>
                  <span>SPECIALIZATION</span>

                  <p>
                    Import & Export
                    <br />
                    Customs Clearance
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
};

export default Hero;