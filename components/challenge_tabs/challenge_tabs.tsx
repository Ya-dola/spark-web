import {
  Box,
  Center,
  Paper,
  Text,
  MantineSize,
  Divider,
  Avatar,
  Flex,
  Group,
  Space,
} from '@mantine/core';
import React, { useState } from 'react';
import CustomImage from '../custom_image/custom_image';
import { useIsMobile } from '@/utils/breakpoint_utils';
// import theme from './skeleton_card.module.css';

interface ChallengeTabsProps {
  text?: string;
  textColor?: string; // Text color, defaults to 'white'
  textSize?: string; // Font size of the text, defaults to 'md'
  textWeight?: number; // Font weight of the text, defaults to 500

  icon?: string;
  heading?: string;
  headingSize?: MantineSize;
  headingWeight?: number;
  description?: string;
  images?: string[];
  names?: string[];
  showIcon?: boolean;
  children?: React.ReactNode;
}

/**
 * ChallengeTabs Component
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
 * <ChallengeTabs text="Loading..."/>
 */
function ChallengeTabs({
  text = '',

  textColor = 'white',
  textSize = 'md',
  textWeight = 300,
  heading = 'TEAM NAME',
  headingSize = 'xl',
  headingWeight = 700,
  description = '',
  icon = '',
  images = [],
  names = [],
  showIcon = false,
  children,
}: ChallengeTabsProps) {
  const isMobile = useIsMobile();
  return (
    <>
      {children}
      <Flex
        direction={'row'}
        justify={'flex-start'}
        align={'center'}
        gap={'md'}
        p={'md'}
      >
        {showIcon && (
          <Avatar
            variant='filled'
            radius='xs'
            color='grape'
            src={icon}
          />
        )}
        <Flex
          direction={'column'}
          justify={'flex-start'}
          align={'flex-start'}
        >
          <Text
            c={'yellow'}
            fw={headingWeight}
            fz={headingSize}
          >
            {text}
          </Text>
          <Text
            c={textColor}
            fw={headingWeight}
            fz={headingSize}
          >
            {heading}
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Divider my='lg' />

        <Box
          p={'lg'}
          maw={'100%'}
        >
          <Text
            c={textColor}
            fz={textSize}
            fw={textWeight}
          >
            {description}
          </Text>

          <Flex
            direction={isMobile ? 'column' : 'row'}
            justify={'center'}
            align={'center'}
            gap={'md'}
            p={'md'}
          >
            {images.map((image, index) => (
              <CustomImage
                key={index} // Use index as key, better to use unique ids if available
                imageSrc={image}
                height={300}
                width={300} // Set the height for each BackgroundImage
              />
            ))}
          </Flex>
          <Space h={'lg'} />
          <Text
            c={textColor}
            fw={headingWeight}
            fz={'sm'}
          >
            TEAM MEMBERS
          </Text>
          <Group>
            {names.map((name, index) => (
              <>
                <Text
                  fz={'sm'}
                  key={index}
                >
                  {name}
                </Text>
                {index < names.length - 1 && <Divider orientation='vertical' />}
              </>
            ))}
          </Group>
        </Box>
      </Flex>
    </>
  );
}

export default ChallengeTabs;
