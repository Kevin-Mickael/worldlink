import React, { useMemo } from 'react';
import { Shield, FileText, Lock, Truck, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const Legal: React.FC = () => {
  const { t } = useLanguage();

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('legal.title'),
    "description": t('legal.subtitle'),
    "publisher": {
      "@type": "Organization",
      "name": "WorldLink Logistics",
      "url": "https://worldlinklogistics.mu"
    }
  }), [t]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={t('legal.title') + " - WorldLink Logistics"}
        description={t('legal.subtitle')}
        structuredData={structuredData}
        canonical="https://worldlinklogistics.mu/legal"
      />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-orange-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{t('legal.title')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('legal.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">

          {/* Terms & Conditions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <ol className="list-decimal list-inside space-y-3">
                {t('legal.terms.items').split(',').map((item: string, index: number) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                {t('legal.privacy.description')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t('legal.privacy.items').split(',').map((item: string, index: number) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Refund & Return Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Truck className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.refund.title')}</h2>
            </div>
            <div className="text-gray-700">
              <p>
                {t('legal.refund.description')}
              </p>
            </div>
          </div>

          {/* Delivery Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Truck className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.delivery.title')}</h2>
            </div>
            <div className="text-gray-700">
              <p>
                {t('legal.delivery.description')}
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.disclaimer.title')}</h2>
            </div>
            <div className="text-gray-700">
              <p>
                {t('legal.disclaimer.description')}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('legal.contact.title')}</h3>
            <p className="text-blue-700 mb-6">
              {t('legal.contact.description')}
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-blue-800">
                <p className="font-semibold">{t('legal.contact.email')}</p>
                <p>Neeraj@worldlink.mu</p>
              </div>
              <div className="text-blue-800">
                <p className="font-semibold">{t('legal.contact.phone')}</p>
                <p>+230 236 3189</p>
                <p className="text-sm mt-2">8:30 to 17:00 mon - friday</p>
                <p className="text-sm">8:30 to 12:00 sat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
