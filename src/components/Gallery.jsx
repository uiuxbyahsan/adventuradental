import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const PORTFOLIO_CASES = [
  {
    id: "g1",
    title: "Full Mouth Aesthetic Rehabilitation",
    category: "Smile Makeovers",
    image: "/assets/cases/case-fullmouth.webp",
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g2",
    title: "Anterior Porcelain Veneer Makeover",
    category: "Veneers",
    image: "/assets/cases/case-veneers-1.webp",
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g3",
    title: "Complete Upper & Lower Cosmetic Veneers",
    category: "Veneers",
    image: "/assets/gallery/gallery-veneers-fullmouth.webp",
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g4",
    title: "In-Office Clinical Teeth Whitening & Polish",
    category: "Whitening",
    image: "/assets/cases/case-restoration-after.webp",
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g5",
    title: "Porcelain Crown & Implant Bridge Restoration",
    category: "Restorative",
    image: "/assets/gallery/gallery-rehab-1.webp",
    doctor: "Dr. Harvey S. Rosa, D.M.D."
  },
  {
    id: "g6",
    title: "Emergency Single-Day Aesthetic Repair",
    category: "General Dentistry",
    image: "/assets/gallery/gallery-emergency-2020-15.webp",
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g7",
    title: "Upper Arch Ceramic Veneers Master Case",
    category: "Veneers",
    image: "/assets/gallery/gallery-veneers-2020-11.webp",
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g8",
    title: "Full Arch Occlusal Reconstruction",
    category: "Smile Makeovers",
    image: "/assets/gallery/gallery-fullmouth-reconstruction.webp",
    doctor: "Dr. Harvey Rosa & Dr. Jessica Cismas"
  },
  {
    id: "g9",
    title: "Micro-Layered Anterior Porcelain Restoration",
    category: "Restorative",
    image: "/assets/cases/case-restoration.webp",
    doctor: "Dr. Harvey S. Rosa, D.M.D."
  },
  {
    id: "g10",
    title: "Comprehensive Hygienic Prophylaxis & Polish",
    category: "General Dentistry",
    image: "/assets/gallery/gallery-rehab-veneers.webp",
    doctor: "Dr. Jessica Cismas, D.M.D."
  }
];

export default function Gallery() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const sliderRef = useRef(null);
  const totalCases = PORTFOLIO_CASES.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalCases);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalCases) % totalCases);
  };

  // Auto-advance gallery cases every 4.5 seconds
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalCases);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, totalCases]);

  // Touch & drag handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  return (
    <section id="gallery" className="section gallery-section" aria-label="Visual Case Portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered" data-reveal="fade-up">
          <span className="eyebrow">Visual Case Portfolio</span>
          <h2 className="section-title">
            Curated smiles. <span className="serif-accent">Proven results.</span>
          </h2>
          <p className="section-subtitle">
            Authentic transformations completed by our clinical team at Aventura Dental Group.
          </p>
        </div>

        {/* Peek Carousel: Active slide prominent, Next slide standing beside */}
        <div
          ref={sliderRef}
          className="gallery-peek-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); if (isDragging) handleTouchEnd(); }}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          data-reveal="fade-up"
        >
          <div
            className="gallery-peek-track"
            style={{
              transform: `translateX(calc(-${currentSlideIndex} * (var(--peek-card-w) + var(--peek-gap)) + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {PORTFOLIO_CASES.map((item, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <div
                  key={item.id}
                  className={`gallery-peek-slide ${isActive ? 'is-active' : 'is-standing'}`}
                  onClick={() => {
                    if (!isActive) setCurrentSlideIndex(index);
                  }}
                  role="button"
                  tabIndex="0"
                  aria-label={`${item.title} - ${item.category}`}
                  aria-current={isActive ? "true" : "false"}
                >
                  <div className="gallery-slide-card">
                    <div className="gallery-card-img-wrap">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-card-photo"
                        loading={index < 2 ? "eager" : "lazy"}
                        draggable="false"
                      />
                      <div className="gallery-card-glass-caption">
                        <span className="gallery-pill-cat">{item.category}</span>
                        <h3 className="gallery-card-title">{item.title}</h3>
                        <span className="gallery-card-doc">{item.doctor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clickable Pagination Dots */}
        <div className="gallery-dots-row">
          {PORTFOLIO_CASES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`gallery-nav-dot ${idx === currentSlideIndex ? 'is-active' : ''}`}
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="nav-dot-fill"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
