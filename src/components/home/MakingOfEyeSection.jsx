import { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Chip, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PaletteIcon from '@mui/icons-material/Palette';
import BuildIcon from '@mui/icons-material/Build';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import eye4Img from '../../assets/eye4.png'; // patient fitting
import eye5Img from '../../assets/eye5.png'; // iris color matching
import eye2Img from '../../assets/eye2.png'; // doctor crafting
import eye1Img from '../../assets/eye1.png'; // artificial eye closeup

const STAGES = [
  {
    id: 1,
    title: '1. Ocular Socket Impression',
    subtitle: 'Precision Anatomic Molding',
    icon: TouchAppIcon,
    color: '#2563EB',
    image: eye4Img,
    imageAlt: 'Doctor taking eye socket impression for patient',
    description: 'Dr. Mishra takes a gentle, bio-compatible hydrocolloid impression of your eye socket. This captures the exact contours, volume, and conjunctival folds to guarantee maximum comfort and natural movement.',
    bullets: [
      'Painless 10-minute molding procedure',
      'Captures exact socket depth & muscle attachment points',
      'Eliminates socket discharge and fitting gaps',
    ],
  },
  {
    id: 2,
    title: '2. Iris Painting & Color Matching',
    subtitle: 'Artistic Master Craftsmanship',
    icon: PaletteIcon,
    color: '#10B981',
    image: eye5Img,
    imageAlt: 'Ocularist hand-painting iris on prosthetic eye',
    description: 'Sitting face-to-face with the doctor, your natural eye iris color, limbal ring density, pupil dimension, and scleral blood vessel patterns are hand-painted under high-magnification surgical lighting.',
    bullets: [
      'Direct real-time color matching with opposite eye',
      'Fine organic oil-pigment brushwork',
      'Realistic iris depth and multi-tone shading',
    ],
  },
  {
    id: 3,
    title: '3. Medical Acrylic Curing',
    subtitle: 'FDA-Approved Polymerization',
    icon: BuildIcon,
    color: '#F59E0B',
    image: eye2Img,
    imageAlt: 'Doctor crafting prosthetic eye under magnification',
    description: 'The hand-painted iris disk and scleral shell are cured under high-pressure thermal polymerization. This fuses the medical PMMA acrylic into an ultra-smooth, solid, bio-inert structure.',
    bullets: [
      'High-pressure heat polymerization',
      'Glass-smooth non-porous outer surface',
      'Extremely lightweight and impact-resistant',
    ],
  },
  {
    id: 4,
    title: '4. High-Gloss Polishing & Fitting',
    subtitle: 'Final Fitting & Comfort Test',
    icon: AutoFixHighIcon,
    color: '#7C3AED',
    image: eye1Img,
    imageAlt: 'Final polished artificial eye closeup',
    description: 'The prosthesis undergoes diamond-grit optical polishing to create a tear-wettable surface. Dr. Mishra performs the final fitting, verifying eye symmetry, eyelid closure, and motility.',
    bullets: [
      'Optical-grade optical polish for natural tear sheen',
      'Seamless anatomical insertion and comfortable wear',
      'Complete patient guidance on cleaning & care',
    ],
  },
];

const MakingOfEyeSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const { mode } = useThemeMode();
  const { openAppointment } = useAppointment();
  const isDark = mode === 'dark';

  const current = STAGES[activeStage];
  const IconComp = current.icon;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark ? '#061426' : '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Behind The Craft"
          title="The Making of a Custom Artificial Eye"
          description="Experience the artistry and surgical precision involved in turning medical acrylic into a life-changing natural prosthesis."
          centered={true}
        />

        {/* Stage Selector Buttons */}
        <Grid container spacing={2} sx={{ mb: 6 }} justifyContent="center">
          {STAGES.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <Grid size={{ xs: 6, sm: 3 }} key={stage.id}>
                <Paper
                  onClick={() => setActiveStage(idx)}
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: isSelected
                      ? 'linear-gradient(135deg, #0A2540, #2563EB)'
                      : isDark
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(10,37,64,0.04)',
                    color: isSelected ? '#fff' : isDark ? '#94a3b8' : '#0A2540',
                    border: isSelected ? 'none' : `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                    boxShadow: isSelected ? '0 8px 25px rgba(37,99,235,0.35)' : 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.85rem' }}>
                    Stage {stage.id}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', opacity: 0.85, fontWeight: 500 }}>
                    {stage.subtitle}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Active Stage Display Panel */}
        <AnimatePresence mode="wait">
          <Box
            key={current.id}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard dark={isDark} hover={false} sx={{ p: { xs: 3, md: 5 }, borderRadius: 5 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '16px',
                        background: `${current.color}20`,
                        color: current.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp sx={{ fontSize: 30 }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: isDark ? '#fff' : '#0A2540' }}>
                        {current.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: current.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                        {current.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary', lineHeight: 1.8, fontSize: '1rem', mb: 3 }}>
                    {current.description}
                  </Typography>

                  <Stack spacing={1.5} sx={{ mb: 4 }}>
                    {current.bullets.map((b, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <CheckCircleIcon sx={{ color: current.color, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 500, color: isDark ? '#fff' : '#0A2540' }}>
                          {b}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    variant="contained"
                    onClick={openAppointment}
                    sx={{
                      borderRadius: '50px',
                      px: 4,
                      py: 1.4,
                      background: 'linear-gradient(135deg, #2563EB, #10B981)',
                      fontWeight: 600,
                    }}
                  >
                    Book Eye Fabrication Appointment
                  </Button>
                </Grid>

                {/* Right - Real Stage Image */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      borderRadius: 5,
                      overflow: 'hidden',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                    }}
                  >
                    <Box
                      component={motion.img}
                      key={current.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      src={current.image}
                      alt={current.imageAlt}
                      sx={{
                        width: '100%',
                        height: 280,
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10,37,64,0.85) 0%, transparent 55%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <Box sx={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                      <Chip
                        label={`Clinical Stage 0${current.id} of 04`}
                        sx={{ background: current.color, color: '#fff', fontWeight: 700, mb: 1 }}
                      />
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, lineHeight: 1.5, fontSize: '0.82rem' }}>
                        Every phase is personally executed by Senior Specialist Dr. Shashank Mishra to ensure maximum comfort, lifelike iris depth, and precise symmetry.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </GlassCard>
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default MakingOfEyeSection;
