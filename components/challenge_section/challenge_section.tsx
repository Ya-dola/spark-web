import { Box, Center, Paper, Text, Space } from '@mantine/core';

import { useIsMobile } from '@/utils/breakpoint_utils';


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
