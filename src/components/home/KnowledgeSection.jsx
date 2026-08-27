import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { BLOGS } from '../../data/content';
import { useThemeMode } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const KnowledgeSection = () => {
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
          subtitle="Knowledge & Articles"
          title="Artificial Eye Care & Cleaning Guides"
          description="Explore our patient guides, cleaning tips, and expert ocular prosthetics advice curated by Mr. Shashank Mishra."
          centered={true}
        />

        <Grid container spacing={3.5}>
          {BLOGS.slice(0, 3).map((blog) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id}>
              <GlassCard
                dark={isDark}
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
                    <Chip
                      label={blog.category}
                      size="small"
                      sx={{
                        background: 'rgba(37,99,235,0.1)',
                        color: '#2563EB',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: isDark ? 'rgba(255,255,255,0.5)' : 'text.secondary' }}>
                      <AccessTimeIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption">{blog.readTime}</Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      mb: 1.5,
                      color: isDark ? '#fff' : 'inherit',
                      lineHeight: 1.4,
                    }}
                  >
                    {blog.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                      mb: 3,
                      lineHeight: 1.7,
                      fontSize: '0.9rem',
                    }}
                  >
                    {blog.excerpt}
                  </Typography>
                </Box>

                <Button
                  component={Link}
                  to="/knowledge"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: '#2563EB',
                    fontWeight: 600,
                    p: 0,
                    justifyContent: 'flex-start',
                    '&:hover': { background: 'transparent', transform: 'translateX(4px)' },
                    transition: 'all 0.2s ease',
                  }}
                >
                  Read Full Article
                </Button>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default KnowledgeSection;
