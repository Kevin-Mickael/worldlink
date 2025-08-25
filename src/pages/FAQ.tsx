import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      question: t('faqItems.delivery.question'),
      answer: t('faqItems.delivery.answer'),
      category: t('faqItems.delivery.category')
    },
    {
      id: 2,
      question: t('faqItems.tracking.question'),
      answer: t('faqItems.tracking.answer'),
      category: t('faqItems.tracking.category')
    },
    {
      id: 3,
      question: t('faqItems.warehousing.question'),
      answer: t('faqItems.warehousing.answer'),
      category: t('faqItems.warehousing.category')
    },
    {
      id: 4,
      question: t('faqItems.goods.question'),
      answer: t('faqItems.goods.answer'),
      category: t('faqItems.goods.category')
    },
    {
      id: 5,
      question: t('faqItems.pricing.question'),
      answer: t('faqItems.pricing.answer'),
      category: t('faqItems.pricing.category')
    },
    {
      id: 6,
      question: t('faqItems.insurance.question'),
      answer: t('faqItems.insurance.answer'),
      category: t('faqItems.insurance.category')
    },
    {
      id: 7,
      question: t('faqItems.claims.question'),
      answer: t('faqItems.claims.answer'),
      category: t('faqItems.claims.category')
    },
    {
      id: 8,
      question: t('faqItems.cfs.question'),
      answer: t('faqItems.cfs.answer'),
      category: t('faqItems.cfs.category')
    },
    {
      id: 9,
      question: t('faqItems.support.question'),
      answer: t('faqItems.support.answer'),
      category: t('faqItems.support.category')
    },
    {
      id: 10,
      question: t('faqItems.solutions.question'),
      answer: t('faqItems.solutions.answer'),
      category: t('faqItems.solutions.category')
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen">
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
            <button
              onClick={() => setSearchTerm('')}
              className={`px-6 py-3 rounded-full transition-colors duration-300 ${
                searchTerm === '' 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
                          >
                {t('faq.allCategories')}
              </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category)}
                className={`px-6 py-3 rounded-full transition-colors duration-300 ${
                  searchTerm === category
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-blue-900 hover:bg-blue-50'
                }`}
              >
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
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
              href="tel:+15551234567"
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
                          >
                {t('faq.callUs')}
              </a>
            <a
              href="mailto:info@logiflow.com"
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