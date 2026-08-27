import { Box, Container, Grid, Typography, Button, Stack, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { DOCTOR, SECOND_DOCTOR } from '../../data/doctor';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import drShashankImg from '../../assets/Shashank photo.jpeg';
import sharadImg from '../../assets/Sharad kumar mishra.jpeg';
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
                {/* Top full-width image - Mr. Shashank Mishra */}
                <Box sx={{ width: '100%', height: { xs: 280, sm: 340 }, overflow: 'hidden', borderRadius: '16px 16px 0 0', position: 'relative' }}>
                  <Box
                    component="img"
                    src={drShashankImg}
                    alt="Mr. Shashank Mishra - Senior Ocularist & Prosthetist"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60px',
                      background: 'linear-gradient(to top, rgba(10,37,64,0.9) 0%, transparent 100%)',
                    }}
                  />
                </Box>

                {/* Bottom info card */}
                <Box
                  sx={{
                    borderRadius: '0 0 16px 16px',
                    background: 'linear-gradient(180deg, rgba(10,37,64,0.8) 0%, rgba(10,37,64,0.98) 100%)',
                    p: { xs: 2, sm: 3 },
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
                    label={DOCTOR.title}
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
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    }}
                  >
                    {DOCTOR.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2, fontSize: { xs: '0.8rem', sm: '0.88rem' } }}>
                    {DOCTOR.experience} Clinical Practice • {DOCTOR.patientsHelped} Patients
                  </Typography>

                  <Stack spacing={0.8}>
                    {DOCTOR.qualifications.map((q, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SchoolIcon sx={{ color: '#2563EB', fontSize: 16, flexShrink: 0 }} />
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
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
                fontSize: { xs: '0.9rem', sm: '1rem' },
                whiteSpace: 'pre-line',
              }}
            >
              {DOCTOR.about}
            </Typography>

            {/* Specializations */}
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: isDark ? '#fff' : '#0A2540', fontSize: { xs: '1.05rem', sm: '1.25rem' } }}>
              Areas of Clinical Mastery
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 4 }}>
              {DOCTOR.specializations.map((spec, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={i}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: '#10B981', fontSize: 20, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.9)' : 'text.primary', fontSize: { xs: '0.85rem', sm: '0.88rem' } }}>
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
                width: { xs: '100%', sm: 'auto' },
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #2563EB, #10B981)',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.35)',
              }}
            >
              Schedule Consultation with Mr. Mishra
            </Button>
          </Grid>
        </Grid>

        {/* Second Specialist - Mr. Sharad Kumar Mishra */}
        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row-reverse' }}>
            {/* Sharad Photo Card */}
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
                    background: 'linear-gradient(135deg, #0A2540 0%, #0D9488 100%)',
                    p: 1,
                    boxShadow: '0 20px 60px rgba(10, 37, 64, 0.3)',
                  }}
                >
                  <Box sx={{ width: '100%', height: { xs: 280, sm: 340 }, overflow: 'hidden', borderRadius: '16px 16px 0 0', position: 'relative' }}>
                    <Box
                      component="img"
                      src={sharadImg}
                      alt={SECOND_DOCTOR.name}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60px',
                        background: 'linear-gradient(to top, rgba(10,37,64,0.9) 0%, transparent 100%)',
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      borderRadius: '0 0 16px 16px',
                      background: 'linear-gradient(180deg, rgba(10,37,64,0.8) 0%, rgba(10,37,64,0.98) 100%)',
                      p: { xs: 2, sm: 3 },
                      color: '#fff',
                    }}
                  >
                    <Chip
                      label={SECOND_DOCTOR.title}
                      sx={{
                        alignSelf: 'flex-start',
                        background: '#0D9488',
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
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      }}
                    >
                      {SECOND_DOCTOR.name}
                    </Typography>
                    <Stack spacing={0.8} sx={{ mt: 1.5 }}>
                      {SECOND_DOCTOR.qualifications.map((q, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <SchoolIcon sx={{ color: '#0D9488', fontSize: 16, flexShrink: 0 }} />
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
                            {q}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Paper>
              </Box>
            </Grid>

            {/* Sharad Info */}
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionTitle
                subtitle="Meet Our Contact Lens Expert"
                title={SECOND_DOCTOR.name}
                description="Speciality Contact Lens Expert dedicated to delivering precision-fitted medical contact lenses for complex corneal conditions."
                centered={false}
              />

              <Typography
                variant="body1"
                sx={{
                  color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  whiteSpace: 'pre-line',
                }}
              >
                {SECOND_DOCTOR.about}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: isDark ? '#fff' : '#0A2540', fontSize: { xs: '1.05rem', sm: '1.25rem' } }}>
                Areas of Clinical Expertise
              </Typography>

              <Grid container spacing={1.5} sx={{ mb: 4 }}>
                {SECOND_DOCTOR.specializations.map((spec, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#0D9488', fontSize: 20, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.9)' : 'text.primary', fontSize: { xs: '0.85rem', sm: '0.88rem' } }}>
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
                  width: { xs: '100%', sm: 'auto' },
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #0D9488, #10B981)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  boxShadow: '0 8px 25px rgba(13, 148, 136, 0.35)',
                }}
              >
                Schedule Consultation with {SECOND_DOCTOR.name}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DoctorSection;
