import { Box, Container, Grid, Typography, Button, Paper, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { SITE_CONFIG } from '../../data/config';
import { useThemeMode } from '../../context/ThemeContext';

const ContactSection = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark ? '#050d1a' : '#F8FAFC',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Get In Touch"
          title="Visit Our Centre or Contact Us"
          description="We are here to assist you with every detail regarding artificial eye fittings and ocular prosthetics."
          centered={true}
        />

        <Grid container spacing={4} alignItems="stretch">
          {/* Info Cards */}
          <Grid size={{ xs: 12, md: 5 }}>
            <GlassCard dark={isDark} hover={false} sx={{ height: '100%', p: 4, borderRadius: 5 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: isDark ? '#fff' : '#0A2540' }}>
                Clinic Contact Details
              </Typography>

              <Stack spacing={3}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(37,99,235,0.1)',
                      color: '#2563EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'text.secondary', display: 'block' }}>
                      Primary Phone
                    </Typography>
                    <Typography
                      component="a"
                      href={`tel:${SITE_CONFIG.phone}`}
                      sx={{ fontWeight: 600, color: isDark ? '#fff' : '#0A2540', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#2563EB' } }}
                    >
                      {SITE_CONFIG.phone}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(37,211,102,0.1)',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <WhatsAppIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'text.secondary', display: 'block' }}>
                      WhatsApp Helpline
                    </Typography>
                    <Typography
                      component="a"
                      href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ fontWeight: 600, color: isDark ? '#fff' : '#0A2540', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#25D366' } }}
                    >
                      {SITE_CONFIG.whatsapp}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(16,185,129,0.1)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'text.secondary', display: 'block' }}>
                      Email Address
                    </Typography>
                    <Typography
                      component="a"
                      href={`mailto:${SITE_CONFIG.email}`}
                      sx={{ fontWeight: 600, color: isDark ? '#fff' : '#0A2540', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#10B981' } }}
                    >
                      {SITE_CONFIG.email}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(245,158,11,0.1)',
                      color: '#F59E0B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'text.secondary', display: 'block' }}>
                      Clinic Location
                    </Typography>
                    <Typography sx={{ fontWeight: 500, color: isDark ? '#fff' : 'text.primary', fontSize: '0.95rem' }}>
                      {SITE_CONFIG.address}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(124,58,237,0.1)',
                      color: '#7C3AED',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <AccessTimeIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'text.secondary', display: 'block' }}>
                      Working Hours
                    </Typography>
                    <Typography sx={{ fontWeight: 600, color: isDark ? '#fff' : '#0A2540', fontSize: '0.95rem' }}>
                      {SITE_CONFIG.workingHours}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600, display: 'block' }}>
                      Sunday: By Prior Appointment Only
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </GlassCard>
          </Grid>

          {/* Google Maps Embed */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                minHeight: 400,
                borderRadius: 5,
                overflow: 'hidden',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            >
              <iframe
                title="UB Eye Care Location Map"
                src={SITE_CONFIG.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen=""
                loading="lazy"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
