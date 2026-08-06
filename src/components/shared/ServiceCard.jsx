import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LensIcon from '@mui/icons-material/Lens';
import FaceIcon from '@mui/icons-material/Face';
import HearingIcon from '@mui/icons-material/Hearing';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import FrontHandIcon from '@mui/icons-material/FrontHand';
import HealingIcon from '@mui/icons-material/Healing';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GlassCard from './GlassCard';
import { useAppointment } from '../../context/AppointmentContext';

const iconMap = {
  visibility: VisibilityIcon,
  medical_services: MedicalServicesIcon,
  lens: LensIcon,
  face: FaceIcon,
  hearing: HearingIcon,
  face_retouching_natural: FaceRetouchingNaturalIcon,
  front_hand: FrontHandIcon,
  healing: HealingIcon,
  local_hospital: LocalHospitalIcon,
  cleaning_services: CleaningServicesIcon,
  event_available: EventAvailableIcon,
  support_agent: SupportAgentIcon,
};

const ServiceCard = ({ service, dark = false }) => {
  const { openAppointment } = useAppointment();
  const IconComponent = iconMap[service.icon] || VisibilityIcon;

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
        overflow: 'hidden',
      }}
    >
      <Box>
        {/* Header Icon + Chip */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)`,
              border: `1px solid ${service.color}55`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 8px 20px ${service.color}25`,
            }}
          >
            <IconComponent sx={{ color: service.color, fontSize: 30 }} />
          </Box>
          <Chip
            label={service.category}
            size="small"
            sx={{
              background: 'rgba(37, 99, 235, 0.1)',
              color: '#2563EB',
              fontWeight: 600,
              fontSize: '0.75rem',
              textTransform: 'capitalize',
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: '1.25rem',
            mb: 1.5,
            color: dark ? '#fff' : 'inherit',
          }}
        >
          {service.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: dark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
            mb: 3,
            lineHeight: 1.7,
            fontSize: '0.92rem',
          }}
        >
          {service.description}
        </Typography>

        {/* Feature List */}
        <Stack spacing={1} sx={{ mb: 3 }}>
          {service.features.map((feature, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ color: '#10B981', fontSize: 16 }} />
              <Typography
                variant="caption"
                sx={{
                  color: dark ? 'rgba(255,255,255,0.85)' : 'text.primary',
                  fontWeight: 500,
                  fontSize: '0.82rem',
                }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Button */}
      <Button
        variant="text"
        onClick={openAppointment}
        endIcon={<ArrowForwardIcon />}
        sx={{
          color: service.color,
          fontWeight: 600,
          p: 0,
          justifyContent: 'flex-start',
          '&:hover': {
            background: 'transparent',
            transform: 'translateX(5px)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        Book Consultation
      </Button>
    </GlassCard>
  );
};

export default ServiceCard;
