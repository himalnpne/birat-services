// About.jsx
import React from 'react';
import {
  FaShieldAlt,
  FaFileContract,
  FaHandshake,
  FaChartLine,
  FaArrowRight
} from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-pattern" aria-hidden="true" />

      <div className="container about-container">
        <header className="about-header">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            Introduction
          </div>

          <h2 className="about-title">
            A licensed partner for
            <span> smoother clearance</span>
          </h2>

          <p className="about-lead">
            Practical, compliant customs support from Bhairahawa — built around accuracy,
            speed, and clear communication.
          </p>
        </header>

        <div className="about-grid">
          {/* LEFT PANEL — text + stats (like contact-info) */}
          <div className="about-card-panel about-info">
            <div className="about-card-top">
              <div>
                <span className="about-kicker">Licensed agent</span>
                <h3>Experience &amp; track record</h3>
              </div>
              <span className="about-number-mark">01</span>
            </div>

            <p className="about-description">
              I am a licensed Customs Agent with {new Date().getFullYear() - 2022}+ years
              of experience in customs clearance and import/export documentation. Based at
              Bhairahawa Customs Office, Belahiya, Rupandehi.
            </p>

            <div className="about-stats-grid">
              <div className="stat-item">
                <span className="stat-number">{new Date().getFullYear() - 2022}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Clearances</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — feature cards (like contact-action) */}
          <div className="about-card-panel about-action">
            <div className="about-action-glow" aria-hidden="true" />

            <div className="about-action-content">
              <span className="about-action-kicker">Core strengths</span>

              <h3>
                Expertise that
                <span> moves goods</span>
              </h3>

              <p>
                HS code classification, customs valuation, duty assessment, and regulatory
                compliance — working closely with authorities, importers, and logistics
                providers.
              </p>

              <div className="about-features">
                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <FaShieldAlt />
                  </span>
                  <span className="about-feature-content">
                    <span className="about-feature-label">Licensed</span>
                    <span className="about-feature-value">
                      Licensed Customs Agent · Dept. of Customs
                    </span>
                  </span>
                  <FaArrowRight className="about-feature-arrow" />
                </div>

                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <FaFileContract />
                  </span>
                  <span className="about-feature-content">
                    <span className="about-feature-label">Documentation</span>
                    <span className="about-feature-value">
                      Expert in customs docs &amp; processing
                    </span>
                  </span>
                  <FaArrowRight className="about-feature-arrow" />
                </div>

                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <FaHandshake />
                  </span>
                  <span className="about-feature-content">
                    <span className="about-feature-label">Coordination</span>
                    <span className="about-feature-value">
                      Customs authorities &amp; trade partners
                    </span>
                  </span>
                  <FaArrowRight className="about-feature-arrow" />
                </div>

                <div className="about-feature-item">
                  <span className="about-feature-icon">
                    <FaChartLine />
                  </span>
                  <span className="about-feature-content">
                    <span className="about-feature-label">Compliance</span>
                    <span className="about-feature-value">
                      Regulations &amp; trade agreements
                    </span>
                  </span>
                  <FaArrowRight className="about-feature-arrow" />
                </div>
              </div>
            </div>

            <div className="about-action-mark" aria-hidden="true">
              02
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;