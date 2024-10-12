import { Image, Text, Card, MantineSize, Button, Space } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import NextImage from 'next/image';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { oswald } from '@/utils/font_utils';
import { colors } from '@/utils/color_utils';

interface ButtonCardProps {
  heading: string;
  description: string;
  href?: string;
  imageSrc?: string;
  height?: number;
  width?: number;
  radius?: string;
  bgColor?: string;
  textColor?: string;
  headingColor?: string;
  headingSize?: string;
  headingWeight?: number;
  textSize?: MantineSize;
  buttonColor?: string;
}

function ButtonCard({
  heading,
  description,
  href = '',
  imageSrc = '',
  height,
  width,
  radius = 'md',
  bgColor = colors.black1,
  textColor = '',
  headingColor = 'white',
  headingSize = 'h2',
  headingWeight = 900,
  textSize = 'sm',
  buttonColor = colors.black1,
}: ButtonCardProps) {
  // Set the card height, falling back to 400 if not provided
  const cardHeight = height ?? 200 * 2;
  // State to track whether the card is hovered
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Card
      h={cardHeight}
      w={width}
      bg={bgColor}
      padding={'sm'}
      component={Link} // Use Next.js Link component for navigation
      href={href} //url for the link
      radius={radius}
      withBorder // Include a border around the card
      style={{
        transform: isHovered && !isMobile ? 'scale(1.1) ' : 'scale(1)', // Scale card on hover
        transition: 'transform 0.3s ease', // Smooth transition for scaling
        zIndex: isHovered && !isMobile ? 1 : 'auto', // Ensure hovered card is on top
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => !isMobile && setIsHovered(false)} // Reset hover state on mouse leave
    >
      <Card.Section>
        {imageSrc ? (
          <Image
            component={NextImage} // Use Next.js Image component
            height={height}
            width={width}
            src={imageSrc} //Image url
            alt={'My image'}
            fit={'contain'} // Ensure the image fits within bounds
          />
        ) : null}
      </Card.Section>

      <Text
        c={headingColor}
        fw={headingWeight}
        fz={headingSize}
        px={'md'}
        mt={'md'}
        className={oswald.className}
      >
        {heading}
      </Text>
      <Text
        c={textColor}
        fw={700}
        size={textSize}
        mt={'md'}
        px={'md'}
      >
        {description}
      </Text>

      <Button
        color={buttonColor}
        radius={'xl'}
        //position bottom-right
        mt={'auto'}
        ml={'auto'}
      >
        <Text
          fw={900}
          fz={'sm'}
          c={colors.black1}
        >
          Learn More
        </Text>
      </Button>
    </Card>
  );
}

export default ButtonCard;
