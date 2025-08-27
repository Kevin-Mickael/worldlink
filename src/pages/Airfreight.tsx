import React from 'react';
import { Plane, CheckCircle, Clock, Shield, Globe, Truck, MapPin, Phone, Mail, Zap, Package, Route, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AirfreightProps {
  onPageChange: (page: string) => void;
}

const AirfreightPage: React.FC<AirfreightProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  const features = [
    t('servicePages.airfreight.features.items.0'),
    t('servicePages.airfreight.features.items.1'),
    t('servicePages.airfreight.features.items.2'),
    t('servicePages.airfreight.features.items.3'),
    t('servicePages.airfreight.features.items.4'),
    t('servicePages.airfreight.features.items.5'),
    t('servicePages.airfreight.features.items.6'),
    t('servicePages.airfreight.features.items.7')
  ];

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.services.items.0.title'),
      description: t('servicePages.airfreight.services.items.0.description')
    },
    {
      icon: <Package className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.services.items.1.title'),
      description: t('servicePages.airfreight.services.items.1.description')
    },
    {
      icon: <Route className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.services.items.2.title'),
      description: t('servicePages.airfreight.services.items.2.description')
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.services.items.3.title'),
      description: t('servicePages.airfreight.services.items.3.description')
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.benefits.items.0.title'),
      description: t('servicePages.airfreight.benefits.items.0.description')
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.benefits.items.1.title'),
      description: t('servicePages.airfreight.benefits.items.1.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.benefits.items.2.title'),
      description: t('servicePages.airfreight.benefits.items.2.description')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
      title: t('servicePages.airfreight.benefits.items.3.title'),
      description: t('servicePages.airfreight.benefits.items.3.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
              <Plane className="h-20 w-20 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">{t('servicePages.airfreight.hero.title')}</h1>
          <p className="text-2xl font-light mb-8 text-sky-200">
            {t('servicePages.airfreight.hero.subtitle')}
          </p>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('servicePages.airfreight.hero.description')}
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                {t('servicePages.airfreight.overview.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('servicePages.airfreight.overview.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('servicePages.airfreight.overview.description2')}
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Route className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-800">{t('servicePages.airfreight.overview.feature')}</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://media.istockphoto.com/id/504606896/photo/stack-of-cargo-containers-at-the-docks.jpg?s=612x612&w=0&k=20&c=JinxScutWXDYJX10eRw6OOolv8ddCgNZZwbvHibi3Uo="
                alt="Airfreight Services"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">24/7</div>
                  <div className="text-sm text-gray-600">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.airfreight.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.airfreight.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.airfreight.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.airfreight.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.airfreight.benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.airfreight.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            {t('servicePages.airfreight.cta.title')}
          </h2>
          <p className="text-xl text-blue-200 mb-10">
            {t('servicePages.airfreight.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {t('servicePages.airfreight.cta.primaryButton')}
            </button>
            <button
              onClick={() => onPageChange('services')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('servicePages.airfreight.cta.secondaryButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.airfreight.contact.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.airfreight.contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.airfreight.contact.callUs')}</h3>
              <p className="text-gray-600">+230 123 4567</p>
              <p className="text-gray-600">Mon-Fri: 8am-6pm</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.airfreight.contact.writeUs')}</h3>
              <p className="text-gray-600">info@worldlink.mu</p>
              <p className="text-gray-600">Response within 24h</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.airfreight.contact.visitUs')}</h3>
              <p className="text-gray-600">Jin Fei Business Park</p>
              <p className="text-gray-600">Riche Terre, Mauritius</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirfreightPage;
