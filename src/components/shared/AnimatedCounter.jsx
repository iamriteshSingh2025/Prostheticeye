import { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  sx = {},
  ...props
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const start = 0;
      const end = value;
      const totalSteps = 60;
      const stepDuration = duration / totalSteps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / totalSteps;
        // Ease-out easing
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(start + (end - start) * easedProgress);
        setCount(currentCount);

        if (step >= totalSteps) {
          clearInterval(timer);
          setCount(end);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <Typography ref={ref} sx={sx} {...props}>
      {prefix}{count.toLocaleString()}{suffix}
    </Typography>
  );
};

export default AnimatedCounter;
