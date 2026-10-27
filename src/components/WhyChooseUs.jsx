import React from 'react';
import { HeartHandshake, Cpu, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    tagline: "Unrushed & Tailored",
    description: "Every treatment plan is bespoke to your unique anatomy, facial balance, and lifestyle. We listen attentively to your goals before recommending any procedure."
  },
  {
    icon: Cpu,
    title: "Modern Dentistry",
    tagline: "Advanced Diagnostics",
    description: "Equipped with low-dose digital 3D radiography, precision intraoral scanning, rotary endodontics, and master ceramist shade-matching technology."
  },
  {
    icon: Award,
    title: "Experienced Team",
    tagline: "Decades of Mastery",
    description: "Led by Dr. Jessica Cismas and Dr. Harvey Rosa with extensive General Practice Residencies at McGill University and Mount Sinai Hospital, treating over 50,000 patients."
  },
  {
    icon: Sparkles,
    title: "Comfort First",
    tagline: "Serene & Pain-Free",
    description: "We re-engineered the dental visit to eliminate anxiety with warm hospitality, gentle anesthetic techniques, and a tranquil boutique clinical environment."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section why-us-section" aria-label="Why Choose Aventura Dental Group">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">The Aventura Standard</span>
          <h2 className="section-title">
            The difference is in <span className="serif-accent">the details.</span>
          </h2>
          <p className="section-subtitle">
            We hold ourselves to a standard of dental care that honors your time, relieves your concerns, and delivers enduring aesthetic perfection.
          </p>
        </div>

        {/* 4-Item Clean Minimal Luxury Grid */}
        <div className="pillars-grid">
          {PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  <IconComponent size={24} className="pillar-icon" />
                </div>
                <span className="pillar-tagline">{pillar.tagline}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
