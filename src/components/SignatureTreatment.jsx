import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, SlidersHorizontal, SplitSquareVertical } from 'lucide-react';
import './SignatureTreatment.css';

export default function SignatureTreatment({ onOpenBooking }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' or 'side'
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

  return (
    <section className="section signature-section" aria-label="Transform Your Smile">
      <div className="container">
        <div className="signature-card" data-reveal="fade-up">
          <div className="signature-grid">
            {/* Visual Media Column: Before & After with Side Comparison */}
            <div className="signature-media-wrap">
              {viewMode === 'side' ? (
                <div className="sig-side-by-side">
                  <div className="sig-side-panel">
                    <img 
                      src="/assets/cases/case-rehab-before.webp" 
                      alt="Before Porcelain Veneer Treatment" 
                      className="sig-comp-img" 
                      loading="lazy" 
                    />
                    <span className="sig-badge before-badge">BEFORE</span>
                  </div>
                  <div className="sig-side-panel">
                    <img 
                      src="/assets/cases/case-rehab-after.webp" 
                      alt="After Porcelain Veneer Treatment" 
                      className="sig-comp-img" 
                      loading="lazy" 
                    />
                    <span className="sig-badge after-badge">AFTER</span>
                  </div>
                </div>
              ) : (
                <div 
                  ref={containerRef}
                  className="sig-slider-box"
                  onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
                  onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
                >
                  {/* AFTER Image Layer */}
                  <div className="sig-layer sig-after-layer">
                    <img 
                      src="/assets/cases/case-rehab-after.webp" 
                      alt="After Smile Transformation" 
                      className="sig-comp-img"
                      draggable="false"
                      loading="lazy"
                    />
                    <span className="sig-badge after-badge">AFTER</span>
                  </div>

                  {/* BEFORE Image Layer (Clipped) */}
                  <div 
                    className="sig-layer sig-before-layer"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <img 
                      src="/assets/cases/case-rehab-before.webp" 
                      alt="Before Smile Transformation" 
                      className="sig-comp-img"
                      draggable="false"
                      loading="lazy"
                    />
                    <span className="sig-badge before-badge">BEFORE</span>
                  </div>

                  {/* Draggable Divider Handle */}
                  <div 
                    className="sig-divider-line"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="sig-handle-pill" aria-label="Slide to compare before and after">
                      <span>◀▶</span>
                    </div>
                  </div>

                  {/* Mobile Drag Hint */}
                  <div className="sig-drag-hint">
                    <SlidersHorizontal size={13} />
                    <span>Drag to compare</span>
                  </div>
                </div>
              )}

              {/* View Switcher Overlay on Media */}
              <div className="sig-view-toggle">
                <button
                  type="button"
                  className={`sig-mode-btn ${viewMode === 'slider' ? 'is-active' : ''}`}
                  onClick={() => setViewMode('slider')}
                >
                  <SlidersHorizontal size={13} />
                  <span>Interactive Slider</span>
                </button>
                <button
                  type="button"
                  className={`sig-mode-btn ${viewMode === 'side' ? 'is-active' : ''}`}
                  onClick={() => setViewMode('side')}
                >
                  <SplitSquareVertical size={13} />
                  <span>Side by Side</span>
                </button>
              </div>

              {/* Doctor Attribution Badge */}
              <div className="signature-badge">
                <Sparkles size={15} className="sparkle-gold" />
                <span>Actual Patient Porcelain Veneer Case · Dr. Jessica Cismas</span>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="signature-content">
              <span className="eyebrow eyebrow-light">Signature Cosmetic Dentistry</span>
              
              <h2 className="signature-title">
                Transform your <span className="serif-accent italic">smile.</span>
              </h2>

              <p className="signature-description">
                Thoughtfully designed cosmetic treatments for natural-looking, confident smiles. We harmonize tooth anatomy, lip architecture, and facial balance to create results that look undeniably yours.
              </p>

              {/* Highlights */}
              <div className="signature-highlights">
                <div className="highlight-row">
                  <CheckCircle2 size={18} className="highlight-icon" />
                  <span>Custom shade matching tailored to skin tone & lip line</span>
                </div>
                <div className="highlight-row">
                  <CheckCircle2 size={18} className="highlight-icon" />
                  <span>Minimally invasive preparation preserving natural enamel</span>
                </div>
                <div className="highlight-row">
                  <CheckCircle2 size={18} className="highlight-icon" />
                  <span>Crafted in partnership with world-class master ceramists</span>
                </div>
              </div>

              {/* Actions */}
              <div className="signature-actions">
                <button 
                  type="button" 
                  className="btn btn-accent btn-lg" 
                  onClick={onOpenBooking}
                >
                  <span>Explore Cosmetic Dentistry</span>
                  <ArrowRight size={18} />
                </button>
                <a 
                  href="#before-after-gallery" 
                  className="btn btn-ghost-light btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('before-after-gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>View All Before & After</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
