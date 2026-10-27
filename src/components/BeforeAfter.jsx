import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Sliders, Eye } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/practiceData';
import './BeforeAfter.css';

export default function BeforeAfter({ onOpenGallery, onOpenBooking }) {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeCase = BEFORE_AFTER_CASES[selectedCaseIdx];

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

  return (
    <section id="before-after" className="section before-after-section" aria-label="Before and After Smile Transformations">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">Proven Clinical Artistry</span>
          <h2 className="section-title">
            Real patients. <span className="serif-accent">Real transformations.</span>
          </h2>
          <p className="section-subtitle">
            Slide horizontally to reveal the before-and-after aesthetic results achieved for real patients right here at Aventura Dental Group.
          </p>

          {/* Case Selector Pills */}
          <div className="case-selector-tabs">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`case-tab-btn ${idx === selectedCaseIdx ? 'is-active' : ''}`}
                onClick={() => {
                  setSelectedCaseIdx(idx);
                  setSliderPos(50); // reset slider to center on switch
                }}
              >
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Component */}
        <div className="comparison-wrapper">
          <div className="comparison-grid">
            {/* Visual Slider Column */}
            <div className="comparison-slider-column">
              <div 
                ref={containerRef}
                className="comparison-card"
                onMouseDown={(e) => {
                  setIsDragging(true);
                  handleMove(e.clientX);
                }}
                onTouchStart={(e) => {
                  setIsDragging(true);
                  handleMove(e.touches[0].clientX);
                }}
              >
                {/* AFTER Image (Full background layer) */}
                <div className="image-layer after-layer">
                  <img 
                    src={activeCase.afterImg} 
                    alt={`After treatment: ${activeCase.title}`} 
                    className="comparison-img"
                    draggable="false"
                  />
                  <span className="case-badge after-badge">AFTER</span>
                </div>

                {/* BEFORE Image (Clipped overlay layer) */}
                <div 
                  className="image-layer before-layer"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img 
                    src={activeCase.beforeImg} 
                    alt={`Before treatment: ${activeCase.title}`} 
                    className="comparison-img"
                    draggable="false"
                  />
                  <span className="case-badge before-badge">BEFORE</span>
                </div>

                {/* Draggable Divider Handle */}
                <div 
                  className="slider-divider"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="slider-handle-pill" aria-label="Drag slider to compare before and after">
                    <span className="handle-chevron">◀</span>
                    <span className="handle-chevron">▶</span>
                  </div>
                </div>

                {/* Mobile Drag Hint */}
                <div className="drag-hint">
                  <Sliders size={13} />
                  <span>Drag left or right</span>
                </div>
              </div>

              {/* Accessible HTML Range Input for screen readers and keyboard users */}
              <div className="accessible-range-wrap">
                <label htmlFor="comparison-range" className="visually-hidden">
                  Compare Before and After results for {activeCase.title}
                </label>
                <input
                  type="range"
                  id="comparison-range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="accessible-range-input"
                />
              </div>
            </div>

            {/* Case Details & Narrative Column */}
            <div className="case-narrative-card">
              <div className="narrative-meta">
                <span className="narrative-category">{activeCase.category}</span>
                <span className="narrative-doctor">{activeCase.doctor}</span>
              </div>

              <h3 className="narrative-title">{activeCase.title}</h3>
              <p className="narrative-desc">{activeCase.description}</p>

              <div className="narrative-specs">
                <div className="spec-box">
                  <span className="spec-label">Treatment Time</span>
                  <span className="spec-value">{activeCase.turnaround}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-label">Longevity</span>
                  <span className="spec-value">15+ Years</span>
                </div>
                <div className="spec-box">
                  <span className="spec-label">Satisfaction</span>
                  <span className="spec-value">100% Verified</span>
                </div>
              </div>

              <div className="narrative-results">
                <h4 className="results-heading">Key Clinical Outcomes:</h4>
                <ul className="results-list">
                  {activeCase.results.map((res, i) => (
                    <li key={i} className="result-item">
                      <CheckCircle2 size={16} className="result-icon" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="narrative-actions">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={onOpenBooking}
                >
                  <span>Book Consultation for Similar Result</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Eye size={16} />
                  <span>View Smile Gallery</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
