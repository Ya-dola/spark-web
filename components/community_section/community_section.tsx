import { CommunityTabsModel } from '@/models/community/community_tabs_model';
import CarouselCard from '@/components/carousel_card/carousel_card';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import { Center, Paper, Text, MantineSize, Space } from '@mantine/core';
import { useState } from 'react';
import ScrollableButtonTabs from '../scrollable_button_tabs/scrollable_button_tabs';
import { oswald } from '@/utils/font_utils';
import { colors } from '@/utils/color_utils';
import CarouselTab from '../carousel_tab/carousel_tabs';
import Transitions from '../transitions_component/transitions';

interface CommunitySectionProps {
  height?: string | number;
  width?: string | number;
  bgColor?: string;
  radius?: string;
  text?: string;
  textColor?: string;
  textSize?: string;
  textWeight?: number;
  heading?: string;
  headingColor?: string;
  headingSize?: string;
  headingWeight?: number;
  description?: string;
  sectionColor?: string;
  autoPlayDelay?: number;
  slideSize?: string;
  tabs?: CommunityTabsModel[];
}

function CommunitySection({
  height,
  width,
  bgColor = colors.purple1,
  radius = 'md',
  text,
  textColor = 'white',
  textSize = 'md',
  textWeight = 300,
  heading,
  headingColor = 'white',
  headingSize = 'h2',
  headingWeight = 900,
  description,
  sectionColor = colors.black1,
  autoPlayDelay,
  slideSize,
  tabs,
}: CommunitySectionProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    // <Transitions width={'100%'}>
    <Paper
      px={'md'}
      py={'md'}
      h={height}
      w={width}
      radius={radius}
      bg={bgColor + '75'}
    >
      {heading && (
        <Text
          c={headingColor}
          fw={headingWeight}
          fz={headingSize}
          mt={'md'}
          className={oswald.className}
        >
          {heading}
        </Text>
      )}

      {text && (
        <Text
          c={textColor}
          fz={textSize}
          fw={textWeight}
          mt={'md'}
        >
          {text}
        </Text>
      )}

      {description && (
        <>
          <Space h={'lg'} />
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
            </Paper>
          </Center>
        </>
      )}

      {tabs && (
        <>
          <Space h={'lg'} />
          <ScrollableSegmentedControl
            offsetScrollbars={false}
            segmentFgColor={sectionColor}
            segmentData={tabs.map((tab, index) => ({
              label: tab.name.toString(),
              value: index.toString(),
            }))}
            onChange={(value) => {
              return setSelectedTab(Number(value));
            }}
          />
          <Paper
            h={'100%'}
            w={'100%'}
            bg={'#262626'}
            radius={'md'}
            p={'md'}
          >
            {/* <CarouselCard
              slideSize={slideSize}
              events={tabs[selectedTab]?.details}
              headingColor={sectionColor}
              autoPlayDelay={autoPlayDelay}
            /> */}
            <CarouselTab
              slideSize={slideSize}
              events={tabs[selectedTab]?.details}
              headingColor={sectionColor}
              autoPlayDelay={autoPlayDelay}
              carouselHeight={'auto'}
            />
          </Paper>
        </>
      )}
    </Paper>
    // <Transitions/>
  );
}

export default CommunitySection;
