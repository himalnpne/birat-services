// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Add these imports
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaArrowRight,
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Add this

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(darkMode ? 'dark-mode' : 'light-mode');
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* Logo - changed from <a> to <Link> */}
          <Link
            to="/"
            className="nav-logo"
            aria-label="Birat Services Home"
          >
            <span className="logo-mark">BS</span>
            <span className="logo-content">
              <span className="logo-main">Birat</span>
              <span className="logo-sub">Services</span>
            </span>
          </Link>

          {/* Desktop Navigation - changed from <a> to <Link> */}
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <span className="theme-icon">
                {darkMode ? <FaSun /> : <FaMoon />}
              </span>
            </button>

            {/* Contact CTA - changed from <a> to <Link> */}
            <Link to="/contact" className="nav-cta">
              <span>Contact Us</span>
              <FaArrowRight />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`menu-button ${isOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`nav-overlay ${isOpen ? 'show' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation */}
      <aside className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-logo" onClick={closeMenu}>
            <span className="logo-mark">BS</span>
            <span className="logo-content">
              <span className="logo-main">Birat</span>
              <span className="logo-sub">Services</span>
            </span>
          </Link>

          <button
            className="mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <span className="mobile-link-number">
                0{index + 1}
              </span>
              <span>{link.name}</span>
              <FaArrowRight className="mobile-link-arrow" />
            </Link>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <Link to="/contact" className="mobile-cta" onClick={closeMenu}>
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;