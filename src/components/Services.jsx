import React, { useState } from 'react';
import { ArrowRight, Sparkles, Smile, ShieldCheck, Check, Clock, X, ChevronRight, Calendar } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/practiceData';
import './Services.css';

const CATEGORY_ICONS = {
  cosmetic: Sparkles,
  restorative: ShieldCheck,
  preventive: Smile,
  orthodontics: ArrowRight
};

// Curated high quality authentic thumbnail visuals for the service cards
const SERVICE_IMAGES = {
  "Porcelain Veneers": "/assets/cases/case-rehab-after.webp",
  "In-Office Teeth Whitening": "/assets/cases/case-restoration-after.webp",
  "Cosmetic Dental Bonding": "/assets/gallery/gallery-bonding-0687.webp",
  "Full Smile Makeovers": "/assets/cases/case-veneers-1.webp",
  "Dental Implants": "/assets/gallery/gallery-rehab-1.webp",
  "Porcelain Crowns & Bridges": "/assets/cases/case-veneers-2.webp",
  "Gentle Root Canal Therapy": "/assets/gallery/gallery-emergency-2020-15.webp",
  "Tooth-Colored Fillings": "/assets/cases/case-restoration.webp",
  "Comprehensive Exams & Ultrasonic Cleaning": "/assets/hero/s1.jpg",
  "Periodontal Gum Care": "/assets/hero/combo1.jpg",
  "Low-Radiation Digital X-Rays": "/assets/hero/s2.jpg",
  "Custom Nightguards & Sleep Care": "/assets/hero/s3.jpg",
  "Invisalign® Clear Aligners": "/assets/cases/case-veneers-1.webp",
  "ClearCorrect Aligners": "/assets/cases/case-rehab.webp",
  "Aesthetic Bite Correction": "/assets/cases/case-restoration-after.webp"
};

export default function Services({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  // Flatten or filter services
  const displayedCategories = activeTab === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(cat => cat.id === activeTab);

  return (
    <section id="services" className="section services-section" aria-label="Dental Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">Comprehensive Practice</span>
          <h2 className="section-title">
            Care for every stage of <span className="serif-accent">your smile.</span>
          </h2>
          <p className="section-subtitle">
            From precision porcelain veneers to preventative wellness, our doctors combine gentle artistry with modern clinical mastery.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="service-tabs" role="tablist">
            <button
              type="button"
              className={`service-tab-btn ${activeTab === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('all')}
              role="tab"
              aria-selected={activeTab === 'all'}
            >
              All Services
            </button>
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`service-tab-btn ${activeTab === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
                role="tab"
                aria-selected={activeTab === cat.id}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Service Cards */}
        <div className="categories-stack">
          {displayedCategories.map(cat => (
            <div key={cat.id} className="category-block">
              <div className="category-header">
                <div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.tagline}</p>
                </div>
                <button 
                  type="button" 
                  className="category-book-link" 
                  onClick={onOpenBooking}
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Service Cards Grid (4 columns on desktop) */}
              <div className="services-grid">
                {cat.services.map((service, idx) => {
                  const thumbnail = SERVICE_IMAGES[service.name] || "/assets/cases/case-rehab.webp";
                  return (
                    <article 
                      key={idx} 
                      className="service-card"
                      onClick={() => setSelectedService({ ...service, category: cat.title })}
                      tabIndex="0"
                      onKeyDown={(e) => { if (e.key === 'Enter') setSelectedService({ ...service, category: cat.title }); }}
                      role="button"
                      aria-label={`View details for ${service.name}`}
                    >
                      <div className="service-card-media">
                        <img 
                          src={thumbnail} 
                          alt={service.name} 
                          className="service-card-img" 
                          loading="lazy"
                        />
                        {service.popular && (
                          <span className="popular-badge">Featured</span>
                        )}
                        <span className="service-time-badge">
                          <Clock size={12} />
                          <span>{service.time}</span>
                        </span>
                      </div>

                      <div className="service-card-body">
                        <span className="service-card-cat">{cat.title}</span>
                        <h4 className="service-card-name">{service.name}</h4>
                        <p className="service-card-desc">{service.desc}</p>
                        
                        <div className="service-card-footer">
                          <span className="service-action-text">Explore Treatment</span>
                          <span className="service-arrow-wrap">
                            <ArrowRight size={16} className="service-arrow-icon" />
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div 
            className="service-modal-card" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
          >
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <span className="eyebrow">{selectedService.category}</span>
            <h3 id="modal-service-title" className="modal-title">{selectedService.name}</h3>
            <p className="modal-description">{selectedService.desc}</p>

            <div className="modal-details-grid">
              <div className="modal-detail-item">
                <span className="modal-detail-label">Typical Visits</span>
                <span className="modal-detail-value">{selectedService.time}</span>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-label">Comfort Level</span>
                <span className="modal-detail-value">Gentle & Pain-Free</span>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-label">Location</span>
                <span className="modal-detail-value">Aventura Suite G-9</span>
              </div>
            </div>

            <div className="modal-features">
              <div className="feature-item">
                <Check size={16} className="check-icon" />
                <span>Personalized aesthetic evaluation and facial harmony mapping</span>
              </div>
              <div className="feature-item">
                <Check size={16} className="check-icon" />
                <span>Zero pressure: candid discussions and transparent treatment estimates</span>
              </div>
              <div className="feature-item">
                <Check size={16} className="check-icon" />
                <span>Flexible financing available with 0% interest promotional plans</span>
              </div>
            </div>

            <div className="modal-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-lg" 
                style={{ flex: 1 }}
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
              >
                <Calendar size={18} />
                <span>Book This Treatment</span>
              </button>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => setSelectedService(null)}
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
