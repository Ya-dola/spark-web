import { Image, Text, Card, MantineSize, Button, Space } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import NextImage from 'next/image';
import { useIsMobile } from '@/utils/breakpoint_utils';

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
  bgColor = 'purple',
  textColor = 'white',
  headingColor = 'white',
  headingSize = 'h3',
  headingWeight = 900,
  textSize = 'sm',
  buttonColor = '#262626',
}: ButtonCardProps) {
  const cardHeight = height ?? 200 * 2;
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Card
      h={cardHeight}
      w={width}
      bg={bgColor}
      padding={'sm'}
      component={Link}
      href={href}
      radius={radius}
      withBorder
      style={{
        transform: isHovered && !isMobile ? 'scale(1.1) ' : 'scale(1)', // Scale card on hover
        transition: 'transform 0.3s ease',
        zIndex: isHovered && !isMobile ? 1 : 'auto', // Ensure hovered card is on top
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <Card.Section>
        <Image
          component={NextImage}
          height={height}
          width={width}
          src={imageSrc}
          alt={'My image'}
          fit={'contain'}
        />
      </Card.Section>

      <Text
        c={headingColor}
        fw={headingWeight}
        fz={headingSize}
        px={'md'}
        mt={'md'}
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
        mt={'auto'}
        ml={'auto'}
      >
        <Text
          /*td={'underline'}*/ fw={900}
          fz={'sm'}
          c={'#262626'}
        >
          Learn More
        </Text>
      </Button>
    </Card>
  );
}

export default ButtonCard;
