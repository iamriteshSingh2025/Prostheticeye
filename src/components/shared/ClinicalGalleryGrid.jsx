import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  IconButton,
  Dialog,
  Tabs,
  Tab,
  Stack,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '../../data/galleryData';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';

const ClinicalGalleryGrid = ({ showHeader = true, limit = null }) => {
  const { mode } = useThemeMode();
  const { openAppointment } = useAppointment();
  const isDark = mode === 'dark';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter images
  const filteredImages = GALLERY_IMAGES.filter((img) =>
    selectedCategory === 'All' ? true : img.category === selectedCategory
  );

  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const activeImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: isDark ? '#030914' : '#F8FAFC' }}>
      <Container maxWidth="lg">
        {showHeader && (
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AutoAwesomeIcon sx={{ fontSize: '16px !important', color: '#10B981 !important' }} />}
              label="Real Clinical Cases & Work"
              sx={{
                background: isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10B981',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '3rem' },
                color: isDark ? '#ffffff' : '#0A2540',
                mb: 2,
              }}
            >
              Patient Transformation Gallery
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? 'rgba(255, 255, 255, 0.75)' : 'text.secondary',
                maxWidth: 680,
                mx: 'auto',
                fontSize: { xs: '0.92rem', sm: '1.05rem' },
              }}
            >
              Browse authentic clinical photos of custom artificial eye fittings, hand-painted iris matching, and socket restoration crafted by <strong>Mr. Shashank Mishra</strong>.
            </Typography>
          </Box>
        )}

        {/* Category Filters */}
        <Box sx={{ mb: 5, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={selectedCategory}
            onChange={(e, val) => setSelectedCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#10B981',
                height: 3,
                borderRadius: '3px',
              },
              '& .MuiTab-root': {
                color: isDark ? 'rgba(255,255,255,0.7)' : '#0A2540',
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 2.5,
                py: 1,
                minWidth: 'unset',
                '&.Mui-selected': {
                  color: '#10B981',
                  fontWeight: 800,
                },
              },
            }}
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          <AnimatePresence>
            {displayImages.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <Box
                  component={motion.div}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => handleOpenLightbox(idx)}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: isDark ? 'rgba(10, 37, 64, 0.65)' : '#ffffff',
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'}`,
                      boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.06)',
                      transition: 'all 0.35s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: isDark
                          ? '0 20px 40px rgba(16,185,129,0.25)'
                          : '0 20px 40px rgba(37,99,235,0.15)',
                        border: '1px solid #10B981',
                        '& .gallery-img': {
                          transform: 'scale(1.08)',
                        },
                        '& .zoom-overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Media Container */}
                    <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        className="gallery-img"
                        image={item.image}
                        alt={item.title}
                        sx={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />

                      {/* Category Badge */}
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          background: 'rgba(3, 9, 20, 0.75)',
                          backdropFilter: 'blur(8px)',
                          color: '#10B981',
                          border: '1px solid rgba(16,185,129,0.4)',
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          zIndex: 2,
                        }}
                      />

                      {/* Hover Overlay Icon */}
                      <Box
                        className="zoom-overlay"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(3, 9, 20, 0.45)',
                          backdropFilter: 'blur(3px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          zIndex: 3,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: '50%',
                            background: '#10B981',
                            color: '#fff',
                            display: 'flex',
                            boxShadow: '0 8px 20px rgba(16,185,129,0.4)',
                          }}
                        >
                          <ZoomInIcon fontSize="medium" />
                        </Box>
                      </Box>
                    </Box>

                    {/* Content */}
                    <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          fontSize: '1.05rem',
                          color: isDark ? '#ffffff' : '#0A2540',
                          mb: 0.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#2563EB',
                          fontWeight: 600,
                          display: 'block',
                          mb: 1,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'text.secondary',
                          fontSize: '0.82rem',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* View All / Consult CTA */}
        {limit && (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={openAppointment}
              startIcon={<CalendarMonthIcon />}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.4,
                background: 'linear-gradient(135deg, #2563EB, #10B981)',
                fontWeight: 700,
                fontSize: '0.95rem',
                textTransform: 'none',
                boxShadow: '0 10px 30px rgba(37,99,235,0.3)',
              }}
            >
              Book Doctor Consultation
            </Button>
          </Box>
        )}

        {/* Fullscreen Lightbox Modal */}
        <Dialog
          open={selectedImageIndex !== null}
          onClose={handleCloseLightbox}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              background: 'rgba(3, 9, 20, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 5,
              overflow: 'hidden',
              color: '#ffffff',
              p: 0,
            },
          }}
        >
          {activeImage && (
            <Box sx={{ position: 'relative', minHeight: { xs: '70vh', md: '80vh' }, display: 'flex', flexDirection: 'column' }}>
              {/* Top Bar */}
              <Box
                sx={{
                  p: 2,
                  px: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  zIndex: 10,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Chip
                    label={activeImage.category}
                    size="small"
                    sx={{ background: '#10B981', color: '#fff', fontWeight: 700 }}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff' }}>
                    {selectedImageIndex + 1} / {filteredImages.length}
                  </Typography>
                </Stack>

                <IconButton
                  onClick={handleCloseLightbox}
                  sx={{
                    color: '#fff',
                    background: 'rgba(255,255,255,0.1)',
                    '&:hover': { background: '#EF4444' },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Main Image View */}
              <Box
                sx={{
                  position: 'relative',
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 2, md: 4 },
                  background: '#020611',
                }}
              >
                <Box
                  component="img"
                  src={activeImage.image}
                  alt={activeImage.title}
                  sx={{
                    maxHeight: '65vh',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: 3,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                  }}
                />

                {/* Left Arrow */}
                <IconButton
                  onClick={handlePrevImage}
                  sx={{
                    position: 'absolute',
                    left: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(3,9,20,0.8)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    p: 1.5,
                    '&:hover': { background: '#2563EB' },
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>

                {/* Right Arrow */}
                <IconButton
                  onClick={handleNextImage}
                  sx={{
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(3,9,20,0.8)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    p: 1.5,
                    '&:hover': { background: '#2563EB' },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>

              {/* Bottom Info Bar */}
              <Box
                sx={{
                  p: 3,
                  background: 'rgba(7, 21, 43, 0.95)',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', fontFamily: "'Playfair Display', serif" }}>
                    {activeImage.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#60A5FA', mt: 0.3 }}>
                    {activeImage.subtitle} — {activeImage.description}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  onClick={() => {
                    handleCloseLightbox();
                    openAppointment();
                  }}
                  startIcon={<CalendarMonthIcon />}
                  sx={{
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    background: 'linear-gradient(135deg, #2563EB, #10B981)',
                    fontWeight: 700,
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Book Appointment
                </Button>
              </Box>
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ClinicalGalleryGrid;
 