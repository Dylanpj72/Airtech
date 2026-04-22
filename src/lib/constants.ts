export const SITE_NAME = 'Airtech Services'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.airtech.co.za'
export const SITE_DESCRIPTION =
  'Premium HVAC specialists in Johannesburg. Over 30 years of craftsmanship in air conditioning, evaporative cooling, ventilation, and central vacuum systems. Serving estates, commercial, and residential clients across Gauteng.'

export const NAP = {
  name: 'Airtech Services',
  phone1: '+27114758988',
  phone2: '+27114758998',
  phone1Display: '+27 11 475 8988',
  phone2Display: '+27 11 475 8998',
  mobile: '+27824461043',
  mobileDisplay: '+27 82 446 1043',
  emailSales: 'raymond@airtech.co.za',
  emailService: 'service@airtech.co.za',
  fax: '+27866192870',
  address: '39 Matumie Avenue, Weltevreden Park, Roodepoort',
  postalAddress: 'PO Box 1182, Cresta, 2118',
  city: 'Roodepoort',
  province: 'Gauteng',
  country: 'South Africa',
  // TODO: confirm exact business hours with client
  hours: 'Monday – Friday: 08:00 – 17:00',
  foundedYear: '1992',
  founder: 'Raymond Prout-Jones',
}

export const WHATSAPP_LINK =
  'https://wa.me/27824461043?text=Hi%20Airtech%2C%20I%27d%20like%20a%20free%20quote'

export const SERVICES = [
  {
    title: 'Air Conditioning',
    slug: 'air-conditioning',
    shortDesc: 'Conventional and concealed split systems for homes and commercial spaces.',
    icon: 'Thermometer',
  },
  {
    title: 'Evaporative Cooling',
    slug: 'evaporative-cooling',
    shortDesc: 'Natural, energy-efficient cooling that adds freshness to dry South African air.',
    icon: 'Wind',
  },
  {
    title: 'Ventilation',
    slug: 'ventilation',
    shortDesc: 'Roof ventilators that protect your home from summer heat and moisture damage.',
    icon: 'ArrowUpDown',
  },
  {
    title: 'Central Vacuum',
    slug: 'central-vacuum',
    shortDesc: 'A permanently installed, whisper-quiet vacuum system built into your home.',
    icon: 'CircleDot',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Bjorn Murton',
    rating: 5,
    text: 'We had an 18000btu Jet air conditioner installed in our office. Works like a bomb! The installation itself is very neat with all cables housed in trunking. The team obviously take great pride in their work. 100% recommend!',
    isLocalGuide: false,
    featured: true,
  },
  {
    name: 'Rachel Rodrigues',
    rating: 5,
    text: 'Excellent workmanship, very reliable. I would highly recommend Raymond and his team.',
    isLocalGuide: false,
    featured: true,
  },
  {
    name: 'Lloyd Waldeck',
    rating: 5,
    text: 'Great service and reliable.',
    isLocalGuide: false,
    featured: true,
  },
  {
    name: 'Charles Murray-Blain',
    rating: 5,
    text: 'Positive experience across the board.',
    isLocalGuide: true,
    featured: false,
  },
  {
    name: 'Christo Stander',
    rating: 5,
    text: null,
    isLocalGuide: true,
    featured: false,
  },
  {
    name: 'Colette Theron',
    rating: 5,
    text: null,
    isLocalGuide: true,
    featured: false,
  },
  {
    name: 'Samantha Klette',
    rating: 5,
    text: null,
    isLocalGuide: false,
    featured: false,
  },
]

export const COMMERCIAL_CLIENTS = [
  'MTN',
  'Masterpack',
  'Multiprint Litho',
  'Mortimer Offset',
  'Pilanesburg Airport',
  'Fournos Bakeries',
  'Wingate Country Club',
  'Medicare Pharmacies',
  'Freeworld Coatings (Plascon)',
  'Spectramed',
]

export const ESTATES = [
  { name: 'Dainfern', region: 'Johannesburg North' },
  { name: 'Kyalami', region: 'Johannesburg North' },
  { name: 'Waterfall Equestrian', region: 'Johannesburg North' },
  { name: 'Eagle Canyon', region: 'Johannesburg North' },
  { name: 'Fourways Gardens', region: 'Johannesburg North' },
  { name: 'Silver Lakes', region: 'Pretoria' },
  { name: 'Pecanwood', region: 'Hartbeespoort' },
  { name: 'Westlake', region: 'Hartbeespoort' },
  { name: 'The Coves', region: 'Hartbeespoort' },
  { name: 'Cosmos', region: 'Hartbeespoort' },
]

export const FAQ_ITEMS = [
  {
    question: 'How long does installation take?',
    answer:
      'A standard single-unit split system installation typically takes 4–6 hours. Multi-unit or ducted systems may require 1–3 days depending on complexity. We always confirm the schedule during your free site assessment.',
  },
  {
    question: 'Do you offer warranties on installations?',
    answer:
      'Yes. All installations carry a workmanship warranty, and the equipment is covered by the manufacturer\'s warranty (typically 2–5 years depending on the brand). We\'ll walk you through all warranty details at the time of installation.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We serve the Greater Johannesburg area including Weltevreden Park, Roodepoort, Fourways, Dainfern, Kyalami, Eagle Canyon, Waterfall Equestrian, Silver Lakes, Pecanwood, Hartbeespoort, and all surrounding Gauteng areas.',
  },
  {
    question: 'Do you service units you didn\'t install?',
    answer:
      'Yes. Our technicians can service, repair, and maintain any brand of air conditioner or evaporative cooler, regardless of who originally installed it.',
  },
  {
    question: 'Which aircon brands do you install?',
    answer:
      'We install leading brands including Samsung, LG, Daikin, Midea, Carrier, and Jet. We\'ll recommend the best brand for your budget and application during your free consultation.',
  },
  {
    question: 'What\'s the difference between evaporative cooling and refrigerant AC?',
    answer:
      'Evaporative cooling uses water evaporation to cool the air — it\'s energy-efficient, adds moisture to dry air, and works best in hot, dry climates like the Highveld. Refrigerant air conditioning uses a closed-loop refrigerant cycle, dehumidifies the air, and works effectively in all conditions. We\'ll help you choose the right solution for your climate and building.',
  },
  {
    question: 'Do you offer maintenance contracts?',
    answer:
      'Yes. We offer annual and bi-annual service contracts for both residential and commercial clients. Regular maintenance extends equipment life and keeps your warranty valid. Contact us for a custom maintenance plan.',
  },
  {
    question: 'Can you do concealed/ducted installations in existing homes?',
    answer:
      'Absolutely. Concealed and ducted installations in existing homes are a speciality. We\'ll conduct a site assessment to determine the best routing for ducting and ensure a neat, unobtrusive installation.',
  },
  {
    question: 'Do you provide free quotes?',
    answer:
      'Yes — all quotes and site assessments are completely free and carry no obligation. Simply get in touch and we\'ll arrange a convenient time to visit.',
  },
  {
    question: 'Are you available for emergency breakdowns?',
    answer:
      'Yes. Contact us on our service line at service@airtech.co.za or call +27 11 475 8988 for breakdown assistance. We do our best to respond promptly to emergency service requests.',
  },
]