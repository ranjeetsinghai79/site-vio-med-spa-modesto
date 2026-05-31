import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "VIO Med Spa",
    tagline: "Rejuvenate. Enhance. Feel Beautiful.",
    phone: "(209) 876-8420",
    phoneHref: "tel:+12098768420",
    email: "info@viomedspa.com",
    address: "123 Main St",
    city: "Modesto",
    serviceAreas: ["Modesto", "Ceres", "Turlock"],
    license: "CA Medical License #123456",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "star", title: "Botox® & Dysport®", desc: "Smooth away wrinkles and fine lines for a refreshed, youthful appearance.", urgent: false },
    { icon: "heart", title: "Dermal Fillers", desc: "Restore volume, enhance contours, and achieve a natural, lifted look with Juvederm® and Restylane.", urgent: false },
    { icon: "sparkles", title: "Hydrafacial", desc: "Deeply cleanse, extract, and hydrate your skin for an instant glow and lasting radiance.", urgent: false },
    { icon: "shield-check", title: "Microneedling", desc: "Stimulate collagen production and improve skin texture, tone, and firmness with Pixel8 RF and SkinPen.", urgent: false },
    { icon: "scissors", title: "Laser Hair Removal", desc: "Achieve long-lasting smooth skin with our advanced laser technology, safe for various skin types.", urgent: false },
    { icon: "thermometer", title: "PRF Hair Restoration", desc: "Naturally stimulate hair growth and improve hair density for a fuller, healthier head of hair.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Modesto, CA", stars: 5, text: "I had a Hydrafacial at VIO Med Spa and my skin has never looked better! The esthetician was incredibly knowledgeable and made me feel so comfortable. My skin felt plump and radiant for weeks after. Highly recommend!" },
    { name: "Mark T.", location: "Ceres, CA", stars: 5, text: "The Botox treatment I received here was fantastic. It looked completely natural, and the results were exactly what I wanted. The staff is professional, and the facility is beautiful. I'm so happy I found VIO Med Spa." },
    { name: "Jessica R.", location: "Turlock, CA", stars: 5, text: "I've been coming to VIO Med Spa for laser hair removal for months now, and the results are amazing. The process is quick, and the technicians are always so kind and efficient. It's truly a luxurious experience every time." }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Personalized Treatment Plans", "Advanced Technology", "CLUBVIO Membership Program", "Financing Options Available"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 5, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified medical professionals dedicated to your aesthetic goals." },
    { icon: "heart", title: "Personalized Care", desc: "We create custom treatment plans tailored to your unique needs and desired outcomes." },
    { icon: "sparkles", title: "Luxurious Environment", desc: "Experience your treatments in a serene, upscale setting designed for ultimate comfort and relaxation." },
    { icon: "shield-check", title: "Cutting-Edge Technology", desc: "We utilize the latest advancements in aesthetic medicine for safe, effective, and superior results." },
    { icon: "dollar-sign", title: "Flexible Financing", desc: "Achieve your beauty goals with convenient payment plans and membership options." },
    { icon: "thumbs-up", title: "Exceptional Results", desc: "We are committed to delivering natural-looking, transformative results that enhance your confidence." }
  ],

  formServiceOptions: ["Aesthetic Wellness Quiz", "Botox®", "Dysport®", "Jeuveau®", "Juvederm®", "PRF EZ Gel", "Restylane", "RHA® Collection", "Platelet-Rich Plasma (PRP)", "Sculptra®", "Dermaplaning", "Hydrafacial", "VIO Signature Facial", "Pixel8 RF Microneedling", "SkinPen Microneedling", "Erbium", "LED Light Therapy", "Pix:E Laser Treatment", "VI Peel", "Hydrafacial Keravive", "Laser Hair Removal", "PRF Hair Restoration"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!