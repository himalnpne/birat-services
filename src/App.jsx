// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ'; // Import FAQ
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import './App.css';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home page with FAQ above testimonials
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <FAQ /> {/* FAQ now above testimonials */}
    <Testimonials />
  </>
);

// Individual pages
const AboutPage = () => <div style={{ paddingTop: '80px' }}><About /></div>;
const ServicesPage = () => <div style={{ paddingTop: '80px' }}><Services /></div>;
const FAQPage = () => <div style={{ paddingTop: '80px' }}><FAQ isPage={true} /></div>;
const ContactPage = () => <div style={{ paddingTop: '80px' }}><Contact /></div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </Router>
  );
}

export default App;