import { Box, Typography, Rating, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedIcon from '@mui/icons-material/Verified';
import GlassCard from './GlassCard';

const TestimonialCard = ({ testimonial, dark = false }) => {
  return (
    <GlassCard
      dark={dark}
      hover={true}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ color: '#F59E0B' }} />
          <FormatQuoteIcon sx={{ color: 'rgba(37, 99, 235, 0.3)', fontSize: 40 }} />
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: dark ? 'rgba(255,255,255,0.9)' : 'text.primary',
            fontStyle: 'italic',
            lineHeight: 1.8,
            mb: 3,
            fontSize: '0.95rem',
          }}
        >
          "{testimonial.review}"
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 2, borderTop: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)' }}>
        <Avatar
          sx={{
            background: 'linear-gradient(135deg, #2563EB, #10B981)',
            fontWeight: 700,
            fontSize: '1.1rem',
          }}
        >
          {testimonial.name.charAt(0)}
        </Avatar>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: dark ? '#fff' : 'inherit' }}>
              {testimonial.name}
            </Typography>
            {testimonial.verified && (
              <VerifiedIcon sx={{ color: '#10B981', fontSize: 16 }} />
            )}
          </Box>
          <Typography variant="caption" sx={{ color: dark ? 'rgba(255,255,255,0.6)' : 'text.secondary' }}>
            {testimonial.location} • {testimonial.date}
          </Typography>
        </Box>
      </Box>
    </GlassCard>
  );
};

export default TestimonialCard;
