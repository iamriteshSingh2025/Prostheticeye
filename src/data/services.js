import VisibilityIcon from '@mui/icons-material/Visibility';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FaceIcon from '@mui/icons-material/Face';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const SERVICES = [
  {
    id: 1,
    title: 'Custom Artificial Eye',
    description: 'Handcrafted, custom-made artificial eyes designed to perfectly match your natural eye color, size, and shape for a seamless, natural appearance.',
    icon: 'visibility',
    color: '#2563EB',
    category: 'primary',
    slug: 'custom-artificial-eye',
    features: ['Color Matched', 'Custom Fitted', 'Natural Look', 'Comfortable'],
  },
  {
    id: 2,
    title: 'Ocular Prosthesis',
    description: 'Precision-crafted ocular prostheses that restore the natural appearance of the eye, improving confidence and quality of life.',
    icon: 'medical_services',
    color: '#10B981',
    category: 'primary',
    slug: 'ocular-prosthesis',
    features: ['FDA Approved Materials', 'Bio-compatible', 'Long-lasting', 'Comfortable'],
  },
  {
    id: 3,
    title: 'Scleral Shell',
    description: 'Ultra-thin scleral shell prosthetics designed to fit over a disfigured or shrunken eye, providing a natural cosmetic appearance.',
    icon: 'lens',
    color: '#7C3AED',
    category: 'primary',
    slug: 'scleral-shell',
    features: ['Ultra-thin Design', 'Custom Fit', 'Comfortable Wear', 'Natural Look'],
  },
  {
    id: 4,
    title: 'Orbital Prosthesis',
    description: 'Comprehensive orbital prostheses for patients who have undergone orbital exenteration, restoring facial symmetry and aesthetics.',
    icon: 'face',
    color: '#DC2626',
    category: 'advanced',
    slug: 'orbital-prosthesis',
    features: ['Facial Symmetry', 'Custom Made', 'Skin-Tone Matched', 'Lightweight'],
  },
  {
    id: 5,
    title: 'Artificial Ear Prosthesis',
    description: 'Lifelike artificial ear prostheses crafted from medical-grade silicone, matched to your skin tone for a natural appearance.',
    icon: 'hearing',
    color: '#F59E0B',
    category: 'maxillofacial',
    slug: 'artificial-ear',
    features: ['Silicone Material', 'Skin Matched', 'Waterproof', 'Durable'],
  },
  {
    id: 6,
    title: 'Artificial Nose Prosthesis',
    description: 'Custom-fabricated nasal prostheses that restore facial aesthetics and function for patients with nasal defects.',
    icon: 'face_retouching_natural',
    color: '#EC4899',
    category: 'maxillofacial',
    slug: 'artificial-nose',
    features: ['Custom Shaped', 'Color Matched', 'Lightweight', 'Secure Fit'],
  },
  {
    id: 7,
    title: 'Artificial Finger Prosthesis',
    description: 'Functional and aesthetic finger prostheses for patients with amputated or missing fingers, restoring both appearance and function.',
    icon: 'front_hand',
    color: '#0891B2',
    category: 'maxillofacial',
    slug: 'artificial-finger',
    features: ['Functional Design', 'Natural Look', 'Custom Fit', 'Durable'],
  },
  {
    id: 8,
    title: 'Conformer Therapy',
    description: 'Post-operative conformers to maintain the shape of the eye socket and prepare it for prosthetic fitting after enucleation.',
    icon: 'healing',
    color: '#16A34A',
    category: 'therapy',
    slug: 'conformer-therapy',
    features: ['Post-Operative', 'Socket Maintenance', 'Gradual Expansion', 'Comfortable'],
  },
  {
    id: 9,
    title: 'Eye Socket Consultation',
    description: 'Comprehensive evaluation and consultation for eye socket health, prosthetic suitability, and treatment planning.',
    icon: 'local_hospital',
    color: '#9333EA',
    category: 'consultation',
    slug: 'eye-socket-consultation',
    features: ['Expert Evaluation', 'Treatment Planning', 'Personalized Care', 'Follow-up'],
  },
  {
    id: 10,
    title: 'Artificial Eye Polishing',
    description: 'Professional cleaning and polishing of artificial eyes to restore clarity, remove deposits, and maintain optimal comfort.',
    icon: 'cleaning_services',
    color: '#EA580C',
    category: 'maintenance',
    slug: 'eye-polishing',
    features: ['Professional Grade', 'Safe Cleaning', 'Restore Clarity', 'Quick Service'],
  },
  {
    id: 11,
    title: 'Annual Maintenance',
    description: 'Comprehensive annual check-up and maintenance program ensuring your prosthesis remains in perfect condition.',
    icon: 'event_available',
    color: '#B45309',
    category: 'maintenance',
    slug: 'annual-maintenance',
    features: ['Annual Check-up', 'Cleaning', 'Adjustment', 'Health Assessment'],
  },
  {
    id: 12,
    title: 'Follow-up Care',
    description: 'Dedicated follow-up care program to monitor prosthetic performance, socket health, and patient comfort over time.',
    icon: 'support_agent',
    color: '#0E7490',
    category: 'care',
    slug: 'follow-up-care',
    features: ['Regular Check-ups', 'Adjustments', '24/7 Support', 'Patient Education'],
  },
];

export const SERVICE_CATEGORIES = ['All', 'Primary', 'Advanced', 'Maxillofacial', 'Therapy', 'Maintenance'];
