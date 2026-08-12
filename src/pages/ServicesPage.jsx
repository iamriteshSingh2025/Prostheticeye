import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Typography, Tabs, Tab, Paper } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StyleIcon from '@mui/icons-material/Style';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import ProstheticServicesTab from '../components/services/ProstheticServicesTab';
import SpecialityContactLensTab from '../components/services/SpecialityContactLensTab';
import OpticalServicesTab from '../components/services/OpticalServicesTab';
import { useThemeMode } from '../context/ThemeContext';

const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'prosthetics';
  const [currentTab, setCurrentTab] = useState(initialTab);

  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['prosthetics', 'contact-lens', 'optical'].includes(tabParam)) {
      setCurrentTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    setSearchParams({ tab: newValue });
  };

  return (
    <Box sx={{ pt: 12, pb: 8, background: isDark ? '#030914' : '#F8FAFC', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Main Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="overline"
            sx={{ color: '#10B981', fontWeight: 700, letterSpacing: 3, fontSize: '0.85rem' }}
          >
            Comprehensive Clinical Care
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              color: isDark ? '#fff' : '#0A2540',
              mt: 1,
            }}
          >
            Services & Eyewear Solutions
          </Typography>
          <Typography
            sx={{
              color: isDark ? '#94a3b8' : '#64748B',
              mt: 1.5,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.05rem' }
            }}
          >
            Explore our specialized prosthetic eye craftsmanship, medical speciality contact lens fittings, and premium branded optical solutions under U.B. Eye Care.
          </Typography>
        </Box>

        {/* Navigation Tabs Bar */}
        <Paper
          elevation={0}
          sx={{
            mb: 5,
            p: 0.8,
            borderRadius: '50px',
            background: isDark ? 'rgba(10, 25, 47, 0.9)' : '#ffffff',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(10,37,64,0.08)'}`,
            boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(10,37,64,0.06)'
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="fullWidth"
            centered
            sx={{
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            <Tab
              value="prosthetics"
              icon={<RemoveRedEyeIcon sx={{ fontSize: 20 }} />}
              iconPosition="start"
              label="Prosthetic Eye Services"
              sx={{
                borderRadius: '50px',
                py: 1.5,
                px: { xs: 1.5, sm: 3 },
                fontWeight: 700,
                fontSize: { xs: '0.78rem', sm: '0.92rem' },
                textTransform: 'none',
                color: currentTab === 'prosthetics' ? '#fff' : isDark ? '#94a3b8' : '#0A2540',
                background: currentTab === 'prosthetics'
                  ? 'linear-gradient(135deg, #0A2540, #2563EB)'
                  : 'transparent',
                boxShadow: currentTab === 'prosthetics' ? '0 6px 20px rgba(37,99,235,0.3)' : 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: currentTab === 'prosthetics' ? '#fff' : '#2563EB'
                }
              }}
            />

            <Tab
              value="contact-lens"
              icon={<VisibilityIcon sx={{ fontSize: 20 }} />}
              iconPosition="start"
              label="Speciality Contact Lens"
              sx={{
                borderRadius: '50px',
                py: 1.5,
                px: { xs: 1.5, sm: 3 },
                fontWeight: 700,
                fontSize: { xs: '0.78rem', sm: '0.92rem' },
                textTransform: 'none',
                color: currentTab === 'contact-lens' ? '#fff' : isDark ? '#94a3b8' : '#0A2540',
                background: currentTab === 'contact-lens'
                  ? 'linear-gradient(135deg, #0D9488, #2563EB)'
                  : 'transparent',
                boxShadow: currentTab === 'contact-lens' ? '0 6px 20px rgba(13,148,136,0.3)' : 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: currentTab === 'contact-lens' ? '#fff' : '#0D9488'
                }
              }}
            />

            <Tab
              value="optical"
              icon={<StyleIcon sx={{ fontSize: 20 }} />}
              iconPosition="start"
              label="Optical Services (U.B. Eye Care)"
              sx={{
                borderRadius: '50px',
                py: 1.5,
                px: { xs: 1.5, sm: 3 },
                fontWeight: 700,
                fontSize: { xs: '0.78rem', sm: '0.92rem' },
                textTransform: 'none',
                color: currentTab === 'optical' ? '#fff' : isDark ? '#94a3b8' : '#0A2540',
                background: currentTab === 'optical'
                  ? 'linear-gradient(135deg, #D97706, #2563EB)'
                  : 'transparent',
                boxShadow: currentTab === 'optical' ? '0 6px 20px rgba(217,119,6,0.3)' : 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: currentTab === 'optical' ? '#fff' : '#D97706'
                }
              }}
            />
          </Tabs>
        </Paper>

        {/* Tab Content Display */}
        <Box>
          {currentTab === 'prosthetics' && <ProstheticServicesTab />}
          {currentTab === 'contact-lens' && <SpecialityContactLensTab />}
          {currentTab === 'optical' && <OpticalServicesTab />}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
