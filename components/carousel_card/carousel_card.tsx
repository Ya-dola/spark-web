import { Image, Text, Paper, Box, Space } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import theme from '@/components/carousel_card/carousel_card.module.css';

interface CarouselCardProps {
  text?: {
    description?: string;
    heading?: string;
    names?: string;
  };
  overlayText?: string;
  width?: number;
  height?: number;
  carouselHeight?: number;
  slideSize?: string;
  imageSrc?: Array<{
    primary: string; // URL of the primary image
    secondary?: string;
  }>;
  primaryImage?: string;
  secondaryImage?: string;
  headingColor?: string;
  descriptionColor?: string;
  autoPlayDelay?: number;
  onSlideChange?: (index: number) => void;
}

function CarouselCard({
  text,
  overlayText = '',
  height = 200,
  imageSrc = [],
  carouselHeight = 200,
  slideSize = '33.333333%',
  primaryImage = '',
  secondaryImage = '',
  headingColor = 'white',
  descriptionColor = '#cacaca',
  autoPlayDelay = 3000,
  onSlideChange,
}: CarouselCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };
  const autoplay = useRef(Autoplay({ delay: autoPlayDelay }));

  return (
    <Paper
      h={'100%'}
      w={'100%'}
      bg={'#262626'}
      p={'sm'}
      radius={'md'}
    >
      <Carousel
        height={carouselHeight}
        slideSize={{ base: '100%', sm: '100%', md: slideSize }}
        slideGap={{ base: 0, sm: 'lg' }}
        loop
        align='center'
        draggable={true}
        withIndicators
        withControls
        slidesToScroll={1}
        onSlideChange={handleSlideChange}
        classNames={theme}
        style={{
          '--active-color': headingColor,
        }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {imageSrc.map((image, index) => (
          <Carousel.Slide key={index}>
            <div
              style={{
                transform: activeIndex === index ? 'scale(1.1)' : 'scale(0.8)',
                transition: 'transform 0.3s ease',
                zIndex: activeIndex === index ? 1 : 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ flex: 1, position: 'relative' }}>
                <Image
                  src={image.primary}
                  alt={primaryImage}
                  h={height}
                  fit={'cover'}
                />
              </div>

              {image.secondary && (
                <div style={{ flex: 1, position: 'relative' }}>
                  <Image
                    src={image.secondary}
                    alt={secondaryImage}
                    h={height}
                    fit={'cover'}
                  />
                </div>
              )}

              {overlayText && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0, // Center vertically
                    left: '50%', // Center horizontally
                    right: 0,
                    bottom: 0,

                    color: 'white', // Change as per your needs
                    display: 'flex',
                    textAlign: 'center', // Center text
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                >
                  {overlayText}
                </div>
              )}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Box
        px={'xl'}
        py={'md'}
      >
        {text && (
          <div
            style={{
              display: 'block',
            }}
          >
            <>
              <Text
                fz={'h3'}
                fw={900}
                c={headingColor}
              >
                {text.heading}
              </Text>

              <Space h={'lg'} />

              <Text
                fz={'md'}
                fw={600}
                c={descriptionColor}
              >
                {text.description}
              </Text>
              <Space h={'lg'} />

              <Text>{text.names}</Text>
            </>
          </div>
        )}
      </Box>
    </Paper>
  );
}

export default CarouselCard;
