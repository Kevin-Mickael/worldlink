export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType: string;
  structuredData: object;
}

export const getSEOMetadata = (page: string): SEOMetadata => {
  const baseUrl = 'https://worldlinklogistics.mu';
  const baseKeywords = 'Worldlink Logistics Mauritius, Freight Forwarder Mauritius, Freight Company Mauritius, Shipping Company Mauritius, Customs Clearing Mauritius, Airfreight Mauritius, Sea Freight Mauritius, Cargo Services Mauritius, Freight Consolidation Mauritius, Container Shipping Mauritius';

  const seoData: Record<string, SEOMetadata> = {
    home: {
      title: 'Worldlink Logistics Mauritius - Leading Freight Forwarder & Logistics Solutions',
      description: 'Premier fournisseur de services logistiques à Maurice. Fret aérien, maritime, dédouanement, entreposage CFS et solutions logistiques complètes depuis 2014.',
      keywords: `${baseKeywords}, Logistics Solutions Mauritius, CFS Warehousing Mauritius, Jin Fei Business Park, Neeraj Goreeba`,
      canonical: `${baseUrl}/`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Worldlink Logistics Ltd",
        "url": baseUrl,
        "logo": `${baseUrl}/worldlink.png`,
        "description": "Leading logistics provider in Mauritius offering air freight, ocean freight, customs clearing, and CFS warehousing services since 2014.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jin Fei Business & Industrial Park",
          "addressLocality": "Riche Terre",
          "addressRegion": "Mauritius",
          "addressCountry": "MU"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+230 5258 2275",
          "contactType": "customer service",
          "areaServed": "MU",
          "availableLanguage": ["English", "French"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/worldlink-logistics-mauritius",
          "https://www.facebook.com/worldlinklogisticsmauritius"
        ],
        "foundingDate": "2014",
        "numberOfEmployees": "30+",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -20.3484,
            "longitude": 57.5522
          },
          "geoRadius": "50000"
        }
      }
    },
    about: {
      title: 'About Worldlink Logistics Mauritius - Your Trusted Logistics Partner Since 2014',
      description: 'Découvrez l\'histoire de Worldlink Logistics, leader logistique à Maurice avec ses propres installations CFS au Jin Fei Business Park. Plus de 30 professionnels à votre service.',
      keywords: `${baseKeywords}, About Worldlink Logistics, Neeraj Goreeba, Jin Fei Business Park Mauritius, CFS Facilities Mauritius`,
      canonical: `${baseUrl}/about`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Worldlink Logistics Mauritius",
        "description": "Learn about Worldlink Logistics, a leading logistics provider in Mauritius with own CFS facilities at Jin Fei Business Park.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd",
          "founder": "Neeraj Goreeba",
          "foundingDate": "2014",
          "description": "Leading logistics provider in Mauritius with comprehensive freight and logistics solutions."
        }
      }
    },
    services: {
      title: 'Logistics Services Mauritius - Air Freight, Sea Freight, Customs & CFS Warehousing',
      description: 'Services logistiques complets à Maurice : fret aérien, maritime, dédouanement, entreposage CFS, consolidation de fret et solutions sur mesure pour tous vos besoins.',
      keywords: `${baseKeywords}, Logistics Services Mauritius, Air Freight Services, Sea Freight Services, CFS Warehousing Services`,
      canonical: `${baseUrl}/services`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Comprehensive Logistics Services",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Logistics Services",
        "areaServed": "Mauritius",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Logistics Services Catalog"
        }
      }
    },
    'freight-consolidation': {
      title: 'Freight Consolidation Mauritius - LCL & FCL Services | Worldlink Logistics',
      description: 'Services de consolidation de fret à Maurice : LCL, FCL, optimisation des coûts de transport et chargement de conteneurs complets. Économies de 15-30% garanties.',
      keywords: `${baseKeywords}, Freight Consolidation Mauritius, LCL Services Mauritius, FCL Services Mauritius, Container Shipping Mauritius`,
      canonical: `${baseUrl}/freight-consolidation`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Freight Consolidation & Full Container Loads",
        "description": "Freight consolidation services in Mauritius with LCL and FCL options, optimizing transport costs by 15-30%.",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Freight Consolidation",
        "areaServed": "Mauritius"
      }
    },
    'personal-effects': {
      title: 'Personal Effects Transport Mauritius - International Relocation Services',
      description: 'Transport d\'effets personnels et projets à Maurice. Déménagement international, transport d\'équipements et solutions de relocalisation expatriés.',
      keywords: `${baseKeywords}, Personal Effects Transport Mauritius, International Relocation Mauritius, Expatriate Services Mauritius`,
      canonical: `${baseUrl}/personal-effects`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Personal Effects & Project Transport",
        "description": "Specialized transport for personal effects and projects with delicate and secure handling in Mauritius.",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Personal Effects Transport",
        "areaServed": "Mauritius"
      }
    },
    'refrigerated-containers': {
      title: 'Refrigerated Containers Mauritius - Food Transport & Cold Chain Solutions',
      description: 'Conteneurs frigorifiques à Maurice pour le transport de denrées alimentaires. Chaîne du froid contrôlée, certification HACCP et monitoring 24/7.',
      keywords: `${baseKeywords}, Refrigerated Containers Mauritius, Cold Chain Logistics Mauritius, Food Transport Mauritius, HACCP Certified`,
      canonical: `${baseUrl}/refrigerated-containers`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Refrigerated Food Containers",
        "description": "Specialized refrigerated containers for food transport with controlled cold chain and HACCP certification in Mauritius.",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Refrigerated Transport",
        "areaServed": "Mauritius"
      }
    },
    'customs-clearing': {
      title: 'Customs Clearing Mauritius - Import Export Customs Services | Worldlink',
      description: 'Services de dédouanement à Maurice pour import/export. Conformité réglementaire, gestion documentaire et optimisation des délais de mainlevée.',
      keywords: `${baseKeywords}, Customs Clearing Mauritius, Import Export Services Mauritius, Customs Compliance Mauritius`,
      canonical: `${baseUrl}/customs-clearing`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Customs Clearing & Compliance",
        "description": "Customs clearing and regulatory compliance services to ensure smooth customs passage of your goods in Mauritius.",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Customs Clearing",
        "areaServed": "Mauritius"
      }
    },
    airfreight: {
      title: 'Air Freight Services Mauritius - Express & Standard Air Cargo | Worldlink',
      description: 'Services de fret aérien à Maurice : express, standard et charter. Réseau international de partenaires, suivi en temps réel et solutions sur mesure.',
      keywords: `${baseKeywords}, Air Freight Services Mauritius, Express Air Cargo Mauritius, International Air Freight Mauritius`,
      canonical: `${baseUrl}/airfreight`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Air Freight Services",
        "description": "Fast and reliable air freight services in Mauritius with international network of partners for urgent shipments.",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Air Freight",
        "areaServed": "Mauritius"
      }
    },
    'product-sourcing': {
      title: 'Product Sourcing Mauritius - International Supplier Identification & Procurement',
      description: 'Sourcing et approvisionnement de produits à Maurice. Identification des meilleurs fournisseurs internationaux, négociation et contrôle qualité.',
      keywords: `${baseKeywords}, Product Sourcing Mauritius, International Procurement Mauritius, Supplier Identification Mauritius`,
      canonical: `${baseUrl}/product-sourcing`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Product Sourcing & Procurement",
        "description": "International product sourcing and procurement services in Mauritius with identification of the best suppliers.",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Product Sourcing",
        "areaServed": "Mauritius"
      }
    },
    'inland-transport': {
      title: 'Inland Transport Mauritius - CFS Warehousing & Container Management',
      description: 'Transport terrestre et entreposage CFS à Maurice. Gestion de conteneurs, consolidation/déconsolidation et solutions logistiques complètes.',
      keywords: `${baseKeywords}, Inland Transport Mauritius, CFS Warehousing Mauritius, Container Management Mauritius`,
      canonical: `${baseUrl}/inland-transport`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Inland Transport & CFS Warehousing",
        "description": "Complete solutions for container management and inland transport in Mauritius with own CFS warehousing facilities.",
        "provider": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd"
        },
        "serviceType": "Inland Transport",
        "areaServed": "Mauritius"
      }
    },
    contact: {
      title: 'Contact Worldlink Logistics Mauritius - Get Your Free Quote Today',
      description: 'Contactez Worldlink Logistics à Maurice pour vos besoins logistiques. Devis gratuit, assistance 24/7 et solutions personnalisées. Jin Fei Business Park, Riche Terre.',
      keywords: `${baseKeywords}, Contact Worldlink Logistics Mauritius, Logistics Quote Mauritius, Jin Fei Business Park`,
      canonical: `${baseUrl}/contact`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Worldlink Logistics Mauritius",
        "description": "Contact us for your logistics needs in Mauritius. Free quote, 24/7 assistance and personalized solutions.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Worldlink Logistics Ltd",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jin Fei Business Park",
            "addressLocality": "Riche Terre",
            "addressRegion": "Mauritius",
            "addressCountry": "MU"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+230-123-4567",
            "contactType": "customer service",
            "areaServed": "MU"
          }
        }
      }
    },
    faq: {
      title: 'FAQ - Worldlink Logistics Mauritius | Frequently Asked Questions',
      description: 'Questions fréquentes sur les services logistiques de Worldlink à Maurice. Fret, dédouanement, entreposage et solutions logistiques complètes.',
      keywords: `${baseKeywords}, FAQ Logistics Mauritius, Logistics Questions Mauritius, Worldlink Services FAQ`,
      canonical: `${baseUrl}/faq`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": "Frequently Asked Questions - Worldlink Logistics Mauritius",
        "description": "Find answers to common questions about logistics services in Mauritius.",
        "mainEntity": []
      }
    },
    legal: {
      title: 'Legal Information - Terms, Privacy & Returns | Worldlink Logistics',
      description: 'Legal information, terms and conditions, privacy policy, and return policies for Worldlink Logistics Mauritius services.',
      keywords: `${baseKeywords}, Legal Terms Mauritius, Privacy Policy Worldlink, Logistics Terms and Conditions`,
      canonical: `${baseUrl}/legal`,
      ogType: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Legal Information",
        "description": "Legal terms, privacy policy and conditions of service."
      }
    }
  };

  const defaultMetadata: SEOMetadata = {
    title: 'Worldlink Logistics Mauritius',
    description: 'Premier fournisseur de services logistiques à Maurice.',
    keywords: baseKeywords,
    canonical: '', // Will be handled dynamically by SEO component
    ogType: 'website',
    structuredData: {}
  };

  return seoData[page] || defaultMetadata;
};

export const getLocalizedSEOMetadata = (page: string, _t: (key: string) => string, lang: string): SEOMetadata => {
  const metadata = getSEOMetadata(page);

  // Adaptation des titres et descriptions selon la langue
  if (lang === 'fr') {
    // Traductions françaises spécifiques pour le SEO
    const frenchTitles: Record<string, string> = {
      home: 'Worldlink Logistics Mauritius - Leader en Solutions Logistiques Complètes',
      about: 'À Propos de Worldlink Logistics Mauritius - Votre Partenaire Logistique de Confiance Depuis 2014',
      services: 'Services Logistiques Maurice - Fret Aérien, Maritime, Douane et Entreposage CFS',
      'freight-consolidation': 'Consolidation de Fret Maurice - Services LCL et FCL | Worldlink Logistics',
      'personal-effects': 'Transport d\'Effets Personnels Maurice - Services de Relocalisation Internationale',
      'refrigerated-containers': 'Conteneurs Frigorifiques Maurice - Transport Alimentaire et Solutions Chaîne du Froid',
      'customs-clearing': 'Dédouanement Maurice - Services Douaniers Import Export | Worldlink',
      airfreight: 'Services de Fret Aérien Maurice - Fret Express et Standard | Worldlink',
      'product-sourcing': 'Sourcing Produits Maurice - Identification Fournisseurs et Approvisionnement International',
      'inland-transport': 'Transport Terrestre Maurice - Entreposage CFS et Gestion Conteneurs',
      contact: 'Contact Worldlink Logistics Maurice - Obtenez Votre Devis Gratuit Aujourd\'hui',
      faq: 'FAQ - Worldlink Logistics Maurice | Questions Fréquemment Posées'
    };

    const frenchDescriptions: Record<string, string> = {
      home: 'Premier fournisseur de services logistiques à Maurice. Fret aérien, maritime, dédouanement, entreposage CFS et solutions logistiques complètes depuis 2014.',
      about: 'Découvrez l\'histoire de Worldlink Logistics, leader logistique à Maurice avec ses propres installations CFS au Jin Fei Business Park. Plus de 30 professionnels à votre service.',
      services: 'Services logistiques complets à Maurice : fret aérien, maritime, dédouanement, entreposage CFS, consolidation de fret et solutions sur mesure pour tous vos besoins.',
      'freight-consolidation': 'Services de consolidation de fret à Maurice : LCL, FCL, optimisation des coûts de transport et chargement de conteneurs complets. Économies de 15-30% garanties.',
      'personal-effects': 'Transport d\'effets personnels et projets à Maurice. Déménagement international, transport d\'équipements et solutions de relocalisation expatriés.',
      'refrigerated-containers': 'Conteneurs frigorifiques à Maurice pour le transport de denrées alimentaires. Chaîne du froid contrôlée, certification HACCP et monitoring 24/7.',
      'customs-clearing': 'Services de dédouanement à Maurice pour import/export. Conformité réglementaire, gestion documentaire et optimisation des délais de mainlevée.',
      airfreight: 'Services de fret aérien à Maurice : express, standard et charter. Réseau international de partenaires, suivi en temps réel et solutions sur mesure.',
      'product-sourcing': 'Sourcing et approvisionnement de produits à Maurice. Identification des meilleurs fournisseurs internationaux, négociation et contrôle qualité.',
      'inland-transport': 'Transport terrestre et entreposage CFS à Maurice. Gestion de conteneurs, consolidation/déconsolidation et solutions logistiques complètes.',
      contact: 'Contactez Worldlink Logistics à Maurice pour vos besoins logistiques. Devis gratuit, assistance 24/7 et solutions personnalisées. Jin Fei Business Park, Riche Terre.',
      faq: 'Questions fréquentes sur les services logistiques de Worldlink à Maurice. Fret, dédouanement, entreposage et solutions logistiques complètes.'
    };

    if (frenchTitles[page]) {
      metadata.title = frenchTitles[page];
    }
    if (frenchDescriptions[page]) {
      metadata.description = frenchDescriptions[page];
    }
  }

  return metadata;
};
