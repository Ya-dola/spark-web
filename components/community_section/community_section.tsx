import { CommunityTabsModel } from '@/models/community/community_tabs_model';
import CarouselCard from '@/components/carousel_card/carousel_card';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import { Center, Paper, Text, MantineSize, Space } from '@mantine/core';
import { useState } from 'react';
import ScrollableButtonTabs from '../scrollable_button_tabs/scrollable_button_tabs';
import { oswald } from '@/utils/font_utils';

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
  bgColor = 'purple',
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
  sectionColor = '#1e1e1e',
  autoPlayDelay,
  slideSize,
  tabs,
}: CommunitySectionProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTabDetail, setSelectedTabDetail] = useState(0);

  return (
    <Paper
      px={'md'}
      py={'md'}
      h={height}
      w={width}
      radius={radius}
      bg={bgColor}
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
              setSelectedTabDetail(0);
              return setSelectedTab(Number(value));
            }}
          />
          <Paper
            h={'100%'}
            w={'100%'}
            bg={'#262626'}
            // p={'sm'}
            radius={'md'}
          >
            <>
              {/* <ScrollableButtonTabs
                items={tabs[selectedTab]?.details.map(
                  (tabDetails) => tabDetails.name,
                )}
                onTabSelect={(index) => setSelectedTabDetail(index)}
                textColor={'white'}
                selectedIndex={selectedTabDetail}
                selectorColor={sectionColor}
              /> */}

              <CarouselCard
                slideSize={slideSize}
                events={tabs[selectedTab]?.details}
                headingColor={sectionColor}
                autoPlayDelay={autoPlayDelay}
              />
            </>
          </Paper>
        </>
      )}
    </Paper>
  );
}

export default CommunitySection;
