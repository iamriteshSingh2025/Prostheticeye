import { Box, Container, Typography, Paper } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';

const TermsPage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box sx={{ pt: 14, pb: 8, background: isDark ? '#050d1a' : '#F8FAFC' }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 5,
            background: isDark ? 'rgba(13, 31, 53, 0.8)' : '#FFFFFF',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              mb: 3,
              color: isDark ? '#fff' : '#0A2540',
            }}
          >
            Terms & Conditions
          </Typography>

          <Typography variant="body1" sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary', lineHeight: 1.8, mb: 3 }}>
            Welcome to <strong>UB Eye Care</strong>. By accessing our website and scheduling a clinical appointment, you agree to comply with and be bound by the following clinical terms and conditions of use.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 1, color: isDark ? '#fff' : '#0A2540' }}>
            1. Medical Disclaimer
          </Typography>
          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.7, mb: 3 }}>
            Information provided on this website is intended for educational purposes and general guidance regarding ocular prosthetics. It does not substitute for direct, in-person clinical examination and medical evaluation by Dr. Shashank Mishra.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 1, color: isDark ? '#fff' : '#0A2540' }}>
            2. Appointment Scheduling & Rescheduling
          </Typography>
          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.7, mb: 3 }}>
            Appointments requested online are confirmed based on doctor availability. Patients are requested to notify the clinic at least 24 hours in advance in case of cancellation or rescheduling needs.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 1, color: isDark ? '#fff' : '#0A2540' }}>
            3. Custom Prosthetic Guarantee
          </Typography>
          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.7 }}>
            Every ocular prosthesis is custom hand-fabricated. Fitting adjustments and follow-up care are included in your treatment plan to ensure patient comfort and clinical precision.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsPage;
