import { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext();

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) throw new Error('useAppointment must be used within AppointmentProvider');
  return context;
};

export const AppointmentProvider = ({ children }) => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    city: '',
    date: '',
    time: '',
    message: '',
  });

  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '', mobile: '', age: '', city: '', date: '', time: '', message: '',
    });
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointmentOpen,
        openAppointment,
        closeAppointment,
        formData,
        updateFormData,
        resetForm,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
