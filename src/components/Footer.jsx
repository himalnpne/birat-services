// Footer.jsx
import React from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaCode
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const phoneNumber = '9868029921';
  const email = 'info@biratneupane581.com.np';
  const whatsappUrl = `https://wa.me/977${phoneNumber}?text=Hello%20Birat%2C%20I%27m%20interested%20in%20your%20customs%20clearance%20services.`;

  return (
    <footer className="footer">
      <div className="footer-pattern" aria-hidden="true" />

      <div className="container footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">BS</span>
              <span className="footer-logo-content">
                <span className="footer-logo-main">Birat</span>
                <span className="footer-logo-sub">Services</span>
              </span>
            </a>

            <p className="footer-brand-text">
              Licensed Customs Agent providing professional customs clearance
              and import/export documentation services from Bhairahawa Customs Office.
            </p>

            <div className="footer-license">
              <FaShieldAlt />
              <span>Licensed Customs Agent · License No. 581</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>

            <a href={`tel:+977${phoneNumber}`} className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaPhone />
              </span>
              <span className="footer-contact-text">
                <span className="footer-contact-label">Phone</span>
                <span className="footer-contact-value">+977 {phoneNumber}</span>
              </span>
            </a>

            <a href={`mailto:${email}`} className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>
              <span className="footer-contact-text">
                <span className="footer-contact-label">Email</span>
                <span className="footer-contact-value">{email}</span>
              </span>
            </a>

            <div className="footer-contact-item footer-contact-static">
              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>
              <span className="footer-contact-text">
                <span className="footer-contact-label">Office</span>
                <span className="footer-contact-value">
                  Bhairahawa Customs Office, Belahiya, Rupandehi
                </span>
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-btn"
            >
              <span className="footer-whatsapp-icon">
                <FaWhatsapp />
              </span>
              <span className="footer-whatsapp-text">
                <small>Start a conversation</small>
                Message on WhatsApp
              </span>
              <span className="footer-whatsapp-arrow">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Birat Neupane. All rights reserved.
          </p>
          
          <p className="footer-developer">
            <FaCode className="footer-developer-icon" />
            Developed by <a href="https://neupanehimal.com.np" target="_blank" rel="noopener noreferrer">Himal Neupane</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;