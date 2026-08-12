import {
  ServiceItem,
  WaterproofingApplication,
  ProjectItem,
  TestimonialItem,
  WhyChooseReason,
} from '../types';

export const COMPANY_INFO = {
  name: 'Zeal Construction',
  tagline: 'Water Proofing, Engineers & Contractors',
  phone: '+91 98866 30779',
  phoneClean: '+919886630779',
  email: 'lakshminarayanan@zealconstruction.in',
  address:
    'Dharmaram College, 32, 7th B Main, Post, BTM 1st Stage, Bengaluru, Karnataka 560029',
  city: 'Bengaluru, Karnataka',
  pincode: '560029',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.857642352825!2d77.60831207507548!3d12.916892987393438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc514868eb%3A0x8892bebe30a38d78!2s7th%20B%20Main%20Rd%2C%20BTM%201st%20Stage%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin',
};

export const WATERPROOFING_APPLICATIONS: WaterproofingApplication[] = [
  {
    id: 'footing',
    title: 'Footing',
    description:
      'Deep foundation protection preventing sub-surface water pressure and chemical degradation of structural concrete.',
    iconName: 'Layers',
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'retaining-wall',
    title: 'Retaining Wall',
    description:
      'Positive and negative side waterproofing membranes to stop lateral soil moisture intrusion.',
    iconName: 'Shield',
    image:
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'grade-slab',
    title: 'Grade Slab',
    description:
      'Under-slab vapor barriers and crystalline treatments to eliminate capillary dampness rising through floors.',
    iconName: 'Grid',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'podium',
    title: 'Podium',
    description:
      'Heavy-duty elastomeric coatings and drainage boards for high-traffic landscaped multi-level podium slabs.',
    iconName: 'Building2',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'terrace',
    title: 'Terrace',
    description:
      'Monolithic heat-reflective and UV-resistant terrace coats designed for Bengaluru monsoon cycles.',
    iconName: 'Home',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description:
      'Specialized hydrostatic waterproofing systems with high chemical resistance against chlorinated water pressures.',
    iconName: 'Waves',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ug-sump',
    title: 'UG Sump',
    description:
      'Non-toxic, food-grade compliant crystalline waterproofing for subterranean potable water storage tanks.',
    iconName: 'Container',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'overhead-tank',
    title: 'Overhead Tank',
    description:
      'Flexible cementitious linings engineered to withstand thermal expansion and continuous water pressure.',
    iconName: 'Box',
    image:
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'expansion-joints',
    title: 'Expansion Joints',
    description:
      'High-movement elastomeric joint sealants and backing rods to prevent leakages at structural building joints.',
    iconName: 'Maximize2',
    image:
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80',
  },
];

export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: 'exterior-waterproofing',
    title: 'Exterior Water Proofing',
    shortDesc:
      'We make a strong water proofing chemicals for perfect solutions.',
    fullDesc:
      'Protect your external facade, parapet walls, and exposed brick/concrete from rainfall penetration. We use high-tensile acrylic elastomeric coatings and hydrophobic silane-siloxane penetrating sealers to ensure long-term outdoor weatherability.',
    category: 'waterproofing',
    iconName: 'Umbrella',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Weather-proof elastomeric acrylic chemical barrier',
      'Crack-bridging flexibility up to 2mm',
      'Fungus & algae growth inhibition',
      'UV resistant & anti-carbonation properties',
    ],
  },
  {
    id: 'interior-waterproofing',
    title: 'Interior Water Proofing',
    shortDesc:
      'We make a fall selling water proof solutions for permanent solution.',
    fullDesc:
      'Comprehensive moisture barriers for interior damp walls, ceiling seepage, and wet areas like bathrooms and kitchens. Our crystalline penetrants react with moisture to seal microscopic capillary pores deep inside concrete walls.',
    category: 'waterproofing',
    iconName: 'Droplets',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Permanent crystalline pore-blocking chemical reaction',
      'Prevents paint peeling, efflorescence & saltpetre formation',
      'Odorless, non-toxic & indoor air quality safe',
      'Zero alteration to wall finishes',
    ],
  },
  {
    id: 'villa-waterproofing-roof',
    title: 'Villa Water Proofing Roof',
    shortDesc: "We make roof water proofing for all type of Villa's.",
    fullDesc:
      'Specialized roof and terrace waterproofing for high-end luxury villas, sloped roofs, tiled rooftops, and concrete slabs. Combines thermal heat barrier technology with multi-layer reinforced waterproofing membranes.',
    category: 'waterproofing',
    iconName: 'Home',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Suitable for flat slabs, clay tile roofs & steel pergolas',
      'Solar reflective topcoat reduces roof surface temperatures',
      'Seamless glass-fiber reinforced membrane',
      'Full protection against monsoon pooling water',
    ],
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  ...FEATURED_SERVICES,
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    shortDesc:
      'Turnkey home building services from foundation excavation to final key handover.',
    fullDesc:
      'We build high-grade single homes, villas, and multi-family apartments with structural precision, premium materials, and integrated damp-proofing engineered into every layer.',
    category: 'construction',
    iconName: 'Hammer',
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Architectural planning & structural design validation',
      'Quality AAC blocks & grade-A cement construction',
      'Built-in damp proof course (DPC) at plinth level',
      'Transparent milestone-based progress reporting',
    ],
  },
  {
    id: 'structural-waterproofing',
    title: 'Structural Waterproofing',
    shortDesc:
      'Heavy-duty chemical tanking and foundation protection for structural longevity.',
    fullDesc:
      'Preserve the structural integrity of concrete columns, beams, and deep basements against hydrostatic pressures, soil moisture, and ground acid corrosion.',
    category: 'structural',
    iconName: 'ShieldAlert',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'High hydrostatic pressure resistance',
      'Polyurethane injection grouting for active leaks',
      'Cold-applied rubberized bituminous membranes',
      'Structural reinforcement protection',
    ],
  },
  {
    id: 'terrace-waterproofing',
    title: 'Terrace Waterproofing',
    shortDesc:
      'Monolithic heat-reflective, elastomeric terrace waterproofing systems.',
    fullDesc:
      'Eliminate rooftop leaks and thermal expansion cracks on flat concrete roofs, roof gardens, and exposed slabs.',
    category: 'waterproofing',
    iconName: 'Sun',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Ponding water resistant formulation',
      'Reduces indoor room temperatures up to 5°C',
      'Seamless non-joint application',
      'High solar reflective index (SRI)',
    ],
  },
  {
    id: 'basement-retaining-wall',
    title: 'Basement & Retaining Wall Waterproofing',
    shortDesc:
      'Positive and negative side waterproofing for subterranean spaces.',
    fullDesc:
      'Keep multi-level basements, underground parking, and retaining walls 100% dry even during monsoon groundwater rise.',
    category: 'waterproofing',
    iconName: 'Maximize',
    image:
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Crystalline slurry tanking systems',
      'Geotextile drainage sheet integration',
      'EPDM / PVC waterstop joint sealants',
      'Negative pressure withstand capability',
    ],
  },
  {
    id: 'swimming-pool-waterproofing',
    title: 'Swimming Pool Waterproofing',
    shortDesc:
      'Continuous flexible waterproofing membranes for pools and water bodies.',
    fullDesc:
      'Engineered to withstand heavy hydraulic pressure and chemical exposure in luxury swimming pools and fountains.',
    category: 'waterproofing',
    iconName: 'Waves',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Flexible 2-component polymer-modified cementitious membrane',
      'High elasticity for structural movement',
      'Tile bedding mortar compatibility',
      'Resistant to chlorine and pool cleaning agents',
    ],
  },
  {
    id: 'ug-sump-waterproofing',
    title: 'UG Sump Waterproofing',
    shortDesc: 'Food-grade, non-toxic waterproofing for underground water tanks.',
    fullDesc:
      'Ensure zero water contamination and zero groundwater leakage into underground drinking water sumps.',
    category: 'waterproofing',
    iconName: 'Database',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      '100% potable water safe & non-toxic',
      'Prevents ingress of sewage / soil contamination',
      'Anti-bacterial coating finish',
      'High adhesion to old concrete',
    ],
  },
  {
    id: 'overhead-tank-waterproofing',
    title: 'Overhead Tank Waterproofing',
    shortDesc: 'Leak-proof internal sealing for overhead concrete water tanks.',
    fullDesc:
      'Protects overhead tanks from structural dampness, ceiling seepage, and concrete rebar corrosion.',
    category: 'waterproofing',
    iconName: 'Box',
    image:
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Withstands positive hydrostatic head',
      'Prevents structural cracking around inlet/outlet pipes',
      'Easy to clean hygienic surface finish',
      'Long-life polymeric matrix',
    ],
  },
  {
    id: 'expansion-joint-waterproofing',
    title: 'Expansion Joint Waterproofing',
    shortDesc:
      'Flexible joint sealant and backing strip installation for structural movement joints.',
    fullDesc:
      'Seals expansion and contraction joints between large building blocks against water penetration.',
    category: 'structural',
    iconName: 'Split',
    image:
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Polysulfide & polyurethane elastomeric sealant',
      'Accommodates ±25% joint movement',
      'High bonding strength to concrete edges',
      'Heavy traffic and weather resistant',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'traya-commercial',
    title: 'Traya Commercial',
    location: 'Bangalore',
    categories: ['Construct', 'Custom Builds', 'Sustainable Design'],
    clientType: 'Commercial',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description:
      'The TRIYA Commercial project in Bangalore involved comprehensive waterproofing solutions to ensure long-term structural protection. Our team implemented advanced waterproofing techniques to safeguard the building from moisture and leakage issues. With careful planning and precise execution, we delivered reliable results that enhance durability and maintain the building’s quality standards.',
    highlights: [
      'Full podium & basement chemical tanking',
      'Glass facade structural perimeter sealing',
      'High-durability roof waterproofing membrane',
      'Completed ahead of monsoon deadline',
    ],
  },
  {
    id: 'vr-mall-chennai',
    title: 'VR MALL – Chennai',
    location: 'Chennai',
    categories: ['Urban Design', 'Shoping Mall', 'Innovative Spaces'],
    clientType: 'Urban Mall',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
    description:
      'The VR Mall project in Chennai involved structural construction and comprehensive waterproofing to ensure durability and long-term protection. Our team addressed complex construction challenges while implementing reliable waterproofing solutions to safeguard the building from water intrusion. The result is a strong, well-protected commercial structure built to meet modern standards of quality and performance.',
    highlights: [
      'Large footprint podium slab waterproofing',
      'Underground parking basement moisture barriers',
      'Expansion joint elastomeric sealants throughout high-traffic zones',
      'Zero-leakage guarantee under heavy coastal rainfall',
    ],
  },
  {
    id: 'villa-roof-enclosure',
    title: 'Villa Roof & Steel Structure Waterproofing',
    location: 'BTM Layout & JP Nagar, Bangalore',
    categories: ['Residential', 'Custom Builds', 'Structural Steel'],
    clientType: 'Residential',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Precision residential villa construction featuring custom steel canopy frames, AAC lightweight block masonry, and multi-layer terrace roof waterproofing designed for ultimate thermal comfort and permanent leak protection in Bengaluru.',
    highlights: [
      'Integrated structural steel canopy roof frame',
      'AAC block damp-proof course integration',
      'Crystalline terrace coating with heat resistance',
      'Custom rainwater drainage gutting system',
    ],
  },
  {
    id: 'indiqube-commercial-bangalore',
    title: 'IndiQube Commercial Glass Tower',
    location: 'Outer Ring Road / BTM, Bangalore',
    categories: ['Commercial', 'Structural', 'Facade Protection'],
    clientType: 'Commercial',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Specialized curtain wall weatherproofing, UG sump crystalline treatment, and overhead water tank chemical lining for high-occupancy corporate office complexes in Bengaluru.',
    highlights: [
      '2,500 sq.ft UG sump crystalline food-grade sealing',
      'Curtain wall perimeter expansion joint sealing',
      'Basement retaining wall injection grouting',
      'Post-completion 10-year warranty coverage',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'We had a persistent leakage issue on our terrace for two years that no one could fix. Zeal Construction identified the root cause immediately. Their team was professional, used high-quality materials, and most importantly, our home is finally dry. Best waterproofing service in Bengaluru!',
    author: 'Residential Client',
    role: 'Homeowner',
    location: 'BTM Layout',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'We had exceptional work on our new apartment complex. From the UG sumps to the overhead tanks, the execution was flawless. They stick to their timely delivery promise and maintain a very clean work site. Highly recommended for any large-scale civil works.',
    author: 'Property Developer',
    role: 'Commercial Developer',
    location: 'Bengaluru',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'It’s rare to find a contractor with this level of technical expertise. The 5-star rating is well-deserved. They didn’t just ‘apply paint’; they explained the structural chemistry behind the waterproofing. Peace of mind guaranteed.',
    author: 'Villa Owner',
    role: 'Luxury Villa Owner',
    location: 'JP Nagar',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'We chose Zeal Construction for our commercial basement and retaining walls. Even after heavy monsoon rains, there hasn’t been a single damp spot. Their specialized approach to expansion joints and structural integrity is unmatched. Definitely a contractor you can trust for the long haul.',
    author: 'Builder',
    role: 'Commercial Builder',
    location: 'Bengaluru',
    rating: 5,
  },
];

export const WHY_CHOOSE_REASONS: WhyChooseReason[] = [
  {
    id: 'craftsmanship',
    title: 'Skilled Craftsmanship',
    description:
      'We bring years of experience and expertise to every project, ensuring quality workmanship you can rely on.',
    iconName: 'Award',
  },
  {
    id: 'delivery',
    title: 'Timely Project Delivery',
    description:
      'We understand the importance of deadlines and strive to complete projects on schedule, keeping you informed every step of the way.',
    iconName: 'Clock',
  },
  {
    id: 'communication',
    title: 'Transparent Communication',
    description:
      'We prioritize clear and honest communication, addressing any concerns and keeping you updated throughout the process.',
    iconName: 'MessageSquare',
  },
  {
    id: 'solutions',
    title: 'Innovative Solutions',
    description:
      'We apply innovative methods and technologies to enhance efficiency and provide tailored solutions for your construction needs.',
    iconName: 'Lightbulb',
  },
  {
    id: 'client-centric',
    title: 'Client-Centric Approach',
    description:
      'Your satisfaction is our priority. We work closely with you to understand your vision and bring it to life.',
    iconName: 'Users',
  },
  {
    id: 'support',
    title: 'Post-Project Support',
    description:
      'We offer continued support even after project completion, ensuring that you have the help you need when you need it.',
    iconName: 'ShieldCheck',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'During our initial consultation, we discuss your vision, needs, and budget to set clear expectations and ensure alignment.',
    iconName: 'Compass',
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'Next, we create a detailed project plan, outlining timelines, materials, and key milestones to guide the process.',
    iconName: 'FileText',
  },
  {
    step: '03',
    title: 'Execution',
    description:
      'Finally, we execute the plan, keeping you updated throughout, ensuring everything runs smoothly until project completion.',
    iconName: 'CheckCircle2',
  },
];

export const TRUST_BADGES = [
  { label: 'Certified Quality Assured', icon: 'ShieldCheck' },
  { label: 'Accredited Professionals', icon: 'UserCheck' },
  { label: 'Award-Winning Service', icon: 'Trophy' },
  { label: 'Safety Excellence Award', icon: 'HardHat' },
];
