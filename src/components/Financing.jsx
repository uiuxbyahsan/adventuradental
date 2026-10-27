import React, { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, ArrowRight, X, Phone, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './Financing.css';

export default function Financing({ onOpenBooking }) {
  const [showApplyModal, setShowApplyModal] = useState(false);

  return (
    <section id="financing" className="section financing-section" aria-label="Dental Financing and CareCredit">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered" data-reveal="fade-up">
          <span className="eyebrow">Financial Peace of Mind</span>
          <h2 className="section-title">
            No Insurance? <span className="serif-accent">No Problem.</span>
          </h2>
          <p className="section-subtitle">
            Quality dentistry should always be within reach. We offer 0% APR CareCredit® promotional financing and clear, transparent pricing with zero surprise bills.
          </p>
        </div>

        {/* 2-Column Feature Grid: CareCredit Feature & In-House Uninsured Care */}
        <div className="financing-feature-grid" data-reveal="fade-up">
          {/* Card 1: Featured CareCredit Card */}
          <div className="carecredit-featured-card">
            <div className="carecredit-top">
              <div className="carecredit-logo-wrap">
                <span className="carecredit-brand">CareCredit®</span>
                <span className="carecredit-tag">Preferred Healthcare Card</span>
              </div>
              <span className="apr-pill">0% APR Available</span>
            </div>

            <h3 className="card-headline">Flexible Monthly Payments</h3>
            <p className="card-subtext">
              Divide the cost of porcelain veneers, dental implants, Invisalign®, or unexpected emergency treatments into manageable interest-free monthly payments.
            </p>

            <ul className="carecredit-perks-list">
              <li>
                <CheckCircle2 size={16} className="perk-icon" />
                <span><strong>6, 12, or 24 Months</strong> promotional 0% interest options</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="perk-icon" />
                <span><strong>Instant Pre-Approval</strong> online with zero impact to credit bureau scores</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="perk-icon" />
                <span>Use immediately for your upcoming dental visit</span>
              </li>
            </ul>

            <div className="carecredit-actions">
              <button
                type="button"
                className="btn btn-primary btn-lg apply-now-btn"
                onClick={() => setShowApplyModal(true)}
                id="carecredit-apply-now-btn"
              >
                <span>Apply Now (Pre-Approval)</span>
                <ExternalLink size={16} />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onOpenBooking}
              >
                <span>Book Appointment First</span>
              </button>
            </div>
          </div>

          {/* Card 2: Uninsured In-House Program */}
          <div className="uninsured-featured-card">
            <div className="uninsured-top">
              <span className="eyebrow" style={{ margin: 0 }}>Direct Patient Care</span>
              <span className="transparency-pill">100% Transparent</span>
            </div>

            <h3 className="card-headline">Affordable Care for Uninsured Patients</h3>
            <p className="card-subtext">
              Over 40% of our loyal patients do not carry traditional insurance. We provide straightforward upfront fee estimates before any treatment begins.
            </p>

            <div className="uninsured-points">
              <div className="u-point">
                <ShieldCheck size={18} className="u-icon" />
                <div>
                  <strong>No Hidden Fees or Surcharges</strong>
                  <p>Itemized written fee schedules provided before any procedure begins.</p>
                </div>
              </div>
              <div className="u-point">
                <Calendar size={18} className="u-icon" />
                <div>
                  <strong>Phased Treatment Scheduling</strong>
                  <p>Divide cosmetic and restorative procedures over comfortable monthly stages.</p>
                </div>
              </div>
              <div className="u-point">
                <CreditCard size={18} className="u-icon" />
                <div>
                  <strong>All Major Cards & LendingClub® Accepted</strong>
                  <p>Flexible payment methods matched to your personal financial preferences.</p>
                </div>
              </div>
            </div>

            <div className="uninsured-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenBooking}
              >
                <Calendar size={16} />
                <span>Schedule Consultation</span>
              </button>
              <a
                href={`tel:${PRACTICE_INFO.phoneRaw}`}
                className="btn btn-secondary"
              >
                <Phone size={15} />
                <span>Call {PRACTICE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CareCredit Apply Now Modal Dialog */}
      {showApplyModal && (
        <div className="financing-modal-overlay" onClick={() => setShowApplyModal(false)}>
          <div
            className="financing-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="carecredit-modal-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowApplyModal(false)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <span className="eyebrow">Instant Application</span>
            <h3 id="carecredit-modal-title" className="modal-title">
              Apply for CareCredit® at Aventura Dental Group
            </h3>
            <p className="modal-description" style={{ marginTop: '12px' }}>
              You can get pre-approved in minutes with no impact to your credit bureau score. Our financial coordinator can also assist you directly during your visit.
            </p>

            <div className="apply-steps-box">
              <div className="apply-step">
                <span className="step-num">1</span>
                <div>
                  <strong>Quick Online Pre-Approval</strong>
                  <p>Visit CareCredit’s secure portal or let our staff submit it on your behalf in office.</p>
                </div>
              </div>
              <div className="apply-step">
                <span className="step-num">2</span>
                <div>
                  <strong>Select Your 0% APR Plan</strong>
                  <p>Choose 6, 12, or 24-month interest-free promotional financing on qualifying procedures.</p>
                </div>
              </div>
              <div className="apply-step">
                <span className="step-num">3</span>
                <div>
                  <strong>Begin Your Smile Care</strong>
                  <p>Use your approved line of credit immediately for treatments with Dr. Cismas or Dr. Rosa.</p>
                </div>
              </div>
            </div>

            <div className="modal-actions" style={{ marginTop: '28px' }}>
              <a
                href="https://www.carecredit.com/apply/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ flex: 1 }}
              >
                <span>Continue to Official CareCredit Portal</span>
                <ExternalLink size={16} />
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setShowApplyModal(false);
                  onOpenBooking();
                }}
              >
                <span>Book Office Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
