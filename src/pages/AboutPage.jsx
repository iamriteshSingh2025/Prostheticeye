import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import DoctorSection from '../components/home/DoctorSection';
import SectionTitle from '../components/shared/SectionTitle';
import GlassCard from '../components/shared/GlassCard';
import { DOCTOR } from '../data/doctor';
import { useThemeMode } from '../context/ThemeContext';

const AboutPage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box sx={{ pt: 12, pb: 8, background: isDark ? '#050d1a' : '#F8FAFC' }}>
      <Container maxWidth="lg">
        {/* Banner */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: '#10B981', fontWeight: 700, letterSpacing: 3, fontSize: '0.85rem' }}
          >
            Clinical Leadership
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
            About Dr. Shashank Mishra & UB Eye Care
          </Typography>
        </Box>

        <DoctorSection />

        {/* Vision & Mission */}
        <Grid container spacing={4} sx={{ my: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <GlassCard dark={isDark} hover={false} sx={{ p: 4, height: '100%', borderRadius: 5 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#2563EB', mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary', lineHeight: 1.8 }}>
                {DOCTOR.mission}
              </Typography>
            </GlassCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <GlassCard dark={isDark} hover={false} sx={{ p: 4, height: '100%', borderRadius: 5 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#10B981', mb: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary', lineHeight: 1.8 }}>
                {DOCTOR.vision}
              </Typography>
            </GlassCard>
          </Grid>
        </Grid>

        {/* Achievements Milestone Timeline */}
        <SectionTitle
          subtitle="Milestones & Journey"
          title="15+ Years of Clinical Milestones"
          description="A legacy built on patient trust, technical innovation, and clinical dedication."
          centered={true}
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {DOCTOR.achievements.map((ach, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <GlassCard dark={isDark} sx={{ p: 3.5, height: '100%', borderRadius: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#10B981', fontFamily: "'Playfair Display', serif", mb: 1 }}>
                  {ach.year}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, color: isDark ? '#fff' : '#0A2540', mb: 1 }}>
                  {ach.title}
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.6 }}>
                  {ach.description}
                </Typography>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
