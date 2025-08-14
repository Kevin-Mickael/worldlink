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
      question: 'Quels sont vos délais de livraison?',
      answer: 'Nos délais de livraison varient selon la destination et le type de service choisi. Pour les livraisons nationales, comptez 24-48h en express et 3-5 jours en standard. Pour l\'international, les délais sont de 3-7 jours selon la destination.',
      category: 'Livraison'
    },
    {
      id: 2,
      question: 'Comment puis-je suivre mon envoi?',
      answer: 'Vous recevrez un numéro de suivi par email ou SMS dès l\'expédition de votre colis. Vous pouvez le saisir sur notre site web ou notre application mobile pour suivre votre envoi en temps réel.',
      category: 'Suivi'
    },
    {
      id: 3,
      question: 'Proposez-vous des services d\'entreposage?',
      answer: 'Oui, nous disposons d\'entrepôts sécurisés et climatisés. Nous offrons des solutions de stockage court et long terme avec système de gestion d\'inventaire avancé et accès 24/7.',
      category: 'Entreposage'
    },
    {
      id: 4,
      question: 'Quels types de marchandises acceptez-vous?',
      answer: 'Nous acceptons la plupart des marchandises légales, à l\'exception des matières dangereuses, produits périssables sans emballage approprié, et articles interdits par la réglementation internationale.',
      category: 'Marchandises'
    },
    {
      id: 5,
      question: 'Comment sont calculés vos tarifs?',
      answer: 'Nos tarifs sont basés sur plusieurs facteurs : poids, dimensions, distance, type de service, et valeur déclarée. Nous offrons des tarifs préférentiels pour les clients réguliers et les gros volumes.',
      category: 'Tarification'
    },
    {
      id: 6,
      question: 'Offrez-vous une assurance pour les envois?',
      answer: 'Oui, tous nos envois incluent une assurance de base. Vous pouvez souscrire une assurance complémentaire pour les marchandises de grande valeur. Notre équipe vous conseillera sur la meilleure option.',
      category: 'Assurance'
    },
    {
      id: 7,
      question: 'Que faire en cas de dommage ou de perte?',
      answer: 'En cas de dommage ou perte, contactez-nous immédiatement. Nous traiterons votre réclamation dans les 48h. Notre assurance couvrira les dommages selon les conditions générales.',
      category: 'Réclamations'
    },
    {
      id: 8,
      question: 'Proposez-vous des services CFS?',
      answer: 'Oui, nous disposons d\'installations CFS (Container Freight Station) et d\'entrepôts sous douane. Nous gérons tous les aspects douaniers et documentaires pour vos imports/exports.',
      category: 'Services CFS'
    },
    {
      id: 9,
      question: 'Comment contacter le service client?',
      answer: 'Notre service client est disponible par téléphone au +1 (555) 123-4567, par email à info@logiflow.com, ou via notre chat en ligne. Nos horaires sont du lundi au vendredi de 8h à 18h.',
      category: 'Support'
    },
    {
      id: 10,
      question: 'Proposez-vous des solutions personnalisées?',
      answer: 'Absolument! Nous développons des solutions logistiques sur mesure selon vos besoins spécifiques. Contactez notre équipe commerciale pour discuter de vos exigences particulières.',
      category: 'Solutions'
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
            Consultez les réponses aux questions les plus courantes ou contactez-nous pour une assistance personnalisée.
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
              placeholder="Rechercher une question..."
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
              Toutes
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
                Aucune question trouvée
              </h3>
              <p className="text-gray-500">
                Essayez avec d'autres mots-clés ou contactez-nous directement.
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
            Vous n'avez pas trouvé votre réponse?
          </h2>
          <p className="text-xl text-sky-200 mb-10">
            Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+15551234567"
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Nous Appeler
            </a>
            <a
              href="mailto:info@logiflow.com"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Envoyer un Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;