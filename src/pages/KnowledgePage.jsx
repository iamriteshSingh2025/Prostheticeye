import { Box, Container, Typography } from '@mui/material';
import KnowledgeSection from '../components/home/KnowledgeSection';
import { useThemeMode } from '../context/ThemeContext';

const KnowledgePage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box sx={{ pt: 12, pb: 8, background: isDark ? '#050d1a' : '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="overline"
            sx={{ color: '#10B981', fontWeight: 700, letterSpacing: 3, fontSize: '0.85rem' }}
          >
            Education & Care Guides
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
            UB Eye Care Knowledge Centre
          </Typography>
        </Box>
        <KnowledgeSection />
      </Container>
    </Box>
  );
};

export default KnowledgePage;
