import { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Rating, Avatar, Chip, Dialog, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import CloseIcon from '@mui/icons-material/Close';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedIcon from '@mui/icons-material/Verified';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { TESTIMONIALS } from '../../data/testimonials';
import { useThemeMode } from '../../context/ThemeContext';

const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    patientName: 'Rajesh Kumar',
    city: 'Varanasi, UP',
    title: 'Restored Confidence After 5 Years',
    thumbnailColor: 'linear-gradient(135deg, #0A2540, #2563EB)',
    videoUrl: 'https://www.youtube.com/embed/ZT8jE4urjVs',
  },
  {
    id: 2,
    patientName: 'Priya Sharma',
    city: 'Lucknow, UP',
    title: 'Natural Looking Custom Scleral Shell',
    thumbnailColor: 'linear-gradient(135deg, #0A2540, #10B981)',
    videoUrl: 'https://www.youtube.com/embed/ZT8jE4urjVs',
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
          description="Hear directly from patients whose quality of life and self-esteem were restored with custom artificial eyes at UB Eye Care."
          centered={true}
        />

        {/* Video Testimonials Showcase */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {VIDEO_TESTIMONIALS.map((video) => (
            <Grid size={{ xs: 12, md: 6 }} key={video.id}>
              <GlassCard dark={isDark} hover={true} sx={{ p: 3, borderRadius: 5 }}>
                <Box
                  onClick={() => setSelectedVideo(video.videoUrl)}
                  sx={{
                    width: '100%',
                    height: 220,
                    borderRadius: 4,
                    background: video.thumbnailColor,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                    mb: 2.5,
                  }}
                >
                  <PlayCircleFilledIcon sx={{ fontSize: 70, color: '#10B981', filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.5))' }} />
                  <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mt: 1 }}>
                    Watch Patient Video Story
                  </Typography>
                  <Chip label="Play Video" size="small" sx={{ position: 'absolute', top: 16, right: 16, background: '#2563EB', color: '#fff', fontWeight: 700 }} />
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 800, color: isDark ? '#fff' : '#0A2540' }}>
                  {video.title}
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary' }}>
                  {video.patientName} • {video.city}
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

        {/* Video Player Dialog Modal */}
        <Dialog open={Boolean(selectedVideo)} onClose={() => setSelectedVideo(null)} maxWidth="md" fullWidth>
          <Box sx={{ position: 'relative', p: 1, background: '#000' }}>
            <IconButton onClick={() => setSelectedVideo(null)} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 10 }}>
              <CloseIcon />
            </IconButton>
            {selectedVideo && (
              <iframe
                title="Patient Video Story"
                width="100%"
                height="450"
                src={selectedVideo}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default PatientStoriesSection;
