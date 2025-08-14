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
      title: 'Solutions Logistiques Complètes',
      subtitle: 'Expédition, Entreposage & Livraison de Confiance',
      description: 'Nous offrons des solutions logistiques complètes incluant expédition, entreposage, gestion d\'inventaire, livraison à domicile, et services CFS.',
      cta: 'Nos Services',
      video: 'Regarder la Vidéo'
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions logistiques adaptées à vos besoins',
      shipping: {
        title: 'Expédition',
        description: 'Services d\'expédition fiables et rapides pour tous vos besoins'
      },
      warehousing: {
        title: 'Entreposage',
        description: 'Installations d\'entreposage sécurisées et modernes'
      },
      inventory: {
        title: 'Gestion d\'Inventaire',
        description: 'Systèmes avancés de gestion et suivi d\'inventaire'
      },
      delivery: {
        title: 'Livraison à Domicile',
        description: 'Services de livraison rapides et fiables jusqu\'à votre porte'
      },
      cfs: {
        title: 'Services CFS',
        description: 'Container Freight Station et entrepôt sous douane'
      }
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Votre Partenaire Logistique de Confiance',
      description: 'Nous sommes spécialisés dans les solutions logistiques complètes, servant les clients B2B et B2C avec excellence et professionnalisme.',
      mission: 'Notre Mission',
      missionText: 'Fournir des solutions logistiques innovantes et fiables qui dépassent les attentes de nos clients.',
      vision: 'Notre Vision',
      visionText: 'Être le leader régional en solutions logistiques intégrées.'
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
      company: 'Logistics Solutions',
      description: 'Votre partenaire de confiance pour tous vos besoins logistiques.',
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
      title: 'Comprehensive Logistics Solutions',
      subtitle: 'Trusted Shipping, Warehousing & Delivery',
      description: 'We provide comprehensive logistics solutions including shipping, warehousing, inventory management, home delivery, and CFS services.',
      cta: 'Our Services',
      video: 'Watch Video'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Logistics solutions tailored to your needs',
      shipping: {
        title: 'Shipping',
        description: 'Reliable and fast shipping services for all your needs'
      },
      warehousing: {
        title: 'Warehousing',
        description: 'Secure and modern warehousing facilities'
      },
      inventory: {
        title: 'Inventory Management',
        description: 'Advanced inventory management and tracking systems'
      },
      delivery: {
        title: 'Home Delivery',
        description: 'Fast and reliable delivery services to your doorstep'
      },
      cfs: {
        title: 'CFS Services',
        description: 'Container Freight Station and duty paid warehouse'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Your Trusted Logistics Partner',
      description: 'We specialize in comprehensive logistics solutions, serving both B2B and B2C clients with excellence and professionalism.',
      mission: 'Our Mission',
      missionText: 'To provide innovative and reliable logistics solutions that exceed our clients\' expectations.',
      vision: 'Our Vision',
      visionText: 'To be the regional leader in integrated logistics solutions.'
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
      company: 'Logistics Solutions',
      description: 'Your trusted partner for all logistics needs.',
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
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
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