import {
  Image,
  Text,
  MantineSize,
  Center,
  Paper,
  Box,
  Space,
  Divider,
} from '@mantine/core';
import React, { ReactNode, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import CustomImage from '../custom_image/custom_image';
import classes from '@/styles/carousel.module.css';
// import theme from './skeleton_card.module.css';

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
  imageScr?: Array<{
    primary: string; // URL of the primary image
    secondary?: string;
  }>;
  primaryImage?: string;
  secondaryImage?: string;
  onSlideChange?: (index: number) => void;
}

function CarouselCard({
  text,
  overlayText = '',
  height = 200,
  imageScr = [],
  carouselHeight = 200,
  slideSize = '100%',
  primaryImage = '',
  secondaryImage = '',
  onSlideChange,
}: CarouselCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  // const handleSlideChange = (index: number) => {
  //   setActiveIndex(index); // Update the active index when the slide changes
  // };
  return (
    <Paper
      h={'100%'}
      w={'100%'}
      bg={'#262626'}
      p={'sm'}
      radius={'md'}
      withBorder
    >
      <Carousel
        height={carouselHeight}
        slideSize={{ base: '100%', sm: '100%', md: slideSize }}
        slideGap={{ base: 0, sm: 'lg' }}
        loop
        align='center'
        draggable={true}
        withIndicators
        slidesToScroll={1}
        onSlideChange={onSlideChange}
        classNames={classes}
      >
        {imageScr.map((image, index) => (
          <Carousel.Slide key={index}>
            <div
              style={{
                transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
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
                c={'#751fd6'}
              >
                {text.heading}
              </Text>
              <Space h={'lg'} />
              <Text
                fz={'md'}
                fw={600}
                c={'#CACACA'}
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
