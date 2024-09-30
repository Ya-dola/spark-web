import { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TransitionsProps {
  children: ReactNode;
  transition?: string;
  delay?: number;
}

function Transitions({
  children,
  transition = 'fade-up',
  delay = 5000,
}: TransitionsProps) {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      data-aos={transition}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
}

export default Transitions;
