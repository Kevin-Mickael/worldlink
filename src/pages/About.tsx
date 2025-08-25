import React from 'react';
import { Target, Eye, Users, Award, Globe, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

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

  const team = [
    {
      name: 'Jean Dubois',
      role: t('team.ceo'),
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marie Martin',
      role: t('team.operations'),
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Pierre Leroy',
      role: t('team.logistics'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sophie Bernard',
      role: t('team.customerSupport'),
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
          <h2 className="text-2xl font-light mb-8 text-sky-200">{t('about.subtitle')}</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
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

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Logistics Operations"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 bg-opacity-20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
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

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('team.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-sky-600 font-medium">{member.role}</p>
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
              <div className="text-5xl font-bold text-sky-300 mb-2">15+</div>
              <div className="text-xl">{t('achievements.experience')}</div>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-sky-300 mb-2">50+</div>
              <div className="text-xl">{t('achievements.countries')}</div>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-sky-300 mb-2">1M+</div>
              <div className="text-xl">{t('achievements.packages')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;