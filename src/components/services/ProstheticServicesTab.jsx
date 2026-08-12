import { useState } from 'react';
import { Box, Grid, Typography, Button, Stack, Chip } from '@mui/material';
import ServiceCard from '../shared/ServiceCard';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/services';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ProstheticServicesTab = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  const { openAppointment } = useAppointment();

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <Box sx={{ py: 2 }}>
      {/* Category Filters */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', sm: 'center' },
          width: '100%',
          overflowX: 'auto',
          mb: { xs: 4, sm: 6 },
          py: 1,
          px: { xs: 1, sm: 0 },
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1.5 }}
          justifyContent={{ xs: 'flex-start', sm: 'center' }}
          alignItems="center"
          sx={{
            minWidth: { xs: 'max-content', sm: 'auto' },
            flexWrap: { xs: 'nowrap', sm: 'wrap' },
            mx: { sm: 'auto' },
          }}
        >
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  px: { xs: 1.8, sm: 2.5 },
                  py: 1.2,
                  height: 'auto',
                  minHeight: '38px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.88rem' },
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  background: isSelected
                    ? 'linear-gradient(135deg, #2563EB, #0D9488)'
                    : isDark
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(10, 37, 64, 0.05)',
                  color: isSelected ? '#ffffff' : isDark ? '#94a3b8' : '#0A2540',
                  boxShadow: isSelected ? '0 6px 20px rgba(37,99,235,0.3)' : 'none',
                  border: isSelected ? 'none' : `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                  '&:hover': {
                    background: isSelected
                      ? 'linear-gradient(135deg, #2563EB, #0D9488)'
                      : 'rgba(37,99,235,0.1)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.25s ease',
                }}
              />
            );
          })}
        </Stack>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={3.5}>
        {filteredServices.map((service) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
            <ServiceCard service={service} dark={isDark} />
          </Grid>
        ))}
      </Grid>

      {/* CTA Box */}
      <Box
        sx={{
          mt: 8,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, #0A2540 0%, #2563EB 100%)',
          color: '#ffffff',
          textAlign: 'center',
          boxShadow: '0 12px 35px rgba(10,37,64,0.25)'
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, mb: 1.5 }}
        >
          Need a Custom Artificial Eye Consultation?
        </Typography>
        <Typography sx={{ maxWidth: '650px', mx: 'auto', mb: 3, opacity: 0.9, fontSize: '1.05rem' }}>
          Schedule a personalized evaluation with our ocularist team for custom prosthetic eye design, scleral shells, or orbital prostheses.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<CalendarMonthIcon />}
          onClick={openAppointment}
          sx={{
            background: '#ffffff',
            color: '#0A2540',
            fontWeight: 700,
            px: 4,
            py: 1.5,
            '&:hover': {
              background: '#f8fafc',
              transform: 'translateY(-2px)'
            }
          }}
        >
          Book Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default ProstheticServicesTab;
