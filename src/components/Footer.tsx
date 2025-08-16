import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  const quickLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
    { id: 'faq', label: t('nav.faq') }
  ];

  return (
    <footer>
      {/* Main dark section */}
      <div className="bg-[#0b2436] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/worldlink.png" alt="WorldLink" className="h-10 w-auto" />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-sky-400" />
                  <span>123 Port Avenue, Maritime City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-sky-400" />
                  <span>info@logiflow.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-sky-400" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('footer.links')}</h3>
              <div className="h-0.5 w-12 bg-orange-400 mb-6"></div>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onPageChange(link.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('nav.services')}</h3>
              <div className="h-0.5 w-12 bg-orange-400 mb-6"></div>
              <ul className="space-y-3 text-gray-300">
                <li>{t('services.shipping.title')}</li>
                <li>{t('services.warehousing.title')}</li>
                <li>{t('services.inventory.title')}</li>
                <li>{t('services.delivery.title')}</li>
                <li>{t('services.cfs.title')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom light bar */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600 text-sm">© 2025 WorldLink. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;