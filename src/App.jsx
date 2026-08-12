import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeModeProvider } from './context/ThemeContext';
import { AppointmentProvider } from './context/AppointmentContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingButtons from './components/common/FloatingButtons';
import ScrollProgress from './components/common/ScrollProgress';
import LoadingScreen from './components/common/LoadingScreen';
import AppointmentModal from './components/shared/AppointmentModal';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ArtificialEyePage from './pages/ArtificialEyePage';
import SpecialityContactLensPage from './pages/SpecialityContactLensPage';
import OpticalServicesPage from './pages/OpticalServicesPage';
import TreatmentPage from './pages/TreatmentPage';
import GalleryPage from './pages/GalleryPage';
import PatientStoriesPage from './pages/PatientStoriesPage';
import KnowledgePage from './pages/KnowledgePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeModeProvider>
      <AppointmentProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ScrollProgress />
          {loading && <LoadingScreen />}

          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/artificial-eye" element={<ArtificialEyePage />} />
                <Route path="/services/speciality-contact-lens" element={<SpecialityContactLensPage />} />
                <Route path="/services/optical-services" element={<OpticalServicesPage />} />
                <Route path="/treatment" element={<TreatmentPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/patient-stories" element={<PatientStoriesPage />} />
                <Route path="/knowledge" element={<KnowledgePage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/book-appointment" element={<BookAppointmentPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Box>
            <Footer />
            <FloatingButtons />
            <AppointmentModal />
          </Box>
        </BrowserRouter>
      </AppointmentProvider>
    </ThemeModeProvider>
  );
}

export default App;
