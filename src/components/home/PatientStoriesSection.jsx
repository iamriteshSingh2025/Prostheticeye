import { useState } from 'react';
import { Box, Container, Grid, Typography, Rating, Avatar, Chip, Dialog, IconButton, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedIcon from '@mui/icons-material/Verified';
import VideocamIcon from '@mui/icons-material/Videocam';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { TESTIMONIALS } from '../../data/testimonials';
import { useThemeMode } from '../../context/ThemeContext';

// Real Patient Testimonial Videos from assets
import patientBoyVideo from '../../assets/video/patient-boy.mp4';
import patientGirlVideo from '../../assets/video/patient-girl.mp4';

const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    patientName: 'Clinical Patient (Male)',
    city: 'Varanasi / Lucknow Patient',
    title: 'Restored Confidence After 5 Years',
    subtitle: 'Demonstration of smooth insertion, removal & anatomical symmetry',
    videoUrl: patientBoyVideo,
    tag: 'Restored Confidence',
  },
  {
    id: 2,
    patientName: 'Clinical Patient (Female)',
    city: 'Custom Scleral Fit Patient',
    title: 'Natural Looking Custom Scleral Shell',
    subtitle: 'Precision iris alignment, motility and natural eyelid closure',
    videoUrl: patientGirlVideo,
    tag: 'Custom Scleral Shell',
  },
];

const PatientStoriesSection = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  const [selectedVideo, setSelectedVideo] = useState(null);

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
          subtitle="Real Patient Feedback"
          title="Patient Stories & Video Testimonials"
          description="Hear and watch real patients demonstrate natural eye movement, realistic iris matching, and restored comfort with custom artificial eyes."
          centered={true}
        />

        {/* Video Testimonials Showcase */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {VIDEO_TESTIMONIALS.map((video) => (
            <Grid size={{ xs: 12, md: 6 }} key={video.id}>
              <GlassCard dark={isDark} hover={true} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 5, height: '100%' }}>
                {/* Video Card Container */}
                <Box
                  onClick={() => setSelectedVideo(video)}
                  sx={{
                    width: '100%',
                    height: { xs: 240, sm: 290, md: 320 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: '#030914',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: isDark ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(10,37,64,0.15)',
                    mb: 2.5,
                    '&:hover .play-btn': {
                      transform: 'translate(-50%, -50%) scale(1.15)',
                      background: '#10B981',
                      boxShadow: '0 0 30px rgba(16,185,129,0.7)',
                    },
                    '&:hover .video-bg': {
                      transform: 'scale(1.04)',
                    },
                  }}
                >
                  {/* Video Background Preview */}
                  <Box
                    component="video"
                    className="video-bg"
                    src={`${video.videoUrl}#t=0.5`}
                    preload="metadata"
                    muted
                    playsInline
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      transition: 'transform 0.5s ease',
                      display: 'block',
                    }}
                  />

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(3,9,20,0.85) 0%, rgba(3,9,20,0.25) 50%, rgba(3,9,20,0.65) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top Badges */}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ position: 'absolute', top: 14, left: 14, right: 14, zIndex: 2 }}
                  >
                    <Chip
                      icon={<VideocamIcon sx={{ fontSize: '15px !important', color: '#10B981 !important' }} />}
                      label={video.tag}
                      size="small"
                      sx={{
                        background: 'rgba(3, 9, 20, 0.85)',
                        backdropFilter: 'blur(8px)',
                        color: '#10B981',
                        border: '1px solid rgba(16,185,129,0.4)',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                      }}
                    />
                    <Chip
                      label="▶ Watch Video"
                      size="small"
                      sx={{
                        background: '#2563EB',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        boxShadow: '0 4px 12px rgba(37,99,235,0.4)',
                      }}
                    />
                  </Stack>

                  {/* Animated Play Button */}
                  <Box
                    className="play-btn"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: 60, sm: 70 },
                      height: { xs: 60, sm: 70 },
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.92)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 10px 30px rgba(16,185,129,0.45)',
                      transition: 'all 0.35s ease',
                      zIndex: 2,
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: { xs: 32, sm: 38 }, ml: 0.5 }} />
                  </Box>

                  {/* Bottom Text inside video */}
                  <Box sx={{ position: 'absolute', bottom: 12, left: 14, right: 14, zIndex: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.78rem',
                        textShadow: '0 2px 6px rgba(0,0,0,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.8,
                      }}
                    >
                      <VerifiedIcon sx={{ fontSize: 16, color: '#10B981' }} />
                      Verified Patient Fitting Story • Click to Play
                    </Typography>
                  </Box>
                </Box>

                {/* Card Title & Info */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: isDark ? '#fff' : '#0A2540',
                    fontSize: { xs: '1rem', sm: '1.12rem' },
                    mb: 0.5,
                  }}
                >
                  {video.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#2563EB',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    mb: 0.5,
                  }}
                >
                  {video.patientName} • {video.city}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? 'rgba(255,255,255,0.65)' : 'text.secondary',
                    fontSize: '0.8rem',
                  }}
                >
                  {video.subtitle}
                </Typography>
              </GlassCard>
            </Grid>
          ))}
        </Grid>

        {/* Written Review Cards */}
        <Grid container spacing={3.5}>
          {TESTIMONIALS.map((testimonial) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={testimonial.id}>
              <GlassCard
                dark={isDark}
                hover={true}
                sx={{
                  height: '100%',
                  p: 3.5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 4,
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Rating value={testimonial.rating} readOnly precision={0.5} icon={<StarIcon sx={{ color: '#F59E0B' }} />} />
                    <FormatQuoteIcon sx={{ color: 'rgba(37, 99, 235, 0.3)', fontSize: 36 }} />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: isDark ? 'rgba(255,255,255,0.9)' : 'text.primary',
                      fontStyle: 'italic',
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: '0.92rem',
                    }}
                  >
                    "{testimonial.review}"
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: 2, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'}` }}>
                  <Avatar sx={{ background: 'linear-gradient(135deg, #2563EB, #10B981)', fontWeight: 700 }}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: isDark ? '#fff' : '#0A2540' }}>
                        {testimonial.name}
                      </Typography>
                      <VerifiedIcon sx={{ color: '#10B981', fontSize: 16 }} />
                    </Box>
                    <Typography variant="caption" sx={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'text.secondary' }}>
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Box>
              </GlassCard>
            </Grid>
          ))}
        </Grid>

        {/* Customized Responsive Video Player Dialog Modal */}
        <Dialog
          open={Boolean(selectedVideo)}
          onClose={() => setSelectedVideo(null)}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            sx: {
              background: '#020611',
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
              m: { xs: 1.5, sm: 2 },
              maxHeight: '94vh',
            },
          }}
        >
          {selectedVideo && (
            <Box sx={{ position: 'relative', background: '#000', display: 'flex', flexDirection: 'column' }}>
              {/* Top Header */}
              <Box
                sx={{
                  p: 2,
                  px: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(7, 21, 43, 0.95)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  zIndex: 10,
                }}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 800, lineHeight: 1.2, fontSize: '0.95rem' }}>
                    {selectedVideo.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                    {selectedVideo.patientName}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => setSelectedVideo(null)}
                  sx={{
                    color: '#fff',
                    background: 'rgba(255,255,255,0.1)',
                    p: 0.8,
                    '&:hover': { background: '#EF4444' },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Video Player Box */}
              <Box
                sx={{
                  width: '100%',
                  background: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 1, sm: 1.5 },
                }}
              >
                <video
                  key={selectedVideo.videoUrl}
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    width: '100%',
                    maxHeight: '70vh',
                    borderRadius: '12px',
                    objectFit: 'contain',
                    backgroundColor: '#000',
                  }}
                />
              </Box>

              {/* Video Footer Note */}
              <Box sx={{ p: 2, px: 2.5, background: 'rgba(7, 21, 43, 0.95)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', display: 'block' }}>
                  {selectedVideo.subtitle}
                </Typography>
              </Box>
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default PatientStoriesSection;
