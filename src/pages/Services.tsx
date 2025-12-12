import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Warehouse, Package, Home, Building2, CheckCircle, Clock, Shield, Globe, Container, Plane, ShoppingCart, Ship, Snowflake, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

const ServicesPage: React.FC = () => {
  usePageTitle('Services - WorldLink Logistics');
  const { t } = useLanguage();

  const services = [
    {
      icon: <Container className="h-16 w-16 text-white" />,
      title: 'Freight Consolidation & Full Container Loads',
      description: 'Optimisez vos coûts de transport avec notre service de consolidation de fret et de chargement de conteneurs complets. Nous regroupons vos marchandises pour maximiser l\'efficacité et réduire les dépenses.',
      features: [
        'Consolidation de fret pour optimiser les coûts',
        'Chargement de conteneurs complets (FCL)',
        'Gestion des délais et planification',
        'Suivi en temps réel de vos expéditions'
      ],
      image: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-900 to-blue-700'
    },
    {
      icon: <Package className="h-16 w-16 text-white" />,
      title: 'Personal Effects & Project Shipments',
      description: 'Transport spécialisé pour vos effets personnels et projets. Nous assurons un traitement délicat et sécurisé pour tous types de biens personnels et équipements de projet.',
      features: [
        'Transport d\'effets personnels sécurisé',
        'Gestion des projets complexes',
        'Emballage et protection spécialisée',
        'Assurance et suivi personnalisé'
      ],
      image: 'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-sky-600 to-sky-800'
    },
    {
      icon: <Snowflake className="h-16 w-16 text-white" />,
      title: 'Refrigerated Food Containers',
      description: 'Conteneurs frigorifiques spécialisés pour le transport de denrées alimentaires. Maintenez la qualité et la fraîcheur de vos produits avec notre chaîne du froid contrôlée.',
      features: [
        'Conteneurs frigorifiques certifiés',
        'Contrôle de température en temps réel',
        'Conformité aux normes alimentaires',
        'Gestion de la chaîne du froid'
      ],
      image: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-800 to-sky-600'
    },
    {
      icon: <FileText className="h-16 w-16 text-white" />,
      title: 'Customs Clearing & Compliance',
      description: 'Services de dédouanement et de conformité réglementaire. Nous gérons tous les aspects administratifs et légaux pour assurer le passage en douane de vos marchandises.',
      features: [
        'Dédouanement complet des marchandises',
        'Conformité réglementaire internationale',
        'Gestion documentaire et procédures',
        'Optimisation des délais de mainlevée'
      ],
      image: 'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-sky-700 to-blue-800'
    },
    {
      icon: <Plane className="h-16 w-16 text-white" />,
      title: 'Airfreight Services',
      description: 'Transport aérien rapide et fiable pour vos envois urgents. Bénéficiez de notre réseau de partenaires aériens pour des délais optimaux et une flexibilité maximale.',
      features: [
        'Transport aérien express et standard',
        'Réseau de partenaires internationaux',
        'Gestion des aéroports majeurs',
        'Suivi proactif porte-à-porte'
      ],
      image: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-900 to-sky-700'
    },
    {
      icon: <ShoppingCart className="h-16 w-16 text-white" />,
      title: 'Product Sourcing & Procurement',
      description: 'Sourcing et approvisionnement de produits à l\'international. Nous vous aidons à identifier et sélectionner les meilleurs fournisseurs pour vos besoins spécifiques.',
      features: [
        'Identification de fournisseurs qualifiés',
        'Négociation et gestion des contrats',
        'Contrôle qualité et assurance',
        'Gestion des relations fournisseurs'
      ],
      image: 'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-sky-600 to-blue-800'
    },
    {
      icon: <Truck className="h-16 w-16 text-white" />,
      title: 'Inland Transport & CFS Warehousing',
      description: 'Transport terrestre et entreposage CFS (Container Freight Station). Solutions complètes pour la gestion de vos conteneurs et le transport intérieur.',
      features: [
        'Transport terrestre multimodal',
        'Entreposage CFS sécurisé',
        'Gestion des conteneurs vides',
        'Services de groupage et dégroupage'
      ],
      image: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-800 to-sky-600'
    }
  ];

  const advantages = [
    {
      icon: <Clock className="h-8 w-8 text-sky-500" />,
      title: 'Rapidité',
      description: 'Délais de livraison optimisés pour tous vos envois'
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      title: 'Sécurité',
      description: 'Protection maximale de vos marchandises'
    },
    {
      icon: <Globe className="h-8 w-8 text-sky-500" />,
      title: 'Couverture Globale',
      description: 'Réseau international de partenaires fiables'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-sky-500" />,
      title: 'Fiabilité',
      description: 'Engagement qualité sur tous nos services'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-2xl font-light mb-8 text-sky-200">
            {t('services.subtitle')}
          </p>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services logistiques conçus pour répondre à tous vos besoins, du transport à la livraison finale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-br ${service.gradient} p-8 rounded-2xl shadow-2xl`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-white bg-opacity-20 p-4 rounded-xl mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-white">
                          <CheckCircle className="h-5 w-5 text-sky-300 mr-3 flex-shrink-0" />
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Pourquoi Nous Choisir?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les avantages qui font de nous votre partenaire logistique idéal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et efficace pour tous vos besoins logistiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', description: 'Analyse de vos besoins logistiques' },
              { step: '2', title: 'Planification', description: 'Élaboration de la solution optimale' },
              { step: '3', title: 'Exécution', description: 'Mise en œuvre de votre solution' },
              { step: '4', title: 'Suivi', description: 'Monitoring et optimisation continue' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Optimiser Votre Logistique?
          </h2>
          <p className="text-xl text-sky-200 mb-10">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Link
            to="/contact"
            className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl inline-block"
          >
            Demander un Devis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;