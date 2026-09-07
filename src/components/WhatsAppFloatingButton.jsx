import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloatingButton.css';

const WhatsAppFloatingButton = () => {
  const phoneNumber = '9868029921';
  const whatsappUrl = `https://wa.me/977${phoneNumber}?text=Hello%20Birat%2C%20I%27m%20interested%20in%20your%20customs%20clearance%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloatingButton;