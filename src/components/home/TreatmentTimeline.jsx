import { Box, Container, Grid, Typography, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PaletteIcon from '@mui/icons-material/Palette';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { TREATMENT_STEPS } from '../../data/doctor';
import { useThemeMode } from '../../context/ThemeContext';

const iconMap = {
  calendar_today: CalendarTodayIcon,
  chat: ChatIcon,
  search: SearchIcon,
  touch_app: TouchAppIcon,
  palette: PaletteIcon,
  build: BuildIcon,
  check_circle: CheckCircleIcon,
  favorite: FavoriteIcon,
};

const TreatmentTimeline = () => {
  const theme = useTheme();
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
          subtitle="Step-by-Step Procedure"
          title="Your Journey To Restored Confidence"
          description="We follow a meticulous 8-step clinical treatment process engineered to achieve perfect ocular fitting and anatomical comfort."
          centered={true}
        />

        <Grid container spacing={3}>
          {TREATMENT_STEPS.map((stepItem, idx) => {
            const Icon = iconMap[stepItem.icon] || CheckCircleIcon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stepItem.step}>
                <GlassCard
                  dark={isDark}
                  delay={idx * 0.08}
                  sx={{
                    height: '100%',
                    position: 'relative',
                    p: 3,
                    borderRadius: 4,
                  }}
                >
                  {/* Step Number Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: stepItem.color,
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {stepItem.step}
                  </Box>

                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${stepItem.color}18, ${stepItem.color}35)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: stepItem.color,
                    }}
                  >
                    <Icon sx={{ fontSize: 24 }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      mb: 1,
                      color: isDark ? '#fff' : theme.palette.text.primary,
                    }}
                  >
                    {stepItem.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {stepItem.description}
                  </Typography>

                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 1.5,
                      py: 0.4,
                      borderRadius: '50px',
                      background: 'rgba(37,99,235,0.08)',
                      color: '#2563EB',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {stepItem.duration}
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

export default TreatmentTimeline;
