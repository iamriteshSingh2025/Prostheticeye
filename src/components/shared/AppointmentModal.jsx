import { useState } from 'react';
import {
  Dialog, DialogContent, Box, Typography, TextField, Button,
  Grid, MenuItem, IconButton, Alert, Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAppointment } from '../../context/AppointmentContext';
import drShashankImg from '../../assets/Shashank photo.jpeg';

const AppointmentModal = () => {
  const { appointmentOpen, closeAppointment, formData, updateFormData, resetForm } = useAppointment();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    setSubmitted(false);
    resetForm();
    closeAppointment();
  };

  return (
    <Dialog
      open={appointmentOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: 'linear-gradient(135deg, #0A2540 0%, #0d1f35 100%)',
          color: '#fff',
          boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
          overflow: 'hidden',
        },
      }}
    >
      <Box sx={{ position: 'relative', p: { xs: 3, sm: 5 } }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'rgba(255,255,255,0.7)',
            '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)' },
          }}
        >
          <CloseIcon />
        </IconButton>

        {!submitted ? (
          <>
            <Box sx={{ mb: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src={drShashankImg}
                alt="Mr. Shashank Mishra"
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '3px solid #10B981',
                  boxShadow: '0 6px 20px rgba(16,185,129,0.35)',
                  mb: 1.5,
                }}
              />
              <Typography
                variant="overline"
                sx={{ color: '#10B981', fontWeight: 700, letterSpacing: 2 }}
              >
                Direct Consultation
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: '#fff',
                  mt: 0.5,
                  fontSize: { xs: '1.5rem', sm: '1.8rem' },
                }}
              >
                Book Appointment with Mr. Shashank Mishra
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 0.8, maxWidth: 520 }}>
                Consultant Optometrist & Ocularist • M.Optom | B.Optom | FSCEH (Delhi) | Fellow – Silverline
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Patient Full Name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    variant="outlined"
                    InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => updateFormData('mobile', e.target.value)}
                    variant="outlined"
                    InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                </Grid>

                <Grid size={{ xs: 6, sm: 4 }}>
                  <TextField
                    fullWidth
                    required
                    type="number"
                    label="Age"
                    value={formData.age}
                    onChange={(e) => updateFormData('age', e.target.value)}
                    variant="outlined"
                    InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                </Grid>

                <Grid size={{ xs: 6, sm: 4 }}>
                  <TextField
                    fullWidth
                    required
                    label="City / State"
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                    variant="outlined"
                    InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    required
                    type="date"
                    InputLabelProps={{ shrink: true, style: { color: 'rgba(255,255,255,0.7)' } }}
                    InputProps={{ style: { color: '#fff' } }}
                    value={formData.date}
                    onChange={(e) => updateFormData('date', e.target.value)}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    fullWidth
                    required
                    label="Preferred Time Slot"
                    value={formData.time || 'Morning (9 AM - 1 PM)'}
                    onChange={(e) => updateFormData('time', e.target.value)}
                    InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  >
                    <MenuItem value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</MenuItem>
                    <MenuItem value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</MenuItem>
                    <MenuItem value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={1}
                    label="Brief Message / Condition (Optional)"
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    fullWidth
                    disabled={loading}
                    variant="contained"
                    size="large"
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      py: 1.8,
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #2563EB, #10B981)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: '0 8px 30px rgba(37,99,235,0.4)',
                    }}
                  >
                    {loading ? 'Confirming Appointment...' : 'Confirm Appointment Request'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <Box sx={{ py: 6, textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 72, color: '#10B981', mb: 2 }} />
            <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", color: '#fff', mb: 1 }}>
              Appointment Requested!
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500, mx: 'auto', mb: 4 }}>
              Thank you, <strong>{formData.name}</strong>. Our medical coordinator will reach out to you at <strong>{formData.mobile}</strong> shortly to confirm your schedule with Mr. Shashank Mishra.
            </Typography>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', borderRadius: '50px', px: 4 }}
            >
              Close Window
            </Button>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default AppointmentModal;
