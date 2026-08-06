import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SpaIcon from '@mui/icons-material/Spa';
import BiotechIcon from '@mui/icons-material/Biotech';
import VerifiedIcon from '@mui/icons-material/Verified';
import SavingsIcon from '@mui/icons-material/Savings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { WHY_CHOOSE_US } from '../../data/doctor';
import { useThemeMode } from '../../context/ThemeContext';

const iconMap = {
  create: CreateIcon,
  visibility: VisibilityIcon,
  spa: SpaIcon,
  biotech: BiotechIcon,
  verified: VerifiedIcon,
  savings: SavingsIcon,
  support_agent: SupportAgentIcon,
  person_pin: PersonPinIcon,
};

const WhyChooseSection = () => {
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
          subtitle="Why Choose UB Eye Care"
          title="World-Class Ocular Prosthetic Excellence"
          description="We combine artistic precision, bio-compatible materials, and compassionate care to give you a natural look and renewed life confidence."
          centered={true}
        />

        <Grid container spacing={3.5}>
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || VisibilityIcon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <GlassCard
                  dark={isDark}
                  delay={idx * 0.08}
                  sx={{
                    height: '100%',
                    p: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    borderRadius: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '14px',
                      background: `linear-gradient(135deg, ${item.color}15, ${item.color}33)`,
                      border: `1px solid ${item.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      color: item.color,
                      boxShadow: `0 6px 16px ${item.color}20`,
                    }}
                  >
                    <Icon sx={{ fontSize: 26 }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      mb: 1,
                      color: isDark ? '#fff' : theme.palette.text.primary,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                      fontSize: '0.88rem',
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </Typography>
                </GlassCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;
