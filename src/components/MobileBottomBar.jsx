import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import './MobileBottomBar.css';

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className="mobile-action-bar" aria-label="Mobile Persistent Actions">
      <div className="mobile-bar-inner">
        <a 
          href={`tel:${PRACTICE_INFO.phoneRaw}`} 
          className="mobile-bar-btn btn-call"
          aria-label="Call practice at 305-935-4030"
        >
          <Phone size={18} />
          <span>CALL</span>
        </a>

        <button 
          type="button" 
          className="mobile-bar-btn btn-book"
          onClick={onOpenBooking}
          id="mobile-persistent-book-cta"
        >
          <Calendar size={18} />
          <span>BOOK APPOINTMENT</span>
        </button>
      </div>
    </div>
  );
}
