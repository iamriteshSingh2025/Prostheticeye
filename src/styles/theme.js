import { createTheme } from '@mui/material/styles';

const commonTypography = {
  fontFamily: "'Poppins', sans-serif",
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
  },
  h2: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
  },
  h3: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600,
  },
  h4: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
  },
  h5: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
  },
  h6: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A2540',
      light: '#1e3a8a',
      dark: '#030d1a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2563EB',
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    success: {
      main: '#0D9488',
      light: '#14b8a6',
      dark: '#0f766e',
    },
    warning: {
      main: '#D97706',
      light: '#f59e0b',
      dark: '#b45309',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0A2540',
      secondary: '#475569',
    },
    divider: 'rgba(10, 37, 64, 0.08)',
  },
  typography: commonTypography,
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          borderRadius: 50,
          padding: '12px 32px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0A2540 0%, #1D4ED8 100%)',
          boxShadow: '0 6px 20px rgba(10, 37, 64, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #061828 0%, #1e40af 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px rgba(29, 78, 216, 0.4)',
          },
          transition: 'all 0.3s ease',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
          boxShadow: '0 6px 20px rgba(37, 99, 235, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #0f766e 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px rgba(13, 148, 136, 0.4)',
          },
          transition: 'all 0.3s ease',
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 6px 28px rgba(10, 37, 64, 0.07)',
          border: '1px solid rgba(10, 37, 64, 0.05)',
          transition: 'all 0.35s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 18px 48px rgba(10, 37, 64, 0.14)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '14px !important',
          marginBottom: 14,
          boxShadow: '0 2px 14px rgba(10, 37, 64, 0.05)',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            fontFamily: "'Poppins', sans-serif",
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0D9488',
      light: '#2dd4bf',
      dark: '#0f766e',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10B981',
    },
    warning: {
      main: '#F59E0B',
    },
    background: {
      default: '#030914',
      paper: '#0a192f',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: commonTypography,
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          borderRadius: 50,
          padding: '12px 32px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
          boxShadow: '0 6px 20px rgba(37, 99, 235, 0.35)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px rgba(37, 99, 235, 0.5)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          background: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.09)',
          transition: 'all 0.35s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 18px 48px rgba(37, 99, 235, 0.22)',
            border: '1px solid rgba(37, 99, 235, 0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          background: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(20px)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '14px !important',
          marginBottom: 14,
          background: 'rgba(10, 25, 47, 0.85)',
          border: '1px solid rgba(255,255,255,0.06)',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            fontFamily: "'Poppins', sans-serif",
            background: 'rgba(255,255,255,0.03)',
          },
        },
      },
    },
  },
});
