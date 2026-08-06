import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import AnimatedCounter from '../shared/AnimatedCounter';
import { STATS } from '../../data/config';

const iconComponents = {
  people: PeopleIcon,
  star: WorkspacePremiumIcon,
  thumb_up: ThumbUpIcon,
  verified: VerifiedIcon,
};

const TrustBar = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #0A2540 0%, #1a3a5c 50%, #0A2540 100%)',
        color: '#ffffff',
        py: { xs: 4, md: 5 },
        position: 'relative',
        zIndex: 5,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {STATS.map((stat, idx) => {
            const Icon = iconComponents[stat.icon] || PeopleIcon;
            return (
              <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  sx={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 0.5,
                      color: '#10B981',
                      boxShadow: '0 4px 15px rgba(16,185,129,0.2)',
                    }}
                  >
                    <Icon sx={{ fontSize: 26 }} />
                  </Box>

                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 800,
                      fontFamily: "'Playfair Display', serif",
                      color: '#ffffff',
                      lineHeight: 1,
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrustBar;
