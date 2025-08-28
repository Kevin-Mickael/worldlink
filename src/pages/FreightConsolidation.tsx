import React from 'react';
import { Container, CheckCircle, Clock, Shield, Globe, Truck, Package, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

interface FreightConsolidationProps {
  onPageChange: (page: string) => void;
}

const FreightConsolidationPage: React.FC<FreightConsolidationProps> = ({ onPageChange }) => {
  usePageTitle('Freight Consolidation - WorldLink Logistics');
  const { t } = useLanguage();

  const features = [
    t('servicePages.freightConsolidation.features.items.0'),
    t('servicePages.freightConsolidation.features.items.1'),
    t('servicePages.freightConsolidation.features.items.2'),
    t('servicePages.freightConsolidation.features.items.3'),
    t('servicePages.freightConsolidation.features.items.4'),
    t('servicePages.freightConsolidation.features.items.5'),
    t('servicePages.freightConsolidation.features.items.6'),
    t('servicePages.freightConsolidation.features.items.7')
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.freightConsolidation.benefits.items.0.title'),
      description: t('servicePages.freightConsolidation.benefits.items.0.description')
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.freightConsolidation.benefits.items.1.title'),
      description: t('servicePages.freightConsolidation.benefits.items.1.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.freightConsolidation.benefits.items.2.title'),
      description: t('servicePages.freightConsolidation.benefits.items.2.description')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.freightConsolidation.benefits.items.3.title'),
      description: t('servicePages.freightConsolidation.benefits.items.3.description')
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: t('servicePages.freightConsolidation.process.steps.0.title'),
      description: t('servicePages.freightConsolidation.process.steps.0.description')
    },
    {
      step: '2',
      title: t('servicePages.freightConsolidation.process.steps.1.title'),
      description: t('servicePages.freightConsolidation.process.steps.1.description')
    },
    {
      step: '3',
      title: t('servicePages.freightConsolidation.process.steps.2.title'),
      description: t('servicePages.freightConsolidation.process.steps.2.description')
    },
    {
      step: '4',
      title: t('servicePages.freightConsolidation.process.steps.3.title'),
      description: t('servicePages.freightConsolidation.process.steps.3.description')
    },
    {
      step: '5',
      title: t('servicePages.freightConsolidation.process.steps.4.title'),
      description: t('servicePages.freightConsolidation.process.steps.4.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
              <Container className="h-20 w-20 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">{t('servicePages.freightConsolidation.hero.title')}</h1>
          <p className="text-2xl font-light mb-8 text-sky-200">
            {t('servicePages.freightConsolidation.hero.subtitle')}
          </p>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('servicePages.freightConsolidation.hero.description')}
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                {t('servicePages.freightConsolidation.overview.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('servicePages.freightConsolidation.overview.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('servicePages.freightConsolidation.overview.description2')}
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-sky-600" />
                </div>
                <span className="text-lg font-semibold text-gray-800">{t('servicePages.freightConsolidation.overview.feature')}</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://forto.com/wp-content/uploads/2024/12/freight-consolidation.png"
                alt="Freight Consolidation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">15-30%</div>
                  <div className="text-sm text-gray-600">{t('servicePages.freightConsolidation.overview.savings')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.freightConsolidation.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.freightConsolidation.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-sky-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-sky-600" />
                </div>
                <span className="text-lg text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.freightConsolidation.benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.freightConsolidation.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.freightConsolidation.process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.freightConsolidation.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-sky-300 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            {t('servicePages.freightConsolidation.cta.title')}
          </h2>
          <p className="text-xl text-sky-200 mb-10">
            {t('servicePages.freightConsolidation.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {t('servicePages.freightConsolidation.cta.primaryButton')}
            </button>
            <button
              onClick={() => onPageChange('services')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('servicePages.freightConsolidation.cta.secondaryButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.freightConsolidation.contact.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.freightConsolidation.contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6">
                <Phone className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.freightConsolidation.contact.callUs')}</h3>
              <p className="text-gray-600">{t('servicePages.freightConsolidation.contact.phone')}</p>
              <p className="text-gray-600">{t('servicePages.freightConsolidation.contact.businessHours')}</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6">
                <Mail className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.freightConsolidation.contact.writeUs')}</h3>
              <p className="text-gray-600">{t('servicePages.freightConsolidation.contact.email')}</p>
              <p className="text-gray-600">{t('servicePages.freightConsolidation.contact.responseTime')}</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.freightConsolidation.contact.visitUs')}</h3>
              <p className="text-gray-600">{t('servicePages.freightConsolidation.contact.address')}</p>
              <p className="text-gray-600">{t('servicePages.freightConsolidation.contact.city')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreightConsolidationPage;
