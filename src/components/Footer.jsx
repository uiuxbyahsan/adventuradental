import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, ArrowUp, ShieldCheck, X } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './Footer.css';

export default function Footer({ onOpenBooking }) {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col footer-brand-col">
            <div className="footer-logo-wrap">
              <img
                src="/assets/logo.webp"
                alt="Aventura Dental Group Logo"
                className="footer-logo-img"
                width="160"
                height="60"
              />
              <span className="footer-tagline">Confident smiles. Exceptional dentistry.</span>
            </div>
            <p className="footer-brand-desc">
              Providing personalized cosmetic, restorative, and general dental care to patients across Aventura, Sunny Isles, Hallandale, and Greater Miami since 1985.
            </p>
            <div className="footer-social-links">
              <a
                href={PRACTICE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={PRACTICE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href={PRACTICE_INFO.socials.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Yelp"
              >
                <span className="social-text-icon">Yelp</span>
              </a>
              <a
                href={PRACTICE_INFO.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Google Profile"
              >
                <span className="social-text-icon">Google</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('services')}>
                  Dental Services
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('before-after')}>
                  Before & After Gallery
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('team')}>
                  Our Doctors
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('reviews')}>
                  Patient Reviews (795+)
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('resources')}>
                  Patient Resources
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('office')}>
                  Find Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Popular Treatments</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('services')}>
                  Porcelain Veneers
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('services')}>
                  Dental Implants
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('services')}>
                  In-Office Teeth Whitening
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('services')}>
                  Full Smile Makeovers
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('services')}>
                  Invisalign® Clear Aligners
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('services')}>
                  Comprehensive Cleaning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">Visit Practice</h4>
            <div className="footer-contact-block">
              <div className="footer-contact-row">
                <MapPin size={16} className="contact-icon" />
                <address className="contact-address">
                  20475 Biscayne Blvd, Suite G-9<br />
                  Aventura, FL 33180
                </address>
              </div>

              <div className="footer-contact-row">
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="contact-phone-link">
                  {PRACTICE_INFO.phone}
                </a>
              </div>

              <div className="footer-hours-box">
                <span className="hours-head">Office Hours:</span>
                <span className="hours-val">Mon – Fri: 8:30 AM – 5:30 PM</span>
                <span className="hours-val">Sat – Sun: Closed (Emergencies on call)</span>
              </div>

              <button
                type="button"
                className="btn btn-accent btn-sm footer-book-btn"
                onClick={onOpenBooking}
              >
                <span>Request Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <p className="copyright-text">
              © {new Date().getFullYear()} Aventura Dental Group. All rights reserved. Dr. Jessica Cismas, D.M.D. & Dr. Harvey S. Rosa, D.M.D.
            </p>
          </div>

          <div className="bottom-center">
            <button
              type="button"
              className="legal-link"
              onClick={() => setActiveLegalModal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="legal-dot">·</span>
            <button
              type="button"
              className="legal-link"
              onClick={() => setActiveLegalModal('hipaa')}
            >
              Patient Privacy (HIPAA)
            </button>
            <span className="legal-dot">·</span>
            <button
              type="button"
              className="legal-link"
              onClick={() => setActiveLegalModal('terms')}
            >
              Terms of Use
            </button>
          </div>

          <div className="bottom-right">
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal Dialog */}
      {activeLegalModal && (
        <div className="legal-modal-overlay" onClick={() => setActiveLegalModal(null)}>
          <div
            className="legal-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveLegalModal(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {activeLegalModal === 'privacy' && (
              <>
                <span className="eyebrow">Legal Notice</span>
                <h3 className="modal-title">Privacy Policy</h3>
                <div className="modal-body-text">
                  <p>Aventura Dental Group respects the privacy of our patients and visitors. This Privacy Policy outlines how we collect, safeguard, and utilize information collected through our website.</p>
                  <p>We do not sell, rent, or trade your personal contact details to any third-party marketing companies. Information gathered through scheduling requests is strictly utilized by our clinical coordinators to facilitate appointment inquiries and deliver high-standard care.</p>
                </div>
              </>
            )}

            {activeLegalModal === 'hipaa' && (
              <>
                <span className="eyebrow">Medical Privacy</span>
                <h3 className="modal-title">Notice of Patient Privacy Practices (HIPAA)</h3>
                <div className="modal-body-text">
                  <p>This notice describes how health information about you may be used and disclosed and how you can get access to this information in compliance with the Health Insurance Portability and Accountability Act (HIPAA).</p>
                  <p>Your protected health information (PHI) is kept strictly confidential within our practice. Online forms and appointment requests are securely transmitted via encrypted SSL channels.</p>
                </div>
              </>
            )}

            {activeLegalModal === 'terms' && (
              <>
                <span className="eyebrow">Terms of Service</span>
                <h3 className="modal-title">Terms of Use</h3>
                <div className="modal-body-text">
                  <p>The materials and content on this website are presented for general educational and informational purposes only and do not constitute formal medical diagnosis or replace personalized dental consultations.</p>
                  <p>All clinical before-and-after photographs represent actual treatments completed at Aventura Dental Group. Individual clinical outcomes may vary according to anatomical and clinical variables.</p>
                </div>
              </>
            )}

            <div className="modal-actions" style={{ marginTop: '24px' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveLegalModal(null)}
                style={{ width: '100%' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
