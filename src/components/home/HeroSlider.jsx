import { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Chip, Dialog, Stack, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDER_IMAGES } from '../../data/galleryData';
import { useAppointment } from '../../context/AppointmentContext';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [openLightbox, setOpenLightbox] = useState(false);
  const { openAppointment } = useAppointment();

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDER_IMAGES.length) % HERO_SLIDER_IMAGES.length);
  };

  const activeSlide = HERO_SLIDER_IMAGES[currentIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: { xs: 4, sm: 6 },
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        background: '#030914',
      }}
    >
      {/* Slider Viewport Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 320, sm: 400, md: 450 },
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            onClick={() => setOpenLightbox(true)}
          >
            <Box
              component="img"
              src={activeSlide.image}
              alt={activeSlide.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />

            {/* Gradient Dark Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(3, 9, 20, 0.92) 0%, rgba(3, 9, 20, 0.35) 50%, rgba(0, 0, 0, 0.2) 100%)',
              }}
            />

            {/* Slide Content Overlay */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: { xs: 2.5, sm: 4 },
                zIndex: 3,
              }}
            >
              <Chip
                icon={<AutoAwesomeIcon sx={{ fontSize: '14px !important', color: '#10B981 !important' }} />}
                label={activeSlide.badge}
                sx={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1px solid rgba(16, 185, 129, 0.5)',
                  color: '#10B981',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  mb: 1.5,
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1.2,
                  mb: 0.8,
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                {activeSlide.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#60A5FA',
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  mb: 1,
                }}
              >
                {activeSlide.subtitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: { xs: '0.78rem', sm: '0.88rem' },
                  maxWidth: 550,
                  display: { xs: '-webkit-box', sm: 'block' },
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {activeSlide.description}
              </Typography>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Top Control Bar (Fullscreen & Autoplay Toggle) */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 4,
          }}
        >
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            sx={{
              background: 'rgba(3, 9, 20, 0.65)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              '&:hover': { background: 'rgba(37, 99, 235, 0.8)' },
            }}
            title={isPlaying ? 'Pause Auto-slide' : 'Play Auto-slide'}
          >
            {isPlaying ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
          </IconButton>

          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setOpenLightbox(true);
            }}
            sx={{
              background: 'rgba(3, 9, 20, 0.65)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              '&:hover': { background: 'rgba(37, 99, 235, 0.8)' },
            }}
            title="Expand Fullscreen"
          >
            <FullscreenIcon fontSize="small" />
          </IconButton>
        </Stack>

        {/* Left Arrow */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          sx={{
            position: 'absolute',
            left: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            background: 'rgba(3, 9, 20, 0.65)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
            p: 1.2,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: '#2563EB',
              transform: 'translateY(-50%) scale(1.1)',
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          sx={{
            position: 'absolute',
            right: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            background: 'rgba(3, 9, 20, 0.65)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
            p: 1.2,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: '#2563EB',
              transform: 'translateY(-50%) scale(1.1)',
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      {/* Thumbnails / Indicators Row */}
      <Box
        sx={{
          background: '#07152B',
          px: 2,
          py: 1.8,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          gap: 1.5,
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ flexGrow: 1, overflowX: 'auto', py: 0.5 }}>
          {HERO_SLIDER_IMAGES.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <Box
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  px: 1.8,
                  py: 1,
                  borderRadius: '30px',
                  cursor: 'pointer',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(16,185,129,0.3) 100%)'
                    : 'rgba(255,255,255,0.05)',
                  border: isSelected ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  '&:hover': {
                    background: 'rgba(37,99,235,0.2)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: isSelected ? '2px solid #10B981' : '1px solid rgba(255,255,255,0.3)',
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.78rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Slide {idx + 1}
                </Typography>
              </Box>
            );
          })}
        </Stack>

        <Button
          variant="contained"
          size="small"
          onClick={openAppointment}
          sx={{
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #2563EB, #10B981)',
            px: 2.2,
            py: 0.8,
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          Book Consultation
        </Button>
      </Box>

      {/* Lightbox Dialog */}
      <Dialog
        open={openLightbox}
        onClose={() => setOpenLightbox(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: 'rgba(3, 9, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 4,
            overflow: 'hidden',
            color: '#fff',
            p: 0,
          },
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: { xs: '60vh', md: '80vh' } }}>
          <IconButton
            onClick={() => setOpenLightbox(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 10,
              color: '#fff',
              background: 'rgba(0,0,0,0.6)',
              '&:hover': { background: '#EF4444' },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={activeSlide.image}
            alt={activeSlide.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              p: 2,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 3,
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', fontFamily: "'Playfair Display', serif" }}>
              {activeSlide.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#60A5FA', mt: 0.5 }}>
              {activeSlide.subtitle} — {activeSlide.description}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default HeroSlider;
