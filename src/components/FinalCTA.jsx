import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './FinalCTA.css';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="section final-cta-section" aria-label="Schedule Your Visit">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-grid">
            {/* Content Column */}
            <div className="final-cta-content">
              <span className="eyebrow eyebrow-light">
                <Sparkles size={14} />
                <span>Begin Your Journey</span>
              </span>

              <h2 className="final-cta-headline">
                Ready to love <span className="serif-accent italic">your smile?</span>
              </h2>

              <p className="final-cta-sub">
                Schedule your visit with Aventura Dental Group. Experience personalized dental care designed around your comfort, health, and natural radiance.
              </p>

              <div className="final-cta-buttons">
                <button
                  type="button"
                  className="btn btn-accent btn-lg"
                  onClick={onOpenBooking}
                  id="final-book-cta"
                >
                  <Calendar size={18} />
                  <span>Book an Appointment</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`tel:${PRACTICE_INFO.phoneRaw}`}
                  className="btn btn-ghost-light btn-lg"
                  id="final-call-cta"
                >
                  <Phone size={18} />
                  <span>Call {PRACTICE_INFO.phone}</span>
                </a>
              </div>

              <div className="final-cta-trust">
                <ShieldCheck size={16} className="trust-icon" />
                <span>No judgment. Transparent consultations. Welcoming new patients in Aventura, FL.</span>
              </div>
            </div>

            {/* Media Image Column */}
            <div className="final-cta-media">
              <img
                src="/assets/cases/case-veneers-1.webp"
                alt="Aventura Dental Group Confident Smile Transformation"
                className="final-cta-img"
                loading="lazy"
              />
              <div className="final-media-overlay">
                <span className="final-quote">
                  "The highest standard of cosmetic & restorative care in South Florida."
                </span>
                <span className="final-author">Dr. Jessica Cismas & Dr. Harvey Rosa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
