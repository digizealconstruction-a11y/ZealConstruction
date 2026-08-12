import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

import { HomePage } from './pages/HomePage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

import { PageRoute } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Terrace Waterproofing');

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  // Render active page based on state
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'why-choose-us':
        return (
          <WhyChooseUsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'appointment':
        return <AppointmentPage onNavigate={handleNavigate} />;
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'about':
        return (
          <AboutUsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Fixed Sticky Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page View Area */}
      <main className="flex-1 w-full">{renderPage()}</main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Interactive Free Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={selectedService}
      />
    </div>
  );
}

