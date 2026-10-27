import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { REVIEWS, PRACTICE_INFO } from '../data/practiceData';
import './Reviews.css';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllModal, setShowAllModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const totalReviews = REVIEWS.length;

  // Auto-animate review cards every 4.5 seconds with pause on hover
  useEffect(() => {
    if (isPaused || showAllModal) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, showAllModal, totalReviews]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Touch and mouse swipe handling
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragOffset(currentX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextReview();
    } else if (dragOffset > 50) {
      prevReview();
    }
    setDragOffset(0);
    setIsPaused(false);
  };

  return (
    <section id="reviews" className="section reviews-section" aria-label="Google and Yelp Patient Reviews">
      <div className="container">
        {/* Section Header */}
        <div className="reviews-header-flex" data-reveal="fade-up">
          <div>
            <div className="reviews-platform-badges">
              <span className="platform-badge google-badge">
                <span className="platform-name">Google Reviews</span>
                <span className="platform-stars">★★★★★ 4.9</span>
              </span>
              <span className="platform-badge yelp-badge">
                <span className="platform-name">Yelp Verified</span>
                <span className="platform-stars">★★★★★ 5.0</span>
              </span>
            </div>

            <h2 className="section-title">
              Patient stories. <span className="serif-accent">Genuine trust.</span>
            </h2>

            <div className="reviews-rating-bar">
              <div className="stars-cluster">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="star-filled" />
                ))}
              </div>
              <span className="rating-score">4.9 / 5.0 Rating</span>
              <span className="rating-separator">·</span>
              <span className="rating-count">Over 795+ Verified Patient Reviews</span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="reviews-controls">
            <button
              type="button"
              className="carousel-control-btn"
              onClick={prevReview}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="carousel-counter">
              {currentIndex + 1} / {totalReviews}
            </span>
            <button
              type="button"
              className="carousel-control-btn"
              onClick={nextReview}
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Track with Auto-Slide & Hover Pause */}
        <div
          ref={carouselRef}
          className="reviews-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          data-reveal="fade-up"
        >
          <div
            className="reviews-track"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {REVIEWS.map((review) => (
              <div key={review.id} className="review-slide">
                <article className="review-card">
                  <div className="review-card-top">
                    <div className="stars-cluster">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="star-filled" />
                      ))}
                    </div>
                    <span className="review-badge-verified">
                      <CheckCircle2 size={13} />
                      <span>{review.source}</span>
                    </span>
                  </div>

                  <h3 className="review-highlight">"{review.highlight}"</h3>

                  <blockquote className="review-quote">
                    "{review.quote}"
                  </blockquote>

                  <div className="review-author">
                    <div className="author-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="author-meta">
                      <strong className="author-name">{review.name}</strong>
                      <span className="author-location">{review.location} · {review.date}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Dots Pagination */}
        <div className="reviews-dots-row">
          {REVIEWS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className={`review-dot-btn ${dotIdx === currentIndex ? 'is-active' : ''}`}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to review ${dotIdx + 1}`}
            >
              <span className="dot-inner"></span>
            </button>
          ))}
        </div>

        {/* Action Row: Read All Reviews & External Google/Yelp Links */}
        <div className="reviews-bottom-action">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowAllModal(true)}
          >
            <MessageSquare size={16} />
            <span>Read All Verified Reviews ({REVIEWS.length})</span>
          </button>
          
          <div className="reviews-links-group">
            <a
              href={PRACTICE_INFO.socials.google}
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-external-link"
            >
              <span>View Google Profile</span>
              <ExternalLink size={14} />
            </a>
            <span className="link-divider">·</span>
            <a
              href={PRACTICE_INFO.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-external-link"
            >
              <span>View Yelp Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* All Reviews Modal Dialog */}
      {showAllModal && (
        <div className="review-modal-overlay" onClick={() => setShowAllModal(false)}>
          <div
            className="review-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="all-reviews-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowAllModal(false)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <span className="eyebrow">Verified Patient Feedback</span>
            <h3 id="all-reviews-title" className="modal-title">
              Patient Experiences at Aventura Dental Group
            </h3>
            <p className="modal-description">
              Read verified testimonials from patients who experienced porcelain veneers, dental implants, restorative treatment, and general care in Aventura, FL.
            </p>

            <div className="all-reviews-grid">
              {REVIEWS.map((rev) => (
                <div key={rev.id} className="modal-review-item">
                  <div className="modal-review-header">
                    <div className="stars-cluster">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} className="star-filled" />
                      ))}
                    </div>
                    <span className="modal-review-source">{rev.source}</span>
                  </div>
                  <h4 className="modal-review-quote-title">"{rev.highlight}"</h4>
                  <p className="modal-review-text">"{rev.quote}"</p>
                  <div className="modal-review-author">
                    <strong>{rev.name}</strong>
                    <span>{rev.location} · {rev.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-actions" style={{ marginTop: '24px' }}>
              <a
                href={PRACTICE_INFO.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <span>Write a Google Review</span>
                <ExternalLink size={16} />
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAllModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
