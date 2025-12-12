import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/worldlink.png',
  ogType = 'website',
  structuredData
}) => {
  const { currentLanguage, t } = useLanguage();

  useEffect(() => {
    // Mise à jour du titre de la page
    if (title) {
      document.title = title;
    }

    // Mise à jour des métadonnées
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Métadonnées de base
    updateMetaTag('description', description || t('hero.description'));
    updateMetaTag('keywords', keywords || 'Worldlink Logistics Mauritius, Freight Forwarder Mauritius, Freight Company Mauritius, Shipping Company Mauritius, Customs Clearing Mauritius, Airfreight Mauritius, Sea Freight Mauritius, Cargo Services Mauritius, Freight Consolidation Mauritius, Container Shipping Mauritius');
    updateMetaTag('author', 'Worldlink Logistics Ltd');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', currentLanguage.code);
    updateMetaTag('geo.region', 'MU');
    updateMetaTag('geo.placename', 'Mauritius');
    updateMetaTag('geo.position', '-20.3484;57.5522');
    updateMetaTag('ICBM', '-20.3484, 57.5522');

    // Open Graph
    updatePropertyTag('og:title', title || 'Worldlink Logistics Mauritius - Trusted Logistics Partner');
    updatePropertyTag('og:description', description || t('hero.description'));
    updatePropertyTag('og:image', ogImage);
    updatePropertyTag('og:type', ogType);
    updatePropertyTag('og:url', canonical || window.location.href);
    updatePropertyTag('og:site_name', 'Worldlink Logistics Mauritius');
    updatePropertyTag('og:locale', currentLanguage.code === 'fr' ? 'fr_FR' : 'en_US');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || 'Worldlink Logistics Mauritius - Trusted Logistics Partner');
    updateMetaTag('twitter:description', description || t('hero.description'));
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, canonical, ogImage, ogType, structuredData, currentLanguage.code, t]);

  return null; // Ce composant ne rend rien visuellement
};

export default SEO;
