export const PRACTICE_INFO = {
  name: "Aventura Dental Group",
  shortName: "ADG",
  tagline: "Confident smiles. Exceptional dentistry.",
  description: "Personalized dental care designed around your comfort, health and smile.",
  phone: "305-935-4030",
  phoneRaw: "+13059354030",
  fax: "305-935-4448",
  email: "mcismas@gmail.com",
  address: {
    street: "20475 Biscayne Boulevard, Suite G-9",
    city: "Aventura",
    state: "FL",
    zip: "33180",
    googleMapsUrl: "https://maps.google.com/?q=20475+Biscayne+Blvd+G-9+Aventura+FL+33180"
  },
  hours: [
    { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
    { days: "Saturday – Sunday", time: "Closed (Emergencies by appointment)" }
  ],
  socials: {
    instagram: "https://www.instagram.com/aventuradentalgroup/",
    facebook: "https://facebook.com/Aventura-Dental-Group-264269056968581/",
    yelp: "https://www.yelp.com/biz/aventura-dental-group-aventura",
    google: "https://www.google.com/search?q=Aventura+Dental+Group"
  },
  stats: [
    { value: "4.9★", label: "Google & Yelp Rating" },
    { value: "795+", label: "Verified 5-Star Reviews" },
    { value: "50,000+", label: "Patients Treated" },
    { value: "Since 1985", label: "Trusted in Aventura" }
  ]
};

export const DOCTORS = [
  {
    id: "jessica-cismas",
    name: "Jessica Cismas, D.M.D.",
    role: "Cosmetic & General Dentist",
    credentials: "D.M.D. · Montreal & McGill Graduate",
    image: "/assets/doctors/jessica.jpg",
    shortBio: "Specializing in aesthetic transformations, porcelain veneers, and comprehensive restorative care with a warm, gentle approach.",
    fullBio: "Dr. Jessica Cismas joined Aventura Dental Group in 2017 as the principal general and cosmetic dentist. She earned her Doctor of Medicine in Dentistry (D.M.D.) in 2005 from the University of Montreal and completed a prestigious General Practice Residency at McGill University in 2006. Prior to moving to South Florida, she practiced in Manhattan, New York for 12 years. Over her distinguished career, Dr. Cismas has treated over 50,000 patients and performed thousands of aesthetic veneers, crowns, full mouth rehabilitations, and Invisalign alignments.",
    accreditations: ["University of Montreal (D.M.D.)", "McGill University (G.P.R.)", "12 Years Manhattan Clinical Experience", "Invisalign® Certified Provider", "50,000+ Treated Patients"]
  },
  {
    id: "harvey-rosa",
    name: "Harvey S. Rosa, D.M.D.",
    role: "Restorative & Implant Specialist",
    credentials: "D.M.D. · Tufts & Mt. Sinai Graduate",
    image: "/assets/doctors/harvey.jpg",
    shortBio: "Over three decades of clinical leadership in restorative, implant, and complex prosthetic dentistry across South Florida.",
    fullBio: "Dr. Harvey S. Rosa is a veteran restorative dentist serving South Florida since 1974. He earned his undergraduate degree from Queens College in New York and received his doctoral dental training at the Tufts University School of Dental Medicine in Boston. Following graduation, Dr. Rosa completed the prestigious General Practice Residency program at Mount Sinai Hospital. With more than 30 years of dedicated practice in Aventura, Dr. Rosa is an active member of the American Dental Association, Florida Dental Association, East Coast Dental Society, and American Academy of Cosmetic Dentistry (AACD).",
    accreditations: ["Tufts School of Dental Medicine", "Mount Sinai Hospital GPR", "American Academy of Cosmetic Dentistry (AACD)", "Florida Dental Association (FDA)", "Seattle Study Club Aventura"]
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    tagline: "Natural radiance crafted to your facial proportions.",
    description: "Artistic smile enhancements utilizing ultra-thin porcelain veneers, state-of-the-art whitening, and discreet bonding.",
    services: [
      {
        name: "Porcelain Veneers",
        desc: "Ultra-thin handcrafted ceramic shells for natural translucency and alignment.",
        time: "2 Visits",
        popular: true
      },
      {
        name: "In-Office Teeth Whitening",
        desc: "Brightens enamel up to 8 shades in a comfortable 60-minute visit.",
        time: "60 Mins",
        popular: true
      },
      {
        name: "Cosmetic Dental Bonding",
        desc: "Sculpted composite resin correcting chips and gaps in a single visit.",
        time: "Single Visit",
        popular: false
      },
      {
        name: "Full Smile Makeovers",
        desc: "Holistic transformation balancing lip line, symmetry, and tooth shape.",
        time: "Custom Plan",
        popular: true
      }
    ]
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    tagline: "Rebuild strength, function, and oral harmony.",
    description: "Long-lasting biocompatible solutions for damaged, missing, or compromised teeth.",
    services: [
      {
        name: "Dental Implants",
        desc: "Permanent titanium foundation topped with custom ceramic crowns.",
        time: "Permanent",
        popular: true
      },
      {
        name: "Porcelain Crowns & Bridges",
        desc: "Precision-milled ceramic restorations strengthening weakened teeth.",
        time: "2 Visits",
        popular: true
      },
      {
        name: "Gentle Root Canal Therapy",
        desc: "Comfortable endodontic care using rotary systems to save natural teeth.",
        time: "Single Visit",
        popular: false
      },
      {
        name: "Tooth-Colored Fillings",
        desc: "Mercury-free composite restorations preserving natural tooth structure.",
        time: "30-45 Mins",
        popular: false
      }
    ]
  },
  {
    id: "preventive",
    title: "Preventive Care",
    tagline: "Proactive care to preserve your lifelong oral health.",
    description: "Thorough hygienic treatments, advanced digital diagnostics, and gentle periodontal therapy.",
    services: [
      {
        name: "Comprehensive Exams & Ultrasonic Cleaning",
        desc: "Gentle ultrasonic cleaning paired with high-definition digital diagnostics.",
        time: "60 Mins",
        popular: true
      },
      {
        name: "Periodontal Gum Care",
        desc: "Advanced scaling and root planing to preserve lifelong gum health.",
        time: "Specialized",
        popular: false
      },
      {
        name: "Low-Radiation Digital X-Rays",
        desc: "Instant 3D diagnostics with 90% less radiation than traditional x-rays.",
        time: "Instant",
        popular: false
      },
      {
        name: "Custom Nightguards & Sleep Care",
        desc: "Custom-molded oral appliances to alleviate clenching and protect enamel.",
        time: "Custom Fit",
        popular: false
      }
    ]
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    tagline: "Discreet alignment for adults and teens.",
    description: "Nearly invisible clear aligner therapy designed for comfortable, predictable teeth straightening.",
    services: [
      {
        name: "Invisalign® Clear Aligners",
        desc: "Discreet, removable clear aligners straightening teeth without metal wires.",
        time: "6–18 Months",
        popular: true
      },
      {
        name: "ClearCorrect Aligners",
        desc: "Precision aligners engineered for subtle cosmetic tooth realignment.",
        time: "Custom",
        popular: false
      },
      {
        name: "Aesthetic Bite Correction",
        desc: "Targeted realignment focused on anterior teeth and smile arc harmony.",
        time: "Fast-Track",
        popular: true
      }
    ]
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "case-1",
    title: "Porcelain Veneers & Smile Reconstruction",
    doctor: "Dr. Jessica Cismas, D.M.D.",
    category: "Veneers & Full Rehabilitation",
    description: "Patient presented with worn enamel, minor crowding, and shade dissatisfaction. Completed full upper aesthetic rehabilitation with custom feldspathic porcelain veneers.",
    beforeImg: "/assets/cases/case-rehab-before.webp",
    afterImg: "/assets/cases/case-rehab-after.webp",
    fullImg: "/assets/cases/case-rehab.webp",
    turnaround: "2 Appointments",
    results: ["Enhanced Lip Support", "Optimal White Balance", "Natural Enamel Translucency"]
  },
  {
    id: "case-2",
    title: "Aesthetic Anterior Restoration",
    doctor: "Dr. Jessica Cismas, D.M.D.",
    category: "Cosmetic Restoration",
    description: "Patient wanted to address deep interdental staining, edge chipping, and uneven tooth lengths. Reconstructed with handcrafted ceramic veneers.",
    beforeImg: "/assets/cases/case-restoration-before.webp",
    afterImg: "/assets/cases/case-restoration-after.webp",
    fullImg: "/assets/cases/case-restoration.webp",
    turnaround: "10 Days",
    results: ["Symmetrical Smile Arc", "Flawless Gingival Harmony", "No Metal Substructures"]
  },
  {
    id: "case-3",
    title: "Full Mouth Aesthetic Rehabilitation",
    doctor: "Dr. Jessica Cismas & Dr. Harvey Rosa",
    category: "Full Mouth Rehabilitation",
    description: "Comprehensive restoration balancing collapsed bite vertical dimension, replacing aged dental work with durable, luminous porcelain crowns and veneers.",
    beforeImg: "/assets/cases/case-veneers-2-before.webp",
    afterImg: "/assets/cases/case-veneers-2-after.webp",
    fullImg: "/assets/cases/case-veneers-2.webp",
    turnaround: "3 Weeks",
    results: ["Restored Chewing Function", "Youthful Smile Line", "Long-Term Occlusal Stability"]
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Michael R.",
    location: "Aventura, FL",
    rating: 5,
    source: "Google Review",
    date: "Verified Patient",
    quote: "Dr. Jessica Cismas is truly a master of dental aesthetics. I had been insecure about my front teeth for years, and the veneer work she delivered looks completely natural. The office is pristine, calm, and everyone makes you feel like family.",
    highlight: "Looks completely natural"
  },
  {
    id: 2,
    name: "Elena S.",
    location: "Sunny Isles Beach, FL",
    rating: 5,
    source: "Google Review",
    date: "Verified Patient",
    quote: "I am usually terrified of dental visits, but Aventura Dental Group changed everything for me. Dr. Rosa and Dr. Cismas took the time to explain every single step, and the procedure was 100% painless. Simply the highest standard of care in Miami.",
    highlight: "100% painless experience"
  },
  {
    id: 3,
    name: "David K.",
    location: "Golden Beach, FL",
    rating: 5,
    source: "Yelp Verified",
    date: "Verified Patient",
    quote: "Aventura Dental Group has been my family’s dental practice for over 15 years. Their modern equipment, prompt scheduling, and spotless facility make every visit effortless. There is no better team in South Florida.",
    highlight: "Our family dentist for 15+ years"
  },
  {
    id: 4,
    name: "Sophia L.",
    location: "Hallandale, FL",
    rating: 5,
    source: "Google Review",
    date: "Verified Patient",
    quote: "The full mouth restoration Dr. Cismas completed for me was life changing. My bite feels balanced, my headaches stopped, and I smile with complete confidence in photos now. Thank you to the entire ADG team!",
    highlight: "Truly life changing"
  },
  {
    id: 5,
    name: "Robert M.",
    location: "Aventura, FL",
    rating: 5,
    source: "Google Review",
    date: "Verified Patient",
    quote: "Courteous, meticulous, and always on time. Dr. Rosa is an old-school gentleman with cutting-edge expertise. My dental implants look and function exactly like my original teeth.",
    highlight: "Meticulous & cutting-edge"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Full Mouth Cosmetic Reconstruction",
    category: "Smile Makeovers",
    image: "/assets/cases/case-rehab.webp",
    tags: ["Porcelain Veneers", "Full Mouth Rehab"]
  },
  {
    id: "g2",
    title: "Anterior Aesthetic Restoration",
    category: "Veneers",
    image: "/assets/cases/case-restoration.webp",
    tags: ["Ceramic Veneers", "Shade Correction"]
  },
  {
    id: "g3",
    title: "Natural Smile Transformation",
    category: "Smile Makeovers",
    image: "/assets/cases/case-veneers-1.webp",
    tags: ["Smile Makeover", "Porcelain Veneers"]
  },
  {
    id: "g4",
    title: "Complex Bite & Aesthetic Rehabilitation",
    category: "Restorative",
    image: "/assets/cases/case-veneers-2.webp",
    tags: ["Crown & Bridge", "Aesthetic Alignment"]
  },
  {
    id: "g5",
    title: "Emergency Single-Day Aesthetic Repair",
    category: "General Dentistry",
    image: "/assets/gallery/gallery-emergency-2020-15.webp",
    tags: ["Emergency Repair", "Tooth Bonding"]
  },
  {
    id: "g6",
    title: "Upper Arch Ceramic Veneers Case",
    category: "Veneers",
    image: "/assets/gallery/gallery-veneers-2020-11.webp",
    tags: ["Porcelain Veneers", "Aventura Clinic Case"]
  },
  {
    id: "g7",
    title: "Full Mouth Porcelain Restoration",
    category: "Restorative",
    image: "/assets/gallery/gallery-rehab-1.webp",
    tags: ["Full Arch", "Occlusal Balance"]
  },
  {
    id: "g8",
    title: "Aesthetic Cosmetic Bonding",
    category: "Bonding",
    image: "/assets/gallery/gallery-bonding-0687.webp",
    tags: ["Micro-Bonding", "In-Office Treatment"]
  }
];
