import { useState } from 'react';
import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionTitle from '../shared/SectionTitle';
import { FAQS } from '../../data/faqs';
import { useThemeMode } from '../../context/ThemeContext';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark ? '#061426' : '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          subtitle="Frequently Asked Questions"
          title="Got Questions? We Have Answers" 
          description="Everything you need to know about custom artificial eyes, fitting procedure, cost, and maintenance."
          centered={true}
        />

        <Box sx={{ mt: 4 }}>
          {FAQS.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === `panel${faq.id}`}
              onChange={handleChange(`panel${faq.id}`)}
              sx={{
                mb: 2,
                borderRadius: '16px !important',
                background: isDark ? 'rgba(13, 31, 53, 0.8)' : '#FFFFFF',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,37,64,0.08)'}`,
                boxShadow: expanded === `panel${faq.id}` ? '0 10px 30px rgba(37,99,235,0.15)' : 'none',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#2563EB' }} />}
                sx={{ px: 3, py: 1 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: isDark ? '#fff' : theme.palette.text.primary,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: isDark ? 'rgba(255,255,255,0.75)' : 'text.secondary',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
