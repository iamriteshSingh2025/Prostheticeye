
import { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Typography, Drawer,
  List, ListItem, ListItemText, useScrollTrigger, useMediaQuery,
  useTheme, Divider, Tooltip, Menu, MenuItem, Container, Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import { SITE_CONFIG } from '../../data/config';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Doctor', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Custom Artificial Eye', path: '/services/artificial-eye' },
      { label: 'Speciality Contact Lens', path: '/services/speciality-contact-lens' },
      { label: 'Optical Services (U.B. Eye Care)', path: '/services/optical-services' },
      { label: 'Prosthetic Eye Care', path: '/services?tab=prosthetics' },
      { label: 'All Clinical Services', path: '/services' }
    ]
  },
  { label: 'Treatment Process', path: '/treatment' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Patient Stories', path: '/patient-stories' },
  { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();
  const { openAppointment } = useAppointment();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileServices, setMobileServices] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();
  const navigate = useNavigate();
  const isDark = mode === 'dark';

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40
  });

  const isActive = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const openMenu = (e, index) => {
    if (NAV_ITEMS[index].dropdown) {
      setAnchorEl(e.currentTarget);
      setActiveMenu(index);
    }
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setMobileServices(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0, left: 0, right: 0, width: '100%', maxWidth: '100vw',
        background: scrolled
          ? isDark ? 'rgba(3,9,20,.96)' : 'rgba(255,255,255,.96)'
          : isDark ? 'rgba(3,9,20,.7)' : 'rgba(10,37,64,.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${
          scrolled
            ? isDark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.06)'
            : 'rgba(255,255,255,.12)'
        }`,
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,.15)' : 'none',
        transition: 'all .3s ease',
        zIndex: 1100
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: '100%',
          px: { xs: 2, sm: 3, md: 3, lg: 2 }
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, sm: 70, md: 74, lg: 78 },
            py: { xs: .75, sm: 1 },
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1, sm: 1.5, lg: 1 }
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 1.2, md: 1.5 },
              textDecoration: 'none',
              flexShrink: 0,
              mr: { lg: 1, xl: 2 }
            }}
          >
            <Box
              sx={{
                width: { xs: 38, sm: 42, md: 46 },
                height: { xs: 38, sm: 42, md: 46 },
                borderRadius: { xs: '10px', sm: '12px', md: '14px' },
                background: 'linear-gradient(135deg,#2563EB,#10B981)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(37,99,235,.4)',
                '&:hover': { transform: 'scale(1.05) rotate(5deg)' },
                transition: 'transform .3s ease'
              }}
            >
              <RemoveRedEyeIcon
                sx={{ color: '#fff', fontSize: { xs: 21, sm: 23, md: 26 } }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display',serif",
                  fontWeight: 800,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.25rem', xl: '1.35rem' },
                  color: scrolled && !isDark ? '#0A2540' : '#fff',
                  lineHeight: 1,
                  letterSpacing: '-.3px',
                  whiteSpace: 'nowrap'
                }}
              >
                UB Eye Care
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '.5rem', sm: '.55rem', md: '.6rem' },
                  color: '#10B981',
                  letterSpacing: { xs: 1, sm: 1.2, md: 1.5 },
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  mt: .4,
                  whiteSpace: 'nowrap'
                }}
              >
                Artificial Eye Centre
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { lg: .05, xl: .3 },
                flex: 1,
                minWidth: 0
              }}
            >
              {NAV_ITEMS.map((item, index) => {
                const active = isActive(item.path);
                const hasDropdown = Boolean(item.dropdown);

                return (
                  <Box
                    key={item.label}
                    onMouseLeave={closeMenu}
                    sx={{ position: 'relative', flexShrink: 0 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      onMouseEnter={(e) => openMenu(e, index)}
                      endIcon={
                        hasDropdown
                          ? <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
                          : null
                      }
                      sx={{
                        color: scrolled && !isDark ? '#0A2540' : '#fff',
                        fontWeight: active ? 600 : 500,
                        fontSize: { lg: '.73rem', xl: '.82rem' },
                        px: { lg: .75, xl: 1.1 },
                        py: .9,
                        borderRadius: '30px',
                        textTransform: 'none',
                        whiteSpace: 'nowrap',
                        minWidth: 'auto',
                        background: active
                          ? 'rgba(37,99,235,.15)'
                          : 'transparent',
                        border: active
                          ? '1px solid rgba(37,99,235,.3)'
                          : '1px solid transparent',
                        '&:hover': {
                          background: 'rgba(37,99,235,.12)',
                          color: '#2563EB'
                        }
                      }}
                    >
                      {item.label}
                    </Button>

                    {hasDropdown && (
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && activeMenu === index}
                        onClose={closeMenu}
                        MenuListProps={{ onMouseLeave: closeMenu }}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            borderRadius: 3,
                            background: isDark
                              ? 'rgba(13,31,53,.97)'
                              : '#fff',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 20px 50px rgba(0,0,0,.25)',
                            border: `1px solid ${
                              isDark
                                ? 'rgba(255,255,255,.1)'
                                : 'rgba(0,0,0,.08)'
                            }`,
                            minWidth: 235
                          }
                        }}
                      >
                        {item.dropdown.map((sub) => (
                          <MenuItem
                            key={sub.label}
                            onClick={() => {
                              closeMenu();
                              navigate(sub.path);
                            }}
                            sx={{
                              py: 1.3,
                              px: 2.5,
                              fontSize: '.88rem',
                              fontFamily: "'Poppins',sans-serif",
                              color: isDark ? '#fff' : '#0A2540',
                              '&:hover': {
                                background:
                                  'linear-gradient(90deg,rgba(37,99,235,.15),transparent)',
                                color: '#2563EB',
                                pl: 3
                              }
                            }}
                          >
                            {sub.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* Actions */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: .3, sm: .7, md: .8 },
              flexShrink: 0
            }}
          >
            {!isMobile && (
              <>
                <Tooltip title="WhatsApp">
                  <IconButton
                    component="a"
                    href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      width: 38,
                      height: 38,
                      color: '#25D366',
                      background: 'rgba(37,211,102,.1)',
                      '&:hover': { background: '#25D366', color: '#fff' }
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Tooltip>
              </>
            )}

            {/* Theme */}
            <Tooltip title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <IconButton
                onClick={toggleMode}
                sx={{
                  width: { xs: 38, sm: 40 },
                  height: { xs: 38, sm: 40 },
                  color: scrolled && !isDark ? '#0A2540' : '#fff',
                  background: 'rgba(255,255,255,.08)',
                  '&:hover': { background: 'rgba(37,99,235,.2)' }
                }}
              >
                {isDark
                  ? <LightModeIcon sx={{ color: '#F59E0B', fontSize: 21 }} />
                  : <DarkModeIcon sx={{ fontSize: 21 }} />}
              </IconButton>
            </Tooltip>

            {/* Desktop Appointment */}
            {!isMobile && (
              <Button
                variant="contained"
                startIcon={<CalendarMonthIcon sx={{ fontSize: 18 }} />}
                onClick={openAppointment}
                sx={{
                  ml: .3,
                  background: 'linear-gradient(135deg,#2563EB,#10B981)',
                  borderRadius: '50px',
                  px: { lg: 1.3, xl: 2 },
                  py: 1.05,
                  fontSize: { lg: '.73rem', xl: '.82rem' },
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 6px 25px rgba(37,99,235,.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 35px rgba(37,99,235,.6)'
                  }
                }}
              >
                Book Appointment
              </Button>
            )}

            {/* Mobile / Tablet Menu */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  width: { xs: 42, sm: 44 },
                  height: { xs: 42, sm: 44 },
                  color: scrolled && !isDark ? '#0A2540' : '#fff',
                  background: 'rgba(255,255,255,.08)',
                  borderRadius: 2
                }}
              >
                <MenuIcon sx={{ fontSize: { xs: 26, sm: 28 } }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile / Tablet Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            width: { xs: '85vw', sm: 360, md: 400 },
            maxWidth: 420,
            background: isDark ? '#030914' : '#fff',
            color: isDark ? '#fff' : '#0A2540'
          }
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(135deg,#0A2540,#2563EB)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                background: 'linear-gradient(135deg,#2563EB,#10B981)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <RemoveRedEyeIcon sx={{ color: '#fff', fontSize: 26 }} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 800,
                  fontFamily: "'Playfair Display',serif",
                  fontSize: '1.1rem'
                }}
              >
                UB Eye Care
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,.7)',
                  fontSize: '.6rem',
                  letterSpacing: 1.5
                }}
              >
                ARTIFICIAL EYE CENTRE
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={closeDrawer} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Mobile Navigation */}
        <List sx={{ pt: 1.5, px: 1 }}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);

            if (item.dropdown) {
              return (
                <Box key={item.label}>
                  <ListItem
                    onClick={() => setMobileServices(!mobileServices)}
                    sx={{
                      px: 2,
                      py: 1.5,
                      borderRadius: 2,
                      color: isDark ? '#fff' : '#0A2540',
                      background: active
                        ? 'rgba(37,99,235,.1)'
                        : 'transparent',
                      borderLeft: active
                        ? '4px solid #2563EB'
                        : '4px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: active ? 600 : 500,
                        fontSize: '.95rem'
                      }}
                    />
                    <ExpandMoreIcon
                      sx={{
                        transform: mobileServices
                          ? 'rotate(180deg)'
                          : 'none',
                        transition: 'transform .25s'
                      }}
                    />
                  </ListItem>

                  <Collapse in={mobileServices} timeout="auto">
                    <Box
                      sx={{
                        ml: 2,
                        mr: 1,
                        mb: 1,
                        borderLeft: '2px solid rgba(37,99,235,.25)'
                      }}
                    >
                      {item.dropdown.map((sub) => (
                        <ListItem
                          key={sub.label}
                          component={Link}
                          to={sub.path}
                          onClick={closeDrawer}
                          sx={{
                            px: 2,
                            py: 1.15,
                            textDecoration: 'none',
                            color: isDark
                              ? 'rgba(255,255,255,.8)'
                              : 'rgba(10,37,64,.8)',
                            borderRadius: 1.5,
                            '&:hover': {
                              color: '#2563EB',
                              background: 'rgba(37,99,235,.08)'
                            }
                          }}
                        >
                          <ListItemText
                            primary={sub.label}
                            primaryTypographyProps={{
                              fontFamily: "'Poppins',sans-serif",
                              fontSize: '.86rem'
                            }}
                          />
                        </ListItem>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            return (
              <ListItem
                key={item.label}
                component={Link}
                to={item.path}
                onClick={closeDrawer}
                sx={{
                  px: 2,
                  py: 1.5,
                  textDecoration: 'none',
                  color: isDark ? '#fff' : '#0A2540',
                  background: active
                    ? 'rgba(37,99,235,.1)'
                    : 'transparent',
                  borderLeft: active
                    ? '4px solid #2563EB'
                    : '4px solid transparent',
                  borderRadius: 2
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: "'Poppins',sans-serif",
                    fontWeight: active ? 600 : 500,
                    fontSize: '.95rem'
                  }}
                />
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ my: 2, mx: 3 }} />

        {/* Mobile Contact */}
        <Box
          sx={{
            px: 3,
            pb: 2,
            display: 'flex',
            gap: 1.5
          }}
        >
          <Button
            component="a"
            href={`tel:${SITE_CONFIG.phone}`}
            fullWidth
            startIcon={<PhoneIcon />}
            sx={{
              borderRadius: 3,
              border: '1px solid rgba(37,99,235,.25)',
              color: isDark ? '#fff' : '#0A2540',
              py: 1.2
            }}
          >
            Call
          </Button>

          <Button
            component="a"
            href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            fullWidth
            startIcon={<WhatsAppIcon />}
            sx={{
              borderRadius: 3,
              border: '1px solid rgba(37,211,102,.25)',
              color: '#25D366',
              py: 1.2
            }}
          >
            WhatsApp
          </Button>
        </Box>

        {/* Mobile Appointment */}
        <Box sx={{ px: 3, pb: 4 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<CalendarMonthIcon />}
            onClick={() => {
              closeDrawer();
              openAppointment();
            }}
            sx={{
              background: 'linear-gradient(135deg,#2563EB,#10B981)',
              borderRadius: '50px',
              py: 1.5,
              fontWeight: 600,
              boxShadow: '0 8px 25px rgba(37,99,235,.3)'
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
