import { Box, Grid, Card, CardContent, Typography, Button, Chip, Stack, Container, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AdjustIcon from '@mui/icons-material/Adjust';
import PaletteIcon from '@mui/icons-material/Palette';
import TuneIcon from '@mui/icons-material/Tune';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';

import { SPECIALITY_CONTACT_LENSES, SPECIALITY_LENS_PROCESS } from '../../data/specialityContactLenses';
import { SECOND_DOCTOR } from '../../data/doctor';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import sharadImg from '../../assets/Sharad kumar mishra.jpeg';

const ICON_MAP = {
  visibility: VisibilityIcon,
  auto_awesome: AutoAwesomeIcon,
  nights_stay: NightsStayIcon,
  adjust: AdjustIcon,
  palette: PaletteIcon,
  tune: TuneIcon
};

const SpecialityContactLensTab = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  const { openAppointment } = useAppointment();

  return (
    <Box sx={{ py: 2 }}>
      {/* Intro Header */}
      <Box
        sx={{
          p: { xs: 3, md: 5 },
          mb: 6,
          borderRadius: 4,
          background: isDark
            ? 'linear-gradient(135deg, rgba(13,148,136,0.15) 0%, rgba(37,99,235,0.15) 100%)'
            : 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)',
          border: `1px solid ${isDark ? 'rgba(13,148,136,0.3)' : 'rgba(37,99,235,0.15)'}`,
          textAlign: 'center'
        }}
      >
        <Chip
          label="Advanced Corneal & Ocular Care"
          sx={{
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            bgcolor: '#0D9488',
            color: '#fff',
            mb: 2
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            color: isDark ? '#ffffff' : '#0A2540',
            mb: 2
          }}
        >
          Speciality Contact Lens Services
        </Typography>
        <Typography
          sx={{
            maxWidth: '820px',
            mx: 'auto',
            color: isDark ? '#cbd5e1' : '#475569',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            lineHeight: 1.7
          }}
        >
          We offer medical-grade speciality contact lenses for complex corneal conditions, severe dry eye disease, irregular astigmatism, Keratoconus, and aesthetic corneal reconstruction.
        </Typography>
      </Box>

      {/* Specialist Profile Card - Mr. Sharad Kumar Mishra */}
      <Paper
        elevation={0}
        sx={{
          mb: 6,
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          background: isDark
            ? 'linear-gradient(135deg, rgba(10,37,64,0.9) 0%, rgba(13,148,136,0.15) 100%)'
            : 'linear-gradient(135deg, #0A2540 0%, #0F766E 100%)',
          color: '#fff',
          boxShadow: '0 16px 50px rgba(10,37,64,0.3)',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={sharadImg}
                alt={SECOND_DOCTOR.name}
                sx={{
                  width: { xs: 180, sm: 220 },
                  height: { xs: 220, sm: 270 },
                  borderRadius: 4,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '3px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Chip
              label={SECOND_DOCTOR.title}
              sx={{
                fontWeight: 700,
                fontSize: '0.75rem',
                bgcolor: '#10B981',
                color: '#fff',
                mb: 1.5,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: { xs: '1.5rem', sm: '1.8rem' },
                mb: 1,
              }}
            >
              {SECOND_DOCTOR.name}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
              {SECOND_DOCTOR.qualifications.map((q, i) => (
                <Chip
                  key={i}
                  icon={<SchoolIcon sx={{ color: '#2dd4bf !important', fontSize: 14 }} />}
                  label={q}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.72rem',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </Stack>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                lineHeight: 1.7,
                mb: 2.5,
                whiteSpace: 'pre-line',
              }}
            >
              {SECOND_DOCTOR.about}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<CalendarMonthIcon />}
              onClick={openAppointment}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.4,
                width: { xs: '100%', sm: 'auto' },
                background: 'linear-gradient(135deg, #10B981, #0D9488)',
                fontWeight: 600,
                boxShadow: '0 8px 25px rgba(16,185,129,0.35)',
              }}
            >
              Book Consultation with {SECOND_DOCTOR.name}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Specialty Lens Grid */}
      <Grid container spacing={3.5}>
        {SPECIALITY_CONTACT_LENSES.map((lens) => {
          const IconComp = ICON_MAP[lens.icon] || VisibilityIcon;
          return (
            <Grid size={{ xs: 12, md: 6 }} key={lens.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: isDark ? 'rgba(10, 25, 47, 0.85)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
                  borderRadius: 4,
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: '#0D9488',
                    boxShadow: isDark
                      ? '0 16px 40px rgba(13,148,136,0.25)'
                      : '0 16px 40px rgba(10,37,64,0.12)'
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #0D9488, #2563EB)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 6px 18px rgba(13,148,136,0.3)'
                      }}
                    >
                      <IconComp sx={{ fontSize: 28 }} />
                    </Box>
                    <Chip
                      label={lens.badge}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        background: isDark ? 'rgba(13,148,136,0.2)' : '#E0F2FE',
                        color: isDark ? '#2dd4bf' : '#0369A1',
                        border: '1px solid rgba(13,148,136,0.3)'
                      }}
                    />
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{
                      color: '#0D9488',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      mb: 0.5,
                      display: 'block'
                    }}
                  >
                    {lens.category}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      color: isDark ? '#ffffff' : '#0A2540',
                      mb: 1.5,
                      fontSize: { xs: '1.25rem', sm: '1.4rem' }
                    }}
                  >
                    {lens.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: isDark ? '#94a3b8' : '#475569',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      mb: 2.5
                    }}
                  >
                    {lens.fullDesc}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, color: isDark ? '#f1f5f9' : '#0A2540', mb: 1 }}
                    >
                      Key Features:
                    </Typography>
                    <Stack spacing={0.8} sx={{ mb: 2.5 }}>
                      {lens.features.map((feat, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleOutlinedIcon sx={{ color: '#0D9488', fontSize: 18, flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#334155' }}>
                            {feat}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 0.8 }}>
                      {lens.conditions.map((cond, idx) => (
                        <Chip
                          key={idx}
                          label={cond}
                          size="small"
                          sx={{
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(10,37,64,0.05)',
                            color: isDark ? '#94a3b8' : '#475569'
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Fitting Process Timeline */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            textAlign: 'center',
            color: isDark ? '#ffffff' : '#0A2540',
            mb: 1
          }}
        >
          Speciality Lens Fitting Protocol
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: isDark ? '#94a3b8' : '#64748B',
            maxWidth: '600px',
            mx: 'auto',
            mb: 5
          }}
        >
          Our 5-step clinical approach to ensure perfect lens geometry, visual clarity, and corneal health.
        </Typography>

        <Grid container spacing={2.5}>
          {SPECIALITY_LENS_PROCESS.map((proc, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  background: isDark ? 'rgba(10, 25, 47, 0.7)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
                  borderRadius: 3
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: '1.8rem',
                    color: '#0D9488',
                    mb: 1
                  }}
                >
                  {proc.step}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: isDark ? '#fff' : '#0A2540', mb: 1, fontSize: '0.95rem' }}
                >
                  {proc.title}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: isDark ? '#94a3b8' : '#64748B', lineHeight: 1.5 }}>
                  {proc.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Box */}
      <Box
        sx={{
          mt: 6,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, #0A2540 0%, #0D9488 100%)',
          color: '#ffffff',
          textAlign: 'center',
          boxShadow: '0 12px 35px rgba(10,37,64,0.25)'
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, mb: 1.5 }}
        >
          Need a Speciality Contact Lens Evaluation?
        </Typography>
        <Typography sx={{ maxWidth: '650px', mx: 'auto', mb: 3, opacity: 0.9, fontSize: '1.05rem' }}>
          Schedule a diagnostic fitting session with our corneal contact lens specialists today for Keratoconus, Scleral, or Prosthetic lenses.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<CalendarMonthIcon />}
          onClick={openAppointment}
          sx={{
            background: '#ffffff',
            color: '#0A2540',
            fontWeight: 700,
            px: 4,
            py: 1.5,
            '&:hover': {
              background: '#f8fafc',
              transform: 'translateY(-2px)'
            }
          }}
        >
          Book Lens Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default SpecialityContactLensTab;
