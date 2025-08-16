import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translation } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  translations: Translation;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

const translations: Record<string, Translation> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      contact: 'Contact',
      faq: 'FAQ'
    },
    hero: {
      title: 'Votre guichet unique pour la logistique',
      subtitle: 'Fret aérien, fret maritime, douane et entreposage',
      description: 'Depuis près de 30 ans, nous orchestrons vos flux de bout en bout: transport, dédouanement, projets hors gabarit, périssables et dangereux, et solutions d\'entreposage.',
      cta: 'Nos Services',
      video: 'Regarder la Vidéo'
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Des solutions logistiques conçues pour vos opérations',
      shipping: {
        title: 'Fret Aérien',
        description: 'Organisation et suivi de vos envois urgents partout dans le monde'
      },
      warehousing: {
        title: 'Entreposage',
        description: 'Stockage sécurisé, préparation de commandes et solutions flexibles'
      },
      inventory: {
        title: 'Dédouanement',
        description: 'Accompagnement complet en classification, conformité et formalités douanières'
      },
      delivery: {
        title: 'Projets & Hors Gabarit',
        description: 'Gestion de cargaisons spéciales avec planification et exécution sur mesure'
      },
      cfs: {
        title: 'Périssables & Dangereux',
        description: 'Permis, emballage, chaîne du froid et conditions de transport adaptées'
      }
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Partenaire logistique fiable et réactif',
      description: 'Depuis 1994, nous aidons les entreprises à chaque étape de leur chaîne logistique: fret aérien et maritime, formalités douanières, entreposage et solutions projets. Présence active à Maurice, Madagascar et en Afrique du Sud.',
      mission: 'Notre Mission',
      missionText: 'Simplifier la logistique avec des solutions fiables, transparentes et performantes.',
      vision: 'Notre Vision',
      visionText: 'Relier durablement les marchés d\'Afrique, d\'Asie et d\'Europe grâce à des services intégrés.'
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes là pour vous aider',
      form: {
        name: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        service: 'Service demandé',
        message: 'Message (optionnel)',
        submit: 'Envoyer'
      },
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Heures d\'ouverture'
      }
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Trouvez rapidement les réponses à vos questions'
    },
    footer: {
      company: 'WorldLink Logistics',
      description: 'Votre partenaire de confiance pour le fret, la douane et l\'entreposage.',
      links: 'Liens Rapides',
      contact: 'Contact',
      rights: 'Tous droits réservés.'
    },
    chat: {
      title: 'Support Client',
      placeholder: 'Tapez votre message...',
      send: 'Envoyer',
      welcome: 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
      offline: 'Nos agents sont actuellement hors ligne. Laissez un message et nous vous répondrons bientôt.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      faq: 'FAQ'
    },
    hero: {
      title: 'Your one-stop partner for logistics',
      subtitle: 'Air freight, ocean freight, customs and warehousing',
      description: 'For nearly three decades, we orchestrate end-to-end flows: transport, customs clearance, project cargo, perishables and dangerous goods, and flexible warehousing.',
      cta: 'Our Services',
      video: 'Watch Video'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Logistics solutions purpose-built for your operations',
      shipping: {
        title: 'Air Freight',
        description: 'Time-critical shipments arranged and monitored worldwide'
      },
      warehousing: {
        title: 'Warehousing',
        description: 'Secure storage, order preparation and flexible capacity'
      },
      inventory: {
        title: 'Customs Clearing',
        description: 'End-to-end support for classification, compliance and clearance'
      },
      delivery: {
        title: 'Project Cargo',
        description: 'Out-of-gauge and heavy-lift moves with tailored engineering'
      },
      cfs: {
        title: 'Perishables & Dangerous Goods',
        description: 'Permits, packaging, cold chain and special freight conditions'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Reliable and responsive logistics partner',
      description: 'Established in 1994, we support businesses across the supply chain: air and ocean freight, customs formalities, warehousing and project solutions. Active presence in Mauritius, Madagascar and South Africa.',
      mission: 'Our Mission',
      missionText: 'Simplify logistics through reliable, transparent and high-performance solutions.',
      vision: 'Our Vision',
      visionText: 'Sustainably connect African, Asian and European markets with integrated services.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Service Requested',
        message: 'Message (optional)',
        submit: 'Send'
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find quick answers to your questions'
    },
    footer: {
      company: 'WorldLink Logistics',
      description: 'Your trusted partner for freight, customs and warehousing.',
      links: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.'
    },
    chat: {
      title: 'Customer Support',
      placeholder: 'Type your message...',
      send: 'Send',
      welcome: 'Hello! How can I help you today?',
      offline: 'Our agents are currently offline. Leave a message and we\'ll get back to you soon.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const savedLanguageCode = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
      const defaultLanguage = languages.find(lang => lang.code === 'en') || languages[0];
      if (savedLanguageCode) {
        const savedLanguage = languages.find(lang => lang.code === savedLanguageCode);
        return savedLanguage || defaultLanguage;
      }
      return defaultLanguage;
    } catch {
      return languages.find(lang => lang.code === 'en') || languages[0];
    }
  });

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', language.code);
      }
    } catch {
      // Ignore persistence errors
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage.code];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      translations: translations[currentLanguage.code],
      changeLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };