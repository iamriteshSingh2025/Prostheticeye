import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
  accentColor = '#10B981',
}) => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ textAlign: centered ? 'center' : 'left', mb: 6 }}
    >
      {subtitle && (
        <Typography
          variant="overline"
          sx={{
            color: accentColor,
            fontWeight: 600,
            letterSpacing: 3,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            mb: 1,
            display: 'block',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {subtitle}
        </Typography>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', md: '2.8rem', lg: '3.2rem' },
          fontWeight: 700,
          color: light ? '#ffffff' : theme.palette.text.primary,
          lineHeight: 1.2,
          mb: 2,
          '& span': {
            background: `linear-gradient(135deg, #2563EB, ${accentColor})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          },
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body1"
          sx={{
            color: light ? 'rgba(255,255,255,0.8)' : theme.palette.text.secondary,
            maxWidth: centered ? 600 : '100%',
            mx: centered ? 'auto' : 0,
            fontSize: '1.05rem',
            lineHeight: 1.8,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {description}
        </Typography>
      )}

      {/* Decorative Line */}
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: centered ? 'center' : 'flex-start',
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 3,
            background: 'linear-gradient(90deg, #2563EB, #10B981)',
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: accentColor,
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 3,
            background: `linear-gradient(90deg, ${accentColor}, transparent)`,
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionTitle;
