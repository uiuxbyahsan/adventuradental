import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './Header.css';

export default function Header({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Micro-Bar for Location & Contact */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} className="top-icon" />
              <span>20475 Biscayne Blvd G-9, Aventura, FL</span>
            </span>
            <button 
              type="button" 
              className="top-bar-item desktop-only top-reviews-btn"
              onClick={() => handleNavClick('reviews')}
            >
              <ShieldCheck size={13} className="top-icon" />
              <span>4.9★ Rated · 795+ Verified Reviews</span>
            </button>
          </div>
          <div className="top-bar-right">
            <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="top-phone-link">
              <Phone size={13} className="top-icon" />
              <span>Call: {PRACTICE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Single Official Logo */}
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="Aventura Dental Group Home">
            <img 
              src="/assets/logo.webp" 
              alt="Aventura Dental Group" 
              className="logo-img" 
              width="155" 
              height="58"
            />
          </a>

          {/* Desktop Navigation Links — Streamlined UX */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <button type="button" className="nav-link" onClick={() => handleNavClick('services')}>
                  Services
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" onClick={() => handleNavClick('before-after-gallery')}>
                  Before & After
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" onClick={() => handleNavClick('team')}>
                  Doctors
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" onClick={() => handleNavClick('reviews')}>
                  Reviews
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" onClick={() => handleNavClick('office')}>
                  Find Us
                </button>
              </li>
            </ul>
          </nav>

          {/* Primary Action Button */}
          <div className="header-actions">
            <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="phone-cta desktop-only" aria-label="Call practice">
              <Phone size={15} />
              <span>{PRACTICE_INFO.phone}</span>
            </a>
            
            <button 
              type="button"
              className="btn btn-primary btn-sm header-book-btn"
              onClick={onOpenBooking}
              id="header-booking-cta"
            >
              <Calendar size={15} />
              <span className="btn-text-full">BOOK AN APPOINTMENT</span>
              <span className="btn-text-short">BOOK VISIT</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              type="button" 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
          <div className="mobile-drawer-content">
            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('services')}>
                <span>Services</span>
                <ArrowRight size={16} />
              </button>
              <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('before-after-gallery')}>
                <span>Before & After Gallery</span>
                <ArrowRight size={16} />
              </button>
              <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('team')}>
                <span>Meet Our Doctors</span>
                <ArrowRight size={16} />
              </button>
              <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('reviews')}>
                <span>Patient Reviews</span>
                <ArrowRight size={16} />
              </button>
              <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('office')}>
                <span>Find Us</span>
                <ArrowRight size={16} />
              </button>
            </nav>

            <div className="mobile-drawer-cta">
              <button 
                type="button" 
                className="btn btn-primary btn-lg" 
                style={{ width: '100%' }}
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </button>
              <a 
                href={`tel:${PRACTICE_INFO.phoneRaw}`} 
                className="btn btn-secondary btn-lg" 
                style={{ width: '100%', marginTop: '12px' }}
              >
                <Phone size={18} />
                <span>Call {PRACTICE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      <div 
        className={`mobile-backdrop-overlay ${mobileMenuOpen ? 'is-visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
