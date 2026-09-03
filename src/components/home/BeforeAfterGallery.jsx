import { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Chip, Rating } from '@mui/material';
import CompareIcon from '@mui/icons-material/Compare';
import StarIcon from '@mui/icons-material/Star';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';

// Real Patient Before & After Photos
import patient1Before from '../../assets/patient1-before.jpg';
import patient1After from '../../assets/patient1-after.jpg';
import patient2Before from '../../assets/patient2-before.jpg';
import patient2After from '../../assets/patient2-after.jpg';

const TRANSFORMATIONS = [
  {
    id: 1,
    title: 'Anatomical Symmetry & Motility',
    condition: 'Congenital Anophthalmia Restoration',
    category: 'Before & After',
    beforeLabel: 'Pre-Prosthetic Socket Condition',
    afterLabel: 'Hand-Crafted 3D Eye Artificial Eye',
    afterImage: patient1After,
    beforeImage: patient1Before,
    rating: 5,
    patient: 'Amit V. (Kanpur)',
  },
  {
    id: 2,
    title: 'Pediatric Conformer & Prosthesis',
    condition: 'Congenital Anophthalmia socket Expansion',
    category: 'Before & After',
    beforeLabel: 'Pre-Treatment Socket Condition',
    afterLabel: 'Gradual Expansion & Custom Eye Fit',
    afterImage: patient2After,
    beforeImage: patient2Before,
    rating: 5,
    patient: 'Child Patient (Agra)',
  },
];

const BeforeAfterGallery = () => {
  const [toggleAfter, setToggleAfter] = useState({});
  const { mode } = useThemeMode();
  const { openAppointment } = useAppointment();
  const isDark = mode === 'dark';

  const handleToggle = (id) => {
    setToggleAfter((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark ? '#030914' : '#F8FAFC',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Clinical Outcomes"
          title="Before & After Transformation Gallery"
          description="See the natural eye symmetry, realistic iris color-matching, and restored patient confidence achieved with Mr. Shashank Mishra's custom prostheses."
          centered={true}
        />

        <Grid container spacing={4}>
          {TRANSFORMATIONS.map((item) => {
            const isShowingAfter = toggleAfter[item.id] !== false; // Default showing restored outcome
            const currentImage = isShowingAfter ? item.afterImage : item.beforeImage;

            return (
              <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                <GlassCard dark={isDark} hover={true} sx={{ p: 3, borderRadius: 5, height: '100%' }}>
                  {/* Card Visual - Real Image */}
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 260, sm: 320, md: 350 },
                      borderRadius: 4,
                      overflow: 'hidden',
                      mb: 3,
                      position: 'relative',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Box
                      component="img"
                      src={currentImage}
                      alt={isShowingAfter ? item.afterLabel : item.beforeLabel}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        display: 'block',
                        transition: 'opacity 0.4s ease',
                      }}
                    />

                    {/* Gradient overlay at bottom */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(3,9,20,0.75) 0%, transparent 50%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Label chip */}
                    <Chip
                      label={isShowingAfter ? '✓ AFTER: Restored Prosthetic Eye' : '⚬ BEFORE: Pre-Treatment'}
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: isShowingAfter ? 'rgba(16,185,129,0.9)' : 'rgba(245,158,11,0.9)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: { xs: '0.68rem', sm: '0.75rem' },
                        backdropFilter: 'blur(8px)',
                      }}
                    />

                    {/* Condition text */}
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        bottom: 12,
                        left: 12,
                        right: 120,
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', sm: '0.78rem' },
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                      }}
                    >
                      {isShowingAfter ? item.afterLabel : item.beforeLabel}
                    </Typography>

                    {/* Toggle Button */}
                    <Button
                      size="small"
                      startIcon={<CompareIcon />}
                      onClick={() => handleToggle(item.id)}
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        background: 'rgba(10,37,64,0.75)',
                        color: '#fff',
                        borderRadius: '30px',
                        px: 1.5,
                        py: 0.4,
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        '&:hover': { background: 'rgba(37,99,235,0.85)' },
                        minWidth: 'unset',
                        textTransform: 'none',
                      }}
                    >
                      {isShowingAfter ? 'See Before' : 'See After'}
                    </Button>
                  </Box>

                  {/* Info */}
                  <Typography variant="h6" sx={{ fontWeight: 800, color: isDark ? '#fff' : '#0A2540', mb: 0.4, fontSize: { xs: '0.98rem', sm: '1.05rem' } }}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#2563EB', fontWeight: 600, mb: 1, fontSize: { xs: '0.8rem', sm: '0.85rem' } }}>
                    {item.condition}
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.65)' : 'text.secondary', mb: 2.5, fontSize: '0.82rem' }}>
                    Patient: {item.patient}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1.5, pt: 2, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}` }}>
                    <Rating value={item.rating} readOnly precision={0.5} icon={<StarIcon sx={{ color: '#F59E0B', fontSize: 18 }} />} emptyIcon={<StarIcon sx={{ fontSize: 18 }} />} />
                    <Button
                      variant="contained"
                      onClick={openAppointment}
                      sx={{
                        borderRadius: '50px',
                        px: 3,
                        py: 0.7,
                        width: { xs: '100%', sm: 'auto' },
                        fontSize: '0.8rem',
                        background: 'linear-gradient(135deg, #2563EB, #10B981)',
                        fontWeight: 600,
                        textTransform: 'none',
                      }}
                    >
                      Book Consultation
                    </Button>
                  </Box>
                </GlassCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default BeforeAfterGallery;
