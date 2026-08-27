import { Box, Container, Grid, Typography, Button, Stack, Rating, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShieldIcon from '@mui/icons-material/Shield';
import GlassCard from '../shared/GlassCard';
import { SITE_CONFIG } from '../../data/config';
import { useAppointment } from '../../context/AppointmentContext';
import heroImg from '../../assets/hero.png';
import eye1Img from '../../assets/eye1.png';
import drShashankImg from '../../assets/Shashank photo.jpeg';
import HeroSlider from './HeroSlider';

const HeroSection = () => {
  const { openAppointment } = useAppointment();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #030914 0%, #0A2540 50%, #030914 100%)',
        color: '#ffffff',
        overflow: 'hidden',
        pt: { xs: 14, md: 16 },
        pb: { xs: 10, md: 12 },
      }}
    >
      {/* Background Glowing Ambient Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 2, position: 'relative' }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Column Heading & CTA */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badges Stack */}
              <Stack direction="row" spacing={1.5} useFlexGap sx={{ mb: 3, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2.2,
                    py: 0.8,
                    borderRadius: '50px',
                    background: 'rgba(37, 99, 235, 0.15)',
                    border: '1px solid rgba(37, 99, 235, 0.35)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <VerifiedUserIcon sx={{ color: '#10B981', fontSize: 18 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      letterSpacing: 1.2,
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                    }}
                  >
                    India's Premier Artificial Eye Centre
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.8,
                    borderRadius: '50px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <WorkspacePremiumIcon sx={{ color: '#F59E0B', fontSize: 18 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#F59E0B',
                      fontWeight: 700,
                      letterSpacing: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    15+ Years Clinical Expertise
                  </Typography>
                </Box>
              </Stack>

              {/* Main Heading */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '3.2rem', lg: '4rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  mb: 2.5,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                India's Most Trusted{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  Artificial Eye
                </Box>{' '}
                & Ocular Prosthesis Centre
              </Typography>

              {/* Subheading */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.2rem' },
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 400,
                  lineHeight: { xs: 1.6, sm: 1.7 },
                  mb: 4,
                  maxWidth: 620,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Restore your confidence with custom hand-crafted artificial eyes designed for 100% natural appearance, anatomical comfort, and bio-compatible precision by <strong>Mr. Shashank Mishra</strong>.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4, width: '100%' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  onClick={openAppointment}
                  sx={{
                    py: 1.6,
                    px: 3.5,
                    width: { xs: '100%', sm: 'auto' },
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
                    boxShadow: '0 8px 30px rgba(37, 99, 235, 0.45)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 40px rgba(37, 99, 235, 0.65)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  component="a"
                  href={`tel:${SITE_CONFIG.phone}`}
                  sx={{
                    py: 1.6,
                    px: 3,
                    width: { xs: '100%', sm: 'auto' },
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    color: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#2563EB',
                      background: 'rgba(37, 99, 235, 0.15)',
                      borderWidth: 2,
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Call Doctor Now
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  component="a"
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    py: 1.6,
                    px: 3,
                    width: { xs: '100%', sm: 'auto' },
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    background: '#25D366',
                    color: '#fff',
                    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
                    '&:hover': {
                      background: '#1eb956',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  WhatsApp Chat
                </Button>
              </Stack>

              {/* Quick Trust Highlights */}
              <Grid container spacing={2}>
                {[
                  { label: '5000+ Happy Patients', icon: ShieldIcon },
                  { label: '3D Eye Crypt Matching', icon: AutoAwesomeIcon },
                  { label: 'Bio-Compatible Acrylic', icon: VerifiedUserIcon },
                ].map((item, i) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={i}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <item.icon sx={{ color: '#10B981', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, fontSize: '0.85rem' }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Column - Professional Slider Showcase */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Professional WhatsApp Image Slider */}
              <HeroSlider />

              {/* Doctor Card Footer */}
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  borderRadius: 4,
                  background: 'rgba(10, 37, 64, 0.65)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={drShashankImg}
                  alt="Mr. Shashank Mishra"
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    border: '2px solid #10B981',
                    boxShadow: '0 4px 12px rgba(16,185,129,0.3)',
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.2 }}>
                    Mr. Shashank Mishra
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600, fontSize: '0.72rem', display: 'block' }}>
                    Consultant Optometrist & Ocularist • M.Optom, FSCEH (Delhi)
                  </Typography>
                </Box>
                <Chip label="5.0 ★ Rating" size="small" sx={{ background: '#F59E0B', color: '#000', fontWeight: 800, fontSize: '0.7rem' }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
