import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaArrowRight
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const phoneNumber = '9868029921';
  const email = 'info@biratneupane581.com.np';

  const whatsappUrl =
    `https://wa.me/977${phoneNumber}?text=Hello%20Birat%2C%20I%27m%20interested%20in%20your%20customs%20clearance%20services.`;

  return (
    <section id="contact" className="contact">
      <div className="contact-pattern" aria-hidden="true" />

      <div className="container contact-container">
        <header className="contact-header">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            Contact
          </div>

          <h2 className="contact-title">
            Let's clear the
            <span> next shipment.</span>
          </h2>

          <p className="contact-lead">
            Have a customs clearance question or need help with import/export
            documentation? Get in touch directly and let's get things moving.
          </p>
        </header>

        <div className="contact-grid">
          {/* Information panel */}
          <div className="contact-info">
            <div className="contact-card-top">
              <div>
                <span className="contact-kicker">Get in touch</span>
                <h3>Office &amp; direct lines</h3>
              </div>

              <span className="contact-number">01</span>
            </div>

            <p className="contact-description">
              For customs clearance inquiries, consultation, or assistance
              with import/export documentation, reach out directly.
            </p>

            <div className="contact-details">
              <a
                className="contact-item"
                href={`mailto:${email}`}
                aria-label={`Email ${email}`}
              >
                <span className="contact-icon">
                  <FaEnvelope />
                </span>

                <span className="contact-item-content">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{email}</span>
                </span>

                <FaArrowRight className="contact-item-arrow" />
              </a>

              <a
                className="contact-item"
                href={`tel:+977${phoneNumber}`}
                aria-label={`Call +977 ${phoneNumber}`}
              >
                <span className="contact-icon">
                  <FaPhone />
                </span>

                <span className="contact-item-content">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+977 {phoneNumber}</span>
                </span>

                <FaArrowRight className="contact-item-arrow" />
              </a>

              <a
                className="contact-item"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on WhatsApp"
              >
                <span className="contact-icon contact-icon-green">
                  <FaWhatsapp />
                </span>

                <span className="contact-item-content">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">+977 {phoneNumber}</span>
                </span>

                <FaArrowRight className="contact-item-arrow" />
              </a>

              <div className="contact-item contact-item-static">
                <span className="contact-icon contact-icon-navy">
                  <FaMapMarkerAlt />
                </span>

                <span className="contact-item-content">
                  <span className="contact-label">Office</span>
                  <span className="contact-value">
                    Bhairahawa Customs Office, Belahiya, Rupandehi
                  </span>
                </span>
              </div>
            </div>

            <div className="contact-info-footer">
              <span>Connect</span>

              <div className="contact-social">
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="contact-social-whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* CTA panel */}
          <div className="contact-action">
            <div className="contact-action-glow" aria-hidden="true" />

            <div className="contact-action-content">
              <span className="contact-kicker">Quick response</span>

              <h3>
                Let's talk about
                <span> your shipment.</span>
              </h3>

              <p>
                WhatsApp is the fastest way to reach me. Send a message with
                your shipment details and I'll get back to you as soon as
                possible.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-contact-btn"
              >
                <span className="whatsapp-btn-icon">
                  <FaWhatsapp />
                </span>

                <span className="whatsapp-btn-text">
                  <small>Start a conversation</small>
                  Message on WhatsApp
                </span>

                <span className="whatsapp-btn-arrow">
                  <FaArrowRight />
                </span>
              </a>

              <div className="contact-call">
                <span>Prefer a call?</span>
                <a href={`tel:+977${phoneNumber}`}>
                  +977 {phoneNumber}
                </a>
              </div>
            </div>

            <div className="contact-action-mark" aria-hidden="true">
              02
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
