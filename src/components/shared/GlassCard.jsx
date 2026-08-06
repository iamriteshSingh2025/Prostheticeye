import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  dark = false,
  hover = true,
  sx = {},
  onClick,
  delay = 0,
  ...props
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      sx={{
        background: dark
          ? 'rgba(10, 37, 64, 0.6)'
          : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: dark
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        padding: '28px',
        transition: 'all 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': hover ? {
          background: dark
            ? 'rgba(37, 99, 235, 0.2)'
            : 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(37, 99, 235, 0.4)',
          boxShadow: '0 20px 60px rgba(37, 99, 235, 0.2)',
        } : {},
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default GlassCard;
