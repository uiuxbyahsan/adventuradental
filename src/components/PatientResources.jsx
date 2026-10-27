import React, { useState } from 'react';
import { UserPlus, FileText, CreditCard, BookOpen, ArrowRight, CheckCircle2, Download, ShieldCheck, X, Calendar } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './PatientResources.css';

const RESOURCES = [
  {
    id: "new-patients",
    icon: UserPlus,
    category: "First Visit Guide",
    title: "New Patients",
    summary: "Everything you need before your first visit.",
    description: "Welcome to Aventura Dental Group. We design your first appointment to be calm, comprehensive, and unhurried. Enjoy complimentary parking in our Biscayne Boulevard suite and personalized one-on-one time with your doctor.",
    highlights: [
      "Digital paperwork completed securely online beforehand",
      "Comprehensive examination & 3D digital imaging",
      "Gentle ultrasonic prophylaxis cleaning",
      "Direct consultation with Dr. Cismas or Dr. Rosa"
    ],
    actionText: "Prepare for First Visit"
  },
  {
    id: "patient-forms",
    icon: FileText,
    category: "Online Paperwork",
    title: "Patient Forms",
    summary: "Access forms before your appointment.",
    description: "Save 20 minutes in the waiting room by completing your registration and medical history online through our secure, HIPAA-compliant patient intake portal.",
    highlights: [
      "HIPAA-compliant encrypted digital submission",
      "Medical history & dental goals questionnaire",
      "Insurance verification & policy upload",
      "Accessible from mobile, tablet, or desktop"
    ],
    actionText: "Access Digital Forms"
  },
  {
    id: "financing",
    icon: CreditCard,
    category: "Payment Flexibility",
    title: "Financing & Insurance",
    summary: "Explore available payment options.",
    description: "We believe financial considerations should never stand between you and your optimal smile. We accept all major PPO insurances and offer 0% APR promotional financing through trusted partners.",
    highlights: [
      "CareCredit® & LendingClub® healthcare financing",
      "0% APR introductory promotional options",
      "In-house transparent pricing for uninsured patients",
      "Direct insurance claims filing on your behalf"
    ],
    actionText: "Explore Payment Plans"
  },
  {
    id: "education",
    icon: BookOpen,
    category: "Oral Health Library",
    title: "Patient Education",
    summary: "Understand your treatment and oral health.",
    description: "Clear, medically accurate insights into porcelain veneers, periodontal preservation, clear aligners, and dental implant longevity so you feel confident in every decision.",
    highlights: [
      "Veneers vs. Bonding aesthetic comparison guide",
      "Dental implant care and lifelong maintenance",
      "Bruxism and nightguard protection insights",
      "Preventative hygiene protocols between cleanings"
    ],
    actionText: "Browse Educational Guides"
  }
];

export default function PatientResources({ onOpenBooking }) {
  const [activeResource, setActiveResource] = useState(null);

  return (
    <section id="resources" className="section resources-section" aria-label="Patient Resources Hub">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">Patient Experience</span>
          <h2 className="section-title">
            Resources designed for <span className="serif-accent">your convenience.</span>
          </h2>
          <p className="section-subtitle">
            Skip the paperwork hassle and arrive prepared. Everything you need to manage your dental health with absolute confidence.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {RESOURCES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="resource-card"
                onClick={() => setActiveResource(item)}
                tabIndex="0"
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveResource(item); }}
                role="button"
                aria-label={`View details for ${item.title}`}
              >
                <div className="resource-icon-wrap">
                  <Icon size={24} className="resource-icon" />
                </div>
                <span className="resource-category">{item.category}</span>
                <h3 className="resource-title">{item.title}</h3>
                <p className="resource-summary">{item.summary}</p>

                <div className="resource-card-action">
                  <span>{item.actionText}</span>
                  <ArrowRight size={16} className="resource-arrow" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Resource Detail Modal Dialog */}
      {activeResource && (
        <div className="resource-modal-overlay" onClick={() => setActiveResource(null)}>
          <div
            className="resource-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-modal-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveResource(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <span className="eyebrow">{activeResource.category}</span>
            <h3 id="resource-modal-title" className="modal-title">{activeResource.title}</h3>
            <p className="modal-description" style={{ marginTop: '12px' }}>
              {activeResource.description}
            </p>

            <div className="resource-modal-checklist">
              <h4 className="checklist-heading">What you should know:</h4>
              <ul className="checklist-items">
                {activeResource.highlights.map((point, idx) => (
                  <li key={idx} className="checklist-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{point}</span>
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
                  setActiveResource(null);
                  onOpenBooking();
                }}
              >
                <Calendar size={18} />
                <span>Book First Visit</span>
              </button>
              <a
                href={`tel:${PRACTICE_INFO.phoneRaw}`}
                className="btn btn-secondary"
              >
                Call With Questions
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
