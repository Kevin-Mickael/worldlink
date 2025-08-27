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
      sendEmail: 'Envoyez un Email'
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
      delivery: {
        question: 'Quels sont vos délais de livraison?',
        answer: 'Nos délais de livraison varient selon la destination et le type de service choisi. Pour les livraisons nationales, comptez 24-48h en express et 3-5 jours en standard. Pour l\'international, les délais sont de 3-7 jours selon la destination.',
        category: 'Livraison'
      },
      tracking: {
        question: 'Comment puis-je suivre mon envoi?',
        answer: 'Vous recevrez un numéro de suivi par email ou SMS dès l\'expédition de votre colis. Vous pouvez le saisir sur notre site web ou notre application mobile pour suivre votre envoi en temps réel.',
        category: 'Suivi'
      },
      warehousing: {
        question: 'Proposez-vous des services d\'entreposage?',
        answer: 'Oui, nous disposons d\'entrepôts sécurisés et climatisés. Nous offrons des solutions de stockage court et long terme avec système de gestion d\'inventaire avancé et accès 24/7.',
        category: 'Entreposage'
      },
      goods: {
        question: 'Quels types de marchandises acceptez-vous?',
        answer: 'Nous acceptons la plupart des marchandises légales, à l\'exception des matières dangereuses, produits périssables sans emballage approprié, et articles interdits par la réglementation internationale.',
        category: 'Marchandises'
      },
      pricing: {
        question: 'Comment sont calculés vos tarifs?',
        answer: 'Nos tarifs sont basés sur plusieurs facteurs : poids, dimensions, distance, type de service, et valeur déclarée. Nous offrons des tarifs préférentiels pour les clients réguliers et les gros volumes.',
        category: 'Tarification'
      },
      insurance: {
        question: 'Offrez-vous une assurance pour les envois?',
        answer: 'Oui, tous nos envois incluent une assurance de base. Vous pouvez souscrire une assurance complémentaire pour les marchandises de grande valeur. Notre équipe vous conseillera sur la meilleure option.',
        category: 'Assurance'
      },
      claims: {
        question: 'Que faire en cas de dommage ou de perte?',
        answer: 'En cas de dommage ou perte, contactez-nous immédiatement. Nous traiterons votre réclamation dans les 48h. Notre assurance couvrira les dommages selon les conditions générales.',
        category: 'Réclamations'
      },
      cfs: {
        question: 'Proposez-vous des services CFS?',
        answer: 'Oui, nous disposons d\'installations CFS (Container Freight Station) et d\'entrepôts sous douane. Nous gérons tous les aspects douaniers et documentaires pour vos imports/exports.',
        category: 'Services CFS'
      },
      support: {
        question: 'Comment contacter le service client?',
        answer: 'Notre service client est disponible par téléphone au +1 (555) 123-4567, par email à info@logiflow.com, ou via notre chat en ligne. Nos horaires sont du lundi au vendredi de 8h à 18h.',
        category: 'Support'
      },
      solutions: {
        question: 'Proposez-vous des solutions personnalisées?',
        answer: 'Absolument! Nous développons des solutions logistiques sur mesure selon vos besoins spécifiques. Contactez notre équipe commerciale pour discuter de vos exigences particulières.',
        category: 'Solutions'
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
      years: "Années d'expérience",
      services: 'Services offerts',
      countries: 'Pays de présence',
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
          businessHours: 'Lun-Ven: 8h-18h'
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
      video: 'Watch Video'
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
      sendEmail: 'Send Email'
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
      delivery: {
        question: 'What are your delivery times?',
        answer: 'Our delivery times vary depending on the destination and type of service chosen. For domestic deliveries, count 24-48h for express and 3-5 days for standard. For international, delivery times are 3-7 days depending on the destination.',
        category: 'Delivery'
      },
      tracking: {
        question: 'How can I track my shipment?',
        answer: 'You will receive a tracking number by email or SMS as soon as your package is shipped. You can enter it on our website or mobile app to track your shipment in real time.',
        category: 'Tracking'
      },
      warehousing: {
        question: 'Do you offer warehousing services?',
        answer: 'Yes, we have secure and climate-controlled warehouses. We offer short and long-term storage solutions with advanced inventory management system and 24/7 access.',
        category: 'Warehousing'
      },
      goods: {
        question: 'What types of goods do you accept?',
        answer: 'We accept most legal goods, except dangerous materials, perishable products without appropriate packaging, and items prohibited by international regulations.',
        category: 'Goods'
      },
      pricing: {
        question: 'How are your rates calculated?',
        answer: 'Our rates are based on several factors: weight, dimensions, distance, type of service, and declared value. We offer preferential rates for regular customers and large volumes.',
        category: 'Pricing'
      },
      insurance: {
        question: 'Do you offer insurance for shipments?',
        answer: 'Yes, all our shipments include basic insurance. You can subscribe to additional insurance for high-value goods. Our team will advise you on the best option.',
        category: 'Insurance'
      },
      claims: {
        question: 'What to do in case of damage or loss?',
        answer: 'In case of damage or loss, contact us immediately. We will process your claim within 48 hours. Our insurance will cover damages according to general conditions.',
        category: 'Claims'
      },
      cfs: {
        question: 'Do you offer CFS services?',
        answer: 'Yes, we have CFS (Container Freight Station) facilities and customs warehouses. We handle all customs and documentary aspects for your imports/exports.',
        category: 'CFS Services'
      },
      support: {
        question: 'How to contact customer service?',
        answer: 'Our customer service is available by phone at +1 (555) 123-4567, by email at info@logiflow.com, or via our online chat. Our hours are Monday to Friday from 8am to 6pm.',
        category: 'Support'
      },
      solutions: {
        question: 'Do you offer customized solutions?',
        answer: 'Absolutely! We develop custom logistics solutions according to your specific needs. Contact our sales team to discuss your particular requirements.',
        category: 'Solutions'
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
      years: 'Years of Experience',
      services: 'Services Offered',
      countries: 'Countries of Presence',
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