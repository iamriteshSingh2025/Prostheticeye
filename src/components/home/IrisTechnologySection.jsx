import { Box, Container, Grid, Typography, Stack, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import SecurityIcon from '@mui/icons-material/Security';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { useThemeMode } from '../../context/ThemeContext';
import eye1Img from '../../assets/eye1.png';
import eye5Img from '../../assets/eye5.png';

const IrisTechnologySection = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark
          ? 'linear-gradient(180deg, #050d1a 0%, #061828 50%, #050d1a 100%)'
          : 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 50%, #F8FAFC 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle
          subtitle="Advanced Clinical Innovation"
          title="3D Iris Crypts & Bio-Pigment Technology"
          description="We recreate true 3D depth, natural iris crypts, pupil light dynamics, and fine ocular vascularization to craft artificial eyes that are virtually indistinguishable from natural eyes."
          centered={true}
        />

        <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
          {/* Tech Breakdown Grid */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <GlassCard dark={isDark} hover={true} sx={{ p: 3, borderRadius: 4 }}>
                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '14px',
                      background: 'rgba(37,99,235,0.12)',
                      color: '#2563EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LayersIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: isDark ? '#fff' : '#0A2540' }}>
                      Layered 3D Iris Depth Fabrication
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.6 }}>
                      Unlike flat painted stock eyes, Dr. Mishra builds the iris using multi-layered clear resin depth mapping, replicating natural light refraction and true pupil depth.
                    </Typography>
                  </Box>
                </Box>
              </GlassCard>

              <GlassCard dark={isDark} hover={true} sx={{ p: 3, borderRadius: 4 }}>
                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '14px',
                      background: 'rgba(16,185,129,0.12)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: isDark ? '#fff' : '#0A2540' }}>
                      Hand-Painted Micro-Vascular Detailing
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.6 }}>
                      Individual silk thread fibers and organic red pigments are embedded onto the sclera to mirror your fellow natural eye’s exact blood vessel pattern.
                    </Typography>
                  </Box>
                </Box>
              </GlassCard>

              <GlassCard dark={isDark} hover={true} sx={{ p: 3, borderRadius: 4 }}>
                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '14px',
                      background: 'rgba(245,158,11,0.12)',
                      color: '#F59E0B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <SecurityIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: isDark ? '#fff' : '#0A2540' }}>
                      FDA-Approved Bio-Compatible Medical Acrylic
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.6 }}>
                      Made exclusively from non-allergenic, non-toxic medical grade PMMA acrylic that resists tear stain discoloration and ensures zero socket tissue irritation.
                    </Typography>
                  </Box>
                </Box>
              </GlassCard>
            </Stack>
          </Grid>

          {/* Visual Interactive Graphic */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 6,
                  background: 'linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Main Eye Closeup Image */}
                <Box sx={{ width: '100%', height: 260, overflow: 'hidden', position: 'relative' }}>
                  <Box
                    component="img"
                    src={eye1Img}
                    alt="Artificial Eye Iris Closeup"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(10,37,64,0.95) 100%)',
                    }}
                  />
                  <Chip
                    label="Proprietary Ocular Technology"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(16,185,129,0.9)',
                      color: '#fff',
                      fontWeight: 700,
                      backdropFilter: 'blur(8px)',
                    }}
                  />
                </Box>

                {/* Bottom Section with Stats and Image */}
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid size={{ xs: 6 }}>
                      <Box
                        sx={{
                          height: 80,
                          borderRadius: 2,
                          overflow: 'hidden',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <Box
                          component="img"
                          src={eye5Img}
                          alt="Iris Color Matching"
                          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#10B981', fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>
                          100%
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem' }}>
                          Anatomical Socket Fit
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#2563EB', fontFamily: "'Playfair Display', serif", lineHeight: 1, mt: 0.5 }}>
                          0%
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem' }}>
                          Tissue Irritation Rate
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, mb: 0.5, fontSize: '1rem' }}>
                    Natural Light Refraction & Motility
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, fontSize: '0.82rem' }}>
                    Our iris painting process uses direct real-time color matching under surgical magnification lamps for perfect symmetry.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IrisTechnologySection;
