import { PiMoraModel } from '@/models/pi_mora/pi_mora_model';
import {
  Box,
  Center,
  Paper,
  Text,
  MantineSize,
  Space,
  Title,
} from '@mantine/core';
import ScrollableSegmentedControl from '../scrollable_segmented_control/scrollable_segmented_control';
import { useState } from 'react';
// import theme from './skeleton_card.module.css';

interface TabSectionProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  headingColor?: string;
  radius?: string;
  width?: string | number;
  height?: string | number;
  textSize?: string;
  textWeight?: number;
  heading?: string;
  headingSize?: MantineSize;
  headingWeight?: number;
  description?: string;
  subtext?: string;
  data?: PiMoraModel;
}

function TabSection({
  text,
  width = '100%',
  height,
  bgColor = 'purple',
  textColor = 'white',
  headingColor = 'white',
  radius = 'md',
  textSize = 'md',
  textWeight = 300,
  heading = '',
  headingSize = 'xl',
  headingWeight = 900,
  description,
  subtext = '',
  data,
}: TabSectionProps) {
  const [selectedTab, setSelectedTab] = useState(
    data?.years[0].year.toString(),
  );

  return (
    <Paper
      px={'xl'}
      py={'xl'}
      h={'auto'}
      w={width}
      radius={radius}
      bg={bgColor}
    >
      <Text
        c={headingColor}
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
      <Space h={description != null ? 'lg' : 0} />
      {description != null && (
        <Center>
          <Paper
            h={'100%'}
            w={'100%'}
            bg={bgColor}
            p={'sm'}
            radius={'md'}
          >
            <Text
              c={textColor}
              fz={textSize}
              fw={textWeight}
            >
              {description}
            </Text>
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
      )}
      <Space h={data != null ? 'lg' : 0} />
      {data != null && (
        <>
          <ScrollableSegmentedControl
            segmentData={data.years.map((piMoraYear) =>
              piMoraYear.year.toString(),
            )}
            onChange={(value) => setSelectedTab(value)}
          />
          <Center>
            <Paper
              h={'100%'}
              w={'100%'}
              bg={'#545454'}
              p={'sm'}
            >
              <Text
                c={textColor}
                fz={textSize}
                fw={textWeight}
              >
                {/* TODO - Optimize and Fix to use indexes instead of String values */}
                {
                  data.years.find(
                    (piMoraYear) => piMoraYear.year.toString() === selectedTab,
                  )?.description
                }
              </Text>
            </Paper>
          </Center>
        </>
      )}
    </Paper>
  );
}

export default TabSection;
