import {
  Image,
  Text,
  Card,
  MantineSize,
  Button,
  Space,
  Flex,
  Paper,
} from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import NextImage from 'next/image';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { oswald } from '@/utils/font_utils';
import { colors } from '@/utils/color_utils';

interface InfoCardProps {
  width?: string;
  href?: string;
  target?: string;
  heading: string;
  description: string;
  text?: string;
  imageSrc?: string;
  altText?: string;
  radius?: string;
  bgColor?: string;
  textColor?: string;
  headingColor?: string;
  headingSize?: string;
  headingWeight?: number;
  textSize?: MantineSize;
  buttonColor?: string;
  buttonTextColor?: string;
}

function InfoCard({
  width,
  heading,
  description,
  text,
  href = '',
  target = '',
  imageSrc = '',
  altText = '',
  radius = 'md',
  bgColor = colors.black1,
  textColor = '',
  headingColor = 'white',
  headingSize = 'h2',
  headingWeight = 900,
  textSize = 'sm',
  buttonColor = colors.black1,
  buttonTextColor = colors.blue1,
}: InfoCardProps) {
  // State to track whether the card is hovered
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useIsMobile();

  return (
    <Card
      w={width}
      radius={'md'}
      bg={bgColor}
      padding={'xl'}
      component={'a'}
      href={href}
      target={target}
      style={{
        transform:
          // Scale card on hover
          isHovered && !isMobile ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        // Ensure hovered card is on top
        zIndex: isHovered && !isMobile ? 1 : 'auto',
      }}
      // Set hover state when the mouse enters the card
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      // Reset hover state when the mouse leaves the card
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <Text
        fw={700}
        fz={'h1'}
        c={headingColor}
        className={oswald.className}
      >
        {heading}
      </Text>
      <Text
        py={'md'}
        // c={'white'}
        fw={600}
        fz={'h4'}
        lh={1.3}
      >
        {description}
      </Text>

      <Flex
        h={'100%'}
        justify={'center'}
        align={'center'}
        mt={'auto'}
        gap={'md'}
      >
        <Image
          h={'5rem'}
          src={imageSrc}
          alt={altText}
        />
        <Text
          c={textColor}
          size={'md'}
          fw={500}
          fz={'h5'}
        >
          {text}
        </Text>
      </Flex>
      {/* Learn More Button */}
      <Paper
        w={'auto'}
        h={'auto'}
        py={'xs'}
        px={'md'}
        bg={buttonColor}
        radius={'xl'}
        mt={'auto'}
        ml={'auto'}
      >
        <Text
          fw={900}
          fz={'sm'}
          c={buttonTextColor}
        >
          Learn More
        </Text>
      </Paper>
    </Card>
  );
}
export default InfoCard;
