import React from 'react';
import { Target, Eye, Users, Award, Globe, Shield, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const publicAsset = (relativePath: string) => `${import.meta.env.BASE_URL}${relativePath.replace(/^\//, '')}`;

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      title: t('values.reliability.title'),
      description: t('values.reliability.description')
    },
    {
      icon: <Users className="h-8 w-8 text-sky-500" />,
      title: t('values.customerService.title'),
      description: t('values.customerService.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-sky-500" />,
      title: t('values.globalNetwork.title'),
      description: t('values.globalNetwork.description')
    },
    {
      icon: <Award className="h-8 w-8 text-sky-500" />,
      title: t('values.excellence.title'),
      description: t('values.excellence.description')
    }
  ];


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About WorldLink Logistics",
    "description": "Founded in 2014, WorldLink Logistics Ltd has rapidly grown from a two-person team to a leading logistics provider in Mauritius.",
    "publisher": {
      "@type": "Organization",
      "name": "WorldLink Logistics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://worldlinklogistics.mu/worldlink.png"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t('about.title') + " - WorldLink Logistics"}
        description="WorldLink Logistics Ltd is a leading logistics provider in Mauritius offering freight forwarding, warehousing, and customs clearing services."
        structuredData={structuredData}
        canonical="https://worldlinklogistics.mu/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
          <h2 className="text-2xl font-light mb-8 text-sky-200">{t('about.subtitle')}</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Founded in 2014 by Director Mr. Neeraj Goreeba, WorldLink Logistics Ltd has rapidly grown from a two-person team to a leading logistics provider in Mauritius, employing over 30 professionals today.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Building2 className="h-10 w-10 text-blue-900 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-900">Our Story</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  With its own CFS warehousing facility at Jin Fei Business & Industrial Park, Riche Terre, the company offers a comprehensive suite of freight and logistics solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From our modest beginnings in 2014 to our current position as an industry leader, we have maintained our commitment to excellence and innovation in all our services.
                </p>
              </div>
            </div>

            <div>
              <img
                src={publicAsset('worldlink.png')}
                alt="WorldLink Logistics"
                className="w-full h-96 object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-blue-900 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-900">{t('about.mission')}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Eye className="h-10 w-10 text-sky-500 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-900">{t('about.vision')}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://core-docs.s3.amazonaws.com/central_public_schools_ar/article/image/large_2364f5a7-9c2f-4acf-b6e6-ced27397fcd8.png"
                alt="Mission & Vision"
                className="w-full h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('values.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('achievements.title')}</h2>
            <p className="text-xl text-sky-200">
              {t('achievements.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-sky-300 mb-2">11+</div>
              <div className="text-xl">{t('achievements.experience')}</div>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-sky-300 mb-2">30+</div>
              <div className="text-xl">Employed Professionals</div>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-sky-300 mb-2">CFS</div>
              <div className="text-xl">Own Facilities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;