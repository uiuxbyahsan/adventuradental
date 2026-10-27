import React, { useState } from 'react';
import { ArrowRight, Award, GraduationCap, X, CheckCircle2, Calendar } from 'lucide-react';
import { DOCTORS } from '../data/practiceData';
import './Doctors.css';

export default function Doctors({ onOpenBooking }) {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <section id="team" className="section doctors-section" aria-label="Our Doctors">
      <div className="container">
        {/* Section Header */}
        <div className="doctors-header-flex" data-reveal="fade-up">
          <div className="doctors-header-text">
            <span className="eyebrow">Clinical Leadership</span>
            <h2 className="section-title">
              Meet our <span className="serif-accent">doctors.</span>
            </h2>
            <p className="section-subtitle">
              Residency-trained clinicians combining decades of clinical mastery with compassionate, personalized patient relationships.
            </p>
          </div>
          <button 
            type="button" 
            className="btn btn-secondary meet-btn"
            onClick={onOpenBooking}
          >
            <span>Schedule Doctor Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Doctors Grid (2 large editorial portraits) */}
        <div className="doctors-grid">
          {DOCTORS.map((doc, idx) => (
            <article 
              key={doc.id} 
              className="doctor-card"
              onClick={() => setSelectedDoctor(doc)}
              tabIndex="0"
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedDoctor(doc); }}
              role="button"
              aria-label={`View biography of ${doc.name}`}
              data-reveal="fade-up"
              data-delay={(idx + 1).toString()}
            >
              <div className="doctor-media-wrap">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="doctor-portrait-img"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to root path if needed
                    if (doc.id === 'jessica-cismas') e.target.src = '/jessica.jpg';
                    if (doc.id === 'harvey-rosa') e.target.src = '/harvey.jpg';
                  }}
                />
                <div className="doctor-media-overlay">
                  <span className="overlay-credentials">{doc.credentials}</span>
                  <div className="overlay-cta-pill">
                    <span>Read Biography & Credentials</span>
                    <ArrowRight size={14} className="overlay-arrow" />
                  </div>
                </div>
              </div>

              <div className="doctor-info-box">
                <div className="doctor-title-row">
                  <div>
                    <h3 className="doctor-name">{doc.name}</h3>
                    <p className="doctor-role">{doc.role}</p>
                  </div>
                </div>

                <p className="doctor-short-bio">{doc.shortBio}</p>

                <div className="doctor-footer-row">
                  <div className="doctor-quick-tags">
                    {doc.accreditations.slice(0, 2).map((acc, i) => (
                      <span key={i} className="doc-pill">{acc}</span>
                    ))}
                  </div>
                  <span className="doc-view-link">
                    <span>Biography</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Doctor Bio Modal */}
      {selectedDoctor && (
        <div className="doctor-modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div 
            className="doctor-modal-card" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-doc-name"
          >
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setSelectedDoctor(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="doc-modal-grid">
              <div className="doc-modal-media">
                <img 
                  src={selectedDoctor.image} 
                  alt={selectedDoctor.name} 
                  className="doc-modal-img" 
                  onError={(e) => {
                    if (selectedDoctor.id === 'jessica-cismas') e.target.src = '/jessica.jpg';
                    if (selectedDoctor.id === 'harvey-rosa') e.target.src = '/harvey.jpg';
                  }}
                />
                <span className="doc-modal-badge">{selectedDoctor.credentials}</span>
              </div>

              <div className="doc-modal-content">
                <span className="eyebrow">{selectedDoctor.role}</span>
                <h3 id="modal-doc-name" className="modal-title">{selectedDoctor.name}</h3>
                
                <p className="modal-description" style={{ marginTop: '16px' }}>
                  {selectedDoctor.fullBio}
                </p>

                <div className="doc-accreditations-wrap">
                  <h4 className="accreditations-title">Credentials & Honors:</h4>
                  <ul className="accreditations-list">
                    {selectedDoctor.accreditations.map((item, idx) => (
                      <li key={idx} className="accreditation-item">
                        <CheckCircle2 size={16} className="acc-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions" style={{ marginTop: '28px' }}>
                  <button 
                    type="button" 
                    className="btn btn-primary btn-lg"
                    style={{ flex: 1 }}
                    onClick={() => {
                      setSelectedDoctor(null);
                      onOpenBooking();
                    }}
                  >
                    <Calendar size={18} />
                    <span>Book with {selectedDoctor.name.split(',')[0]}</span>
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setSelectedDoctor(null)}
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
