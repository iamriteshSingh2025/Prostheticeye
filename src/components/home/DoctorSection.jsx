import { Box, Container, Grid, Typography, Button, Stack, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { DOCTOR } from '../../data/doctor';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import eye2Img from '../../assets/eye2.png';
import eye3Img from '../../assets/eye3.png';

const DoctorSection = () => {
  const { mode } = useThemeMode();
  const { openAppointment } = useAppointment();
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark
          ? 'linear-gradient(180deg, #061426 0%, #050d1a 100%)'
          : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Doctor Image / Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{ position: 'relative' }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 6,
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0A2540 0%, #2563EB 100%)',
                  p: 1,
                  boxShadow: '0 20px 60px rgba(10, 37, 64, 0.3)',
                }}
              >
                {/* Top full-width image */}
                <Box sx={{ width: '100%', height: 240, overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                  <Box
                    component="img"
                    src={eye2Img}
                    alt="Doctor crafting artificial eye"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>

                {/* Bottom info card */}
                <Box
                  sx={{
                    borderRadius: '0 0 16px 16px',
                    background: 'linear-gradient(180deg, rgba(10,37,64,0.8) 0%, rgba(10,37,64,0.98) 100%)',
                    p: 3,
                    color: '#fff',
                    position: 'relative',
                  }}
                >
                  {/* Decorative Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <WorkspacePremiumIcon sx={{ color: '#10B981', fontSize: 24 }} />
                  </Box>

                  <Chip
                    label="Senior Ocularist & Prosthetist"
                    sx={{
                      alignSelf: 'flex-start',
                      background: '#10B981',
                      color: '#fff',
                      fontWeight: 700,
                      mb: 1,
                      fontSize: '0.75rem',
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                    }}
                  >
                    {DOCTOR.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                    {DOCTOR.experience} Clinical Practice • {DOCTOR.patientsHelped} Patients
                  </Typography>

                  <Stack spacing={0.8}>
                    {DOCTOR.qualifications.slice(0, 3).map((q, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SchoolIcon sx={{ color: '#2563EB', fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem' }}>
                          {q}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {/* Inset image at bottom */}
                  <Box
                    sx={{
                      mt: 2,
                      borderRadius: 3,
                      overflow: 'hidden',
                      height: 80,
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <Box
                      component="img"
                      src={eye3Img}
                      alt="Multiple prosthetic eyes collection"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Doctor Info */}
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionTitle
              subtitle="Meet Your Specialist"
              title={DOCTOR.name}
              description="Dedicated ocular prosthetics specialist committed to delivering natural-looking, bio-compatible artificial eyes."
              centered={false}
            />

            <Typography
              variant="body1"
              sx={{
                color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                lineHeight: 1.8,
                mb: 4,
                whiteSpace: 'pre-line',
              }}
            >
              {DOCTOR.about}
            </Typography>

            {/* Specializations */}
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: isDark ? '#fff' : '#0A2540' }}>
              Areas of Clinical Mastery
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 4 }}>
              {DOCTOR.specializations.map((spec, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={i}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: '#10B981', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.9)' : 'text.primary' }}>
                      {spec}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              size="large"
              startIcon={<CalendarMonthIcon />}
              onClick={openAppointment}
              sx={{
                py: 1.6,
                px: 4,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #2563EB, #10B981)',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.35)',
              }}
            >
              Schedule Consultation with Dr. Mishra
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DoctorSection;
