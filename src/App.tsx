import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import FAQPage from './pages/FAQ';
import LegalPage from './pages/Legal';
import FreightConsolidationPage from './pages/FreightConsolidation';
import PersonalEffectsPage from './pages/PersonalEffects';
import RefrigeratedContainersPage from './pages/RefrigeratedContainers';
import CustomsClearingPage from './pages/CustomsClearing';
import AirfreightPage from './pages/Airfreight';
import ProductSourcingPage from './pages/ProductSourcing';
import InlandTransportPage from './pages/InlandTransport';
import { getLocalizedSEOMetadata } from './config/seo';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const location = useLocation();

  // Determine current page ID for SEO
  const getCurrentPageId = (path: string) => {
    if (path === '/') return 'home';
    return path.substring(1); // e.g. 'about', 'services'
  };

  const currentPage = getCurrentPageId(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <SEO
        {...getLocalizedSEOMetadata(currentPage, t, currentLanguage.code)}
      />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/freight-consolidation" element={<FreightConsolidationPage />} />
          <Route path="/personal-effects" element={<PersonalEffectsPage />} />
          <Route path="/refrigerated-containers" element={<RefrigeratedContainersPage />} />
          <Route path="/customs-clearing" element={<CustomsClearingPage />} />
          <Route path="/airfreight" element={<AirfreightPage />} />
          <Route path="/product-sourcing" element={<ProductSourcingPage />} />
          <Route path="/inland-transport" element={<InlandTransportPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;