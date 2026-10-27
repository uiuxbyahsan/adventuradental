import React from 'react';
import { Star, Shield, Award, Users, CheckCircle } from 'lucide-react';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <section className="trust-strip-section" aria-label="Credentials and Patient Trust">
      <div className="container">
        <div className="trust-strip-grid">
          {/* Item 1: Review Rating */}
          <div className="trust-strip-item">
            <div className="trust-item-icon">
              <Star size={18} className="star-gold" />
            </div>
            <div className="trust-item-body">
              <span className="trust-metric">4.9 / 5.0 Star Rating</span>
              <span className="trust-label">Over 795+ Patient Reviews on Google & Yelp</span>
            </div>
          </div>

          {/* Item 2: Decades of Practice */}
          <div className="trust-strip-item">
            <div className="trust-item-icon">
              <Award size={18} className="icon-teal" />
            </div>
            <div className="trust-item-body">
              <span className="trust-metric">Serving Aventura Since 1985</span>
              <span className="trust-label">Biscayne Blvd · 40 Years of South Florida Trust</span>
            </div>
          </div>

          {/* Item 3: Clinical Volume */}
          <div className="trust-strip-item">
            <div className="trust-item-icon">
              <Users size={18} className="icon-teal" />
            </div>
            <div className="trust-item-body">
              <span className="trust-metric">50,000+ Smiles Treated</span>
              <span className="trust-label">Montreal, Tufts & Mt. Sinai Trained Clinicians</span>
            </div>
          </div>

          {/* Item 4: Flexible Financing */}
          <div className="trust-strip-item">
            <div className="trust-item-icon">
              <Shield size={18} className="icon-teal" />
            </div>
            <div className="trust-item-body">
              <span className="trust-metric">Financing & In-House Care</span>
              <span className="trust-label">CareCredit · LendingClub · Transparent Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
