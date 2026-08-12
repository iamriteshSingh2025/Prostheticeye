import { Box, Container, Typography } from '@mui/material';
import OpticalServicesTab from '../components/services/OpticalServicesTab';
import { useThemeMode } from '../context/ThemeContext';

const OpticalServicesPage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box sx={{ pt: 12, pb: 8, background: isDark ? '#030914' : '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="overline"
            sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: 3, fontSize: '0.85rem' }}
          >
            U.B. Eye Care
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
            Optical Services & Eyewear
          </Typography>
        </Box>
        <OpticalServicesTab />
      </Container>
    </Box>
  );
};

export default OpticalServicesPage;
