import React, { useState, useEffect } from 'react';
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
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
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

          {/* Logo */}
          <a
            href="#home"
            className="nav-logo"
            onClick={closeMenu}
            aria-label="Birat Services Home"
          >
            <span className="logo-mark">BS</span>

            <span className="logo-content">
              <span className="logo-main">Birat</span>
              <span className="logo-sub">Services</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="nav-actions">

            {/* Theme Toggle - Always Outside Mobile Menu */}
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

            {/* Desktop CTA */}
            <a href="#contact" className="nav-cta">
              <span>Contact Us</span>
              <FaArrowRight />
            </a>

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
          <a
            href="#home"
            className="mobile-logo"
            onClick={closeMenu}
          >
            <span className="logo-mark">BS</span>

            <span className="logo-content">
              <span className="logo-main">Birat</span>
              <span className="logo-sub">Services</span>
            </span>
          </a>

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
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <span className="mobile-link-number">
                0{index + 1}
              </span>

              <span>{link.name}</span>

              <FaArrowRight className="mobile-link-arrow" />
            </a>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <a
            href="#contact"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Contact Us
            <FaArrowRight />
          </a>
        </div>

      </aside>
    </>
  );
};

export default Navbar;