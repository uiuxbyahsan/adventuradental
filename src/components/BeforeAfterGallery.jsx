import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, ArrowRight, Eye, CheckCircle2, X, ChevronLeft, ChevronRight, Calendar, Layers, SplitSquareVertical } from 'lucide-react';
import { BEFORE_AFTER_GALLERY_CASES } from '../data/beforeAfterCases';
import './BeforeAfterGallery.css';

// Mini card comparison slider component for cards
function CardComparisonSlider({ beforeImg, afterImg, title, isSideBySide }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  if (isSideBySide) {
    return (
      <div className="card-side-by-side">
        <div className="side-panel">
          <img src={beforeImg} alt={`Before: ${title}`} className="side-img" loading="lazy" />
          <span className="side-badge before-badge">BEFORE</span>
        </div>
        <div className="side-panel">
          <img src={afterImg} alt={`After: ${title}`} className="side-img" loading="lazy" />
          <span className="side-badge after-badge">AFTER</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="card-slider-wrapper"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* After image base */}
      <div className="card-layer after-layer">
        <img src={afterImg} alt={`After: ${title}`} className="card-comp-img" draggable="false" loading="lazy" />
        <span className="card-badge after-badge">AFTER</span>
      </div>

      {/* Before image overlay clipped */}
      <div className="card-layer before-layer" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={beforeImg} alt={`Before: ${title}`} className="card-comp-img" draggable="false" loading="lazy" />
        <span className="card-badge before-badge">BEFORE</span>
      </div>

      {/* Draggable Divider Line & Pill */}
      <div className="card-divider-line" style={{ left: `${sliderPos}%` }}>
        <div className="card-divider-handle" aria-label="Slide to compare before and after">
          <span>◀▶</span>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("slider"); // 'slider' or 'side-by-side'
  const [activeModalCase, setActiveModalCase] = useState(null);
  const [modalSliderPos, setModalSliderPos] = useState(50);
  const [modalDragging, setModalDragging] = useState(false);
  const modalContainerRef = useRef(null);

  const categories = [
    "All",
    "Porcelain Veneers",
    "Full Mouth Reconstruction",
    "Restorative Dentistry",
    "Bonding & Emergency"
  ];

  const filteredCases = selectedCategory === "All"
    ? BEFORE_AFTER_GALLERY_CASES
    : BEFORE_AFTER_GALLERY_CASES.filter(c => c.category === selectedCategory);

  // Modal slider handling
  const handleModalMove = useCallback((clientX) => {
    if (!modalContainerRef.current) return;
    const rect = modalContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setModalSliderPos(percent);
  }, []);

  useEffect(() => {
    if (!modalDragging) return;
    const onMove = (e) => handleModalMove(e.clientX || (e.touches && e.touches[0].clientX));
    const onUp = () => setModalDragging(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [modalDragging, handleModalMove]);

  // Modal keyboard handling
  useEffect(() => {
    if (!activeModalCase) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalCase(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalCase]);

  return (
    <section id="before-after-gallery" className="section ba-gallery-section" aria-label="Before and After Gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered" data-reveal="fade-up">
          <span className="eyebrow">Transformation Showcase</span>
          <h2 className="section-title">
            Before & After <span className="serif-accent">Smile Gallery.</span>
          </h2>
          <p className="section-subtitle">
            Authentic clinical transformations delivered at Aventura Dental Group. Drag the sliders or inspect side-by-side to witness real results.
          </p>

          {/* Controls Bar: Category Filters & View Toggle */}
          <div className="ba-controls-bar">
            {/* Category Filter Pills */}
            <div className="ba-filter-pills" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`ba-pill-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="ba-view-switcher">
              <button
                type="button"
                className={`view-switch-btn ${viewMode === 'slider' ? 'is-active' : ''}`}
                onClick={() => setViewMode('slider')}
                title="Interactive Slider Mode"
              >
                <SlidersHorizontal size={15} />
                <span>Slider</span>
              </button>
              <button
                type="button"
                className={`view-switch-btn ${viewMode === 'side-by-side' ? 'is-active' : ''}`}
                onClick={() => setViewMode('side-by-side')}
                title="Side-by-Side Mode"
              >
                <SplitSquareVertical size={15} />
                <span>Side-by-Side</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Cards Grid */}
        <div className="ba-cards-grid">
          {filteredCases.map((caseItem, idx) => (
            <article 
              key={caseItem.id} 
              className="ba-card"
              data-reveal="fade-up"
              data-delay={((idx % 3) + 1).toString()}
            >
              {/* Media Container with Slider or Side-by-Side */}
              <div className="ba-card-media">
                <CardComparisonSlider
                  beforeImg={caseItem.beforeImg}
                  afterImg={caseItem.afterImg}
                  title={caseItem.title}
                  isSideBySide={viewMode === 'side-by-side'}
                />

                <div className="ba-card-top-badges">
                  <span className="ba-category-tag">{caseItem.category}</span>
                  <span className="ba-turnaround-tag">{caseItem.turnaround}</span>
                </div>
              </div>

              {/* Minimal Card Details */}
              <div className="ba-card-body">
                <h3 className="ba-card-title">{caseItem.title}</h3>
                <p className="ba-card-doctor">{caseItem.doctor}</p>

                <div className="ba-tags-row">
                  {caseItem.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="ba-tag-item">{tag}</span>
                  ))}
                </div>

                <div className="ba-card-footer">
                  <button
                    type="button"
                    className="ba-inspect-btn"
                    onClick={() => {
                      setActiveModalCase(caseItem);
                      setModalSliderPos(50);
                    }}
                  >
                    <Eye size={15} />
                    <span>Compare Details</span>
                  </button>

                  <button
                    type="button"
                    className="ba-book-link"
                    onClick={onOpenBooking}
                  >
                    <span>Consultation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fullscreen Detailed Comparison Lightbox Modal */}
      {activeModalCase && (
        <div className="ba-modal-overlay" onClick={() => setActiveModalCase(null)}>
          <div
            className="ba-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ba-modal-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveModalCase(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="ba-modal-grid">
              {/* Modal Slider Column */}
              <div 
                ref={modalContainerRef}
                className="ba-modal-slider-column"
                onMouseDown={(e) => { setModalDragging(true); handleModalMove(e.clientX); }}
                onTouchStart={(e) => { setModalDragging(true); handleModalMove(e.touches[0].clientX); }}
              >
                <div className="modal-comp-layer after-layer">
                  <img src={activeModalCase.afterImg} alt={`After: ${activeModalCase.title}`} className="modal-comp-img" draggable="false" />
                  <span className="modal-badge after-badge">AFTER</span>
                </div>

                <div className="modal-comp-layer before-layer" style={{ clipPath: `inset(0 ${100 - modalSliderPos}% 0 0)` }}>
                  <img src={activeModalCase.beforeImg} alt={`Before: ${activeModalCase.title}`} className="modal-comp-img" draggable="false" />
                  <span className="modal-badge before-badge">BEFORE</span>
                </div>

                <div className="modal-slider-handle" style={{ left: `${modalSliderPos}%` }}>
                  <div className="handle-pill">
                    <span>◀▶</span>
                  </div>
                </div>

                <div className="modal-drag-hint">
                  <SlidersHorizontal size={13} />
                  <span>Drag left or right to compare</span>
                </div>
              </div>

              {/* Modal Content Column */}
              <div className="ba-modal-content">
                <span className="eyebrow">{activeModalCase.category}</span>
                <h3 id="ba-modal-title" className="ba-modal-title">{activeModalCase.title}</h3>
                <p className="ba-modal-doctor">{activeModalCase.doctor}</p>

                <p className="ba-modal-desc">
                  {activeModalCase.description}
                </p>

                <div className="ba-modal-meta-box">
                  <div className="modal-meta-item">
                    <span className="meta-label">Treatment Time</span>
                    <span className="meta-val">{activeModalCase.turnaround}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="meta-label">Longevity</span>
                    <span className="meta-val">15+ Years</span>
                  </div>
                </div>

                <div className="ba-modal-results">
                  <h4 className="results-label">Clinical Outcome:</h4>
                  <div className="results-text">
                    <CheckCircle2 size={16} className="check-teal" />
                    <span>{activeModalCase.results}</span>
                  </div>
                </div>

                <div className="modal-actions" style={{ marginTop: '24px' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ flex: 1 }}
                    onClick={() => {
                      setActiveModalCase(null);
                      onOpenBooking();
                    }}
                  >
                    <Calendar size={18} />
                    <span>Book Consultation for Similar Result</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setActiveModalCase(null)}
                  >
                    Close
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
