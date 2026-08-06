import { Box, Container, Typography, Stack, IconButton, useMediaQuery, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { SITE_CONFIG } from '../../data/config';
import { useThemeMode } from '../../context/ThemeContext';

const TopBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  if (isMobile) return null; // Clean top bar on mobile, keep navbar compact

  return (
    <Box
      sx={{
        background: isDark
          ? 'linear-gradient(90deg, #030a12 0%, #061828 100%)'
          : 'linear-gradient(90deg, #0A2540 0%, #1a3a5c 100%)',
        color: 'rgba(255, 255, 255, 0.85)',
        py: 0.8,
        fontSize: '0.78rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 1101,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Info items */}
          <Stack direction="row" spacing={3} alignItems="center">
            <Box
              component="a"
              href={`tel:${SITE_CONFIG.phone}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.8,
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': { color: '#10B981' },
                transition: 'color 0.2s ease',
              }}
            >
              <PhoneIcon sx={{ fontSize: 14, color: '#2563EB' }} />
              {SITE_CONFIG.phone}
            </Box>

            <Box
              component="a"
              href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.8,
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': { color: '#25D366' },
                transition: 'color 0.2s ease',
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 14, color: '#25D366' }} />
              WhatsApp Helpdesk
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
              <LocationOnIcon sx={{ fontSize: 14, color: '#F59E0B' }} />
              Centres: Varanasi • Lucknow • Delhi NCR • UP
            </Box>
          </Stack>

          {/* Right Info items */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, color: 'rgba(255, 255, 255, 0.75)' }}>
              <AccessTimeIcon sx={{ fontSize: 14, color: '#10B981' }} />
              Mon-Sat: 9:00 AM - 7:00 PM
            </Box>

            <Box sx={{ height: 12, width: 1, background: 'rgba(255,255,255,0.2)' }} />

            {/* Social Icons */}
            <Stack direction="row" spacing={0.5}>
              <IconButton
                size="small"
                component="a"
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                sx={{ color: 'rgba(255,255,255,0.7)', p: 0.3, '&:hover': { color: '#2563EB' } }}
              >
                <FacebookIcon sx={{ fontSize: 15 }} />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                sx={{ color: 'rgba(255,255,255,0.7)', p: 0.3, '&:hover': { color: '#E4405F' } }}
              >
                <InstagramIcon sx={{ fontSize: 15 }} />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                sx={{ color: 'rgba(255,255,255,0.7)', p: 0.3, '&:hover': { color: '#FF0000' } }}
              >
                <YouTubeIcon sx={{ fontSize: 15 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;
