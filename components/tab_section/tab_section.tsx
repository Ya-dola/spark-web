import {
  Box,
  Center,
  Paper,
  Text,
  MantineSize,
  Space,
  Title,
} from '@mantine/core';
import { ReactNode } from 'react';
// import theme from './skeleton_card.module.css';

interface TabSectionProps {
  text: string; // The text to display inside the card
  bgColor?: string; // Background color of the card, defaults to 'purple'
  textColor?: string; // Text color, defaults to 'white'
  radius?: string; // Border radius, defaults to 'md'
  width?: string | number; // Width of the card in pixels
  height?: string | number; // Height of the card in pixels
  textSize?: string; // Font size of the text, defaults to 'md'
  textWeight?: number; // Font weight of the text, defaults to 500
  heading?: string;
  headingSize?: MantineSize;
  headingWeight?: number;
  description?: string;
  subtext?: string;
  children?: ReactNode;
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
function TabSection({
  text,
  width,
  height,
  bgColor = 'purple',
  textColor = 'white',
  radius = 'md',
  textSize = 'md',
  textWeight = 300,
  heading = '',
  headingSize = 'xl',
  headingWeight = 700,
  description = '',
  subtext = '',
  children,
}: TabSectionProps) {
  return (
    <Paper
      // className={`${theme.TabSection}`}
      px={'xl'}
      py={'xl'}
      h={height}
      w={width}
      radius={radius}
      bg={bgColor}
    >
      <Text
        c={textColor}
        fw={headingWeight}
        fz={headingSize}
        mt={'md'}
      >
        {heading}
      </Text>
      <Text
        c={textColor}
        fz={textSize}
        fw={textWeight}
        mt={'md'}
      >
        {text}
      </Text>
      <Space h={'lg'} />
      <Center>
        <Paper
          h={'100%'}
          w={'100%'}
          bg={'#545454'}
          p={'sm'}
        >
          {children}

          <Box maw={'100%'}>
            <Title
              order={5}
              textWrap='wrap'
            >
              {subtext}
            </Title>
          </Box>
        </Paper>
      </Center>
    </Paper>
  );
}

export default TabSection;
