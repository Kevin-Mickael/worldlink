import React from 'react';
import { Mail, Phone, MapPin, Building, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const publicAsset = (relativePath: string) => `${import.meta.env.BASE_URL}${relativePath.replace(/^\//, '')}`;

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'services', label: t('nav.services'), path: '/services' },
    { id: 'contact', label: t('contact'), path: '/contact' },
    { id: 'faq', label: t('nav.faq'), path: '/faq' }
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
                <img src={publicAsset('worldlink.png')} alt="WorldLink" className="h-10 w-auto" />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {t('footer.description')}
              </p>

              {/* Business Information */}
              <div className="space-y-3 text-gray-200 mb-6">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">WORLDLINK LOGISTICS LTD</p>
                    <p className="text-sm text-gray-400"> Business Registration Number : C14126723</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>PLOT 30A BUSINESS & INDUSTRIAL PARK</p>
                    <p>JIN FEI ZONE RICHE TERRE</p>
                    <p className="text-sm text-gray-400">Mauritius</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-sky-400" />
                  <div>
                    <p>Neeraj@worldlink.mu</p>
                    <p>christopher@worldlink.mu</p>
                    <p>simtee@worldlink.mu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <div>
                    <p>Neeraj: 52582275</p>
                    <p>Simtee: 52549671</p>
                    <p>Christopher: 55005465</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('footer.links')}</h3>
              <div className="h-0.5 w-12 bg-white mb-6"></div>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('nav.services')}</h3>
              <div className="h-0.5 w-12 bg-white mb-6"></div>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/freight-consolidation"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left block"
                  >
                    Freight Consolidation & Full Container Loads
                  </Link>
                </li>
                <li>
                  <Link
                    to="/personal-effects"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left block"
                  >
                    Personal Effects & Project Shipments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refrigerated-containers"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left block"
                  >
                    Refrigerated Food Containers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/customs-clearing"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left block"
                  >
                    Customs Clearing & Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/airfreight"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left block"
                  >
                    Airfreight Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-sourcing"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left block"
                  >
                    Product Sourcing & Procurement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inland-transport"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left block"
                  >
                    Inland Transport & CFS Warehousing
                  </Link>
                </li>
              </ul>

              {/* Social Media - Right side */}
              <div className="mt-6 pt-6 border-t border-gray-600">
                <div className="flex items-center space-x-3">
                  <Facebook className="h-5 w-5 text-sky-400" />
                  <a
                    href="https://www.facebook.com/worldlinklogisticsltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Follow us on Facebook
                  </a>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="mr-1">{t('footer.createdBy')}</span>
                  <a
                    href="https://creativfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    Création de site web & Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom light bar */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center space-x-2 text-sm">
            <span className="text-black">© 2025 WorldLink. {t('footer.rights')}</span>
            <span className="text-gray-400">-</span>
            <Link
              to="/legal"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Legal & Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;