import { Text, MantineSize, Center } from '@mantine/core';
import { ReactNode } from 'react';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import CustomImage from '../custom_image/custom_image';

// import theme from './skeleton_card.module.css';

interface CarouselCardProps {
  text?: string;
  width?: number;
  height?: number;
  carouselHeight?: number;
  children?: ReactNode;
  imageScr?: string[];
}

/**
 * TabSection Component
 *
 * This component renders a card with customizable background color, text color, size, and other styles.
 * It uses Mantine's Paper component for the card and Center for centering the text.
 *
 * @param {string} text - The text to display inside the card.
 * @param {string} [bgColor='purple'] - Background color of the card.
 * @param {string} [textColor='white'] - Color of the text inside the card.
 * @param {string} [radius='md'] - Border radius of the card.
 * @param {number} [width] - Width of the card in pixels.
 * @param {number} [height] - Height of the card in pixels.
 * @param {string} [textSize='md'] - Font size of the text.
 * @param {number} [textWeight=500] - Font weight of the text.
 *
 * @example
 * <TabSection text="Loading..."/>
 */
function CarouselCard({
  text = '',
  width = 300,
  height = 300,
  children,
  imageScr = [],
  carouselHeight = 200,
}: CarouselCardProps) {
  return (
    <>
      <Carousel
        height={carouselHeight}
        loop
        align='start'
        draggable={true}
        withIndicators
      >
        {imageScr.map((image, index) => (
          <Carousel.Slide key={index}>
            <CustomImage
              imageSrc={image}
              width={width}
              height={height}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Center px={'xl'}>
        <Text> {text} </Text>
      </Center>
    </>
  );
}

export default CarouselCard;
