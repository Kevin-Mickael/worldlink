import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Plane, Package, Snowflake, Ship, FileText, ShoppingCart, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, languages } from '../contexts/LanguageContext';

const publicAsset = (relativePath: string) => `${import.meta.env.BASE_URL}${relativePath.replace(/^\//, '')}`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const servicesCloseTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  const clearServicesCloseTimeout = () => {
    if (servicesCloseTimeoutRef.current !== null) {
      window.clearTimeout(servicesCloseTimeoutRef.current);
      servicesCloseTimeoutRef.current = null;
    }
  };

  const scheduleServicesClose = () => {
    clearServicesCloseTimeout();
    servicesCloseTimeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const navigation = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'services', label: t('nav.services'), path: '/services' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' },
    { id: 'faq', label: t('nav.faq'), path: '/faq' }
  ];

  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close services dropdown on outside click or Escape
  useEffect(() => {
    if (!isServicesOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isServicesOpen]);

  const homeTop = isHome && !isScrolled;
  const homeBorderClass = '';

  const serviceOptions = [
    { id: 'freight', label: 'Freight Consolidation & Full Container Loads', icon: Ship, path: '/freight-consolidation' },
    { id: 'personal', label: 'Personal Effects & Project Shipments', icon: Package, path: '/personal-effects' },
    { id: 'refrigerated', label: 'Refrigerated Food Containers', icon: Snowflake, path: '/refrigerated-containers' },
    { id: 'customs', label: 'Customs Clearing & Compliance', icon: FileText, path: '/customs-clearing' },
    { id: 'airfreight', label: 'Airfreight Services', icon: Plane, path: '/airfreight' },
    { id: 'sourcing', label: 'Product Sourcing & Procurement', icon: ShoppingCart, path: '/product-sourcing' },
    { id: 'inland', label: 'Inland Transport & CFS Warehousing', icon: MapPin, path: '/inland-transport' }
  ];

  return (
    <header className={`${homeTop
        ? 'absolute top-0 left-0 w-full bg-black/40 backdrop-blur-[1px]'
        : 'sticky top-0 bg-white/95 backdrop-blur-md shadow-lg'
      } ${homeBorderClass} z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${isScrolled ? 'py-3' : 'py-4'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src={publicAsset('worldlink.png')} alt="WorldLink" className={`${isScrolled ? 'h-10' : 'h-12'} w-auto`} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              if (item.id !== 'services') {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`text-lg font-medium ${homeTop ? 'text-white' : 'text-gray-900'}`}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div
                  key={item.id}
                  ref={servicesRef}
                  className="relative group"
                  onMouseEnter={() => {
                    clearServicesCloseTimeout();
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={scheduleServicesClose}
                >
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center space-x-1 text-lg font-medium ${homeTop ? 'text-white' : 'text-gray-900'}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ease-out ${homeTop ? 'text-white' : 'text-gray-900'} ${isServicesOpen ? 'rotate-180' : ''} group-hover:rotate-180`} />
                  </button>
                  {isServicesOpen && (
                    <div
                      className="absolute left-0 top-full mt-2 w-64 bg-white/95 backdrop-blur rounded-xl shadow-2xl border border-gray-100/80 ring-1 ring-black/5 p-2 z-50 origin-top transform transition duration-150 ease-out"
                      onMouseEnter={clearServicesCloseTimeout}
                      onMouseLeave={scheduleServicesClose}
                    >
                      {serviceOptions.map(option => {
                        const IconComponent = option.icon;
                        return (
                          <Link
                            key={option.id}
                            to={option.path}
                            onClick={() => setIsServicesOpen(false)}
                            className="group w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-sky-800 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 transition-all duration-200 block"
                          >
                            <div className="flex items-center space-x-3">
                              <IconComponent className="h-4 w-4 text-gray-500 group-hover:text-sky-600 transition-colors" />
                              <span className="text-sm font-medium">{option.label}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-all duration-200 ${homeTop
                    ? 'text-white hover:bg-white/20'
                    : 'text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <span className={`text-sm font-medium ${homeTop ? 'text-white' : 'text-gray-900'}`}>{currentLanguage.name}</span>
                <ChevronDown className={`h-4 w-4 ${homeTop ? 'text-white' : 'text-gray-900'}`} />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-sky-50 hover:text-sky-700 transition-colors rounded"
                    >
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${homeTop
                  ? 'text-white hover:bg-white/20 hover:bg-opacity-20'
                  : 'text-gray-900 hover:bg-gray-100'
                }`}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 bg-white/95 backdrop-blur-md rounded-xl p-4 mt-2 shadow-lg border border-gray-200/50">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => {
                if (item.id !== 'services') {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-left py-3 px-4 rounded-lg text-gray-800 hover:bg-sky-50 hover:text-sky-700 font-medium transition-all duration-200 block"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <div key={item.id} className="px-2">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between py-3 px-2 rounded-lg text-gray-800 hover:bg-sky-50 hover:text-sky-700 font-medium transition-all duration-200"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isMobileServicesOpen ? 'transform rotate-180' : ''}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="mt-1 space-y-1 pl-3 pr-2 bg-gray-50/50 rounded-lg p-2">
                        {serviceOptions.map(option => {
                          const IconComponent = option.icon;
                          return (
                            <Link
                              key={option.id}
                              to={option.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="w-full text-left py-2 px-3 rounded-md text-gray-700 hover:bg-sky-100 hover:text-sky-800 transition-colors font-medium block"
                            >
                              <div className="flex items-center space-x-3">
                                <IconComponent className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">{option.label}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;