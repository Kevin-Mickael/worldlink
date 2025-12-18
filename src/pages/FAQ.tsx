import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Container, Package, Snowflake, FileText, Plane, ShoppingCart, Truck, Shield, Clock, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const faqs = [
    // FREIGHT CONSOLIDATION & FCL
    {
      id: 1,
      question: t('faqItems.freightConsolidation.question'),
      answer: t('faqItems.freightConsolidation.answer'),
      category: t('faqItems.freightConsolidation.category'),
      icon: <Container className="h-5 w-5" />
    },
    {
      id: 2,
      question: t('faqItems.lclFcl.question'),
      answer: t('faqItems.lclFcl.answer'),
      category: t('faqItems.lclFcl.category'),
      icon: <Container className="h-5 w-5" />
    },
    {
      id: 3,
      question: t('faqItems.consolidationTime.question'),
      answer: t('faqItems.consolidationTime.answer'),
      category: t('faqItems.consolidationTime.category'),
      icon: <Container className="h-5 w-5" />
    },

    // PERSONAL EFFECTS & PROJECT SHIPMENTS
    {
      id: 4,
      question: t('faqItems.personalEffects.question'),
      answer: t('faqItems.personalEffects.answer'),
      category: t('faqItems.personalEffects.category'),
      icon: <Package className="h-5 w-5" />
    },
    {
      id: 5,
      question: t('faqItems.fragileItems.question'),
      answer: t('faqItems.fragileItems.answer'),
      category: t('faqItems.fragileItems.category'),
      icon: <Package className="h-5 w-5" />
    },
    {
      id: 6,
      question: t('faqItems.unpackingService.question'),
      answer: t('faqItems.unpackingService.answer'),
      category: t('faqItems.unpackingService.category'),
      icon: <Package className="h-5 w-5" />
    },

    // REFRIGERATED CONTAINERS
    {
      id: 7,
      question: t('faqItems.temperatureRange.question'),
      answer: t('faqItems.temperatureRange.answer'),
      category: t('faqItems.temperatureRange.category'),
      icon: <Snowflake className="h-5 w-5" />
    },
    {
      id: 8,
      question: t('faqItems.foodStandards.question'),
      answer: t('faqItems.foodStandards.answer'),
      category: t('faqItems.foodStandards.category'),
      icon: <Snowflake className="h-5 w-5" />
    },
    {
      id: 9,
      question: t('faqItems.coolingFailure.question'),
      answer: t('faqItems.coolingFailure.answer'),
      category: t('faqItems.coolingFailure.category'),
      icon: <Snowflake className="h-5 w-5" />
    },

    // CUSTOMS CLEARING
    {
      id: 10,
      question: t('faqItems.customsDocuments.question'),
      answer: t('faqItems.customsDocuments.answer'),
      category: t('faqItems.customsDocuments.category'),
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 11,
      question: t('faqItems.clearingTime.question'),
      answer: t('faqItems.clearingTime.answer'),
      category: t('faqItems.clearingTime.category'),
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 12,
      question: t('faqItems.customsTaxes.question'),
      answer: t('faqItems.customsTaxes.answer'),
      category: t('faqItems.customsTaxes.category'),
      icon: <FileText className="h-5 w-5" />
    },

    // AIRFREIGHT SERVICES
    {
      id: 13,
      question: t('faqItems.airDeliveryTime.question'),
      answer: t('faqItems.airDeliveryTime.answer'),
      category: t('faqItems.airDeliveryTime.category'),
      icon: <Plane className="h-5 w-5" />
    },
    {
      id: 14,
      question: t('faqItems.doorToDoor.question'),
      answer: t('faqItems.doorToDoor.answer'),
      category: t('faqItems.doorToDoor.category'),
      icon: <Plane className="h-5 w-5" />
    },
    {
      id: 15,
      question: t('faqItems.airCargoTypes.question'),
      answer: t('faqItems.airCargoTypes.answer'),
      category: t('faqItems.airCargoTypes.category'),
      icon: <Plane className="h-5 w-5" />
    },

    // PRODUCT SOURCING
    {
      id: 16,
      question: t('faqItems.supplierIdentification.question'),
      answer: t('faqItems.supplierIdentification.answer'),
      category: t('faqItems.supplierIdentification.category'),
      icon: <ShoppingCart className="h-5 w-5" />
    },
    {
      id: 17,
      question: t('faqItems.priceNegotiation.question'),
      answer: t('faqItems.priceNegotiation.answer'),
      category: t('faqItems.priceNegotiation.category'),
      icon: <ShoppingCart className="h-5 w-5" />
    },
    {
      id: 18,
      question: t('faqItems.qualityControl.question'),
      answer: t('faqItems.qualityControl.answer'),
      category: t('faqItems.qualityControl.category'),
      icon: <ShoppingCart className="h-5 w-5" />
    },

    // INLAND TRANSPORT & CFS
    {
      id: 19,
      question: t('faqItems.cfsFacility.question'),
      answer: t('faqItems.cfsFacility.answer'),
      category: t('faqItems.cfsFacility.category'),
      icon: <Truck className="h-5 w-5" />
    },
    {
      id: 20,
      question: t('faqItems.inlandCoverage.question'),
      answer: t('faqItems.inlandCoverage.answer'),
      category: t('faqItems.inlandCoverage.category'),
      icon: <Truck className="h-5 w-5" />
    },
    {
      id: 21,
      question: t('faqItems.cfsStorage.question'),
      answer: t('faqItems.cfsStorage.answer'),
      category: t('faqItems.cfsStorage.category'),
      icon: <Truck className="h-5 w-5" />
    },

    // GENERAL SERVICES
    {
      id: 22,
      question: t('faqItems.insurance.question'),
      answer: t('faqItems.insurance.answer'),
      category: t('faqItems.insurance.category'),
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: 23,
      question: t('faqItems.tracking.question'),
      answer: t('faqItems.tracking.answer'),
      category: t('faqItems.tracking.category'),
      icon: <Clock className="h-5 w-5" />
    },
    {
      id: 24,
      question: t('faqItems.quoteResponse.question'),
      answer: t('faqItems.quoteResponse.answer'),
      category: t('faqItems.quoteResponse.category'),
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      id: 25,
      question: t('faqItems.complexProjects.question'),
      answer: t('faqItems.complexProjects.answer'),
      category: t('faqItems.complexProjects.category'),
      icon: <Globe className="h-5 w-5" />
    }
  ];

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }), [faqs]);

  const categories = [
    t('faq.allCategories'),
    t('faqItems.freightConsolidation.category'),
    t('faqItems.personalEffects.category'),
    t('faqItems.temperatureRange.category'),
    t('faqItems.customsDocuments.category'),
    t('faqItems.airDeliveryTime.category'),
    t('faqItems.supplierIdentification.category'),
    t('faqItems.cfsFacility.category'),
    t('faqItems.insurance.category')
  ];

  const getCategoryIcon = (category: string) => {
    const faq = faqs.find(f => f.category === category);
    return faq ? faq.icon : null;
  };

  const filteredFAQs = selectedCategory === t('faq.allCategories') || selectedCategory === ""
    ? faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : faqs.filter(faq =>
      faq.category === selectedCategory &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === t('faq.allCategories') ? "" : category);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t('faq.title') + " - WorldLink Logistics"}
        description={t('faq.description')}
        structuredData={structuredData}
        canonical="https://worldlinklogistics.mu/faq"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('faq.title')}</h1>
          <p className="text-2xl font-light mb-8 text-sky-200">
            {t('faq.subtitle')}
          </p>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('faq.description')}
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder={t('faq.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${(selectedCategory === "" && category === t('faq.allCategories')) ||
                  (selectedCategory === category && category !== t('faq.allCategories'))
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-white text-blue-900 hover:bg-blue-50 hover:shadow-md'
                  }`}
              >
                {getCategoryIcon(category) && category !== t('faq.allCategories') && (
                  <span className="text-sky-300">
                    {getCategoryIcon(category)}
                  </span>
                )}
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-sky-600 bg-sky-100 px-3 py-1 rounded-full flex items-center gap-2">
                        {faq.icon}
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-blue-900">
                        {faq.question}
                      </h3>
                    </div>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="h-6 w-6 text-blue-900 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-blue-900 flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === faq.id && (
                    <div className="px-8 pb-6 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                {t('faq.noResultsTitle')}
              </h3>
              <p className="text-gray-500">
                {t('faq.noResultsMessage')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <HelpCircle className="h-16 w-16 text-sky-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            {t('faq.ctaTitle')}
          </h2>
          <p className="text-xl text-sky-200 mb-10">
            {t('faq.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+23012345678"
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {t('faq.callUs')}
            </a>
            <a
              href="mailto:info@worldlink.mu"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              {t('faq.sendEmail')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;