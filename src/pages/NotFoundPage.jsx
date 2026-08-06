import { Box, Container, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../context/ThemeContext';

const NotFoundPage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        pt: 18,
        pb: 12,
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark ? '#050d1a' : '#F8FAFC',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB, #10B981)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
            boxShadow: '0 10px 40px rgba(37,99,235,0.4)',
          }}
        >
          <RemoveRedEyeIcon sx={{ color: '#fff', fontSize: 50 }} />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: '5rem',
            color: '#2563EB',
            lineHeight: 1,
            mb: 1,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: isDark ? '#fff' : '#0A2540',
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
            mb: 4,
            lineHeight: 1.7,
          }}
        >
          The medical page or resource you are searching for does not exist or has been moved. Return to our homepage to explore artificial eye care services.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          sx={{
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            background: 'linear-gradient(135deg, #2563EB, #10B981)',
          }}
        >
          Return to Homepage
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
