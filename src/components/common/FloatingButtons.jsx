import { useState, useEffect } from 'react';
import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SITE_CONFIG } from '../../data/config';
import { useAppointment } from '../../context/AppointmentContext';

const FloatingButtons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { openAppointment } = useAppointment();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappNumber = SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '');

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        alignItems: 'center',
      }}
    >
      {/* Scroll to Top */}
      <Zoom in={showTopBtn}>
        <Tooltip title="Back to Top" placement="left">
          <Fab
            size="small"
            onClick={scrollToTop}
            sx={{
              background: '#0A2540',
              color: '#fff',
              '&:hover': { background: '#2563EB' },
              boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </Zoom>

      {/* Book Appointment */}
      <Tooltip title="Book Appointment" placement="left">
        <Fab
          size="medium"
          onClick={openAppointment}
          sx={{
            background: 'linear-gradient(135deg, #2563EB, #10B981)',
            color: '#fff',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 8px 25px rgba(37,99,235,0.5)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CalendarMonthIcon />
        </Fab>
      </Tooltip>

      {/* Direct Call */}
      <Tooltip title="Call Doctor Now" placement="left">
        <Fab
          size="medium"
          component="a"
          href={`tel:${SITE_CONFIG.phone}`}
          sx={{
            background: '#2563EB',
            color: '#fff',
            '&:hover': {
              background: '#1d4ed8',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <PhoneIcon />
        </Fab>
      </Tooltip>

      {/* WhatsApp Chat */}
      <Tooltip title="Chat on WhatsApp" placement="left">
        <Fab
          size="large"
          component="a"
          href={`https://wa.me/${whatsappNumber}?text=Hello%20UB%20Eye%20Care,%20I%20would%20like%20to%20inquire%20about%20Artificial%20Eye%20consultation.`}
          target="_blank"
          rel="noreferrer"
          sx={{
            background: '#25D366',
            color: '#fff',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              background: '#1eb956',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default FloatingButtons;
