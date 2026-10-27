# Aventura Dental Group — Premium Dental Practice Website

A world-class, conversion-focused digital experience redesigned for **Aventura Dental Group**, an elite cosmetic and restorative dental practice in Aventura, Florida.

![Aventura Dental Group](public/assets/hero-slide1.webp)

---

## 🌟 Practice Overview

- **Practice**: Aventura Dental Group
- **Location**: 20475 Biscayne Boulevard G-9, Aventura, FL 33180
- **Phone**: [(305) 935-4030](tel:3059354030)
- **Specialties**: Cosmetic Dentistry, Porcelain Veneers, Dental Implants, Invisalign®, General & Emergency Dental Care

---

## ✨ Key Features & Architecture

1. **Brand-Matched Aesthetic**:
   - Palette sampled directly from the official brand logo: Royal Sapphire Blue (`#245B9E`), Deep Navy (`#0F2644`), Soft Cyan (`#2997D8`), and Warm Alabaster (`#FBFBFD`).
   - Clean luxury typography (`Outfit` + `Inter` from Google Fonts).

2. **Interactive Hero Section**:
   - Multi-slide carousel with subtle cursor parallax motion.
   - Quick trust pill highlights (4.9★ Google & Yelp, 15+ years experience, Top Doctors).

3. **"Transform Your Smile" Interactive Before & After**:
   - Interactive split-slider and side-by-side comparison.
   - High-resolution clinical cosmetic dentistry transformations.

4. **Dedicated Transformation Gallery**:
   - Filterable portfolio with interactive mobile touch swipe slider and desktop grid.
   - Modal lightbox for detailed case inspection (procedure details, duration, clinical notes).

5. **Meet Our Doctors**:
   - Profile cards for Dr. Jessica Cismas, DDS and Dr. Harvey Rosa, DMD.
   - Full credential modals highlighting education, memberships (AACD, ADA), and patient philosophy.

6. **Patient Financing — "No Insurance? No Problem."**:
   - Prominently featuring **CareCredit®** with 0% APR promotional financing options.
   - Direct "Apply Now" application integration and in-house membership details.

7. **Auto-Animated Social Reviews**:
   - Auto-advancing review cards with touch pause, pagination dots, and authentic Google & Yelp verified patient reviews.

8. **Comprehensive Conversion Architecture**:
   - Persistent responsive desktop navigation + mobile drawer.
   - Mobile bottom action bar (Instant Call + Request Appointment).
   - 4-step interactive Appointment Request modal with service selection, doctor preference, and date picker.
   - Office location section with interactive Google Maps embed, hours, and parking information.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS with comprehensive Design Token System (`src/styles/index.css`)
- **Icons**: Lucide React + custom inline SVGs
- **Animations**: CSS Transitions, Custom IntersectionObserver (`useScrollReveal`), Touch gesture handlers

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/uiuxbyahsan/adventuradental.git

# Navigate to project directory
cd adventuradental

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
ADG DENTAL/
├── public/
│   └── assets/            # High-resolution clinical and brand imagery
├── src/
│   ├── components/        # Modular UI components (Hero, Gallery, Reviews, Booking, etc.)
│   ├── data/              # Practice data, doctor credentials, and before/after cases
│   ├── styles/            # Design system tokens and global utilities
│   ├── utils/             # Animation hooks (useScrollReveal)
│   ├── App.jsx            # Main application layout
│   └── main.jsx           # React DOM root entry
├── index.html             # SEO meta tags, OpenGraph, Schema.org LocalBusiness markup
└── package.json
```

---

© Aventura Dental Group. All rights reserved.
