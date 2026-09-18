import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopAnnouncement from './components/TopAnnouncement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ContactModal from './components/ContactModal';

// Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AdminPanelPage from './pages/AdminPanelPage';
import CitizenAppPage from './pages/CitizenAppPage';
import PosterStudioPage from './pages/PosterStudioPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import PrivacyTermsPage from './pages/PrivacyTermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-600 selection:text-white antialiased">
      <ScrollToTop />
      
      {/* Top Announcement Bar */}
      <TopAnnouncement />

      {/* Main Navbar */}
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Main Body Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenDemoModal={() => setIsDemoModalOpen(true)} />} />
          <Route path="/features" element={<FeaturesPage onOpenDemoModal={() => setIsDemoModalOpen(true)} />} />
          <Route path="/admin-panel" element={<AdminPanelPage onOpenDemoModal={() => setIsDemoModalOpen(true)} />} />
          <Route path="/citizen-app" element={<CitizenAppPage onOpenDemoModal={() => setIsDemoModalOpen(true)} />} />
          <Route path="/poster-studio" element={<PosterStudioPage onOpenDemoModal={() => setIsDemoModalOpen(true)} />} />
          <Route path="/pricing" element={<PricingPage onOpenDemoModal={() => setIsDemoModalOpen(true)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyTermsPage />} />
          <Route path="/terms" element={<PrivacyTermsPage />} />
          <Route path="*" element={<HomePage onOpenDemoModal={() => setIsDemoModalOpen(true)} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingCTA onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* VIP Demo Request Modal */}
      <ContactModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}
