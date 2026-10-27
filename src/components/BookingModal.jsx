import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './BookingModal.css';

const INTENTS = [
  { id: "new-patient", title: "New Patient Exam & Cleaning", subtitle: "Comprehensive exam, 3D digital imaging, gentle prophylaxis" },
  { id: "cosmetic", title: "Porcelain Veneers & Smile Makeover", subtitle: "Artistic aesthetic evaluation with Dr. Jessica Cismas" },
  { id: "restorative", title: "Dental Implants & Restorative Care", subtitle: "Permanent tooth replacement & complex prosthetics" },
  { id: "invisalign", title: "Invisalign® Clear Aligners", subtitle: "Discreet orthodontic alignment consultation" },
  { id: "whitening", title: "In-Office Teeth Whitening", subtitle: "Brighten enamel up to 8 shades in a 60-min session" },
  { id: "emergency", title: "Urgent Care / Tooth Pain", subtitle: "Fast emergency evaluation for pain relief" }
];

const TIME_PREFERENCES = [
  { id: "morning", label: "Morning (8:30 AM – 12:00 PM)" },
  { id: "afternoon", label: "Afternoon (1:00 PM – 5:30 PM)" },
  { id: "flexible", label: "Any Available Time" }
];

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    intent: "new-patient",
    doctor: "Any Available Doctor",
    timePreference: "morning",
    preferredDate: "",
    fullName: "",
    phone: "",
    email: "",
    notes: ""
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleIntentSelect = (intentId) => {
    setFormData((prev) => ({ ...prev, intent: intentId }));
    setStep(2);
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter a contact phone number.";
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 700);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      intent: "new-patient",
      doctor: "Any Available Doctor",
      timePreference: "morning",
      preferredDate: "",
      fullName: "",
      phone: "",
      email: "",
      notes: ""
    });
    setErrors({});
    onClose();
  };

  const selectedIntentObj = INTENTS.find(i => i.id === formData.intent) || INTENTS[0];

  return (
    <div className="booking-modal-overlay" onClick={handleReset}>
      <div 
        className="booking-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={handleReset}
          aria-label="Close scheduling window"
        >
          <X size={20} />
        </button>

        {/* Top Progress Indicator */}
        <div className="booking-progress-bar">
          <div className="progress-step-indicator">
            <span className={`step-dot ${step >= 1 ? 'is-active' : ''}`}>1</span>
            <span className="step-label">Service</span>
          </div>
          <div className="progress-line"></div>
          <div className="progress-step-indicator">
            <span className={`step-dot ${step >= 2 ? 'is-active' : ''}`}>2</span>
            <span className="step-label">Schedule</span>
          </div>
          <div className="progress-line"></div>
          <div className="progress-step-indicator">
            <span className={`step-dot ${step >= 3 ? 'is-active' : ''}`}>3</span>
            <span className="step-label">Details</span>
          </div>
          <div className="progress-line"></div>
          <div className="progress-step-indicator">
            <span className={`step-dot ${step >= 4 ? 'is-active' : ''}`}>4</span>
            <span className="step-label">Confirm</span>
          </div>
        </div>

        {/* Step 1: Select Intent */}
        {step === 1 && (
          <div className="booking-step-pane">
            <span className="eyebrow">Step 1 of 3</span>
            <h2 id="booking-modal-title" className="booking-title">
              What kind of care are you seeking?
            </h2>
            <p className="booking-subtitle">
              Select your primary goal to help us match you with the right appointment duration and clinical specialist.
            </p>

            <div className="intent-options-grid">
              {INTENTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`intent-btn ${formData.intent === item.id ? 'is-selected' : ''}`}
                  onClick={() => handleIntentSelect(item.id)}
                >
                  <div className="intent-radio-indicator"></div>
                  <div className="intent-text-wrap">
                    <strong className="intent-title">{item.title}</strong>
                    <span className="intent-desc">{item.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="booking-footer-actions">
              <span className="booking-phone-hint">
                Prefer to schedule by phone? Call <a href={`tel:${PRACTICE_INFO.phoneRaw}`}>{PRACTICE_INFO.phone}</a>
              </span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setStep(2)}
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Schedule & Doctor */}
        {step === 2 && (
          <div className="booking-step-pane">
            <span className="eyebrow">Step 2 of 3</span>
            <h2 id="booking-modal-title" className="booking-title">
              When would you prefer to visit?
            </h2>
            <p className="booking-subtitle">
              Selected: <strong>{selectedIntentObj.title}</strong>. Choose your preferred timeframe.
            </p>

            <div className="schedule-form-grid">
              {/* Preferred Doctor */}
              <div className="form-group">
                <label className="form-label" htmlFor="doctor-select">
                  Preferred Doctor
                </label>
                <select
                  id="doctor-select"
                  className="form-select"
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                >
                  <option value="Any Available Doctor">First Available Doctor (Fastest Booking)</option>
                  <option value="Dr. Jessica Cismas, D.M.D.">Dr. Jessica Cismas, D.M.D. (Cosmetic & General)</option>
                  <option value="Dr. Harvey S. Rosa, D.M.D.">Dr. Harvey S. Rosa, D.M.D. (Restorative & Implants)</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div className="form-group">
                <label className="form-label" htmlFor="date-input">
                  Target Date (Optional)
                </label>
                <input
                  type="date"
                  id="date-input"
                  className="form-input"
                  value={formData.preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                />
              </div>

              {/* Time of Day Radio Options */}
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">
                  Preferred Time of Day
                </label>
                <div className="time-options-row">
                  {TIME_PREFERENCES.map((time) => (
                    <button
                      key={time.id}
                      type="button"
                      className={`time-btn ${formData.timePreference === time.id ? 'is-selected' : ''}`}
                      onClick={() => setFormData({ ...formData, timePreference: time.id })}
                    >
                      <Clock size={16} />
                      <span>{time.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="booking-footer-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setStep(3)}
              >
                <span>Continue to Contact Info</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <form className="booking-step-pane" onSubmit={handleSubmit}>
            <span className="eyebrow">Step 3 of 3</span>
            <h2 id="booking-modal-title" className="booking-title">
              Where can we reach you to confirm?
            </h2>
            <p className="booking-subtitle">
              Our clinical coordinator will contact you promptly to finalize your exact chair appointment.
            </p>

            <div className="contact-form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full Name *
                </label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    id="fullName"
                    className={`form-input has-icon ${errors.fullName ? 'has-error' : ''}`}
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone Number (Mobile) *
                </label>
                <div className="input-with-icon">
                  <Phone size={18} className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    className={`form-input has-icon ${errors.phone ? 'has-error' : ''}`}
                    placeholder="(305) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    className={`form-input has-icon ${errors.email ? 'has-error' : ''}`}
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label" htmlFor="notes">
                  Optional Questions or Notes
                </label>
                <textarea
                  id="notes"
                  className="form-textarea"
                  rows="2"
                  placeholder="Tell us about any specific dental goals or insurance questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>
            </div>

            {/* Privacy / PHI Disclaimer */}
            <div className="phi-privacy-notice">
              <ShieldCheck size={16} className="phi-icon" />
              <span>
                <strong>HIPAA Privacy Assurance:</strong> Your contact information is encrypted and transmitted securely. We will never collect sensitive medical data or diagnosis details through this form.
              </span>
            </div>

            <div className="booking-footer-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setStep(2)}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
                style={{ minWidth: '220px' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="submitting-spinner"></span>
                    <span>Securing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Appointment Request</span>
                    <CheckCircle2 size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="booking-step-pane confirmation-pane">
            <div className="confirmation-badge">
              <CheckCircle2 size={40} className="confirm-icon" />
            </div>

            <span className="eyebrow" style={{ margin: '0 auto 12px' }}>Request Confirmed</span>
            <h2 id="booking-modal-title" className="booking-title" style={{ textAlign: 'center' }}>
              We've received your request, {formData.fullName}!
            </h2>
            <p className="booking-subtitle" style={{ textAlign: 'center', margin: '0 auto 24px' }}>
              Our patient coordinator at Aventura Dental Group is reviewing your schedule and will call or text you shortly to finalize your exact appointment slot.
            </p>

            {/* Request Summary Card */}
            <div className="summary-card">
              <h3 className="summary-title">Appointment Request Summary:</h3>
              <div className="summary-grid">
                <div className="summary-row">
                  <span className="summary-label">Service:</span>
                  <span className="summary-value">{selectedIntentObj.title}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Clinician:</span>
                  <span className="summary-value">{formData.doctor}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Time Preference:</span>
                  <span className="summary-value">
                    {TIME_PREFERENCES.find(t => t.id === formData.timePreference)?.label}
                  </span>
                </div>
                {formData.preferredDate && (
                  <div className="summary-row">
                    <span className="summary-label">Target Date:</span>
                    <span className="summary-value">{formData.preferredDate}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span className="summary-label">Contact:</span>
                  <span className="summary-value">{formData.phone} · {formData.email}</span>
                </div>
              </div>
            </div>

            {/* Quick Location Alert */}
            <div className="summary-location-box">
              <strong>Location:</strong> 20475 Biscayne Blvd, Suite G-9, Aventura, FL 33180 · Free Parking Available
            </div>

            <div className="confirmation-actions">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={handleReset}
                style={{ width: '100%' }}
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
