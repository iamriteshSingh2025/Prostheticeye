import { Box, Container, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ClinicalGalleryGrid from '../components/shared/ClinicalGalleryGrid';
import BeforeAfterGallery from '../components/home/BeforeAfterGallery';
import { useThemeMode } from '../context/ThemeContext';

const GalleryPage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: 8, background: isDark ? '#030914' : '#F8FAFC', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Breadcrumb */}
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }} />}
            aria-label="breadcrumb"
          >
            <MuiLink component={Link} to="/" underline="hover" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', fontSize: '0.9rem' }}>
              Home
            </MuiLink>
            <Typography sx={{ color: '#10B981', fontWeight: 600, fontSize: '0.9rem' }}>
              Clinical Gallery
            </Typography>
          </Breadcrumbs>

          <Box sx={{ textAlign: 'center', mt: 3, mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: '#10B981', fontWeight: 700, letterSpacing: 3, fontSize: '0.85rem' }}
            >
              Authentic Patient Restorations
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.4rem' },
                color: isDark ? '#fff' : '#0A2540',
                mt: 1,
                mb: 2,
              }}
            >
              Artificial Eye Photo Gallery
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? 'rgba(255, 255, 255, 0.75)' : 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
              }}
            >
              Explore custom-crafted prosthetic eye cases, microscopic iris detailing, pediatric socket expansion, and patient transformations by <strong>Mr. Shashank Mishra</strong>.
            </Typography>
          </Box>
        </Box>

        {/* 11 Real WhatsApp Gallery Showcase */}
        <ClinicalGalleryGrid showHeader={false} />

        {/* Before & After Interactive Transformations */}
        <Box sx={{ mt: 8 }}>
          <BeforeAfterGallery />
        </Box>
      </Container>
    </Box>
  );
};

export default GalleryPage;
