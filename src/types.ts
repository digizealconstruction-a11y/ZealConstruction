export type PageRoute =
  | 'home'
  | 'why-choose-us'
  | 'appointment'
  | 'projects'
  | 'about'
  | 'services'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'waterproofing' | 'construction' | 'structural';
  iconName: string;
  image: string;
  keyFeatures?: string[];
}

export interface WaterproofingApplication {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  categories: string[];
  description: string;
  image: string;
  clientType: 'Commercial' | 'Residential' | 'Urban Mall';
  status: 'Completed';
  highlights?: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location?: string;
  rating: number;
}

export interface WhyChooseReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  note: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface QuoteFormData {
  service: string;
  propertyType: 'Residential' | 'Commercial' | 'Villa' | 'Industrial';
  areaSqFt?: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  details?: string;
}
