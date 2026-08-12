import { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, MenuItem, Paper, Alert } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '../shared/SectionTitle';
import GlassCard from '../shared/GlassCard';
import { useThemeMode } from '../../context/ThemeContext';
import { useAppointment } from '../../context/AppointmentContext';
import drShashankImg from '../../assets/Shashank photo.jpeg';

const AppointmentSection = () => {
  const { mode } = useThemeMode();
  const { formData, updateFormData, resetForm } = useAppointment();
  const isDark = mode === 'dark';
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #061828 0%, #0A2540 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          subtitle="Priority Reservation"
          title="Book Your Consultation Today"
          description="Take the first step toward restoring your natural look. Reserve your appointment with Mr. Shashank Mishra."
          centered={true}
          light={true}
        />

        <GlassCard dark={true} hover={false} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 5 }}>
          {/* Doctor Info Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, p: 2, borderRadius: 3, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Box
              component="img"
              src={drShashankImg}
              alt="Mr. Shashank Mishra"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '2px solid #10B981',
                boxShadow: '0 4px 15px rgba(16,185,129,0.3)',
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff' }}>
                Consultation with Mr. Shashank Mishra
              </Typography>
              <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600, display: 'block' }}>
                Consultant Optometrist & Ocularist • M.Optom | B.Optom | FSCEH (Delhi) | Fellow – Silverline
              </Typography>
            </Box>
          </Box>
          {!submitted ? (
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
                    label="Preferred Date"
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
                    label="Brief Message / Medical Details"
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
                    {loading ? 'Submitting Request...' : 'Book Appointment Now'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box sx={{ py: 6, textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 72, color: '#10B981', mb: 2 }} />
              <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", color: '#fff', mb: 1 }}>
                Appointment Booking Received!
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500, mx: 'auto', mb: 4 }}>
                Our team will contact you shortly to confirm your consultation schedule with Dr. Shashank Mishra.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setSubmitted(false);
                  resetForm();
                }}
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', borderRadius: '50px', px: 4 }}
              >
                Book Another Appointment
              </Button>
            </Box>
          )}
        </GlassCard>
      </Container>
    </Box>
  );
};

export default AppointmentSection;
