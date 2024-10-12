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
  // Initialize AOS (Animate On Scroll) effect on component mount or when dependencies change
  useEffect(() => {
    AOS.init({
      once: runOnce, //Animations should only happen once
      duration: duration, // Duration of the animation in milliseconds
      easing: 'ease-out-cubic', // Easing function for the animation
    });
  }, [duration, runOnce]); // Re-run the effect if duration or runOnce props change

  return (
    <Flex
      key={null}
      w={width}
      direction={'column'}
      justify={'center'}
      align={'center'}
      data-aos={transition} // Set the AOS transition type from props
      data-aos-delay={delay} // Set the delay for the AOS animation
    >
      {children}
    </Flex>
  );
}

export default Transitions;
