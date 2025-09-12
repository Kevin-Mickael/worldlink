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
      video: 'Regarder la Vidéo',
      mainTitle: 'Logistique de Confiance.',
      subTitle: 'Connexions Mondiales.'
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Avec plus d\'une décennie d\'expertise, nous nous engageons à fournir des solutions logistiques efficaces, fiables et personnalisées pour les entreprises et particuliers du monde entier.',
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
      },
      homeServices: {
        freight: {
          title: 'Freight Consolidation & Full Container Loads',
          description: 'Optimisez vos coûts de transport avec notre service de consolidation de fret et de chargement de conteneurs complets.'
        },
        personal: {
          title: 'Personal Effects & Project Shipments',
          description: 'Transport spécialisé pour vos effets personnels et projets avec traitement délicat et sécurisé.'
        },
        refrigerated: {
          title: 'Refrigerated Food Containers',
          description: 'Conteneurs frigorifiques spécialisés pour le transport de denrées alimentaires avec chaîne du froid contrôlée.'
        },
        customs: {
          title: 'Customs Clearing & Compliance',
          description: 'Services de dédouanement et de conformité réglementaire pour assurer le passage en douane de vos marchandises.'
        },
        airfreight: {
          title: 'Airfreight Services',
          description: 'Transport aérien rapide et fiable pour vos envois urgents avec réseau de partenaires internationaux.'
        },
        sourcing: {
          title: 'Product Sourcing & Procurement',
          description: 'Sourcing et approvisionnement de produits à l\'international avec identification des meilleurs fournisseurs.'
        },
        inland: {
          title: 'Inland Transport & CFS Warehousing',
          description: 'Transport terrestre et entreposage CFS avec solutions complètes pour la gestion de vos conteneurs.'
        },
        seeDetails: 'See service details'
      }
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Partenaire logistique fiable et réactif',
      description: 'Depuis 2014, nous aidons les entreprises à chaque étape de leur chaîne logistique: fret aérien et maritime, formalités douanières, entreposage et solutions projets. Présence active à Maurice avec nos propres installations CFS au Jin Fei Business Park.',
      mission: 'Mission Statement',
      missionText: 'At Worldlink Logistics Ltd, our mission is to deliver reliable, affordable, and high-quality freight services tailored to meet the needs of a diverse customer base. We are committed to making logistics accessible to businesses and individuals across different budgets, while constantly innovating to keep pace with global trends and evolving client expectations.',
      vision: 'Vision Statement',
      visionText: 'Our vision is to become a one-stop solution for all import, export, and logistics needs — integrating services such as freight forwarding, warehousing, delivery, container sales, and project logistics — under one roof. We aim to redefine the logistics experience through comprehensive service offerings, modern solutions, and exceptional customer care.',
      homeAbout: {
        title: 'À Propos de Worldlink',
        description1: 'Fondée en 2014 par le Directeur <strong>M. Neeraj Goreeba</strong>, Worldlink Logistics Ltd a rapidement évolué d\'une équipe de deux personnes vers un fournisseur logistique de premier plan à Maurice, employant aujourd\'hui plus de 30 professionnels.',
        description2: 'Avec ses propres installations d\'entreposage CFS au <strong>Jin Fei Business & Industrial Park, Riche Terre</strong>, l\'entreprise propose une gamme complète de solutions de fret et de logistique.',
        experience: 'années',
        experienceLabel: 'd\'expérience'
      }
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes là pour vous aider',
      description: 'Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets logistiques.',
      form: {
        name: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        service: 'Service demandé',
        message: 'Message (optionnel)',
        submit: 'Envoyer'
      },
      formTitle: 'Envoyez-nous un Message',
      successTitle: 'Message Envoyé!',
      successMessage: 'Nous vous répondrons dans les plus brefs délais.',
      selectService: 'Sélectionner un service',
      sending: 'Envoi en cours...',
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Heures d\'ouverture'
      },
      infoTitle: 'Informations de Contact',
      locationTitle: 'Notre Localisation',
      mapPlaceholder: 'Carte Interactive',
      quickContactTitle: 'Besoin d\'une Réponse Rapide?',
      quickContactDescription: 'Notre équipe est disponible par téléphone pour répondre immédiatement à vos questions urgentes.',
      callNow: 'Appelez Maintenant',
      sendEmail: 'Envoyez un Email',
      homeContact: {
        title: 'Passons aux choses sérieuses',
        subtitle: 'Contactez nos experts logistiques et obtenez un devis personnalisé pour vos besoins d\'expédition',
        form: {
          name: 'Nom complet *',
          email: 'Adresse email *',
          phone: 'Numéro de téléphone',
          country: 'Pays',
          services: 'Services *',
          message: 'Message *',
          submit: 'Obtenir un devis',
          namePlaceholder: 'Entrez votre nom complet',
          emailPlaceholder: 'Entrez votre email',
          phonePlaceholder: 'Entrez votre numéro de téléphone',
          countryPlaceholder: 'Sélectionnez votre pays',
          servicesPlaceholder: 'Sélectionnez un service',
          messagePlaceholder: 'Parlez-nous de vos besoins d\'expédition...',
          submitting: 'Envoi en cours...',
          successMessage: 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
          errorMessage: 'Une erreur est survenue. Veuillez réessayer.'
        }
      }
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Trouvez rapidement les réponses à vos questions',
      description: 'Consultez les réponses aux questions les plus courantes ou contactez-nous pour une assistance personnalisée.',
      searchPlaceholder: 'Rechercher une question...',
      allCategories: 'Toutes',
      noResultsTitle: 'Aucune question trouvée',
      noResultsMessage: 'Essayez avec d\'autres mots-clés ou contactez-nous directement.',
      ctaTitle: 'Vous n\'avez pas trouvé votre réponse?',
      ctaDescription: 'Notre équipe d\'experts est là pour répondre à toutes vos questions spécifiques.',
      callUs: 'Nous Appeler',
      sendEmail: 'Envoyer un Email'
    },
    faqItems: {
      // FREIGHT CONSOLIDATION & FCL
      freightConsolidation: {
        question: 'Qu\'est-ce que la consolidation de fret et comment peut-elle réduire mes coûts ?',
        answer: 'La consolidation de fret consiste à regrouper plusieurs envois de différents clients dans un même conteneur. Cela permet de partager les coûts de transport et de réduire significativement vos frais d\'expédition. Nous optimisons l\'espace et négocions des tarifs avantageux grâce aux volumes consolidés.',
        category: 'Consolidation de Fret'
      },
      lclFcl: {
        question: 'Quelle est la différence entre LCL et FCL ?',
        answer: 'LCL (Less than Container Load) : pour des volumes inférieurs à un conteneur complet. FCL (Full Container Load) : pour des volumes nécessitant un conteneur entier. Nous proposons les deux options avec des tarifs optimisés selon vos besoins.',
        category: 'Consolidation de Fret'
      },
      consolidationTime: {
        question: 'Combien de temps dure généralement une consolidation ?',
        answer: 'Le délai de consolidation varie selon la destination et la fréquence des départs. En général, nous consolidons les envois dans un délai de 3-7 jours pour optimiser les coûts tout en respectant vos contraintes de temps.',
        category: 'Consolidation de Fret'
      },

      // PERSONAL EFFECTS & PROJECT SHIPMENTS
      personalEffects: {
        question: 'Pouvez-vous transporter des effets personnels de déménagement ?',
        answer: 'Absolument ! Nous spécialisons dans le transport d\'effets personnels avec un traitement délicat. Nous proposons un emballage professionnel, une assurance complète et un suivi personnalisé pour vos biens les plus précieux.',
        category: 'Effets Personnels'
      },
      fragileItems: {
        question: 'Comment protégez-vous les objets fragiles ?',
        answer: 'Nous utilisons des matériaux d\'emballage professionnels (papier de soie, mousse, cartons renforcés) et des caisses en bois sur mesure si nécessaire. Chaque objet fragile est emballé individuellement et marqué clairement.',
        category: 'Effets Personnels'
      },
      unpackingService: {
        question: 'Proposez-vous des services de déballage à destination ?',
        answer: 'Oui, nous pouvons organiser le déballage et l\'installation à destination. Nos équipes locales s\'occupent de tout, du déchargement à la mise en place de vos meubles et objets.',
        category: 'Effets Personnels'
      },

      // REFRIGERATED CONTAINERS
      temperatureRange: {
        question: 'Quelles températures pouvez-vous maintenir dans vos conteneurs frigorifiques ?',
        answer: 'Nos conteneurs frigorifiques maintiennent des températures de -30°C à +30°C selon vos besoins. Nous surveillons la température en temps réel et vous alertons immédiatement en cas de variation.',
        category: 'Conteneurs Frigorifiques'
      },
      foodStandards: {
        question: 'Vos conteneurs sont-ils conformes aux normes alimentaires internationales ?',
        answer: 'Oui, tous nos conteneurs frigorifiques sont certifiés HACCP et respectent les normes internationales de sécurité alimentaire. Ils sont régulièrement inspectés et nettoyés selon les protocoles sanitaires.',
        category: 'Conteneurs Frigorifiques'
      },
      coolingFailure: {
        question: 'Que se passe-t-il en cas de panne de froid ?',
        answer: 'Nos conteneurs sont équipés de systèmes de secours et d\'alertes en temps réel. En cas de problème, nos équipes techniques interviennent immédiatement et nous vous tenons informés de la situation.',
        category: 'Conteneurs Frigorifiques'
      },

      // CUSTOMS CLEARING
      customsDocuments: {
        question: 'Quels documents sont nécessaires pour le dédouanement ?',
        answer: 'Les documents requis varient selon le type de marchandise : facture commerciale, liste de colisage, certificat d\'origine, licences d\'importation si nécessaire. Nous vous fournissons une liste complète adaptée à votre situation.',
        category: 'Dédouanement'
      },
      clearingTime: {
        question: 'Combien de temps dure généralement le dédouanement ?',
        answer: 'Le dédouanement standard prend 1-3 jours ouvrables. Les délais peuvent varier selon la complexité des marchandises et les exigences douanières spécifiques. Nous optimisons chaque étape pour minimiser les délais.',
        category: 'Dédouanement'
      },
      customsTaxes: {
        question: 'Pouvez-vous gérer les taxes et droits de douane ?',
        answer: 'Oui, nous calculons et payons tous les droits et taxes en votre nom. Nous vous fournissons un devis détaillé à l\'avance et vous facturons exactement le montant payé aux autorités douanières.',
        category: 'Dédouanement'
      },

      // AIRFREIGHT SERVICES
      airDeliveryTime: {
        question: 'Quels sont vos délais de livraison aérienne ?',
        answer: 'Nos services aériens couvrent tous les délais : Express (1-2 jours), Standard (3-5 jours) et Économique (5-7 jours). Nous choisissons la solution optimale selon vos contraintes de temps et de budget.',
        category: 'Transport Aérien'
      },
      doorToDoor: {
        question: 'Pouvez-vous organiser le transport porte-à-porte ?',
        answer: 'Absolument ! Nous gérons l\'ensemble de la chaîne logistique : collecte chez vous, transport aérien, dédouanement et livraison à destination. Un service complet avec un seul interlocuteur.',
        category: 'Transport Aérien'
      },
      airCargoTypes: {
        question: 'Quels types de marchandises pouvez-vous transporter par avion ?',
        answer: 'Nous transportons tous types de marchandises : documents, échantillons, pièces détachées, équipements industriels, produits pharmaceutiques, etc. Certaines marchandises dangereuses nécessitent des autorisations spéciales.',
        category: 'Transport Aérien'
      },

      // PRODUCT SOURCING
      supplierIdentification: {
        question: 'Comment identifiez-vous les meilleurs fournisseurs ?',
        answer: 'Notre réseau international et nos années d\'expérience nous permettent d\'identifier des fournisseurs fiables et qualifiés. Nous évaluons la qualité, la fiabilité, les certifications et les références avant toute recommandation.',
        category: 'Sourcing & Approvisionnement'
      },
      priceNegotiation: {
        question: 'Pouvez-vous négocier les prix avec les fournisseurs ?',
        answer: 'Oui, nous négocions activement les prix, les conditions de paiement et les délais de livraison. Notre expertise et nos volumes nous permettent d\'obtenir des conditions avantageuses pour nos clients.',
        category: 'Sourcing & Approvisionnement'
      },
      qualityControl: {
        question: 'Proposez-vous un contrôle qualité des produits ?',
        answer: 'Nous proposons un contrôle qualité complet : inspection des marchandises, vérification des spécifications, tests de conformité et suivi de la production. Nous vous tenons informés à chaque étape.',
        category: 'Sourcing & Approvisionnement'
      },

      // INLAND TRANSPORT & CFS
      cfsFacility: {
        question: 'Qu\'est-ce que votre installation CFS et quels sont ses avantages ?',
        answer: 'Notre CFS (Container Freight Station) à Jin Fei Business Park est une installation d\'entreposage et de groupage de conteneurs. Avantages : contrôle total de la chaîne logistique, délais optimisés, coûts réduits et sécurité maximale.',
        category: 'Transport Terrestre & CFS'
      },
      inlandCoverage: {
        question: 'Pouvez-vous organiser le transport depuis votre CFS vers n\'importe quelle destination ?',
        answer: 'Oui, nous organisons le transport terrestre vers toutes les destinations à Maurice et dans la région. Nous utilisons notre flotte de camions et notre réseau de transporteurs partenaires pour une couverture complète.',
        category: 'Transport Terrestre & CFS'
      },
      cfsStorage: {
        question: 'Quels sont vos délais de stockage CFS ?',
        answer: 'Nous proposons des solutions de stockage flexibles : court terme (1-7 jours), moyen terme (1-4 semaines) et long terme (1-12 mois). Chaque solution est adaptée à vos besoins spécifiques.',
        category: 'Transport Terrestre & CFS'
      },

      // GENERAL SERVICES
      insurance: {
        question: 'Proposez-vous une assurance pour mes marchandises ?',
        answer: 'Oui, nous proposons une assurance complète couvrant tous les risques de transport : perte, vol, dommages, retards. Nous adaptons la couverture à la valeur et à la nature de vos marchandises.',
        category: 'Services Généraux'
      },
      tracking: {
        question: 'Comment suivez-vous mes expéditions ?',
        answer: 'Nous utilisons un système de suivi en temps réel accessible 24h/24. Vous recevez des notifications automatiques à chaque étape et pouvez consulter le statut de vos expéditions sur notre plateforme en ligne.',
        category: 'Services Généraux'
      },
      quoteResponse: {
        question: 'Quels sont vos délais de réponse pour les devis ?',
        answer: 'Nous fournissons des devis détaillés sous 24-48h pour la plupart des services. Pour les projets complexes, nous organisons une consultation pour comprendre vos besoins et proposer la solution optimale.',
        category: 'Services Généraux'
      },
      complexProjects: {
        question: 'Pouvez-vous gérer des projets logistiques complexes ?',
        answer: 'Absolument ! Notre équipe de 30+ professionnels expérimentés gère des projets logistiques complexes : déménagements internationaux, projets industriels, événements spéciaux. Nous coordonnons tous les aspects pour un résultat optimal.',
        category: 'Services Généraux'
      }
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
    },
    stats: {
      years: "11+ Années d'expérience",
      services: 'Services offerts',
      countries: 'Présence à Maurice',
      support: 'Assistance dédiée'
    },
    cta: {
      title: 'Prêt à Optimiser Votre Logistique?',
      description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins logistiques et découvrir comment nous pouvons vous aider.',
      button: 'Contactez-Nous',
      servicesButton: 'Voir Tous les Services'
    },
    values: {
      title: 'Nos Valeurs',
      subtitle: 'Les valeurs qui guident notre travail quotidien et nos relations avec nos clients.',
      reliability: {
        title: 'Fiabilité',
        description: 'Nous nous engageons à fournir des services fiables et sécurisés à tous nos clients.'
      },
      customerService: {
        title: 'Service Client',
        description: 'Notre équipe dédiée est disponible 24/7 pour répondre à tous vos besoins.'
      },
      globalNetwork: {
        title: 'Réseau Global',
        description: 'Un réseau mondial de partenaires pour des solutions logistiques complètes.'
      },
      excellence: {
        title: 'Excellence',
        description: 'Nous visons l\'excellence dans chaque aspect de nos services logistiques.'
      }
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Rencontrez les experts dédiés qui rendent nos services logistiques exceptionnels.',
      ceo: 'Directeur Général',
      operations: 'Directrice des Opérations',
      logistics: 'Responsable Logistique',
      customerSupport: 'Service Client'
    },
    achievements: {
      title: 'Nos Réalisations',
      subtitle: 'Des chiffres qui témoignent de notre expertise et de votre confiance.',
      experience: 'Années d\'Expérience',
      countries: 'Pays Desservis',
      packages: 'Colis Expédiés'
    },
    servicePages: {
      freightConsolidation: {
        hero: {
          title: 'Consolidation de Fret & Conteneurs Complets',
          subtitle: 'Optimisez vos coûts de transport avec notre service de consolidation de fret',
          description: 'Nous regroupons vos marchandises pour maximiser l\'efficacité et réduire les dépenses tout en garantissant la sécurité et la ponctualité.'
        },
        overview: {
          title: 'Qu\'est-ce que la Consolidation de Fret ?',
          description1: 'La consolidation de fret est une technique logistique qui consiste à regrouper plusieurs envois de différents clients dans un même conteneur ou véhicule de transport. Cette approche permet de réduire significativement les coûts de transport tout en optimisant l\'utilisation de l\'espace disponible.',
          description2: 'Chez Worldlink Logistics, nous maîtrisons parfaitement cette technique et l\'appliquons à tous nos services de transport maritime et terrestre pour vous offrir les tarifs les plus compétitifs du marché.',
          feature: 'Transport multimodal optimisé',
          savings: 'd\'économies moyennes'
        },
        features: {
          title: 'Caractéristiques du Service',
          subtitle: 'Découvrez tous les avantages de notre service de consolidation de fret',
          items: [
            'Consolidation de fret pour optimiser les coûts',
            'Chargement de conteneurs complets (FCL)',
            'Gestion des délais et planification',
            'Suivi en temps réel de vos expéditions',
            'Optimisation des routes et des modes de transport',
            'Gestion des documents de transport',
            'Coordination avec les partenaires internationaux',
            'Reporting détaillé et analytics'
          ]
        },
        benefits: {
          title: 'Pourquoi Choisir Notre Service ?',
          subtitle: 'Les avantages qui font de nous votre partenaire logistique idéal',
          items: [
            { title: 'Réduction des Coûts', description: 'Économies de 15-30% grâce à la consolidation' },
            { title: 'Sécurité Renforcée', description: 'Protection maximale de vos marchandises' },
            { title: 'Couverture Mondiale', description: 'Réseau international de partenaires' },
            { title: 'Fiabilité Garantie', description: 'Suivi et contrôle qualité rigoureux' }
          ]
        },
        process: {
          title: 'Notre Processus de Consolidation',
          subtitle: 'Un processus simple et efficace pour optimiser vos transports',
          steps: [
            { title: 'Analyse des Besoins', description: 'Évaluation de vos volumes et contraintes' },
            { title: 'Planification', description: 'Optimisation des routes et modes de transport' },
            { title: 'Consolidation', description: 'Regroupement et chargement des marchandises' },
            { title: 'Transport & Suivi', description: 'Exécution et monitoring en temps réel' },
            { title: 'Livraison', description: 'Délivrance et documentation finale' }
          ]
        },
        cta: {
          title: 'Prêt à Optimiser Vos Coûts de Transport ?',
          description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé pour la consolidation de votre fret.',
          primaryButton: 'Demander un Devis',
          secondaryButton: 'Voir Tous Nos Services'
        },
        contact: {
          title: 'Besoin d\'Aide ?',
          subtitle: 'Notre équipe d\'experts est là pour vous accompagner dans tous vos projets de consolidation de fret',
          callUs: 'Appelez-nous',
          writeUs: 'Écrivez-nous',
          visitUs: 'Venez nous voir',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Maurice',
          responseTime: 'Réponse sous 24h',
          businessHours: 'Lun-Ven: 8h-18h'
        }
      },
      personalEffects: {
        hero: {
          title: 'Effets Personnels & Projets',
          subtitle: 'Transport spécialisé pour vos effets personnels et projets avec traitement délicat et sécurisé',
          description: 'Nous assurons un transport en toute sécurité de vos biens les plus précieux, qu\'il s\'agisse d\'effets personnels ou d\'équipements de projet complexes.'
        },
        overview: {
          title: 'Transport d\'Effets Personnels & Projets',
          description1: 'Notre service de transport d\'effets personnels et de projets est conçu pour répondre aux besoins spécifiques des particuliers et des entreprises qui doivent déplacer des biens de valeur ou des équipements spécialisés.',
          description2: 'Que vous soyez un expatrié qui déménage, une entreprise qui déplace des équipements, ou un particulier qui transporte des biens précieux, nous vous offrons un service sur mesure avec la plus grande attention aux détails.',
          feature: 'Transport multimodal sécurisé'
        },
        services: {
          title: 'Nos Services Spécialisés',
          subtitle: 'Découvrez notre gamme complète de services pour tous vos besoins de transport',
          items: [
            { title: 'Déménagement International', description: 'Transport complet de vos biens personnels vers l\'étranger' },
            { title: 'Projets Industriels', description: 'Transport d\'équipements et machines spécialisés' },
            { title: 'Véhicules & Équipements', description: 'Transport de véhicules et équipements lourds' },
            { title: 'Relocalisation d\'Expatriés', description: 'Services complets pour les expatriés et leurs familles' }
          ]
        },
        features: {
          title: 'Caractéristiques du Service',
          subtitle: 'Tous les avantages de notre service de transport d\'effets personnels',
          items: [
            'Transport d\'effets personnels sécurisé',
            'Gestion des projets complexes et équipements',
            'Emballage et protection spécialisée',
            'Assurance et suivi personnalisé',
            'Coordination avec les déménageurs locaux',
            'Gestion des formalités douanières',
            'Stockage temporaire si nécessaire',
            'Livraison à domicile ou sur site'
          ]
        },
        benefits: {
          title: 'Pourquoi Nous Choisir ?',
          subtitle: 'Les avantages qui font de nous votre partenaire de confiance',
          items: [
            { title: 'Planification Précise', description: 'Délais respectés et coordination parfaite' },
            { title: 'Protection Maximale', description: 'Emballage et sécurisation de vos biens' },
            { title: 'Couverture Mondiale', description: 'Transport vers toutes destinations' },
            { title: 'Service Personnalisé', description: 'Accompagnement sur mesure' }
          ]
        },
        process: {
          title: 'Notre Processus',
          subtitle: 'Un processus simple et efficace pour vos transports',
          steps: [
            { title: 'Consultation', description: 'Évaluation de vos besoins et planification' },
            { title: 'Préparation', description: 'Emballage et protection de vos biens' },
            { title: 'Transport', description: 'Expédition sécurisée vers destination' },
            { title: 'Livraison', description: 'Délivrance et installation sur site' }
          ]
        },
        cta: {
          title: 'Prêt à Transporter Vos Biens en Toute Sécurité ?',
          description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé pour le transport de vos effets personnels ou équipements de projet.',
          primaryButton: 'Demander un Devis',
          secondaryButton: 'Voir Tous Nos Services'
        },
        contact: {
          title: 'Besoin d\'Aide ?',
          subtitle: 'Notre équipe d\'experts est là pour vous accompagner dans tous vos projets de transport',
          callUs: 'Appelez-nous',
          writeUs: 'Écrivez-nous',
          visitUs: 'Venez nous voir',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Maurice'
        }
      },
      refrigeratedContainers: {
        hero: {
          title: 'Conteneurs Frigorifiques pour Denrées Alimentaires',
          subtitle: 'Maintenez la qualité et la fraîcheur de vos produits avec notre chaîne du froid contrôlée',
          description: 'Nos conteneurs frigorifiques spécialisés garantissent le transport sécurisé de vos denrées alimentaires en maintenant une température constante et contrôlée tout au long du trajet.'
        },
        overview: {
          title: 'Transport Frigorifique Professionnel',
          description1: 'Notre service de conteneurs frigorifiques est spécialement conçu pour répondre aux exigences strictes du transport de denrées alimentaires. Nous utilisons des équipements de dernière génération pour garantir le maintien optimal de la température.',
          description2: 'Que vous transportiez des produits surgelés, réfrigérés ou à température contrôlée, nos conteneurs sont équipés de systèmes de monitoring avancés qui vous permettent de suivre en temps réel l\'état de vos marchandises.',
          feature: 'Contrôle de température en temps réel'
        },
        temperatureRanges: {
          title: 'Gammes de Température',
          subtitle: 'Nos conteneurs s\'adaptent à tous vos besoins de température',
          items: [
            { range: '-25°C à -18°C', title: 'Congélation Profonde', description: 'Produits surgelés, glaces, fruits de mer' },
            { range: '0°C à +4°C', title: 'Réfrigération', description: 'Viandes fraîches, produits laitiers, légumes' },
            { range: '+10°C à +15°C', title: 'Température Contrôlée', description: 'Fruits, chocolats, certains médicaments' }
          ]
        },
        features: {
          title: 'Caractéristiques du Service',
          subtitle: 'Tous les avantages de nos conteneurs frigorifiques',
          items: [
            'Conteneurs frigorifiques certifiés et homologués',
            'Contrôle de température en temps réel 24/7',
            'Conformité aux normes alimentaires internationales',
            'Gestion complète de la chaîne du froid',
            'Monitoring et alertes automatiques',
            'Certification HACCP et ISO 22000',
            'Transport multimodal optimisé',
            'Assurance qualité et traçabilité complète'
          ]
        },
        benefits: {
          title: 'Pourquoi Choisir Notre Service ?',
          subtitle: 'Les avantages qui font de nous votre partenaire frigorifique de confiance',
          items: [
            { title: 'Contrôle Continu', description: 'Monitoring 24/7 de la température' },
            { title: 'Sécurité Alimentaire', description: 'Conformité aux normes internationales' },
            { title: 'Couverture Mondiale', description: 'Transport vers toutes destinations' },
            { title: 'Qualité Garantie', description: 'Traçabilité et certification complètes' }
          ]
        },
        process: {
          title: 'Notre Processus Frigorifique',
          subtitle: 'Un processus rigoureux pour garantir la qualité de vos produits',
          steps: [
            { title: 'Préparation', description: 'Vérification et pré-refroidissement des conteneurs' },
            { title: 'Chargement', description: 'Chargement contrôlé et étiquetage des produits' },
            { title: 'Transport', description: 'Monitoring continu et contrôle qualité' },
            { title: 'Livraison', description: 'Vérification finale et documentation' }
          ]
        },
        technology: {
          title: 'Technologie de Pointe',
          description: 'Nos conteneurs sont équipés des dernières innovations technologiques pour garantir un contrôle parfait de la température et une traçabilité complète de vos marchandises.',
          features: [
            'Systèmes de refroidissement à haute efficacité',
            'Capteurs de température ultra-précis',
            'Connectivité satellite pour le suivi en temps réel'
          ],
          successRate: '99.9%',
          successTitle: 'Taux de réussite',
          successSubtitle: 'dans le maintien de la température'
        },
        cta: {
          title: 'Prêt à Garantir la Qualité de Vos Produits ?',
          description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins frigorifiques et obtenir un devis personnalisé pour le transport de vos denrées alimentaires.',
          primaryButton: 'Demander un Devis',
          secondaryButton: 'Voir Tous Nos Services'
        },
        contact: {
          title: 'Besoin d\'Aide ?',
          subtitle: 'Notre équipe d\'experts frigorifiques est là pour vous accompagner dans tous vos projets de transport alimentaire',
          callUs: 'Appelez-nous',
          writeUs: 'Écrivez-nous',
          visitUs: 'Venez nous voir',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Maurice',
          responseTime: 'Réponse sous 24h',
          businessHours: 'Lun-Ven: 8h-18h'
        }
      },
      customsClearing: {
        hero: {
          title: 'Dédouanement & Conformité',
          subtitle: 'Services de dédouanement et de conformité réglementaire pour assurer le passage en douane de vos marchandises',
          description: 'Nous gérons tous les aspects administratifs et légaux pour assurer le passage en douane de vos marchandises en toute conformité.'
        },
        overview: {
          title: 'Expertise en Dédouanement International',
          description1: 'Notre service de dédouanement est spécialement conçu pour simplifier et accélérer le processus de passage en douane de vos marchandises. Nous maîtrisons parfaitement les réglementations internationales et les procédures douanières.',
          description2: 'Que vous importiez ou exportiez, notre équipe d\'experts vous accompagne à chaque étape pour garantir une conformité totale et des délais optimaux.',
          feature: 'Conformité réglementaire garantie'
        },
        services: {
          title: 'Nos Services Spécialisés',
          subtitle: 'Découvrez notre gamme complète de services de dédouanement',
          items: [
            { title: 'Gestion Documentaire', description: 'Préparation et vérification de tous les documents requis' },
            { title: 'Conformité Réglementaire', description: 'Vérification de la conformité aux normes internationales' },
            { title: 'Audit & Vérification', description: 'Contrôle qualité et audit de conformité' },
            { title: 'Gestion des Risques', description: 'Identification et mitigation des risques douaniers' }
          ]
        },
        features: {
          title: 'Caractéristiques du Service',
          subtitle: 'Tous les avantages de notre service de dédouanement',
          items: [
            'Dédouanement complet des marchandises',
            'Conformité réglementaire internationale',
            'Gestion documentaire et procédures',
            'Optimisation des délais de mainlevée',
            'Conseil en réglementation douanière',
            'Gestion des licences et autorisations',
            'Audit de conformité douanière',
            'Formation et assistance technique'
          ]
        },
        benefits: {
          title: 'Pourquoi Nous Choisir ?',
          subtitle: 'Les avantages qui font de nous votre partenaire de confiance',
          items: [
            { title: 'Délais Optimisés', description: 'Mainlevée rapide de vos marchandises' },
            { title: 'Conformité Garantie', description: 'Respect de toutes les réglementations' },
            { title: 'Expertise Internationale', description: 'Connaissance des marchés mondiaux' },
            { title: 'Traçabilité Complète', description: 'Suivi de toutes les procédures' }
          ]
        },
        cta: {
          title: 'Besoin d\'Assistance Douanière ?',
          description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé pour nos services de dédouanement.',
          primaryButton: 'Demander un Devis',
          secondaryButton: 'Voir Tous Nos Services'
        },
        contact: {
          title: 'Besoin d\'Aide ?',
          subtitle: 'Notre équipe d\'experts en dédouanement est là pour vous accompagner',
          callUs: 'Appelez-nous',
          writeUs: 'Écrivez-nous',
          visitUs: 'Venez nous voir',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Maurice',
          responseTime: 'Réponse sous 24h',
          businessHours: 'Lun-Ven: 8h-18h'
        }
      },
      airfreight: {
        hero: {
          title: 'Services de Transport Aérien',
          subtitle: 'Transport aérien rapide et fiable pour vos envois urgents avec réseau de partenaires internationaux',
          description: 'Bénéficiez de notre réseau de partenaires aériens pour des délais optimaux et une flexibilité maximale dans tous vos projets de transport.'
        },
        overview: {
          title: 'Excellence en Transport Aérien',
          description1: 'Notre service de transport aérien est conçu pour répondre aux exigences les plus strictes en matière de rapidité et de fiabilité. Nous travaillons avec les meilleures compagnies aériennes du monde pour garantir un service de qualité.',
          description2: 'Que vous ayez besoin d\'un transport express pour des marchandises urgentes ou d\'un service standard pour vos envois réguliers, notre équipe vous accompagne à chaque étape.',
          feature: 'Réseau international de partenaires'
        },
        services: {
          title: 'Nos Services Aériens',
          subtitle: 'Découvrez notre gamme complète de services de transport aérien',
          items: [
            { title: 'Fret Express', description: 'Livraison ultra-rapide pour vos envois urgents' },
            { title: 'Fret Standard', description: 'Transport aérien économique et fiable' },
            { title: 'Charter Aérien', description: 'Avions dédiés pour vos projets spéciaux' },
            { title: 'Accompagnement', description: 'Service personnalisé et suivi dédié' }
          ]
        },
        features: {
          title: 'Caractéristiques du Service',
          subtitle: 'Tous les avantages de notre service de transport aérien',
          items: [
            'Transport aérien express et standard',
            'Réseau de partenaires internationaux',
            'Gestion des aéroports majeurs',
            'Suivi proactif porte-à-porte',
            'Services de fret express 24/7',
            'Gestion des documents de transport',
            'Assurance et suivi en temps réel',
            'Solutions sur mesure pour tous types de cargaisons'
          ]
        },
        benefits: {
          title: 'Pourquoi Choisir Notre Service ?',
          subtitle: 'Les avantages qui font de nous votre partenaire aérien de confiance',
          items: [
            { title: 'Rapidité Maximale', description: 'Délais de livraison optimaux' },
            { title: 'Sécurité Garantie', description: 'Protection maximale de vos marchandises' },
            { title: 'Couverture Mondiale', description: 'Réseau international étendu' },
            { title: 'Fiabilité Totale', description: 'Engagement qualité sur tous nos vols' }
          ]
        },
        cta: {
          title: 'Besoin d\'un Transport Aérien Rapide ?',
          description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé pour nos services de transport aérien.',
          primaryButton: 'Demander un Devis',
          secondaryButton: 'Voir Tous Nos Services'
        },
        contact: {
          title: 'Besoin d\'Aide ?',
          subtitle: 'Notre équipe d\'experts en transport aérien est là pour vous accompagner',
          callUs: 'Appelez-nous',
          writeUs: 'Écrivez-nous',
          visitUs: 'Venez nous voir',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Maurice',
          responseTime: 'Réponse sous 24h',
        }
      },
      productSourcing: {
        hero: {
          title: 'Sourcing & Approvisionnement',
          subtitle: 'Sourcing et approvisionnement de produits à l\'international avec identification des meilleurs fournisseurs',
          description: 'Nous vous aidons à identifier et sélectionner les meilleurs fournisseurs pour vos besoins spécifiques, en optimisant vos coûts et en garantissant la qualité.'
        },
        overview: {
          title: 'Excellence en Sourcing International',
          description1: 'Notre service de sourcing et d\'approvisionnement est conçu pour vous connecter aux meilleurs fournisseurs internationaux. Nous analysons le marché, identifions les opportunités et négocions les meilleures conditions pour votre entreprise.',
          description2: 'Que vous cherchiez des fournisseurs pour des matières premières, des composants ou des produits finis, notre expertise vous garantit des partenariats durables et rentables.',
          feature: 'Partenariats durables et rentables'
        },
        services: {
          title: 'Nos Services de Sourcing',
          subtitle: 'Découvrez notre gamme complète de services d\'approvisionnement',
          items: [
            { title: 'Recherche de Fournisseurs', description: 'Identification des meilleurs fournisseurs internationaux' },
            { title: 'Négociation', description: 'Optimisation des conditions commerciales' },
            { title: 'Contrôle Qualité', description: 'Audit et certification des fournisseurs' },
            { title: 'Gestion Relation', description: 'Suivi et développement des partenariats' }
          ]
        },
        features: {
          title: 'Caractéristiques du Service',
          subtitle: 'Tous les avantages de notre service de sourcing',
          items: [
            'Identification de fournisseurs qualifiés',
            'Négociation et gestion des contrats',
            'Contrôle qualité et assurance',
            'Gestion des relations fournisseurs',
            'Audit des fournisseurs',
            'Gestion des risques d\'approvisionnement',
            'Optimisation des coûts d\'achat',
            'Suivi des tendances du marché'
          ]
        },
        benefits: {
          title: 'Pourquoi Nous Choisir ?',
          subtitle: 'Les avantages qui font de nous votre partenaire de sourcing de confiance',
          items: [
            { title: 'Gain de Temps', description: 'Processus d\'approvisionnement optimisé' },
            { title: 'Qualité Garantie', description: 'Fournisseurs certifiés et audités' },
            { title: 'Réseau Mondial', description: 'Accès aux meilleurs fournisseurs internationaux' },
            { title: 'Coûts Optimisés', description: 'Réduction des coûts d\'approvisionnement' }
          ]
        },
        cta: {
          title: 'Besoin de Trouver de Nouveaux Fournisseurs ?',
          description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé pour nos services de sourcing.',
          primaryButton: 'Demander un Devis',
          secondaryButton: 'Voir Tous Nos Services'
        },
        contact: {
          title: 'Besoin d\'Aide ?',
          subtitle: 'Notre équipe d\'experts est là pour vous accompagner',
          callUs: 'Appelez-nous',
          writeUs: 'Écrivez-nous',
          visitUs: 'Venez nous voir',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Maurice',
          responseTime: 'Réponse sous 24h',
          businessHours: 'Lun-Ven: 8h-18h'
        }
      },
      inlandTransport: {
        hero: {
          title: 'Inland Transport & CFS Warehousing',
          subtitle: 'Inland transport and CFS (Container Freight Station) warehousing with complete solutions for container management',
          description: 'Complete solutions for container management and inland transport, with our own CFS warehousing facilities.'
        },
        overview: {
          title: 'Excellence in Inland Transport & Warehousing',
          description1: 'Our inland transport and CFS warehousing service is designed to provide complete and integrated solutions. With our own facilities at Jin Fei Business Park, we guarantee total control over your logistics operations.',
          description2: 'Whether you need container transport, temporary storage or consolidation/deconsolidation services, our infrastructure offers you maximum flexibility.',
          feature: 'Dedicated CFS infrastructure'
        },
        services: {
          title: 'Our Inland Services',
          subtitle: 'Discover our complete range of transport and warehousing services',
          items: [
            { title: 'Inland Transport', description: 'Road and multimodal transport solutions' },
            { title: 'CFS Warehousing', description: 'Container management and secure warehousing' },
            { title: 'Consolidation/Deconsolidation', description: 'Consolidation and deconsolidation services' },
            { title: 'Distribution', description: 'Final delivery and urban logistics' }
          ]
        },
        features: {
          title: 'Service Features',
          subtitle: 'All the benefits of our inland transport and warehousing service',
          items: [
            'Multimodal inland transport',
            'Secure CFS warehousing',
            'Empty container management',
            'Consolidation and deconsolidation services',
            'Container transport',
            'Warehouse management',
            'Distribution services',
            'Urban and regional logistics'
          ]
        },
        benefits: {
          title: 'Why Choose Us?',
          subtitle: 'The advantages that make us your trusted inland partner',
          items: [
            { title: 'Flexibility', description: 'Solutions adapted to your needs' },
            { title: 'Security', description: 'Secure and monitored infrastructure' },
            { title: 'Local Coverage', description: 'Extended network across the territory' },
            { title: 'Efficiency', description: 'Optimized and automated processes' }
          ]
        },
        cta: {
          title: 'Need Inland Solutions?',
          description: 'Contact us today to discuss your needs and get a personalized quote for our inland transport and warehousing services.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of inland transport experts is here to support you',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius',
          responseTime: 'Response within 24h',
          businessHours: 'Mon-Fri: 8am-6pm'
        }
      }
    },
    cookieBanner: {
      title: 'Nous utilisons des cookies pour améliorer votre expérience',
      description: 'En continuant à naviguer, vous acceptez notre utilisation des cookies.',
      necessary: 'Nécessaires uniquement',
      customize: 'Personnaliser',
      acceptAll: 'Tout accepter',
      modal: {
        title: 'Personnaliser vos préférences de cookies',
        description: 'Choisissez quels types de cookies vous souhaitez autoriser. Les cookies nécessaires sont toujours activés pour le bon fonctionnement du site.',
        necessary: {
          title: 'Cookies nécessaires',
          description: 'Essentiels au fonctionnement du site web. Ne peuvent pas être désactivés.'
        },
        analytics: {
          title: 'Cookies analytiques',
          description: 'Nous aident à comprendre comment vous utilisez le site et à l\'améliorer.'
        },
        marketing: {
          title: 'Cookies marketing',
          description: 'Utilisés pour afficher des publicités pertinentes et mesurer l\'efficacité des campagnes.'
        },
        functional: {
          title: 'Cookies fonctionnels',
          description: 'Améliorent l\'expérience utilisateur en mémorisant vos préférences et paramètres.'
        },
        cancel: 'Annuler',
        save: 'Enregistrer les préférences',
        compliance: {
          title: 'Conformité Légale & Protection des Données',
          rgpd: 'RGPD (Règlement Général sur la Protection des Données) : Nous respectons scrupuleusement le RGPD et les lois de protection des données en vigueur.',
          consent: 'Consentement Explicite : Aucun cookie non essentiel n\'est installé sans votre consentement préalable et explicite.',
          withdrawal: 'Droit de Retrait : Vous pouvez modifier ou retirer votre consentement à tout moment via cette interface.',
          transparency: 'Transparence : Nous vous informons clairement de l\'utilisation de chaque type de cookie et de leur finalité.'
        },
        technical: {
          title: 'Informations Techniques sur les Cookies',
          duration: 'Durée de Conservation : Les cookies sont conservés selon leur type : session (supprimés à la fermeture du navigateur) ou persistants (jusqu\'à 1 an maximum).',
          transfer: 'Transfert de Données : Aucune donnée personnelle n\'est transférée vers des tiers sans votre consentement explicite.',
          security: 'Sécurité : Tous nos cookies utilisent des connexions sécurisées (HTTPS) et respectent les standards de sécurité.'
        },
        legal: {
          privacy: 'Politique de Confidentialité',
          legal: 'Mentions Légales',
          terms: 'Conditions d\'Utilisation'
        }
      }
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
      video: 'Watch Video',
      mainTitle: 'Trusted Logistics.',
      subTitle: 'Worldwide Connections.'
    },
    services: {
      title: 'Our Services',
      subtitle: 'With more than a decade of expertise, we are committed to delivering efficient, reliable, and tailored logistics solutions for businesses and individuals worldwide.',
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
      },
      homeServices: {
        freight: {
          title: 'Freight Consolidation & Full Container Loads',
          description: 'Optimize your transport costs with our freight consolidation service and full container loading.'
        },
        personal: {
          title: 'Personal Effects & Project Shipments',
          description: 'Specialized transport for your personal effects and projects with delicate and secure handling.'
        },
        refrigerated: {
          title: 'Refrigerated Food Containers',
          description: 'Specialized refrigerated containers for food transport with controlled cold chain.'
        },
        customs: {
          title: 'Customs Clearing & Compliance',
          description: 'Customs clearing and regulatory compliance services to ensure smooth customs passage of your goods.'
        },
        airfreight: {
          title: 'Airfreight Services',
          description: 'Fast and reliable air freight for urgent shipments with international network of partners.'
        },
        sourcing: {
          title: 'Product Sourcing & Procurement',
          description: 'International product sourcing and procurement with identification of the best suppliers.'
        },
        inland: {
          title: 'Inland Transport & CFS Warehousing',
          description: 'Inland transport and CFS warehousing with complete solutions for container management.'
        },
        seeDetails: 'See service details'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Reliable and responsive logistics partner',
      description: 'Established in 2014, we support businesses across the supply chain: air and ocean freight, customs formalities, warehousing and project solutions. Active presence in Mauritius with our own CFS facilities at Jin Fei Business Park.',
      mission: 'Mission Statement',
      missionText: 'At Worldlink Logistics Ltd, our mission is to deliver reliable, affordable, and high-quality freight services tailored to meet the needs of a diverse customer base. We are committed to making logistics accessible to businesses and individuals across different budgets, while constantly innovating to keep pace with global trends and evolving client expectations.',
      vision: 'Vision Statement',
      visionText: 'Our vision is to become a one-stop solution for all import, export, and logistics needs — integrating services such as freight forwarding, warehousing, delivery, container sales, and project logistics — under one roof. We aim to redefine the logistics experience through comprehensive service offerings, modern solutions, and exceptional customer care.',
      homeAbout: {
        title: 'About Worldlink',
        description1: 'Founded in 2014 by Director <strong>Mr. Neeraj Goreeba</strong>, Worldlink Logistics Ltd has rapidly grown from a two-person team to a leading logistics provider in Mauritius, employing over 30 professionals today.',
        description2: 'With its own CFS warehousing facility at <strong>Jin Fei Business & Industrial Park, Riche Terre</strong>, the company offers a comprehensive suite of freight and logistics solutions.',
        experience: 'years',
        experienceLabel: 'experience'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help',
      description: 'Our team is available to answer all your questions and support you in your logistics projects.',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Service Requested',
        message: 'Message (optional)',
        submit: 'Send'
      },
      formTitle: 'Send Us a Message',
      successTitle: 'Message Sent!',
      successMessage: 'We will get back to you as soon as possible.',
      selectService: 'Select a service',
      sending: 'Sending...',
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours'
      },
      infoTitle: 'Contact Information',
      locationTitle: 'Our Location',
      mapPlaceholder: 'Interactive Map',
      quickContactTitle: 'Need a Quick Response?',
      quickContactDescription: 'Our team is available by phone to immediately answer your urgent questions.',
      callNow: 'Call Now',
      sendEmail: 'Send Email',
      homeContact: {
        title: 'Let\'s get down to business',
        subtitle: 'Get in touch with our logistics experts and get a customized quote for your shipping needs',
        form: {
          name: 'Full Name *',
          email: 'Email Address *',
          phone: 'Phone Number',
          country: 'Country',
          services: 'Services *',
          message: 'Message *',
          submit: 'Get a quote',
          namePlaceholder: 'Enter your full name',
          emailPlaceholder: 'Enter your email',
          phonePlaceholder: 'Enter your phone number',
          countryPlaceholder: 'Select your country',
          servicesPlaceholder: 'Select a service',
          messagePlaceholder: 'Tell us about your shipping needs...',
          submitting: 'Sending...',
          successMessage: 'Message sent successfully! We will get back to you as soon as possible.',
          errorMessage: 'An error occurred. Please try again.'
        }
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find quick answers to your questions',
      description: 'Check the answers to the most common questions or contact us for personalized assistance.',
      searchPlaceholder: 'Search for a question...',
      allCategories: 'All',
      noResultsTitle: 'No questions found',
      noResultsMessage: 'Try with other keywords or contact us directly.',
      ctaTitle: 'Haven\'t found your answer?',
      ctaDescription: 'Our team of experts is here to answer all your specific questions.',
      callUs: 'Call Us',
      sendEmail: 'Send Email'
    },
    faqItems: {
      // FREIGHT CONSOLIDATION & FCL
      freightConsolidation: {
        question: 'What is Freight Consolidation and how can it reduce my costs?',
        answer: 'Freight consolidation involves grouping several shipments from different clients in the same container. This allows sharing transport costs and significantly reducing your shipping expenses. We optimize space and negotiate advantageous rates through consolidated volumes.',
        category: 'Freight Consolidation'
      },
      lclFcl: {
        question: 'What is the difference between LCL and FCL?',
        answer: 'LCL (Less than Container Load): for volumes less than a full container. FCL (Full Container Load): for volumes requiring a full container. We offer both options with optimized rates based on your needs.',
        category: 'Freight Consolidation'
      },
      consolidationTime: {
        question: 'How long does a consolidation generally take?',
        answer: 'The consolidation time varies depending on the destination and frequency of departures. Generally, we consolidate shipments within 3-7 days to optimize costs while respecting your time constraints.',
        category: 'Freight Consolidation'
      },

      // PERSONAL EFFECTS & PROJECT SHIPMENTS
      personalEffects: {
        question: 'Can you transport personal effects from a move?',
        answer: 'Absolutely! We specialize in transporting personal effects with delicate handling. We offer professional packaging, complete insurance, and personalized tracking for your most precious belongings.',
        category: 'Personal Effects'
      },
      fragileItems: {
        question: 'How do you protect fragile items?',
        answer: 'We use professional packaging materials (silk paper, foam, reinforced cartons) and custom-made wooden crates if necessary. Each fragile item is individually packaged and clearly marked.',
        category: 'Personal Effects'
      },
      unpackingService: {
        question: 'Do you offer unpacking services at destination?',
        answer: 'Yes, we can organize unpacking and installation at your new location. Our local teams handle everything from unloading to setting up your furniture and belongings.',
        category: 'Personal Effects'
      },

      // REFRIGERATED CONTAINERS
      temperatureRange: {
        question: 'What temperatures can you maintain in your refrigerated containers?',
        answer: 'Our refrigerated containers can maintain temperatures from -30°C to +30°C based on your needs. We monitor temperature in real-time and alert you immediately in case of any changes.',
        category: 'Refrigerated Containers'
      },
      foodStandards: {
        question: 'Are your containers compliant with international food safety standards?',
        answer: 'Yes, all our refrigerated containers are certified HACCP and meet international food safety standards. They are regularly inspected and cleaned according to sanitary protocols.',
        category: 'Refrigerated Containers'
      },
      coolingFailure: {
        question: 'What happens if there is a cooling failure?',
        answer: 'Our containers are equipped with backup systems and real-time alerts. In case of an issue, our technical teams intervene immediately and keep you informed about the situation.',
        category: 'Refrigerated Containers'
      },

      // CUSTOMS CLEARING
      customsDocuments: {
        question: 'What documents are needed for customs clearance?',
        answer: 'The required documents vary depending on the type of cargo: commercial invoice, packing list, origin certificate, import licenses if necessary. We provide a complete list tailored to your situation.',
        category: 'Customs Clearance'
      },
      clearingTime: {
        question: 'How long does customs clearance generally take?',
        answer: 'Standard customs clearance takes 1-3 business days. The processing time may vary depending on the complexity of the cargo and specific customs requirements. We optimize each step to minimize delays.',
        category: 'Customs Clearance'
      },
      customsTaxes: {
        question: 'Can you handle customs duties and taxes?',
        answer: 'Yes, we calculate and pay all duties and taxes on your behalf. We provide a detailed quote in advance and invoice you exactly for the amount paid to customs authorities.',
        category: 'Customs Clearance'
      },

      // AIRFREIGHT SERVICES
      airDeliveryTime: {
        question: 'What are your air delivery times?',
        answer: 'Our air services cover all delivery times: Express (1-2 days), Standard (3-5 days), and Economy (5-7 days). We choose the optimal solution based on your time and budget constraints.',
        category: 'Air Freight'
      },
      doorToDoor: {
        question: 'Can you organize door-to-door service?',
        answer: 'Absolutely! We manage the entire logistics chain: pickup at your location, air freight, customs clearance, and delivery to your destination. A complete service with a single point of contact.',
        category: 'Air Freight'
      },
      airCargoTypes: {
        question: 'What types of cargo can you transport by air?',
        answer: 'We transport all types of cargo: documents, samples, parts, industrial equipment, pharmaceutical products, etc. Certain dangerous goods require special authorizations.',
        category: 'Air Freight'
      },

      // PRODUCT SOURCING
      supplierIdentification: {
        question: 'How do you identify the best suppliers?',
        answer: 'Our international network and years of experience allow us to identify reliable and qualified suppliers. We evaluate quality, reliability, certifications, and references before making any recommendations.',
        category: 'Product Sourcing'
      },
      priceNegotiation: {
        question: 'Can you negotiate prices with suppliers?',
        answer: 'Yes, we actively negotiate prices, payment terms, and delivery times. Our expertise and volumes allow us to obtain favorable conditions for our clients.',
        category: 'Product Sourcing'
      },
      qualityControl: {
        question: 'Do you offer quality control for products?',
        answer: 'We offer complete quality control: inspection of the cargo, verification of specifications, conformity tests, and production follow-up. We keep you informed at every step.',
        category: 'Product Sourcing'
      },

      // INLAND TRANSPORT & CFS
      cfsFacility: {
        question: 'What is your CFS facility and what are its advantages?',
        answer: 'Our CFS (Container Freight Station) at Jin Fei Business Park is a warehousing and container consolidation facility. Advantages: total control over the logistics chain, optimized lead times, reduced costs, and maximum security.',
        category: 'Inland Transport & CFS'
      },
      inlandCoverage: {
        question: 'Can you organize transport from your CFS to any destination?',
        answer: 'Yes, we organize land transport to all destinations in Mauritius and the region. We use our truck fleet and our network of partner transport companies for complete coverage.',
        category: 'Inland Transport & CFS'
      },
      cfsStorage: {
        question: 'What are your CFS storage lead times?',
        answer: 'We offer flexible storage solutions: short-term (1-7 days), medium-term (1-4 weeks), and long-term (1-12 months). Each solution is tailored to your specific needs.',
        category: 'Inland Transport & CFS'
      },

      // GENERAL SERVICES
      insurance: {
        question: 'Do you offer insurance for my cargo?',
        answer: 'Yes, we offer comprehensive insurance covering all risks of transport: loss, theft, damage, delays. We tailor the coverage to the value and nature of your cargo.',
        category: 'General Services'
      },
      tracking: {
        question: 'How do you track your shipments?',
        answer: 'We use a 24/7 real-time tracking system. You receive automatic notifications at each step and can check the status of your shipments on our online platform.',
        category: 'General Services'
      },
      quoteResponse: {
        question: 'What are your response times for quotes?',
        answer: 'We provide detailed quotes within 24-48 hours for most services. For complex projects, we organize a consultation to understand your needs and propose the optimal solution.',
        category: 'General Services'
      },
      complexProjects: {
        question: 'Can you handle complex logistics projects?',
        answer: 'Absolutely! Our team of 30+ experienced professionals handles complex logistics projects: international moves, industrial projects, special events. We coordinate all aspects for optimal results.',
        category: 'General Services'
      }
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
    },
    stats: {
      years: '11+ Years of Experience',
      services: 'Services Offered',
      countries: 'Presence in Mauritius',
      support: 'Dedicated Support'
    },
    cta: {
      title: 'Ready to Optimize Your Logistics?',
      description: 'Contact us today to discuss your logistics needs and discover how we can help you.',
      button: 'Contact Us',
      servicesButton: 'View All Services'
    },
    values: {
      title: 'Our Values',
      subtitle: 'The values that guide our daily work and relationships with our clients.',
      reliability: {
        title: 'Reliability',
        description: 'We are committed to providing reliable and secure services to all our clients.'
      },
      customerService: {
        title: 'Customer Service',
        description: 'Our dedicated team is available 24/7 to meet all your needs.'
      },
      globalNetwork: {
        title: 'Global Network',
        description: 'A worldwide network of partners for comprehensive logistics solutions.'
      },
      excellence: {
        title: 'Excellence',
        description: 'We strive for excellence in every aspect of our logistics services.'
      }
    },
    team: {
      title: 'Our Team',
      subtitle: 'Meet the dedicated experts who make our logistics services exceptional.',
      ceo: 'Chief Executive Officer',
      operations: 'Operations Director',
      logistics: 'Logistics Manager',
      customerSupport: 'Customer Support'
    },
    achievements: {
      title: 'Our Achievements',
      subtitle: 'Numbers that demonstrate our expertise and your trust.',
      experience: 'Years of Experience',
      countries: 'Countries Served',
      packages: 'Packages Shipped'
    },
    servicePages: {
      freightConsolidation: {
        hero: {
          title: 'Freight Consolidation & Full Container Loads',
          subtitle: 'Optimize your transport costs with our freight consolidation service',
          description: 'We consolidate your goods to maximize efficiency and reduce costs while ensuring security and punctuality.'
        },
        overview: {
          title: 'What is Freight Consolidation?',
          description1: 'Freight consolidation is a logistics technique that involves grouping several shipments from different clients in the same container or transport vehicle. This approach significantly reduces transport costs while optimizing the use of available space.',
          description2: 'At Worldlink Logistics, we perfectly master this technique and apply it to all our maritime and land transport services to offer you the most competitive rates on the market.',
          feature: 'Optimized multimodal transport',
          savings: 'average savings'
        },
        features: {
          title: 'Service Features',
          subtitle: 'Discover all the benefits of our freight consolidation service',
          items: [
            'Freight consolidation to optimize costs',
            'Full container loads (FCL)',
            'Deadline and planning management',
            'Real-time tracking of your shipments',
            'Route and transport mode optimization',
            'Transport document management',
            'Coordination with international partners',
            'Detailed reporting and analytics'
          ]
        },
        benefits: {
          title: 'Why Choose Our Service?',
          subtitle: 'The advantages that make us your ideal logistics partner',
          items: [
            { title: 'Cost Reduction', description: '15-30% savings through consolidation' },
            { title: 'Enhanced Security', description: 'Maximum protection of your goods' },
            { title: 'Global Coverage', description: 'International network of partners' },
            { title: 'Guaranteed Reliability', description: 'Rigorous tracking and quality control' }
          ]
        },
        process: {
          title: 'Our Consolidation Process',
          subtitle: 'A simple and efficient process to optimize your transports',
          steps: [
            { title: 'Needs Analysis', description: 'Assessment of your volumes and constraints' },
            { title: 'Planning', description: 'Route and transport mode optimization' },
            { title: 'Consolidation', description: 'Grouping and loading of goods' },
            { title: 'Transport & Tracking', description: 'Execution and real-time monitoring' },
            { title: 'Delivery', description: 'Final delivery and documentation' }
          ]
        },
        cta: {
          title: 'Ready to Optimize Your Transport Costs?',
          description: 'Contact us today to discuss your needs and get a personalized quote for your freight consolidation.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of experts is here to support you in all your freight consolidation projects',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius',
          responseTime: 'Response within 24h',
          businessHours: 'Mon-Fri: 8am-6pm'
        }
      },
      personalEffects: {
        hero: {
          title: 'Personal Effects & Projects',
          subtitle: 'Specialized transport for your personal effects and projects with delicate and secure handling',
          description: 'We ensure safe transport of your most precious belongings, whether personal effects or complex project equipment.'
        },
        overview: {
          title: 'Personal Effects & Project Transport',
          description1: 'Our personal effects and project transport service is designed to meet the specific needs of individuals and companies who need to move valuable goods or specialized equipment.',
          description2: 'Whether you are an expatriate moving, a company relocating equipment, or an individual transporting precious goods, we offer you a tailor-made service with the greatest attention to detail.',
          feature: 'Secure multimodal transport'
        },
        services: {
          title: 'Our Specialized Services',
          subtitle: 'Discover our complete range of services for all your transport needs',
          items: [
            { title: 'International Relocation', description: 'Complete transport of your personal belongings abroad' },
            { title: 'Industrial Projects', description: 'Transport of specialized equipment and machinery' },
            { title: 'Vehicles & Equipment', description: 'Transport of vehicles and heavy equipment' },
            { title: 'Expatriate Relocation', description: 'Complete services for expatriates and their families' }
          ]
        },
        features: {
          title: 'Service Features',
          subtitle: 'All the benefits of our personal effects transport service',
          items: [
            'Secure personal effects transport',
            'Complex project and equipment management',
            'Specialized packaging and protection',
            'Personalized insurance and tracking',
            'Coordination with local movers',
            'Customs formalities management',
            'Temporary storage if needed',
            'Home or on-site delivery'
          ]
        },
        benefits: {
          title: 'Why Choose Us?',
          subtitle: 'The advantages that make us your trusted partner',
          items: [
            { title: 'Precise Planning', description: 'Respected deadlines and perfect coordination' },
            { title: 'Maximum Protection', description: 'Packaging and securing of your goods' },
            { title: 'Global Coverage', description: 'Transport to all destinations' },
            { title: 'Personalized Service', description: 'Tailored support' }
          ]
        },
        process: {
          title: 'Our Process',
          subtitle: 'A simple and efficient process for your transports',
          steps: [
            { title: 'Consultation', description: 'Assessment of your needs and planning' },
            { title: 'Preparation', description: 'Packaging and protection of your goods' },
            { title: 'Transport', description: 'Secure shipment to destination' },
            { title: 'Delivery', description: 'Delivery and on-site installation' }
          ]
        },
        cta: {
          title: 'Ready to Transport Your Goods Safely?',
          description: 'Contact us today to discuss your needs and get a personalized quote for the transport of your personal effects or project equipment.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of experts is here to support you in all your transport projects',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius'
        }
      },
      refrigeratedContainers: {
        hero: {
          title: 'Refrigerated Containers for Food Products',
          subtitle: 'Maintain the quality and freshness of your products with our controlled cold chain',
          description: 'Our specialized refrigerated containers ensure secure transport of your food products by maintaining a constant and controlled temperature throughout the journey.'
        },
        overview: {
          title: 'Professional Refrigerated Transport',
          description1: 'Our refrigerated container service is specifically designed to meet the strict requirements of transporting food products. We use state-of-the-art equipment to ensure optimal temperature maintenance.',
          description2: 'Whether you transport frozen, chilled or temperature-controlled products, our containers are equipped with advanced monitoring systems that allow you to track your goods in real-time.',
          feature: 'Real-time temperature control'
        },
        temperatureRanges: {
          title: 'Temperature Ranges',
          subtitle: 'Our containers adapt to all your temperature needs',
          items: [
            { range: '-25°C to -18°C', title: 'Deep Freezing', description: 'Frozen products, ice, seafood' },
            { range: '0°C to +4°C', title: 'Refrigeration', description: 'Fresh meats, dairy products, vegetables' },
            { range: '+10°C to +15°C', title: 'Temperature Controlled', description: 'Fruits, chocolates, certain medications' }
          ]
        },
        features: {
          title: 'Service Features',
          subtitle: 'All the benefits of our refrigerated containers',
          items: [
            'Certified and approved refrigerated containers',
            'Real-time temperature control 24/7',
            'Compliance with international food safety standards',
            'Complete cold chain management',
            'Automated monitoring and alerts',
            'HACCP and ISO 22000 certifications',
            'Optimized multimodal transport',
            'Complete quality and traceability'
          ]
        },
        benefits: {
          title: 'Why Choose Our Service?',
          subtitle: 'The advantages that make us your trusted refrigerated logistics partner',
          items: [
            { title: 'Continuous Control', description: '24/7 temperature monitoring' },
            { title: 'Food Safety', description: 'Compliance with international standards' },
            { title: 'Global Coverage', description: 'Transport to all destinations' },
            { title: 'Guaranteed Quality', description: 'Complete traceability and certification' }
          ]
        },
        process: {
          title: 'Our Refrigerated Process',
          subtitle: 'A rigorous process to ensure the quality of your products',
          steps: [
            { title: 'Preparation', description: 'Container verification and pre-cooling' },
            { title: 'Loading', description: 'Controlled loading and product labeling' },
            { title: 'Transport', description: 'Continuous monitoring and quality control' },
            { title: 'Delivery', description: 'Final verification and documentation' }
          ]
        },
        technology: {
          title: 'State-of-the-Art Technology',
          description: 'Our containers are equipped with the latest technological innovations to ensure perfect temperature control and complete traceability of your goods.',
          features: [
            'High-efficiency cooling systems',
            'Ultra-precise temperature sensors',
            'Satellite connectivity for real-time tracking'
          ],
          successRate: '99.9%',
          successTitle: 'Success Rate',
          successSubtitle: 'in maintaining temperature'
        },
        cta: {
          title: 'Ready to Ensure the Quality of Your Products?',
          description: 'Contact us today to discuss your refrigerated needs and obtain a personalized quote for the transport of your food products.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of refrigerated experts is here to support you in all your food transport projects',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius',
          responseTime: 'Response within 24h',
          businessHours: 'Mon-Fri: 8am-18h'
        }
      },
      customsClearing: {
        hero: {
          title: 'Customs Clearing & Compliance',
          subtitle: 'Customs clearing and regulatory compliance services to ensure smooth customs passage of your goods',
          description: 'We manage all administrative and legal aspects to ensure smooth customs passage of your goods in full compliance.'
        },
        overview: {
          title: 'International Customs Expertise',
          description1: 'Our customs clearance service is specifically designed to simplify and accelerate the customs clearance process for your goods. We perfectly master international regulations and customs procedures.',
          description2: 'Whether you import or export, our expert team accompanies you at every step to ensure total compliance and optimal delivery times.',
          feature: 'Guaranteed regulatory compliance'
        },
        services: {
          title: 'Our Specialized Services',
          subtitle: 'Discover our complete range of customs clearance services',
          items: [
            { title: 'Documentation Management', description: 'Preparation and verification of all required documents' },
            { title: 'Regulatory Compliance', description: 'Verification of compliance with international standards' },
            { title: 'Audit & Verification', description: 'Quality control and compliance audit' },
            { title: 'Risk Management', description: 'Identification and mitigation of customs risks' }
          ]
        },
        features: {
          title: 'Service Features',
          subtitle: 'All the benefits of our customs clearance service',
          items: [
            'Complete goods clearance',
            'International regulatory compliance',
            'Documentation and procedure management',
            'Optimal clearance times',
            'Customs advisory services',
            'License and permit management',
            'Customs compliance audit',
            'Technical assistance and training'
          ]
        },
        benefits: {
          title: 'Why Choose Us?',
          subtitle: 'The advantages that make us your trusted partner',
          items: [
            { title: 'Optimized Delivery Times', description: 'Rapid clearance of your goods' },
            { title: 'Guaranteed Compliance', description: 'Respect for all regulations' },
            { title: 'International Expertise', description: 'Knowledge of global markets' },
            { title: 'Complete Traceability', description: 'Tracking of all procedures' }
          ]
        },
        cta: {
          title: 'Need Customs Assistance?',
          description: 'Contact us today to discuss your needs and obtain a personalized quote for our customs clearance services.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of customs experts is here to support you',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius',
          responseTime: 'Response within 24h',
          businessHours: 'Mon-Fri: 8am-18h'
        }
      },
      airfreight: {
        hero: {
          title: 'Air Freight Services',
          subtitle: 'Fast and reliable air freight for urgent shipments with an international network of partners',
          description: 'Benefit from our international airline network for optimal delivery times and maximum flexibility in all your transport projects.'
        },
        overview: {
          title: 'Excellence in Air Freight',
          description1: 'Our air freight service is designed to meet the strictest requirements for speed and reliability. We work with the world\'s leading airlines to ensure a high-quality service.',
          description2: 'Whether you need an express service for urgent shipments or a standard service for your regular shipments, our team accompanies you at every step.',
          feature: 'International network of partners'
        },
        services: {
          title: 'Our Air Services',
          subtitle: 'Discover our complete range of air freight services',
          items: [
            { title: 'Express Freight', description: 'Ultra-fast delivery for urgent shipments' },
            { title: 'Standard Freight', description: 'Economical and reliable air freight' },
            { title: 'Charter Air', description: 'Dedicated aircraft for special projects' },
            { title: 'Accompaniment', description: 'Tailored and dedicated service' }
          ]
        },
        features: {
          title: 'Service Features',
          subtitle: 'All the benefits of our air freight service',
          items: [
            'Express and standard air freight',
            'International network of partners',
            'Management of major airports',
            'Proactive door-to-door tracking',
            '24/7 express services',
            'Transport document management',
            'Real-time tracking and assurance',
            'Tailored solutions for all types of cargo'
          ]
        },
        benefits: {
          title: 'Why Choose Our Service?',
          subtitle: 'The advantages that make us your trusted air logistics partner',
          items: [
            { title: 'Maximum Speed', description: 'Optimal delivery times' },
            { title: 'Guaranteed Security', description: 'Maximum protection of your goods' },
            { title: 'Global Coverage', description: 'Extended international network' },
            { title: 'Total Reliability', description: 'Quality commitment on all our flights' }
          ]
        },
        cta: {
          title: 'Need a Fast Air Freight?',
          description: 'Contact us today to discuss your needs and obtain a personalized quote for our air freight services.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of air freight experts is here to support you',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius',
          responseTime: 'Response within 24h',
          businessHours: 'Mon-Fri: 8am-18h'
        }
      },
      productSourcing: {
        hero: {
          title: 'Product Sourcing & Procurement',
          subtitle: 'International product sourcing and procurement with identification of the best suppliers',
          description: 'We help you identify and select the best suppliers for your specific needs, optimizing your costs and guaranteeing quality.'
        },
        overview: {
          title: 'Excellence in International Sourcing',
          description1: 'Our sourcing and procurement service is designed to connect you with the best international suppliers. We analyze the market, identify opportunities and negotiate the best terms for your business.',
          description2: 'Whether you are looking for suppliers for raw materials, components or finished products, our expertise guarantees you sustainable and profitable partnerships.',
          feature: 'Sustainable and profitable partnerships'
        },
        services: {
          title: 'Our Sourcing Services',
          subtitle: 'Discover our complete range of procurement services',
          items: [
            { title: 'Supplier Research', description: 'Identification of the best international suppliers' },
            { title: 'Negotiation', description: 'Optimization of commercial terms' },
            { title: 'Quality Control', description: 'Supplier audit and certification' },
            { title: 'Relationship Management', description: 'Partnership monitoring and development' }
          ]
        },
        features: {
          title: 'Service Features',
          subtitle: 'All the benefits of our sourcing service',
          items: [
            'Qualified supplier identification',
            'Negotiation and contract management',
            'Quality control and assurance',
            'Supplier relationship management',
            'Supplier auditing',
            'Supply risk management',
            'Procurement cost optimization',
            'Market trend monitoring'
          ]
        },
        benefits: {
          title: 'Why Choose Us?',
          subtitle: 'The advantages that make us your trusted sourcing partner',
          items: [
            { title: 'Time Savings', description: 'Optimized procurement process' },
            { title: 'Guaranteed Quality', description: 'Certified and audited suppliers' },
            { title: 'Global Network', description: 'Access to the best international suppliers' },
            { title: 'Optimized Costs', description: 'Reduction in procurement costs' }
          ]
        },
        cta: {
          title: 'Need to Find New Suppliers?',
          description: 'Contact us today to discuss your needs and get a personalized quote for our sourcing services.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of experts is here to support you',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius',
          responseTime: 'Response within 24h',
          businessHours: 'Mon-Fri: 8am-6pm'
        }
      },
      inlandTransport: {
        hero: {
          title: 'Inland Transport & CFS Warehousing',
          subtitle: 'Inland transport and CFS (Container Freight Station) warehousing with complete solutions for container management',
          description: 'Complete solutions for container management and inland transport, with our own CFS warehousing facilities.'
        },
        overview: {
          title: 'Excellence in Inland Transport & Warehousing',
          description1: 'Our inland transport and CFS warehousing service is designed to provide complete and integrated solutions. With our own facilities at Jin Fei Business Park, we guarantee total control over your logistics operations.',
          description2: 'Whether you need container transport, temporary storage or consolidation/deconsolidation services, our infrastructure offers you maximum flexibility.',
          feature: 'Dedicated CFS infrastructure'
        },
        services: {
          title: 'Our Inland Services',
          subtitle: 'Discover our complete range of transport and warehousing services',
          items: [
            { title: 'Inland Transport', description: 'Road and multimodal transport solutions' },
            { title: 'CFS Warehousing', description: 'Container management and secure warehousing' },
            { title: 'Consolidation/Deconsolidation', description: 'Consolidation and deconsolidation services' },
            { title: 'Distribution', description: 'Final delivery and urban logistics' }
          ]
        },
        features: {
          title: 'Service Features',
          subtitle: 'All the benefits of our inland transport and warehousing service',
          items: [
            'Multimodal inland transport',
            'Secure CFS warehousing',
            'Empty container management',
            'Consolidation and deconsolidation services',
            'Container transport',
            'Warehouse management',
            'Distribution services',
            'Urban and regional logistics'
          ]
        },
        benefits: {
          title: 'Why Choose Us?',
          subtitle: 'The advantages that make us your trusted inland partner',
          items: [
            { title: 'Flexibility', description: 'Solutions adapted to your needs' },
            { title: 'Security', description: 'Secure and monitored infrastructure' },
            { title: 'Local Coverage', description: 'Extended network across the territory' },
            { title: 'Efficiency', description: 'Optimized and automated processes' }
          ]
        },
        cta: {
          title: 'Need Inland Solutions?',
          description: 'Contact us today to discuss your needs and get a personalized quote for our inland transport and warehousing services.',
          primaryButton: 'Request a Quote',
          secondaryButton: 'View All Our Services'
        },
        contact: {
          title: 'Need Help?',
          subtitle: 'Our team of inland transport experts is here to support you',
          callUs: 'Call Us',
          writeUs: 'Write to Us',
          visitUs: 'Visit Us',
          phone: '+230 123 4567',
          email: 'info@worldlink.mu',
          address: 'Jin Fei Business Park',
          city: 'Riche Terre, Mauritius',
          responseTime: 'Response within 24h',
          businessHours: 'Mon-Fri: 8am-6pm'
        }
      }
    },
    cookieBanner: {
      title: 'We use cookies to improve your experience',
      description: 'By continuing to browse, you accept our use of cookies.',
      necessary: 'Necessary only',
      customize: 'Customize',
      acceptAll: 'Accept all',
      modal: {
        title: 'Customize your cookie preferences',
        description: 'Choose which types of cookies you want to allow. Necessary cookies are always enabled for the proper functioning of the website.',
        necessary: {
          title: 'Necessary cookies',
          description: 'Essential for the functioning of the website. Cannot be disabled.'
        },
        analytics: {
          title: 'Analytics cookies',
          description: 'Help us understand how you use the site and improve it.'
        },
        marketing: {
          title: 'Marketing cookies',
          description: 'Used to display relevant advertisements and measure campaign effectiveness.'
        },
        functional: {
          title: 'Functional cookies',
          description: 'Improve user experience by remembering your preferences and settings.'
        },
        cancel: 'Cancel',
        save: 'Save preferences',
        compliance: {
          title: 'Legal Compliance & Data Protection',
          rgpd: 'GDPR (General Data Protection Regulation): We strictly comply with GDPR and applicable data protection laws.',
          consent: 'Explicit Consent: No non-essential cookies are installed without your prior and explicit consent.',
          withdrawal: 'Right of Withdrawal: You can modify or withdraw your consent at any time through this interface.',
          transparency: 'Transparency: We clearly inform you about the use of each type of cookie and their purpose.'
        },
        technical: {
          title: 'Technical Information about Cookies',
          duration: 'Retention Period: Cookies are retained according to their type: session (deleted when browser closes) or persistent (up to 1 year maximum).',
          transfer: 'Data Transfer: No personal data is transferred to third parties without your explicit consent.',
          security: 'Security: All our cookies use secure connections (HTTPS) and comply with security standards.'
        },
        legal: {
          privacy: 'Privacy Policy',
          legal: 'Legal Notice',
          terms: 'Terms of Use'
        }
      }
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