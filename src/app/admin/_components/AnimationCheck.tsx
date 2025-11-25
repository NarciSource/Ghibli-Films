import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';

export default function AnimationCheck({
  trigger,
  duration = 2000,
}: {
  trigger: boolean;
  duration?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setVisible(true);

    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [trigger, duration]);

  if (!visible) return null;

  return (
    <Box
      data-state='open'
      _open={{
        animationName: 'fade-in, scale-in, fade-out, scale-out',
        animationDuration: `${duration}ms`,
      }}
    >
      <FaCheck color='green' size={24} />
    </Box>
  );
}
