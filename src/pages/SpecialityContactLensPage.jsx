import { Box, Container, Typography } from '@mui/material';
import SpecialityContactLensTab from '../components/services/SpecialityContactLensTab';
import { useThemeMode } from '../context/ThemeContext';

const SpecialityContactLensPage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box sx={{ pt: 12, pb: 8, background: isDark ? '#030914' : '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="overline"
            sx={{ color: '#0D9488', fontWeight: 700, letterSpacing: 3, fontSize: '0.85rem' }}
          >
            Corneal & Visual Care
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
            Speciality Contact Lens Services
          </Typography>
        </Box>
        <SpecialityContactLensTab />
      </Container>
    </Box>
  );
};

export default SpecialityContactLensPage;
