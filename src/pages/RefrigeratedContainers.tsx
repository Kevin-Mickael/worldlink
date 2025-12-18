import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, CheckCircle, Clock, Shield, Globe, Thermometer, Package, MapPin, Phone, Mail, Droplets, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const RefrigeratedContainersPage: React.FC = () => {
  const { t } = useLanguage();

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Refrigerated Food Containers",
    "provider": {
      "@type": "Organization",
      "name": "WorldLink Logistics",
      "url": "https://worldlinklogistics.mu"
    },
    "areaServed": "Worldwide",
    "description": t('servicePages.refrigeratedContainers.hero.description'),
    "name": t('servicePages.refrigeratedContainers.hero.title'),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MUR",
      "availability": "https://schema.org/InStock"
    }
  }), [t]);

  const features = [
    t('servicePages.refrigeratedContainers.features.items.0'),
    t('servicePages.refrigeratedContainers.features.items.1'),
    t('servicePages.refrigeratedContainers.features.items.2'),
    t('servicePages.refrigeratedContainers.features.items.3'),
    t('servicePages.refrigeratedContainers.features.items.4'),
    t('servicePages.refrigeratedContainers.features.items.5'),
    t('servicePages.refrigeratedContainers.features.items.6'),
    t('servicePages.refrigeratedContainers.features.items.7')
  ];

  const temperatureRanges = [
    {
      icon: <Snowflake className="h-8 w-8 text-blue-500" />,
      range: t('servicePages.refrigeratedContainers.temperatureRanges.items.0.range'),
      title: t('servicePages.refrigeratedContainers.temperatureRanges.items.0.title'),
      description: t('servicePages.refrigeratedContainers.temperatureRanges.items.0.description')
    },
    {
      icon: <Thermometer className="h-8 w-8 text-sky-500" />,
      range: t('servicePages.refrigeratedContainers.temperatureRanges.items.1.range'),
      title: t('servicePages.refrigeratedContainers.temperatureRanges.items.1.title'),
      description: t('servicePages.refrigeratedContainers.temperatureRanges.items.1.description')
    },
    {
      icon: <Droplets className="h-8 w-8 text-green-500" />,
      range: t('servicePages.refrigeratedContainers.temperatureRanges.items.2.range'),
      title: t('servicePages.refrigeratedContainers.temperatureRanges.items.2.title'),
      description: t('servicePages.refrigeratedContainers.temperatureRanges.items.2.description')
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.refrigeratedContainers.benefits.items.0.title'),
      description: t('servicePages.refrigeratedContainers.benefits.items.0.description')
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.refrigeratedContainers.benefits.items.1.title'),
      description: t('servicePages.refrigeratedContainers.benefits.items.1.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.refrigeratedContainers.benefits.items.2.title'),
      description: t('servicePages.refrigeratedContainers.benefits.items.2.description')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-sky-500" />,
      title: t('servicePages.refrigeratedContainers.benefits.items.3.title'),
      description: t('servicePages.refrigeratedContainers.benefits.items.3.description')
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: t('servicePages.refrigeratedContainers.process.steps.0.title'),
      description: t('servicePages.refrigeratedContainers.process.steps.0.description')
    },
    {
      step: '2',
      title: t('servicePages.refrigeratedContainers.process.steps.1.title'),
      description: t('servicePages.refrigeratedContainers.process.steps.1.description')
    },
    {
      step: '3',
      title: t('servicePages.refrigeratedContainers.process.steps.2.title'),
      description: t('servicePages.refrigeratedContainers.process.steps.2.description')
    },
    {
      step: '4',
      title: t('servicePages.refrigeratedContainers.process.steps.3.title'),
      description: t('servicePages.refrigeratedContainers.process.steps.3.description')
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={t('servicePages.refrigeratedContainers.hero.title') + " - WorldLink Logistics"}
        description={t('servicePages.refrigeratedContainers.hero.description')}
        structuredData={structuredData}
        canonical="https://worldlinklogistics.mu/refrigerated-containers"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
              <Snowflake className="h-20 w-20 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">{t('servicePages.refrigeratedContainers.hero.title')}</h1>
          <p className="text-2xl font-light mb-8 text-sky-200">
            {t('servicePages.refrigeratedContainers.hero.subtitle')}
          </p>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('servicePages.refrigeratedContainers.hero.description')}
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                {t('servicePages.refrigeratedContainers.overview.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('servicePages.refrigeratedContainers.overview.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('servicePages.refrigeratedContainers.overview.description2')}
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Thermometer className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-800">{t('servicePages.refrigeratedContainers.overview.feature')}</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-photo/container-logistic-reefer-shipping-frozen-food-refrigerated-container-export-logistics_33867-1869.jpg"
                alt="Refrigerated Food Containers"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Ranges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.temperatureRanges.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.refrigeratedContainers.temperatureRanges.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temperatureRanges.map((range, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                  {range.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-4">{range.range}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{range.title}</h3>
                <p className="text-gray-600 leading-relaxed">{range.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.refrigeratedContainers.features.subtitle')}
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
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.refrigeratedContainers.benefits.subtitle')}
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

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.refrigeratedContainers.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-300 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                {t('servicePages.refrigeratedContainers.technology.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('servicePages.refrigeratedContainers.technology.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700">{t('servicePages.refrigeratedContainers.technology.features.0')}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700">{t('servicePages.refrigeratedContainers.technology.features.1')}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700">{t('servicePages.refrigeratedContainers.technology.features.2')}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-sky-100 p-12 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.technology.successRate')}</div>
                <div className="text-xl text-blue-800 font-semibold">{t('servicePages.refrigeratedContainers.technology.successTitle')}</div>
                <div className="text-lg text-blue-700 mt-2">{t('servicePages.refrigeratedContainers.technology.successSubtitle')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            {t('servicePages.refrigeratedContainers.cta.title')}
          </h2>
          <p className="text-xl text-blue-200 mb-10">
            {t('servicePages.refrigeratedContainers.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl inline-block"
            >
              {t('servicePages.refrigeratedContainers.cta.primaryButton')}
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 inline-block"
            >
              {t('servicePages.refrigeratedContainers.cta.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.contact.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicePages.refrigeratedContainers.contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.contact.callUs')}</h3>
              <p className="text-gray-600">+230 236 3189</p>
              <p className="text-gray-600">8:30 to 17:00 mon - friday</p>
              <p className="text-gray-600">8:30 to 12:00 sat</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.contact.writeUs')}</h3>
              <p className="text-gray-600">info@worldlink.mu</p>
              <p className="text-gray-600">Response within 24h</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('servicePages.refrigeratedContainers.contact.visitUs')}</h3>
              <p className="text-gray-600">Jin Fei Business Park</p>
              <p className="text-gray-600">Riche Terre, Mauritius</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefrigeratedContainersPage;
