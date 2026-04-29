export const CLINIC = {
  name: "Kurinji Dental Centre",
  tagline: "Compassionate Dental Care for Every Smile",
  doctor: {
    name: "Dr. Umamaheshwari S",
    qualifications: "BDS",
    shortBio:
      "Dr. Umamaheshwari is a dedicated dental surgeon with extensive experience in family and cosmetic dentistry. She is passionate about pain-free treatments and personalized care, helping patients of all ages achieve healthy, confident smiles.",
    specializations: ["General Dentistry", "Cosmetic Dentistry", "Pediatric Dentistry"],
    memberships: [
      "Indian Dental Association (IDA)",
      "Tamil Nadu State Dental Council",
    ],
    education: [
      { degree: "BDS", institution: "Tamil Nadu Government Dental College", year: "2015" },
    ],
    experience: [
      { role: "Associate Dentist", place: "Coimbatore Dental Clinic", period: "2015-2018" },
      { role: "Founder & Chief Dentist", place: "Kurinji Dental Centre", period: "2018-Present" },
    ],
    languages: ["Tamil", "English"],
    publications: "Active contributor to community dental health awareness camps in Tiruppur.",
  },
  address: "Opposite Kovai Departmental Store, Anupparpalayam, Tiruppur, Tamil Nadu 641652",
  phone: "+91-96001-23456",
  phoneDisplay: "96001-23456",
  email: "appointment@kurinjidentaltiruppur.com",
  whatsapp: "+918072354657",
  established: 2018,
  timings: {
    weekday: { morning: "9:30 AM - 1:30 PM", evening: "5:00 PM - 9:00 PM" },
    sunday: "10:00 AM - 1:00 PM (By appointment only)",
  },
  stats: {
    years: "8+",
    patients: "10,000+",
    rating: "4.7",
  },
} as const;

export const SERVICES = [
  {
    id: "orthodontics",
    icon: "SmilePlus",
    title: "Orthodontics / Braces",
    shortDesc: "Traditional braces, ceramic braces, and clear aligners for perfectly aligned teeth.",
    fullDesc: "Orthodontic treatment corrects misaligned teeth and jaws to give you a beautiful, confident smile. Whether you prefer traditional metal braces or invisible aligners, we have the right solution for you.",
    types: [
      { name: "Metal Braces", desc: "Traditional, most effective", price: "₹25,000 - ₹40,000" },
      { name: "Ceramic Braces", desc: "Tooth-colored, less visible", price: "₹35,000 - ₹55,000" },
      { name: "Clear Aligners", desc: "Invisible aligners, removable", price: "₹60,000 - ₹1,50,000" },
    ],
    duration: "12-24 months",
    faqs: [
      { q: "Does it hurt?", a: "You may feel mild discomfort for the first few days after adjustments, but it's very manageable." },
      { q: "Can adults get braces?", a: "Absolutely! Many of our patients are adults. It's never too late for a perfect smile." },
      { q: "How often do I visit?", a: "Typically every 4-6 weeks for adjustments and progress checks." },
    ],
  },
  {
    id: "implants",
    icon: "Bone",
    title: "Dental Implants",
    shortDesc: "Permanent tooth replacement with titanium implants. Look and feel like natural teeth.",
    fullDesc: "Dental implants are the gold standard for replacing missing teeth. A titanium post is placed in your jawbone, and a natural-looking crown is attached on top.",
    steps: ["Consultation", "CT Scan", "Implant Placement", "Healing (3-6 months)", "Crown Placement"],
    price: "₹25,000 - ₹40,000 per implant",
    benefits: ["Permanent solution", "Natural look and feel", "No effect on adjacent teeth", "Prevents bone loss"],
  },
  {
    id: "cosmetic",
    icon: "Sparkles",
    title: "Cosmetic Dentistry",
    shortDesc: "Teeth whitening, veneers, and smile makeovers for the perfect smile.",
    fullDesc: "Transform your smile with our cosmetic dentistry services. From professional teeth whitening to porcelain veneers, we help you achieve the smile you've always wanted.",
    treatments: [
      { name: "Teeth Whitening", desc: "In-office professional whitening", price: "₹5,000 - ₹15,000" },
      { name: "Veneers", desc: "Porcelain shells for perfect teeth", price: "₹8,000 - ₹15,000 per tooth" },
      { name: "Smile Makeover", desc: "Complete smile transformation", price: "Customized pricing" },
    ],
  },
  {
    id: "root-canal",
    icon: "Wrench",
    title: "Root Canal Treatment",
    shortDesc: "Pain-free root canal with modern rotary instruments and microscopic precision.",
    fullDesc: "Modern root canal treatment is PAINLESS — don't be scared! We use advanced rotary instruments and microscopic precision to save your natural tooth. Most treatments are completed in a single sitting.",
    price: "₹3,000 - ₹8,000 per tooth",
    highlight: "Single sitting RCT available",
  },
  {
    id: "pediatric",
    icon: "Baby",
    title: "Pediatric Dentistry",
    shortDesc: "Gentle dental care for children in a fun, comfortable environment.",
    fullDesc: "We love treating kids! Our clinic has a child-friendly environment where your little ones feel safe and comfortable. We recommend the first dental visit by age 1.",
    services: ["Dental Cleaning", "Fluoride Treatment", "Dental Sealants", "Fillings", "Space Maintainers"],
  },
  {
    id: "general",
    icon: "Stethoscope",
    title: "General Dentistry",
    shortDesc: "Cleanings, fillings, extractions, and preventive care for the whole family.",
    fullDesc: "From routine cleanings to dental fillings and extractions, we provide comprehensive general dental care for your entire family.",
    pricing: [
      { name: "Dental Cleaning", price: "₹500 - ₹1,500" },
      { name: "Fillings", price: "₹500 - ₹2,000" },
      { name: "Extractions", price: "₹500 - ₹3,000" },
      { name: "Dental X-ray", price: "₹200 - ₹500" },
    ],
  },
] as const;

export const PRICING_TABLE = [
  { treatment: "Dental Cleaning", price: "₹500 - ₹1,500" },
  { treatment: "Tooth Filling", price: "₹500 - ₹2,000" },
  { treatment: "Root Canal (per tooth)", price: "₹3,000 - ₹8,000" },
  { treatment: "Extraction", price: "₹500 - ₹3,000" },
  { treatment: "Teeth Whitening", price: "₹5,000 - ₹15,000" },
  { treatment: "Metal Braces (full)", price: "₹25,000 - ₹40,000" },
  { treatment: "Ceramic Braces", price: "₹35,000 - ₹55,000" },
  { treatment: "Clear Aligners", price: "₹60,000 - ₹1,50,000" },
  { treatment: "Single Implant", price: "₹25,000 - ₹40,000" },
  { treatment: "Veneers (per tooth)", price: "₹8,000 - ₹15,000" },
  { treatment: "Crown", price: "₹3,000 - ₹10,000" },
  { treatment: "Dentures", price: "₹5,000 - ₹25,000" },
  { treatment: "Child Dental Check-up", price: "₹300 - ₹500" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya M.",
    location: "Tiruppur",
    rating: 5,
    text: "I was terrified of dentists, but Dr. Umamaheshwari made me feel completely comfortable. My root canal was painless! Highly recommend Kurinji Dental Centre.",
  },
  {
    name: "Arun K.",
    location: "Avinashi",
    rating: 5,
    text: "Got my braces done here. The results are amazing! Dr. Umamaheshwari is very patient and explains everything clearly. The clinic is very clean and modern.",
  },
  {
    name: "Senthil & Family",
    location: "Tiruppur",
    rating: 5,
    text: "Best dental clinic in Tiruppur. Brought my whole family here. Even my 5-year-old daughter wasn't scared. Very child-friendly.",
  },
  {
    name: "Lakshmi R.",
    location: "Tiruppur",
    rating: 5,
    text: "Dr. Umamaheshwari did my teeth whitening and the results are stunning! Very professional and the pricing is transparent. No hidden charges.",
  },
] as const;

export const EQUIPMENT = [
  { name: "Digital X-Ray", desc: "Low radiation, instant images", icon: "ScanLine" },
  { name: "Intraoral Camera", desc: "See what we see — live on screen", icon: "Camera" },
  { name: "Dental Laser", desc: "Minimally invasive soft tissue procedures", icon: "Zap" },
  { name: "CAD/CAM System", desc: "Same-day crowns and restorations", icon: "Monitor" },
  { name: "Autoclave Sterilizer", desc: "Hospital-grade sterilization", icon: "ShieldCheck" },
  { name: "5 Dental Chairs", desc: "Minimal waiting time", icon: "Armchair" },
] as const;

export const FAQS = [
  {
    q: "Is dental treatment painful?",
    a: "Modern dentistry is virtually painless. We use advanced anesthesia and gentle techniques. Most patients are surprised at how comfortable the experience is.",
  },
  {
    q: "How much do braces cost?",
    a: "Metal braces start at ₹25,000, ceramic at ₹35,000, and clear aligners at ₹60,000. EMI options available.",
  },
  {
    q: "Do you treat children?",
    a: "Yes! We love treating kids. Our clinic has a child-friendly environment. We recommend first dental visit by age 1.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately at 96001-23456. We accept walk-ins for emergencies during clinic hours. For after-hours, call and we'll guide you.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we accept all major dental insurance providers. Please bring your insurance card during your visit.",
  },
  {
    q: "How long does a root canal take?",
    a: "Most root canals are completed in a single sitting (45-60 minutes). Complex cases may need 2 sittings.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const APPOINTMENT_TYPES = [
  "New Patient Consultation",
  "Follow-up Visit",
  "Dental Cleaning",
  "Toothache / Emergency",
  "Braces Consultation",
  "Implant Consultation",
  "Cosmetic / Whitening",
  "Child Dental Check-up",
  "Other",
] as const;

export const TIME_SLOTS = [
  "9:30 AM",
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
] as const;

export const REFERRAL_SOURCES = [
  "Google Search",
  "Friend/Family Referral",
  "Instagram",
  "Walk-in",
  "Other",
] as const;
