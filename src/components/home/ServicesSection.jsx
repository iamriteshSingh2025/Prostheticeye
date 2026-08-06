import { useState } from 'react';
import { Box, Container, Grid, Button, Stack, Chip, useTheme } from '@mui/material';
import SectionTitle from '../shared/SectionTitle';
import ServiceCard from '../shared/ServiceCard';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/services';
import { useThemeMode } from '../../context/ThemeContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

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
          subtitle="Specialized Care"
          title="Our Comprehensive Prosthetic Services"
          description="From custom iris-painted artificial eyes to maxillofacial prostheses, we provide advanced solutions crafted for high medical accuracy."
          centered={true}
        />

        {/* Category Filters */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: { xs: 4, sm: 6 } }}
        >
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  px: { xs: 1.2, sm: 2 },
                  py: 1,
                  height: 'auto',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: { xs: '0.78rem', sm: '0.88rem' },
                  cursor: 'pointer',
                  background: isSelected
                    ? 'linear-gradient(135deg, #2563EB, #10B981)'
                    : isDark
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(10, 37, 64, 0.05)',
                  color: isSelected ? '#ffffff' : isDark ? '#94a3b8' : '#0A2540',
                  boxShadow: isSelected ? '0 6px 20px rgba(37,99,235,0.3)' : 'none',
                  border: isSelected ? 'none' : `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                  '&:hover': {
                    background: isSelected
                      ? 'linear-gradient(135deg, #2563EB, #10B981)'
                      : 'rgba(37,99,235,0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
            );
          })}
        </Stack>

        {/* Services Grid */}
        <Grid container spacing={3.5}>
          {filteredServices.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
              <ServiceCard service={service} dark={isDark} />
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            to="/services"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              background: 'linear-gradient(135deg, #0A2540, #2563EB)',
              boxShadow: '0 8px 25px rgba(10, 37, 64, 0.3)',
            }}
          >
            Explore All 12 Prosthetic Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
