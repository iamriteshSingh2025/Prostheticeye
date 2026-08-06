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
      light: '#1a3a5c',
      dark: '#061828',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2563EB',
      light: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10B981',
      light: '#34d399',
      dark: '#059669',
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
    borderRadius: 12,
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
          background: 'linear-gradient(135deg, #0A2540 0%, #2563EB 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #061828 0%, #1d4ed8 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(37, 99, 235, 0.4)',
          },
          transition: 'all 0.3s ease',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
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
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(10, 37, 64, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 48px rgba(10, 37, 64, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          marginBottom: 12,
          boxShadow: '0 2px 12px rgba(10, 37, 64, 0.06)',
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
      dark: '#2563EB',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#10B981',
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10B981',
    },
    background: {
      default: '#050d1a',
      paper: '#0d1f35',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: commonTypography,
  shape: {
    borderRadius: 12,
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
          background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(37, 99, 235, 0.4)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'rgba(13, 31, 53, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 48px rgba(37, 99, 235, 0.2)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'rgba(13, 31, 53, 0.8)',
          backdropFilter: 'blur(20px)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          marginBottom: 12,
          background: 'rgba(13, 31, 53, 0.8)',
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
