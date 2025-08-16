import React, { useEffect, useRef, useState } from 'react';
import { Truck, Warehouse, Package, Home, Building2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomeProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener?.('change', updatePreference);
    return () => mediaQuery.removeEventListener?.('change', updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const element = videoContainerRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setShouldLoadVideo(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      { root: null, threshold: 0.2 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!shouldLoadVideo || !videoRef.current) return;
    const video = videoRef.current;
    const tryPlay = () => {
      video.play().catch(() => {});
    };
    if (typeof document !== 'undefined') {
      if (document.visibilityState === 'visible') {
        tryPlay();
      }
      const onVisibility = () => {
        if (document.visibilityState === 'visible') tryPlay();
      };
      document.addEventListener('visibilitychange', onVisibility);
      return () => document.removeEventListener('visibilitychange', onVisibility);
    }
  }, [shouldLoadVideo]);

  const services = [
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: t('services.shipping.title'),
      description: t('services.shipping.description')
    },
    {
      icon: <Warehouse className="h-12 w-12 text-white" />,
      title: t('services.warehousing.title'),
      description: t('services.warehousing.description')
    },
    {
      icon: <Package className="h-12 w-12 text-white" />,
      title: t('services.inventory.title'),
      description: t('services.inventory.description')
    },
    {
      icon: <Home className="h-12 w-12 text-white" />,
      title: t('services.delivery.title'),
      description: t('services.delivery.description')
    },
    {
      icon: <Building2 className="h-12 w-12 text-white" />,
      title: t('services.cfs.title'),
      description: t('services.cfs.description')
    }
  ];

  const stats = [
    { number: '29', label: "Années d'expérience" },
    { number: '8+', label: 'Services offerts' },
    { number: '3', label: 'Pays de présence' },
    { number: '24/7', label: 'Assistance dédiée' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0" ref={videoContainerRef}>
          {shouldLoadVideo && !prefersReducedMotion ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/worldlink.png"
              aria-hidden="true"
              className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          ) : (
            <img src="/worldlink.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-sky-200">
            {t('hero.subtitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onPageChange('services')}
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <span>{t('hero.cta')}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-white bg-opacity-30 rounded-full flex justify-center">
            <div className="w-1 h-8 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-900 to-sky-600 p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onPageChange('services')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Voir Tous les Services
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-sky-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-sky-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Prêt à Optimiser Votre Logistique?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins logistiques et découvrir comment nous pouvons vous aider.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Contactez-Nous
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;