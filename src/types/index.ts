export interface Language {
  code: 'fr' | 'en';
  name: string;
  flag: string;
}

export interface Translation {
  [key: string]: string | Translation | string[] | Array<{ title: string; description: string }> | Array<{ range: string; title: string; description: string }> | Array<{ title: string; description: string }>;
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
  language?: 'fr' | 'en';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}