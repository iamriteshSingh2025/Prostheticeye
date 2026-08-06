import { Box, Typography, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { SITE_CONFIG } from '../../data/config';

const LoadingScreen = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        background: 'linear-gradient(135deg, #061828 0%, #0A2540 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        sx={{
          width: 80,
          height: 80,
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #2563EB, #10B981)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 50px rgba(37, 99, 235, 0.6)',
        }}
      >
        <RemoveRedEyeIcon sx={{ color: '#fff', fontSize: 44 }} />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            color: '#fff',
            letterSpacing: 1,
            mb: 0.5,
          }}
        >
          {SITE_CONFIG.name}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#10B981',
            letterSpacing: 3,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          Ocular Prosthesis Centre
        </Typography>
      </Box>

      <CircularProgress size={28} sx={{ color: '#2563EB', mt: 2 }} />
    </Box>
  );
};

export default LoadingScreen;
