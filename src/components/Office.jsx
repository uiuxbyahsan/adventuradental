import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Car, ShieldAlert } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './Office.css';

export default function Office({ onOpenBooking }) {
  return (
    <section id="office" className="section office-section" aria-label="Office Location and Hours">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">Aventura Practice</span>
          <h2 className="section-title">
            Visit our <span className="serif-accent">Aventura office.</span>
          </h2>
          <p className="section-subtitle">
            Centrally located on Biscayne Boulevard with dedicated complimentary patient parking and tranquil, modern clinical suites.
          </p>
        </div>

        {/* Office Main Grid */}
        <div className="office-grid">
          {/* Left Info Column */}
          <div className="office-info-card">
            <div className="office-brand-badge">
              <span className="brand-name">{PRACTICE_INFO.name}</span>
              <span className="suite-tag">Suite G-9</span>
            </div>

            <div className="office-detail-blocks">
              {/* Address */}
              <div className="office-detail-item">
                <div className="office-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="detail-title">Address</h3>
                  <address className="detail-value">
                    {PRACTICE_INFO.address.street}<br />
                    {PRACTICE_INFO.address.city}, {PRACTICE_INFO.address.state} {PRACTICE_INFO.address.zip}
                  </address>
                  <span className="detail-sub">Corner of Biscayne Blvd & 205th St</span>
                </div>
              </div>

              {/* Phone */}
              <div className="office-detail-item">
                <div className="office-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="detail-title">Telephone</h3>
                  <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="detail-value-link">
                    {PRACTICE_INFO.phone}
                  </a>
                  <span className="detail-sub">Fax: {PRACTICE_INFO.fax}</span>
                </div>
              </div>

              {/* Office Hours */}
              <div className="office-detail-item">
                <div className="office-icon-wrap">
                  <Clock size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="detail-title">Office Hours</h3>
                  <div className="hours-table">
                    <div className="hours-row">
                      <span className="day-name">Monday – Friday</span>
                      <span className="day-time">8:30 AM – 5:30 PM</span>
                    </div>
                    <div className="hours-row is-closed">
                      <span className="day-name">Saturday – Sunday</span>
                      <span className="day-time">Closed (Emergencies on call)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Amenities */}
            <div className="office-amenities-row">
              <span className="amenity-item">
                <Car size={14} />
                <span>Complimentary Parking</span>
              </span>
              <span className="amenity-item">
                <CheckCircle2 size={14} />
                <span>ADA Accessible</span>
              </span>
              <span className="amenity-item">
                <ShieldAlert size={14} />
                <span>Prompt Emergency Care</span>
              </span>
            </div>

            {/* Action Row */}
            <div className="office-actions-row">
              <a
                href={PRACTICE_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="get-directions-btn"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onOpenBooking}
              >
                <span>Book Visit</span>
              </button>
            </div>
          </div>

          {/* Right Map Column (Supporting Visual Element) */}
          <div className="office-map-card">
            <div className="map-frame-wrapper">
              <iframe
                title="Aventura Dental Group Google Map"
                src="https://maps.google.com/maps?q=20475+Biscayne+Blvd+G-9+Aventura+FL+33180&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>

            <div className="map-overlay-badge">
              <MapPin size={16} className="map-pin-icon" />
              <div className="map-badge-text">
                <strong>Aventura Dental Group</strong>
                <span>20475 Biscayne Blvd G-9 · Aventura, FL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
