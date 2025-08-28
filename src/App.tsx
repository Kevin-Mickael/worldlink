import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'legal':
        return <LegalPage />;
      case 'freight-consolidation':
        return <FreightConsolidationPage onPageChange={handlePageChange} />;
      case 'personal-effects':
        return <PersonalEffectsPage onPageChange={handlePageChange} />;
      case 'refrigerated-containers':
        return <RefrigeratedContainersPage onPageChange={handlePageChange} />;
      case 'customs-clearing':
        return <CustomsClearingPage onPageChange={handlePageChange} />;
      case 'airfreight':
        return <AirfreightPage onPageChange={handlePageChange} />;
      case 'product-sourcing':
        return <ProductSourcingPage onPageChange={handlePageChange} />;
      case 'inland-transport':
        return <InlandTransportPage onPageChange={handlePageChange} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        <main>
          {renderPage()}
        </main>
        <Footer onPageChange={handlePageChange} />
        <ChatBot />
        <CookieBanner onPageChange={handlePageChange} />
      </div>
    </LanguageProvider>
  );
}

export default App;