export interface Language {
  code: 'fr' | 'en';
  name: string;
  flag: string;
}

export interface Translation {
  [key: string]: string | Translation;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}