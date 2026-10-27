import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Eye, Calendar, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';
import './Gallery.css';

const PORTFOLIO_CASES = [
  {
    id: "g1",
    title: "Full Mouth Aesthetic Rehabilitation",
    category: "Smile Makeovers",
    image: "/assets/cases/case-fullmouth.webp",
    beforeImg: "/assets/cases/case-rehab-before.webp",
    afterImg: "/assets/cases/case-rehab-after.webp",
    description: "Complete upper and lower arch cosmetic rehabilitation restoring worn tooth length, bite harmony, and natural porcelain luster.",
    tags: ["Porcelain Veneers", "Full Mouth Rehab", "Bite Alignment"],
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g2",
    title: "Anterior Porcelain Veneer Makeover",
    category: "Veneers",
    image: "/assets/cases/case-veneers-1.webp",
    beforeImg: "/assets/cases/case-restoration-before.webp",
    afterImg: "/assets/cases/case-restoration-after.webp",
    description: "Custom ultra-thin feldspathic porcelain veneers correcting interdental discoloration, enamel chipping, and smile symmetry.",
    tags: ["Ceramic Veneers", "Smile Arc", "Master Ceramist"],
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g3",
    title: "In-Office Clinical Teeth Whitening & Polish",
    category: "Whitening",
    image: "/assets/cases/case-restoration-after.webp",
    beforeImg: "/assets/cases/case-restoration-before.webp",
    afterImg: "/assets/cases/case-restoration-after.webp",
    description: "High-concentration medical-grade in-office teeth whitening brightening enamel by 8 shades while neutralizing stubborn stains.",
    tags: ["Teeth Whitening", "Enamel Polish", "60-Min In-Office"],
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g4",
    title: "Porcelain Crown & Implant Bridge Restoration",
    category: "Restorative",
    image: "/assets/gallery/gallery-rehab-1.webp",
    beforeImg: "/assets/cases/case-veneers-2-before.webp",
    afterImg: "/assets/cases/case-veneers-2-after.webp",
    description: "Biocompatible precision-milled zirconia crowns and dental implant restoration reinforcing weakened teeth and filling gaps.",
    tags: ["Dental Implants", "Zirconia Crowns", "Functional Chewing"],
    doctor: "Dr. Harvey S. Rosa, D.M.D."
  },
  {
    id: "g5",
    title: "Emergency Single-Day Aesthetic Repair",
    category: "General Dentistry",
    image: "/assets/gallery/gallery-emergency-2020-15.webp",
    beforeImg: "/assets/gallery/gallery-bonding-0687.webp",
    afterImg: "/assets/gallery/gallery-emergency-2020-15.webp",
    description: "Same-day emergency conservative composite repair restoring fractured anterior incisor with imperceptible shade blend.",
    tags: ["Same-Day Emergency", "Composite Bonding", "Painless"],
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g6",
    title: "Upper Arch Ceramic Veneers Master Case",
    category: "Veneers",
    image: "/assets/gallery/gallery-veneers-2020-11.webp",
    beforeImg: "/assets/cases/case-rehab-before.webp",
    afterImg: "/assets/gallery/gallery-veneers-2020-11.webp",
    description: "Aesthetic enhancement for an executive patient seeking harmonious smile proportions and natural tooth vitality.",
    tags: ["Veneers", "Natural Aesthetics", "Aventura Clinic"],
    doctor: "Dr. Jessica Cismas, D.M.D."
  },
  {
    id: "g7",
    title: "Full Arch Occlusal Reconstruction",
    category: "Smile Makeovers",
    image: "/assets/gallery/gallery-fullmouth-reconstruction.webp",
    beforeImg: "/assets/cases/case-veneers-2-before.webp",
    afterImg: "/assets/cases/case-veneers-2-after.webp",
    description: "Rebuilding collapsed bite vertical dimension and smile radiance through synchronized cosmetic and restorative dentistry.",
    tags: ["Smile Makeover", "Full Arch", "Occlusal Balance"],
    doctor: "Dr. Harvey Rosa & Dr. Jessica Cismas"
  },
  {
    id: "g8",
    title: "Comprehensive Hygienic Prophylaxis & Polish",
    category: "General Dentistry",
    image: "/assets/gallery/gallery-rehab-veneers.webp",
    beforeImg: "/assets/gallery/gallery-bonding-0687.webp",
    afterImg: "/assets/gallery/gallery-rehab-veneers.webp",
    description: "Gentle ultrasonic cleaning, calculus removal, and enamel remineralization preserving lifelong periodontal strength.",
    tags: ["Preventative Prophylaxis", "Gum Health", "Oral Wellness"],
    doctor: "Dr. Jessica Cismas, D.M.D."
  }
];

export default function Gallery({ onOpenBooking }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [showComparisonView, setShowComparisonView] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef(null);
  const totalCases = PORTFOLIO_CASES.length;

  // Auto-advance gallery cases every 5 seconds
  useEffect(() => {
    if (isPaused || isDragging || activeLightboxIndex !== null) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalCases);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, activeLightboxIndex, totalCases]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalCases);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalCases) % totalCases);
  };

  // Touch Swipe Handlers for mobile & tablet
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
    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Lightbox navigation
  const activeItem = activeLightboxIndex !== null ? PORTFOLIO_CASES[activeLightboxIndex] : null;

  const handleLightboxNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev + 1) % totalCases);
    setShowComparisonView(false);
  }, [activeLightboxIndex, totalCases]);

  const handleLightboxPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev - 1 + totalCases) % totalCases);
    setShowComparisonView(false);
  }, [activeLightboxIndex, totalCases]);

  const handleLightboxClose = useCallback(() => {
    setActiveLightboxIndex(null);
    setShowComparisonView(false);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleLightboxClose();
      if (e.key === 'ArrowRight') handleLightboxNext();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleLightboxClose, handleLightboxNext, handleLightboxPrev]);

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
            Swipe through real patient cases completed by our clinical team at Aventura Dental Group.
          </p>
        </div>

        {/* Large Cinematic Portfolio Slider with Dot Animation */}
        <div
          ref={sliderRef}
          className="portfolio-slider-wrapper"
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
            className="portfolio-slider-track"
            style={{
              transform: `translateX(calc(-${currentSlideIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {PORTFOLIO_CASES.map((item, index) => (
              <div key={item.id} className="portfolio-slide-card-wrap">
                <article
                  className="portfolio-card"
                  onClick={() => setActiveLightboxIndex(index)}
                  tabIndex="0"
                  onKeyDown={(e) => { if (e.key === 'Enter') setActiveLightboxIndex(index); }}
                  role="button"
                  aria-label={`View details of ${item.title}`}
                >
                  <div className="portfolio-card-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="portfolio-card-img"
                      loading="lazy"
                    />
                    <div className="portfolio-card-overlay">
                      <div className="card-overlay-meta">
                        <span className="card-cat-badge">{item.category}</span>
                        <h3 className="card-title-text">{item.title}</h3>
                        <p className="card-doctor-text">{item.doctor}</p>
                      </div>

                      <div className="card-tap-hint">
                        <Eye size={15} />
                        <span>Tap to Inspect Case</span>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio-card-bottom">
                    <div className="card-tags-list">
                      {item.tags.slice(0, 2).map((t, i) => (
                        <span key={i} className="card-tag-pill">{t}</span>
                      ))}
                    </div>

                    <span className="card-view-btn">
                      <span>Case Details</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Clickable Pagination Dots for Mobile Slider */}
        <div className="portfolio-dots-container">
          {PORTFOLIO_CASES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`portfolio-dot ${idx === currentSlideIndex ? 'is-active' : ''}`}
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Go to case ${idx + 1}`}
            >
              <span className="dot-line"></span>
            </button>
          ))}
        </div>

        {/* Bottom Booking Action Link */}
        <div className="portfolio-bottom-action">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenBooking}
          >
            <Calendar size={16} />
            <span>Book Smile Makeover Consultation</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Detailed Lightbox Modal */}
      {activeItem && (
        <div className="lightbox-overlay" onClick={handleLightboxClose}>
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            {/* Top Close Button */}
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={handleLightboxClose}
              aria-label="Close lightbox"
            >
              <X size={22} />
            </button>

            {/* Navigation Buttons */}
            <button
              type="button"
              className="lightbox-nav-btn prev-btn"
              onClick={handleLightboxPrev}
              aria-label="Previous case"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              type="button"
              className="lightbox-nav-btn next-btn"
              onClick={handleLightboxNext}
              aria-label="Next case"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Body Grid */}
            <div className="lightbox-grid">
              {/* Media View Column */}
              <div className="lightbox-media-column">
                {showComparisonView && activeItem.beforeImg && activeItem.afterImg ? (
                  <div className="lightbox-comparison-view">
                    <div className="comp-panel">
                      <img src={activeItem.beforeImg} alt="Before Treatment" className="comp-img" />
                      <span className="comp-badge before">BEFORE</span>
                    </div>
                    <div className="comp-panel">
                      <img src={activeItem.afterImg} alt="After Treatment" className="comp-img" />
                      <span className="comp-badge after">AFTER</span>
                    </div>
                  </div>
                ) : (
                  <div className="lightbox-main-img-wrap">
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="lightbox-main-img"
                    />
                  </div>
                )}

                {/* Before/After Toggle if available */}
                {activeItem.beforeImg && activeItem.afterImg && (
                  <div className="comparison-toggle-bar">
                    <button
                      type="button"
                      className={`btn-toggle ${!showComparisonView ? 'is-active' : ''}`}
                      onClick={() => setShowComparisonView(false)}
                    >
                      Single View
                    </button>
                    <button
                      type="button"
                      className={`btn-toggle ${showComparisonView ? 'is-active' : ''}`}
                      onClick={() => setShowComparisonView(true)}
                    >
                      Side-by-Side (Before & After)
                    </button>
                  </div>
                )}
              </div>

              {/* Information Column */}
              <div className="lightbox-info-column">
                <span className="eyebrow">{activeItem.category}</span>
                <h3 id="lightbox-title" className="lightbox-heading">{activeItem.title}</h3>
                <p className="lightbox-doc-role">{activeItem.doctor}</p>

                <p className="lightbox-description">
                  {activeItem.description}
                </p>

                <div className="lightbox-tags-wrap">
                  <span className="tags-label">Clinical Highlights:</span>
                  <div className="tags-list">
                    {activeItem.tags.map((t, i) => (
                      <span key={i} className="lightbox-tag-pill">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lightbox-counter-bar">
                  <span>Case {activeLightboxIndex + 1} of {totalCases}</span>
                  <span className="keyboard-hint">Swipe or press ◀ ▶ to navigate</span>
                </div>

                <div className="lightbox-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%' }}
                    onClick={() => {
                      handleLightboxClose();
                      onOpenBooking();
                    }}
                  >
                    <Calendar size={18} />
                    <span>Book Consultation For This Result</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
