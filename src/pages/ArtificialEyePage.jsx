import { Box, Container, Grid, Typography, Button, Stack, Paper } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SectionTitle from '../components/shared/SectionTitle';
import GlassCard from '../components/shared/GlassCard';
import TreatmentTimeline from '../components/home/TreatmentTimeline';
import { useThemeMode } from '../context/ThemeContext';
import { useAppointment } from '../context/AppointmentContext';

const ArtificialEyePage = () => {
  const { mode } = useThemeMode();
  const { openAppointment } = useAppointment();
  const isDark = mode === 'dark';

  return (
    <Box sx={{ pt: 12, pb: 8, background: isDark ? '#050d1a' : '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="overline" sx={{ color: '#10B981', fontWeight: 700, letterSpacing: 3 }}>
              Specialized Deep-Dive
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: { xs: '2.4rem', md: '3.4rem' },
                color: isDark ? '#fff' : '#0A2540',
                mb: 2.5,
              }}
            >
              Custom Hand-Crafted Artificial Eyes
            </Typography>
            <Typography variant="body1" sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem', mb: 4 }}>
              At UB Eye Care, custom artificial eyes (ocular prostheses) are hand-crafted by Mr. Shashank Mishra using medical-grade acrylic and detailed hand-painting technique. Each prosthesis is custom-molded to fit your eye socket perfectly, matching iris color, pupil size, and blood vessel patterns.
            </Typography>

            <Stack spacing={2} sx={{ mb: 4 }}>
              {[
                'Bio-compatible medical grade acrylic material',
                'Custom hand-painted iris & vascular detailing',
                'Precision socket impression for zero irritation',
                'Natural motility and lifelike aesthetic appearance',
                'Long-lasting durability (5-7 years typical wear)',
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: '#10B981', fontSize: 22 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500, color: isDark ? '#fff' : '#0A2540' }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>

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
              }}
            >
              Book Custom Fitting Consultation
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <GlassCard dark={isDark} hover={false} sx={{ p: 4, textAlign: 'center', borderRadius: 5 }}>
              <RemoveRedEyeIcon sx={{ fontSize: 80, color: '#2563EB', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, color: isDark ? '#fff' : '#0A2540', mb: 1 }}>
                100% Customized Fit
              </Typography>
              <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.7 }}>
                Unlike mass-manufactured stock eyes, every prosthesis made by Mr. Mishra is 100% unique to the patient's socket and opposite natural eye.
              </Typography>
            </GlassCard>
          </Grid>
        </Grid>

        <TreatmentTimeline />
      </Container>
    </Box>
  );
};

export default ArtificialEyePage;
