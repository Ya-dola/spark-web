import { Box, Center, Paper, Text, Space } from '@mantine/core';

import { useIsMobile } from '@/utils/breakpoint_utils';
// import theme from './skeleton_card.module.css';

interface ChallengeSectionProps {
  text?: string; // The text to display inside the card
  textColor?: string; // Text color, defaults to 'white'
  radius?: string; // Border radius, defaults to 'md'
  width?: string | number; // Width of the card in pixels
  height?: string | number; // Height of the card in pixels
  textSize?: string; // Font size of the text, defaults to 'md'
  textWeight?: number; // Font weight of the text, defaults to 500
  bgColor?: string; // Background color of the card, defaults to 'purple'
  cardColor?: string;
  children?: React.ReactNode;
}

/**
 * ChallengeSection Component
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
function ChallengeSection({
  text,
  width,
  height,
  bgColor = '#545454',
  cardColor = '#343434',
  textColor = 'white',
  radius = 'md',
  textSize = 'md',
  textWeight = 300,
  children,
}: ChallengeSectionProps) {
  const isMobile = useIsMobile();
  return (
    <Paper
      // className={`${theme.ChallengeTabs}`}
      px={isMobile ? '' : 'xl'}
      py={isMobile ? '' : 'xl'}
      h={height}
      w={width}
      radius={radius}
      bg={bgColor}
    >
      <Center>
        <Box
          py={'md'}
          w={'80%'}
        >
          <Text
            c={textColor}
            fz={textSize}
            fw={textWeight}
          >
            {text}
          </Text>
        </Box>
      </Center>
      <Space h={'md'} />
      <Paper
        h={'100%'}
        w={'100%'}
        bg={cardColor}
        p={'lg'}
        radius={isMobile ? 'xs' : 'md'}
      >
        {children}
      </Paper>
    </Paper>
  );
}

export default ChallengeSection;
