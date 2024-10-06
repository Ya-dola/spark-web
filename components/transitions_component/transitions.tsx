'use client';

import { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Flex } from '@mantine/core';

interface TransitionsProps {
  children: ReactNode;
  transition?: string;
  delay?: number;
  duration?: number;
  width?: string | number;
  runOnce?: boolean;
}

function Transitions({
  children,
  transition = 'fade-up',
  delay = 5000,
  duration = 1000,
  width,
  runOnce,
}: TransitionsProps) {
  useEffect(() => {
    AOS.init({
      once: runOnce,
      duration: duration,
      easing: 'ease-out-cubic',
    });
  }, [duration, runOnce]);

  return (
    <Flex
      key={null}
      w={width}
      direction={'column'}
      justify={'center'}
      align={'center'}
      data-aos={transition}
      data-aos-delay={delay}
    >
      {children}
    </Flex>
  );
}

export default Transitions;
