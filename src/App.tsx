import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import FAQPage from './pages/FAQ';
import LegalPage from './pages/Legal';

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
      </div>
    </LanguageProvider>
  );
}

export default App;