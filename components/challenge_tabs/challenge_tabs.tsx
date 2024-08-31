import {
  Box,
  Center,
  Container,
  Paper,
  Text,
  MantineSize,
  Space,
  Divider,
  Avatar,
  Flex,
  Group,
} from '@mantine/core';
import CustomImage from '../custom_image/custom_image';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
// import theme from './skeleton_card.module.css';

interface ChallengeTabsProps {
  text?: string; // The text to display inside the card
  textColor?: string; // Text color, defaults to 'white'
  radius?: string; // Border radius, defaults to 'md'
  width?: string | number; // Width of the card in pixels
  height?: string | number; // Height of the card in pixels
  textSize?: string; // Font size of the text, defaults to 'md'
  textWeight?: number; // Font weight of the text, defaults to 500
  bgColor?: string; // Background color of the card, defaults to 'purple'
  cardColor?: string;
  icon?: string;
  heading?: string;
  headingSize?: MantineSize;
  headingWeight?: number;
  description?: string;
  images?: string[];
  image2?: string;
  names?: string[];
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
  text,
  width,
  height,
  bgColor = '#545454',
  cardColor = '#343434',
  textColor = 'white',
  radius = 'md',
  textSize = 'md',
  textWeight = 300,
  heading = 'TEAM NAME',
  headingSize = 'xl',
  headingWeight = 700,
  description = '',
  icon = '',
  images = [],
  image2 = '',
  names = [],
}: ChallengeTabsProps) {
  return (
    <Paper
      // className={`${theme.ChallengeTabs}`}
      px={'xl'}
      py={'xl'}
      h={height}
      w={width}
      radius={radius}
      bg={bgColor}
    >
      <Center>
        <Box w={'80%'}>
          <Text
            c={textColor}
            fz={textSize}
            fw={textWeight}
          >
            {text}
          </Text>
        </Box>
      </Center>
      <Space h={'lg'} />
      <Center>
        <Paper
          h={'100%'}
          w={'100%'}
          bg={cardColor}
          p={'lg'}
        >
          <Flex
            direction={'row'}
            justify={'flex-start'}
            align={'center'}
            gap={'md'}
            p={'md'}
          >
            <Avatar
              variant='filled'
              radius='xs'
              color='grape'
              src={icon}
            />
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
                WINNER
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
              direction={'row'}
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

            <Divider my='lg' />

            <Text
              c={textColor}
              fw={headingWeight}
              fz={'md'}
            >
              TEAM MEMBERS
            </Text>
            <Group>
              {names.map((name, index) => (
                <>
                  <Text key={index}>{name}</Text>
                  {index < names.length - 1 && (
                    <Divider orientation='vertical' />
                  )}
                </>
              ))}
            </Group>
          </Box>
        </Paper>
      </Center>
    </Paper>
  );
}

export default ChallengeTabs;
