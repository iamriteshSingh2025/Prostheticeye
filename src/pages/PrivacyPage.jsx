import { Box, Container, Typography, Paper } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';

const PrivacyPage = () => {
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
            Privacy Policy
          </Typography>

          <Typography variant="body1" sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary', lineHeight: 1.8, mb: 3 }}>
            At <strong>UB Eye Care</strong>, accessible from our official clinical website, one of our main priorities is the privacy of our patients and visitors. This Privacy Policy document contains types of information that is collected and recorded by UB Eye Care and how we use it.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 1, color: isDark ? '#fff' : '#0A2540' }}>
            1. Medical Information & Confidentiality
          </Typography>
          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.7, mb: 3 }}>
            All patient records, consultation details, eye socket condition notes, and photographic records are kept strictly confidential under Indian medical ethics regulations and international healthcare privacy guidelines.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 1, color: isDark ? '#fff' : '#0A2540' }}>
            2. Appointment Form Data
          </Typography>
          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.7, mb: 3 }}>
            Information submitted via our appointment booking form (Name, Phone Number, Age, City) is strictly utilized by our clinical coordinators to contact you regarding your consultation schedule. We do not sell or share patient contact details with third parties.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 1, color: isDark ? '#fff' : '#0A2540' }}>
            3. Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.7 }}>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact Dr. Shashank Mishra or the UB Eye Care administrative team.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPage;
