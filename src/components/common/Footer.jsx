import { Box, Container, Grid, Typography, Button, IconButton, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SITE_CONFIG } from '../../data/config';
import { SERVICES } from '../../data/services';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #061828 0%, #030a12 100%)',
        color: '#ffffff',
        pt: { xs: 6, md: 10 },
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Subtle Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: -150,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563EB, #10B981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
                }}
              >
                <RemoveRedEyeIcon sx={{ color: '#fff', fontSize: 26 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    color: '#fff',
                    lineHeight: 1,
                  }}
                >
                  {SITE_CONFIG.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    color: '#10B981',
                    letterSpacing: 1.8,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    mt: 0.5,
                  }}
                >
                  Ocular Prosthesis Centre
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3, leading: 1.7, fontSize: '0.92rem' }}
            >
              {SITE_CONFIG.tagline} India’s premier clinic dedicated to hand-crafting natural, comfortable, and bio-compatible custom artificial eyes.
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  '&:hover': { color: '#2563EB', background: 'rgba(255,255,255,0.1)' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  '&:hover': { color: '#E4405F', background: 'rgba(255,255,255,0.1)' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  '&:hover': { color: '#FF0000', background: 'rgba(255,255,255,0.1)' },
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                component="a"
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  '&:hover': { color: '#1DA1F2', background: 'rgba(255,255,255,0.1)' },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, sm: 6, md: 2.5 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.05rem',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 30,
                  height: 2,
                  background: '#10B981',
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Doctor', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Treatment Process', path: '/treatment' },
                { name: 'Before & After Gallery', path: '/gallery' },
                { name: 'Patient Stories', path: '/patient-stories' },
                { name: 'Knowledge Centre', path: '/knowledge' },
                { name: 'FAQ', path: '/faq' },
              ].map((item) => (
                <Box
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    transition: 'all 0.2s ease',
                    '&:hover': { color: '#10B981', transform: 'translateX(4px)' },
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 16, color: '#2563EB' }} />
                  {item.name}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Services Links */}
          <Grid size={{ xs: 6, sm: 6, md: 2.5 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.05rem',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 30,
                  height: 2,
                  background: '#2563EB',
                },
              }}
            >
              Prosthetic Services
            </Typography>
            <Stack spacing={1.5}>
              {SERVICES.slice(0, 7).map((service) => (
                <Box
                  key={service.id}
                  component={Link}
                  to="/services"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    transition: 'all 0.2s ease',
                    '&:hover': { color: '#2563EB', transform: 'translateX(4px)' },
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 16, color: '#10B981' }} />
                  {service.title}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.05rem',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 30,
                  height: 2,
                  background: '#10B981',
                },
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ color: '#2563EB', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>
                    Phone / Call
                  </Typography>
                  <Typography
                    component="a"
                    href={`tel:${SITE_CONFIG.phone}`}
                    sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', '&:hover': { color: '#2563EB' } }}
                  >
                    {SITE_CONFIG.phone}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <WhatsAppIcon sx={{ color: '#25D366', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>
                    WhatsApp Consultation
                  </Typography>
                  <Typography
                    component="a"
                    href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', '&:hover': { color: '#25D366' } }}
                  >
                    {SITE_CONFIG.whatsapp}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: '#10B981', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>
                    Email Us
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${SITE_CONFIG.email}`}
                    sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', '&:hover': { color: '#10B981' } }}
                  >
                    {SITE_CONFIG.email}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: '#F59E0B', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>
                    Centre Address
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem' }}>
                    {SITE_CONFIG.address}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved. Designed for Excellence.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Box
              component={Link}
              to="/privacy"
              sx={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: '#fff' } }}
            >
              Privacy Policy
            </Box>
            <Box
              component={Link}
              to="/terms"
              sx={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: '#fff' } }}
            >
              Terms & Conditions
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
