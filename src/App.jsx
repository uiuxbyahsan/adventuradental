import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import SignatureTreatment from './components/SignatureTreatment';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Reviews from './components/Reviews';
import Financing from './components/Financing';
import Gallery from './components/Gallery';
import PatientResources from './components/PatientResources';
import Office from './components/Office';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import BookingModal from './components/BookingModal';
import { useScrollReveal } from './utils/useScrollReveal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Activate scroll-reveal animations across viewports
  useScrollReveal();

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* Top Header & Sticky Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      <main id="main-content">
        {/* 1. Large Editorial Hero Slider with Authentic Assets */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Horizontal Minimal Trust Bar (4.9★ Google & Yelp) */}
        <TrustBar />

        {/* 3. Comprehensive Services Discovery (Minimal Cards & 1-Line Copy) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 4. "Transform your smile." Signature Section with Side-by-Side Comparison */}
        <SignatureTreatment onOpenBooking={handleOpenBooking} />

        {/* 5. Dedicated Before & After Transformation Gallery with Filters & Sliders */}
        <BeforeAfterGallery onOpenBooking={handleOpenBooking} />

        {/* 6. Why Choose Us 4-Pillar Grid */}
        <WhyChooseUs />

        {/* 7. "Meet Our Doctors" Section (Dr. Jessica Cismas & Dr. Harvey Rosa) */}
        <Doctors onOpenBooking={handleOpenBooking} />

        {/* 8. Google & Yelp Reviews Section with Auto-Animated Slider & Dots */}
        <Reviews />

        {/* 9. "No Insurance? No Problem." CareCredit® Feature with Apply Now */}
        <Financing onOpenBooking={handleOpenBooking} />

        {/* 10. Curated Smile Portfolio & Lightbox */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* 11. Patient Resources Hub Cards */}
        <PatientResources onOpenBooking={handleOpenBooking} />

        {/* 12. Office Location, Interactive Map & Hours */}
        <Office onOpenBooking={handleOpenBooking} />

        {/* 13. Large Premium Final CTA */}
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* 14. Sophisticated Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 15. Mobile Fixed Bottom Action Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* 16. Primary Conversion: 4-Step Interactive Booking Flow */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
