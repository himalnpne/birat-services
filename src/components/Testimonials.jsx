// Testimonials.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  FaStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [expandedQuotes, setExpandedQuotes] = useState({});
  const autoScrollRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'राम प्रसाद अधिकारी',
      nameEn: 'Ram Prasad Adhikari',
      role: 'Import Manager',
      company: 'Himalayan Trading House',
      quote: 'Birat ji has been an absolute lifesaver for our import operations. His deep understanding of customs regulations and HS code classification has saved us countless hours and prevented costly delays. He is professional, responsive, and genuinely cares about his clients.',
      stars: 5,
      initials: 'RA'
    },
    {
      id: 2,
      name: 'सुनिता शर्मा',
      nameEn: 'Sunita Sharma',
      role: 'Logistics Coordinator',
      company: 'Everest Export Solutions',
      quote: 'Working with Birat has transformed our customs clearance process. His attention to detail and proactive communication ensure that our shipments clear smoothly every time. I highly recommend his services to any business involved in international trade.',
      stars: 5,
      initials: 'SS'
    },
    {
      id: 3,
      name: 'कृष्ण पौडेल',
      nameEn: 'Krishna Poudel',
      role: 'Operations Director',
      company: 'Annapurna Logistics Pvt. Ltd.',
      quote: 'Birat is the most knowledgeable customs agent I have worked with in my 15 years in the industry. His expertise in customs valuation and duty assessment has helped us optimize our costs while maintaining full compliance.',
      stars: 5,
      initials: 'KP'
    },
    {
      id: 4,
      name: 'गीता राना',
      nameEn: 'Gita Rana',
      role: 'Supply Chain Manager',
      company: 'Nepal Tea Exporters',
      quote: 'We have been working with Birat for over three years now, and he has never disappointed us. His ability to navigate complex customs procedures and his warm, professional demeanor make him a trusted partner for our exports.',
      stars: 4.5,
      initials: 'GR'
    },
    {
      id: 5,
      name: 'विक्रम थापा',
      nameEn: 'Bikram Thapa',
      role: 'CEO',
      company: 'Terai Agro Industries',
      quote: 'Birat\'s expertise in import documentation and customs clearance has been invaluable to our growing business. He handles everything with precision and transparency, giving us peace of mind to focus on our core operations.',
      stars: 5,
      initials: 'BT'
    },
    {
      id: 6,
      name: 'सरस्वती कार्की',
      nameEn: 'Saraswati Karki',
      role: 'Trade Compliance Officer',
      company: 'Kathmandu Import & Export',
      quote: 'I have recommended Birat to many of my colleagues and business associates. His knowledge of local customs procedures and regulatory compliance is unmatched. He is a true professional and a pleasure to work with.',
      stars: 5,
      initials: 'SK'
    }
  ];

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const totalSlides = testimonials.length;

  // Check if quote is long (more than 120 characters)
  const isLongQuote = (quote) => quote.length > 120;

  // Toggle expand for a specific testimonial
  const toggleExpand = (id, e) => {
    e.stopPropagation(); // Prevent any click propagation
    setExpandedQuotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 600) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      goToNext();
    }, 4000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [currentIndex, isTransitioning]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalSlides) {
      setCurrentIndex(currentIndex - totalSlides);
    } else if (currentIndex < 0) {
      setCurrentIndex(currentIndex + totalSlides);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      goToNext();
    }, 4000);
  };

  const handleMouseDown = (e) => {
    // Only start drag if not clicking on interactive elements
    const target = e.target;
    if (target.closest('.testimonial-expand-btn') || 
        target.closest('.testimonials-nav') || 
        target.closest('.testimonials-dot')) {
      return;
    }
    setIsDragging(true);
    setDragStartX(e.clientX);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setDragOffset(0);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      goToNext();
    }, 4000);
  };

  const renderStars = (count) => {
    const stars = [];
    const fullStars = Math.floor(count);
    const hasHalfStar = count % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="testimonial-star" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="testimonial-star" />
      );
    }

    const emptyStars = 5 - Math.ceil(count);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} className="testimonial-star testimonial-star-empty" />
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-pattern" aria-hidden="true" />
      
      <div className="container testimonials-container">
        <header className="testimonials-header">
          <div className="testimonials-eyebrow">
            <span className="testimonials-eyebrow-line" />
            Testimonials
          </div>

          <h2 className="testimonials-title">
            What our clients
            <span> say about us</span>
          </h2>

          <p className="testimonials-lead">
            Real feedback from importers, exporters, and logistics professionals
            who trust Birat Neupane for their customs clearance needs.
          </p>
        </header>

        <div className="testimonials-carousel-wrapper">
          <div 
            className="testimonials-carousel-container"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => {
              if (isDragging) {
                setIsDragging(false);
                setDragOffset(0);
              }
            }}
          >
            <div 
              className="testimonials-carousel-track"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((testimonial, index) => {
                const isExpanded = expandedQuotes[testimonial.id] || false;
                const long = isLongQuote(testimonial.quote);
                const displayQuote = long && !isExpanded 
                  ? testimonial.quote.slice(0, 120) + '...' 
                  : testimonial.quote;

                return (
                  <div 
                    key={`${testimonial.id}-${index}`} 
                    className="testimonial-carousel-item"
                    style={{
                      flex: `0 0 ${100 / itemsPerView}%`,
                    }}
                  >
                    <div className="testimonial-card">
                      <div className="testimonial-stars">
                        {renderStars(testimonial.stars)}
                      </div>

                      <blockquote className="testimonial-quote">
                        "{displayQuote}"
                      </blockquote>

                      {long && (
                        <button 
                          className="testimonial-expand-btn"
                          onClick={(e) => toggleExpand(testimonial.id, e)}
                          aria-label={isExpanded ? 'Show less' : 'Read more'}
                        >
                          {isExpanded ? (
                            <>
                              <span>Show less</span>
                              <FaChevronUp />
                            </>
                          ) : (
                            <>
                              <span>Read more</span>
                              <FaChevronDown />
                            </>
                          )}
                        </button>
                      )}

                      <footer className="testimonial-footer">
                        <div className="testimonial-avatar">
                          {testimonial.initials}
                        </div>

                        <div className="testimonial-author-info">
                          <span className="testimonial-author-name">
                            {testimonial.name}
                          </span>
                          <span className="testimonial-author-role">
                            {testimonial.role}
                          </span>
                          <span className="testimonial-author-company">
                            {testimonial.company}
                          </span>
                        </div>
                      </footer>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button 
            className="testimonials-nav testimonials-nav-prev"
            onClick={goToPrev}
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>
          <button 
            className="testimonials-nav testimonials-nav-next"
            onClick={goToNext}
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>

          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials-dot ${index === (currentIndex % totalSlides) ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="testimonials-mark" aria-hidden="true">
        03
      </div>
    </section>
  );
};

export default Testimonials;