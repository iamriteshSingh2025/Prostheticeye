import { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Typography, Drawer,
  List, ListItem, ListItemText, useScrollTrigger, useMediaQuery, useTheme,
  Divider, Tooltip, Menu, MenuItem, Chip, Container
} from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import { SITE_CONFIG } from '../../data/config';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'About Doctor',
    path: '/about',
  },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Custom Artificial Eye', path: '/services/artificial-eye' },
      { label: 'Ocular Prosthesis', path: '/services' },
      { label: 'Scleral Shell Prosthetics', path: '/services' },
      { label: 'Orbital & Facial Prosthesis', path: '/services' },
      { label: 'All 12 Specializations', path: '/services' },
    ],
  },
  { label: 'Treatment Process', path: '/treatment' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Patient Stories', path: '/patient-stories' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();
  const { openAppointment } = useAppointment();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();
  const navigate = useNavigate();

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  const isDark = mode === 'dark';

  const handleOpenMenu = (event, index) => {
    if (NAV_ITEMS[index].dropdown) {
      setAnchorEl(event.currentTarget);
      setActiveMenuIndex(index);
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenuIndex(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        background: scrolled
          ? isDark
            ? 'rgba(3, 9, 20, 0.92)'
            : 'rgba(255, 255, 255, 0.95)'
          : isDark
          ? 'rgba(3, 9, 20, 0.6)'
          : 'rgba(10, 37, 64, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${
          scrolled
            ? isDark
              ? 'rgba(255,255,255,0.08)'
              : 'rgba(0,0,0,0.06)'
            : 'rgba(255,255,255,0.12)'
        }`,
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1, minHeight: { xs: 70, lg: 80 } }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              mr: { lg: 4 },
              flexGrow: { xs: 1, lg: 0 },
            }}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05) rotate(5deg)' },
              }}
            >
              <RemoveRedEyeIcon sx={{ color: '#fff', fontSize: 26 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: { xs: '1.2rem', lg: '1.35rem' },
                  color: scrolled && !isDark ? '#0A2540' : '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-0.3px',
                }}
              >
                UB Eye Care
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.62rem',
                  color: '#10B981',
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  mt: 0.4,
                }}
              >
                Artificial Eye Centre
              </Typography>
            </Box>
          </Box>

          {/* Desktop Links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mx: 'auto' }}>
              {NAV_ITEMS.map((item, index) => {
                const isActive = location.pathname === item.path;
                const hasDropdown = Boolean(item.dropdown);

                return (
                  <Box key={item.label} onMouseLeave={handleCloseMenu}>
                    <Button
                      component={Link}
                      to={item.path}
                      onMouseEnter={(e) => handleOpenMenu(e, index)}
                      endIcon={hasDropdown ? <KeyboardArrowDownIcon sx={{ fontSize: 16 }} /> : null}
                      sx={{
                        color: scrolled && !isDark ? '#0A2540' : '#ffffff',
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '0.88rem',
                        px: 1.8,
                        py: 1,
                        borderRadius: '30px',
                        textTransform: 'none',
                        position: 'relative',
                        background: isActive ? 'rgba(37, 99, 235, 0.15)' : 'transparent',
                        border: isActive ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid transparent',
                        '&:hover': {
                          background: 'rgba(37, 99, 235, 0.12)',
                          color: '#2563EB',
                        },
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {item.label}
                    </Button>

                    {hasDropdown && (
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && activeMenuIndex === index}
                        onClose={handleCloseMenu}
                        MenuListProps={{ onMouseLeave: handleCloseMenu }}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            borderRadius: 3,
                            background: isDark ? 'rgba(13, 31, 53, 0.95)' : '#ffffff',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                            minWidth: 220,
                            overflow: 'hidden',
                          },
                        }}
                      >
                        {item.dropdown.map((subItem) => (
                          <MenuItem
                            key={subItem.label}
                            onClick={() => {
                              handleCloseMenu();
                              navigate(subItem.path);
                            }}
                            sx={{
                              py: 1.3,
                              px: 2.5,
                              fontSize: '0.88rem',
                              fontFamily: "'Poppins', sans-serif",
                              color: isDark ? '#ffffff' : '#0A2540',
                              '&:hover': {
                                background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.15), transparent)',
                                color: '#2563EB',
                                pl: 3,
                              },
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* Quick Actions (Call, WhatsApp, DarkMode, Appointment) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {!isMobile && (
              <>
                <IconButton
                  component="a"
                  href={`tel:${SITE_CONFIG.phone}`}
                  sx={{
                    color: scrolled && !isDark ? '#0A2540' : '#ffffff',
                    background: 'rgba(255,255,255,0.08)',
                    '&:hover': { background: '#2563EB', color: '#fff' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 20 }} />
                </IconButton>

                <IconButton
                  component="a"
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    color: '#25D366',
                    background: 'rgba(37, 211, 102, 0.1)',
                    '&:hover': { background: '#25D366', color: '#fff' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </>
            )}

            <Tooltip title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <IconButton
                onClick={toggleMode}
                sx={{
                  color: scrolled && !isDark ? '#0A2540' : '#ffffff',
                  background: 'rgba(255,255,255,0.08)',
                  '&:hover': { background: 'rgba(37, 99, 235, 0.2)' },
                }}
              >
                {isDark ? <LightModeIcon sx={{ color: '#F59E0B' }} /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            {!isMobile && (
              <Button
                variant="contained"
                startIcon={<CalendarMonthIcon />}
                onClick={openAppointment}
                sx={{
                  ml: 0.5,
                  background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
                  borderRadius: '50px',
                  px: 3,
                  py: 1.1,
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  boxShadow: '0 6px 25px rgba(37, 99, 235, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 35px rgba(37, 99, 235, 0.6)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Book Appointment
              </Button>
            )}

            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: scrolled && !isDark ? '#0A2540' : '#ffffff' }}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            background: isDark ? '#030914' : '#ffffff',
            color: isDark ? '#ffffff' : '#0A2540',
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #0A2540, #2563EB)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <RemoveRedEyeIcon sx={{ color: '#10B981', fontSize: 28 }} />
            <Box>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>
                UB Eye Care
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.62rem', letterSpacing: 1.5 }}>
                ARTIFICIAL EYE CENTRE
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 2 }}>
          {NAV_ITEMS.map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                px: 3,
                py: 1.5,
                textDecoration: 'none',
                color: isDark ? '#fff' : '#0A2540',
                background: location.pathname === item.path ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                borderLeft: location.pathname === item.path ? '4px solid #2563EB' : '4px solid transparent',
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: '0.95rem',
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2, mx: 3 }} />

        <Box sx={{ px: 3, pb: 4 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<CalendarMonthIcon />}
            onClick={() => {
              setDrawerOpen(false);
              openAppointment();
            }}
            sx={{
              background: 'linear-gradient(135deg, #2563EB, #10B981)',
              borderRadius: '50px',
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Book Appointment
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
