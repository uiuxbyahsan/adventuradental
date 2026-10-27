import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './Hero.css';

const HERO_SLIDES = [
  {
    id: 1,
    title: "Confident smiles.",
    titleAccent: "Exceptional dentistry.",
    subtitle: "Personalized cosmetic & restorative dental care in Aventura.",
    badge: "Aesthetic & Restorative Excellence",
    image: "/assets/cases/case-veneers-1.webp",
    imageCaption: "Actual Patient Smile Transformation · Dr. Jessica Cismas",
    tag: "Master Aesthetic Dentistry"
  },
  {
    id: 2,
    title: "Care crafted for you.",
    titleAccent: "Without compromise.",
    subtitle: "Gentle, unrushed care from Montreal & Tufts trained doctors.",
    badge: "50,000+ Treated Patients",
    image: "/assets/hero/combo1.jpg",
    imageCaption: "Aventura Dental Group Practice & Patient Family",
    tag: "South Florida's Trusted Practice"
  },
  {
    id: 3,
    title: "Artistic precision.",
    titleAccent: "Lasting harmony.",
    subtitle: "Artistic veneers & implants designed for natural radiance.",
    badge: "Hospital Residency Trained",
    image: "/assets/cases/case-rehab.webp",
    imageCaption: "Full Mouth Cosmetic Rehabilitation Case Study",
    tag: "Award-Winning Results"
  }
];

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const active = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="hero-section" 
      aria-label="Hero Introduction"
      onMouseMove={handleMouseMove}
    >
      {/* Background Soft Ambient Light with Parallax Shift */}
      <div 
        className="hero-ambient-glow" 
        aria-hidden="true"
        style={{
          transform: `translate(${mouseOffset.x * 1.5}px, ${mouseOffset.y * 1.5}px)`
        }}
      ></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Editorial Typography & Conversion */}
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <span className="hero-badge">
                <Sparkles size={14} className="badge-sparkle" />
                <span>{active.badge}</span>
              </span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-line">{active.title}</span>
              <span className="hero-line hero-line-accent serif-accent">{active.titleAccent}</span>
            </h1>

            <p className="hero-subtitle">
              {active.subtitle}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn btn-primary btn-lg hero-primary-btn"
                onClick={onOpenBooking}
                id="hero-book-cta"
              >
                <span>Book an Appointment</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="#services" 
                className="btn btn-secondary btn-lg hero-secondary-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="hero-trust-box">
              <div className="trust-stars-row">
                <div className="stars-cluster">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" />
                  ))}
                </div>
                <span className="trust-rating">4.9 / 5.0</span>
                <span className="trust-dot">·</span>
                <span className="trust-count">Over 795+ Patient Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Slider */}
          <div 
            className="hero-slider-wrap"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="hero-slider-card">
              {HERO_SLIDES.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`hero-slide-item ${index === currentSlide ? 'is-active' : ''}`}
                  aria-hidden={index !== currentSlide}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.imageCaption}
                    className="hero-slide-img"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="hero-slide-overlay">
                    <span className="slide-tag">{slide.tag}</span>
                    <p className="slide-caption">{slide.imageCaption}</p>
                  </div>
                </div>
              ))}

              {/* Slider Dots Animation */}
              <div className="slider-controls">
                <div className="slider-indicators">
                  {HERO_SLIDES.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      className={`indicator-dot ${index === currentSlide ? 'is-active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <span className="indicator-progress"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Reassurance Floating Card with subtle counter-parallax */}
            <div 
              className="floating-stat-card"
              style={{
                transform: `translate(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px)`
              }}
            >
              <div className="stat-icon-wrap">
                <ShieldCheck size={20} />
              </div>
              <div className="stat-text-wrap">
                <strong>South Florida Trusted</strong>
                <span>Over 35+ Years of Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
