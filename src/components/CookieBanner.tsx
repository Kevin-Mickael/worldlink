import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Shield, BarChart3, Target, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieBannerProps {
  onPageChange?: (page: string) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onPageChange }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  // Fonction pour gérer les assets publics
  const publicAsset = (relativePath: string) => `${import.meta.env.BASE_URL}${relativePath.replace(/^\//, '')}`;
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const setSecureCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    
    // Cookie sécurisé avec httpOnly (géré côté serveur) et autres attributs de sécurité
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Strict; Secure`;
  };

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    setPreferences(allPreferences);
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    
    // Définir les cookies sécurisés
    setSecureCookie('cookiesAccepted', 'true');
    setSecureCookie('analyticsCookies', 'true');
    setSecureCookie('marketingCookies', 'true');
    setSecureCookie('functionalCookies', 'true');
    
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    setPreferences(necessaryOnly);
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(necessaryOnly));
    
    // Définir les cookies sécurisés
    setSecureCookie('cookiesAccepted', 'true');
    setSecureCookie('analyticsCookies', 'false');
    setSecureCookie('marketingCookies', 'false');
    setSecureCookie('functionalCookies', 'false');
    
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowModal(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    
    // Définir les cookies sécurisés
    setSecureCookie('cookiesAccepted', 'true');
    setSecureCookie('analyticsCookies', preferences.analytics.toString());
    setSecureCookie('marketingCookies', preferences.marketing.toString());
    setSecureCookie('functionalCookies', preferences.functional.toString());
    
    setShowModal(false);
    setIsVisible(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return; // Ne peut pas être désactivé
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Banner principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Logo et texte à gauche */}
            <div className="flex items-start gap-3 w-full lg:w-auto">
              <img 
                src={publicAsset('worldlink.png')} 
                alt="WorldLink Logistics" 
                className="h-10 w-auto flex-shrink-0 mt-1"
              />
              <div className="text-sm text-gray-700 flex-1 min-w-0">
                <p className="font-medium">
                  {t('cookieBanner.title')}
                </p>
                <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                  {t('cookieBanner.description')}
                </p>
              </div>
            </div>

            {/* Boutons d'action à droite */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                onClick={handleAcceptNecessary}
                className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
              >
                {t('cookieBanner.necessary')}
              </button>
              <button
                onClick={handleCustomize}
                className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
              >
                {t('cookieBanner.customize')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-3 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
              >
                {t('cookieBanner.acceptAll')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de personnalisation */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img 
                  src={publicAsset('worldlink.png')} 
                  alt="WorldLink Logistics" 
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('cookieBanner.modal.title')}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    WorldLink Logistics - {onPageChange ? (
                      <button
                        onClick={() => {
                          onPageChange('legal');
                          setShowModal(false);
                        }}
                        className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer underline"
                      >
                        {t('cookieBanner.modal.compliance.title').split('&')[0].trim()}
                      </button>
                    ) : (
                      t('cookieBanner.modal.compliance.title').split('&')[0].trim()
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Contenu */}
            <div className="p-6 space-y-6">
                             <p className="text-gray-600">
                 {t('cookieBanner.modal.description')}
               </p>

              {/* Section Conformité Légale */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-2">
                      {t('cookieBanner.modal.compliance.title')}
                    </h4>
                    <div className="text-sm text-blue-800 space-y-2">
                      <p>
                        <strong>{t('cookieBanner.modal.compliance.rgpd').split(':')[0]}:</strong> 
                        {t('cookieBanner.modal.compliance.rgpd').split(':')[1]}
                      </p>
                      <p>
                        <strong>{t('cookieBanner.modal.compliance.consent').split(':')[0]}:</strong> 
                        {t('cookieBanner.modal.compliance.consent').split(':')[1]}
                      </p>
                      <p>
                        <strong>{t('cookieBanner.modal.compliance.withdrawal').split(':')[0]}:</strong> 
                        {t('cookieBanner.modal.compliance.withdrawal').split(':')[1]}
                      </p>
                      <p>
                        <strong>{t('cookieBanner.modal.compliance.transparency').split(':')[0]}:</strong> 
                        {t('cookieBanner.modal.compliance.transparency').split(':')[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Informations Techniques */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {t('cookieBanner.modal.technical.title')}
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>
                        <strong>{t('cookieBanner.modal.technical.duration').split(':')[0]}:</strong> 
                        {t('cookieBanner.modal.technical.duration').split(':')[1]}
                      </p>
                      <p>
                        <strong>{t('cookieBanner.modal.technical.transfer').split(':')[0]}:</strong> 
                        {t('cookieBanner.modal.technical.transfer').split(':')[1]}
                      </p>
                      <p>
                        <strong>{t('cookieBanner.modal.technical.security').split(':')[0]}:</strong> 
                        {t('cookieBanner.modal.technical.security').split(':')[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies nécessaires */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                                             <h4 className="font-medium text-gray-900">
                         {t('cookieBanner.modal.necessary.title')}
                       </h4>
                       <p className="text-sm text-gray-600">
                         {t('cookieBanner.modal.necessary.description')}
                       </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <div>
                                             <h4 className="font-medium text-gray-900">
                         {t('cookieBanner.modal.analytics.title')}
                       </h4>
                       <p className="text-sm text-gray-600">
                         {t('cookieBanner.modal.analytics.description')}
                       </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Cookies marketing */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-purple-600" />
                    <div>
                                             <h4 className="font-medium text-gray-900">
                         {t('cookieBanner.modal.marketing.title')}
                       </h4>
                       <p className="text-sm text-gray-600">
                         {t('cookieBanner.modal.marketing.description')}
                       </p>
                     </div>
                   </div>
                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       checked={preferences.marketing}
                       onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                       className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                     />
                   </div>
                 </div>
               </div>

               {/* Cookies fonctionnels */}
               <div className="border border-gray-200 rounded-lg p-4">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <Settings className="h-5 w-5 text-orange-600" />
                     <div>
                                                <h4 className="font-medium text-gray-900">
                           {t('cookieBanner.modal.functional.title')}
                         </h4>
                         <p className="text-sm text-gray-600">
                           {t('cookieBanner.modal.functional.description')}
                         </p>
                     </div>
                   </div>
                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       checked={preferences.functional}
                       onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                       className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                     />
                   </div>
                 </div>
               </div>
             </div>

                         {/* Footer */}
            <div className="border-t border-gray-200 bg-gray-50">
              {/* Boutons d'Action */}
              <div className="flex items-center justify-between p-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t('cookieBanner.modal.cancel')}
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  {t('cookieBanner.modal.save')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
