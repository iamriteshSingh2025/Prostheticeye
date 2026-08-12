import { Box, Grid, Card, CardContent, Typography, Button, Chip, Stack, Paper, Divider } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StyleIcon from '@mui/icons-material/Style';
import StarsIcon from '@mui/icons-material/Stars';
import VerifiedIcon from '@mui/icons-material/Verified';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FaceIcon from '@mui/icons-material/Face';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import { OPTICAL_SERVICES_DATA } from '../../data/opticalServices';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';

const OpticalServicesTab = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  const { openAppointment } = useAppointment();
  const data = OPTICAL_SERVICES_DATA;

  return (
    <Box sx={{ py: 2 }}>
      {/* Hero / Brand Banner */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3.5, md: 6 },
          mb: 6,
          borderRadius: 4,
          background: isDark
            ? 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(217,119,6,0.15) 100%)'
            : 'linear-gradient(135deg, #0A2540 0%, #1D4ED8 60%, #2563EB 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(10,37,64,0.25)'
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px', mx: 'auto' }}>
          <Chip
            icon={<AutoAwesomeIcon sx={{ color: '#F59E0B !important', fontSize: 18 }} />}
            label="Optical Care & Eyewear Solutions"
            sx={{
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              bgcolor: 'rgba(255,255,255,0.12)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)',
              mb: 2.5,
              px: 1
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
              color: '#ffffff',
              letterSpacing: '-0.5px',
              mb: 1
            }}
          >
            {data.brandName}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#F59E0B',
              mb: 3,
              fontSize: { xs: '1.25rem', md: '1.6rem' },
              letterSpacing: 0.5
            }}
          >
            {data.tagline}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 400
            }}
          >
            {data.description}
          </Typography>
        </Box>
      </Paper>

      {/* Premium Branded Eyewear Section */}
      <Box sx={{ mb: 7 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            label="Framing Your Personality"
            size="small"
            sx={{
              fontWeight: 700,
              color: '#2563EB',
              bgcolor: isDark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
              mb: 1
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              color: isDark ? '#ffffff' : '#0A2540',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 1.5
            }}
          >
            {data.eyewear.title}
          </Typography>
          <Typography
            sx={{
              color: isDark ? '#cbd5e1' : '#475569',
              maxWidth: '750px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.05rem' }
            }}
          >
            {data.eyewear.subtitle}. {data.eyewear.description}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {data.eyewear.brands.map((brand, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  p: 3,
                  background: isDark ? 'rgba(10, 25, 47, 0.85)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: '#2563EB',
                    boxShadow: isDark
                      ? '0 12px 35px rgba(37,99,235,0.25)'
                      : '0 12px 35px rgba(10,37,64,0.1)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                      color: isDark ? '#ffffff' : '#0A2540',
                      letterSpacing: '-0.3px'
                    }}
                  >
                    {brand.name}
                  </Typography>
                  <Chip
                    label={brand.tag}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.68rem',
                      bgcolor: isDark ? 'rgba(217,119,6,0.2)' : '#FEF3C7',
                      color: isDark ? '#F59E0B' : '#B45309',
                      border: '1px solid rgba(245,158,11,0.3)'
                    }}
                  />
                </Box>
                <Typography sx={{ color: isDark ? '#94a3b8' : '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {brand.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Advanced Lens Solutions Section */}
      <Box sx={{ mb: 7 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            label="Optical Precision"
            size="small"
            sx={{
              fontWeight: 700,
              color: '#0D9488',
              bgcolor: isDark ? 'rgba(13,148,136,0.15)' : 'rgba(13,148,136,0.08)',
              mb: 1
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              color: isDark ? '#ffffff' : '#0A2540',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 1.5
            }}
          >
            {data.lensSolutions.title}
          </Typography>
          <Typography
            sx={{
              color: isDark ? '#cbd5e1' : '#475569',
              maxWidth: '750px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.05rem' }
            }}
          >
            {data.lensSolutions.subtitle}. {data.lensSolutions.description}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {data.lensSolutions.brands.map((lens, idx) => (
            <Grid size={{ xs: 12, sm: 6 }} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  p: { xs: 3, sm: 4 },
                  background: isDark ? 'rgba(10, 25, 47, 0.85)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: '#0D9488',
                    boxShadow: isDark
                      ? '0 12px 35px rgba(13,148,136,0.25)'
                      : '0 12px 35px rgba(10,37,64,0.1)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                      color: isDark ? '#ffffff' : '#0A2540'
                    }}
                  >
                    {lens.name}
                  </Typography>
                  <Chip
                    label={lens.tag}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      bgcolor: isDark ? 'rgba(13,148,136,0.2)' : '#CCFBF1',
                      color: isDark ? '#2dd4bf' : '#0F766E'
                    }}
                  />
                </Box>
                <Typography sx={{ color: isDark ? '#94a3b8' : '#475569', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {lens.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose U.B. Eye Care */}
      <Box sx={{ mb: 7 }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              color: isDark ? '#ffffff' : '#0A2540',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 1
            }}
          >
            Why Choose U.B. Eye Care?
          </Typography>
          <Typography sx={{ color: isDark ? '#94a3b8' : '#64748B' }}>
            Delivering excellence in visual health, premium frame aesthetics, and customized fitting guidance.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {data.whyChoose.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  background: isDark ? 'rgba(10, 25, 47, 0.7)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2
                }}
              >
                <CheckCircleIcon sx={{ color: '#0D9488', fontSize: 26, mt: 0.3, flexShrink: 0 }} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: isDark ? '#ffffff' : '#0A2540',
                      fontSize: '1rem',
                      mb: 0.5
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748B', lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Closing Quote Banner */}
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, #0A2540 0%, #1D4ED8 100%)',
          color: '#ffffff',
          textAlign: 'center',
          boxShadow: '0 12px 35px rgba(10,37,64,0.2)'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            mb: 2,
            color: '#F59E0B'
          }}
        >
          {data.closing.title}
        </Typography>

        <Typography
          sx={{
            maxWidth: '750px',
            mx: 'auto',
            fontSize: { xs: '1.05rem', md: '1.25rem' },
            lineHeight: 1.7,
            mb: 3,
            color: 'rgba(255,255,255,0.95)',
            fontStyle: 'italic'
          }}
        >
          "{data.closing.subtitle}"
        </Typography>

        <Chip
          label={data.slogan}
          sx={{
            fontWeight: 800,
            fontSize: { xs: '0.85rem', md: '0.95rem' },
            py: 2.5,
            px: 2,
            bgcolor: 'rgba(255,255,255,0.15)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            mb: 4
          }}
        />

        <Box sx={{ mt: 1 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<CalendarMonthIcon />}
            onClick={openAppointment}
            sx={{
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              color: '#ffffff',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              '&:hover': {
                background: 'linear-gradient(135deg, #d97706, #b45309)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Visit U.B. Eye Care & Optical Center
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OpticalServicesTab;
