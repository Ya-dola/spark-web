import { CommunityTabsModel } from '@/models/community/community_tabs_model';
import CarouselCard from '@/components/carousel_card/carousel_card';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import {
  Box,
  Center,
  Paper,
  Text,
  MantineSize,
  Space,
  Title,
} from '@mantine/core';
import { useState } from 'react';

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
  headingSize?: MantineSize;
  headingWeight?: number;
  description?: string;
  subtext?: string;
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
  headingSize = 'xl',
  headingWeight = 900,
  description,
  subtext,
  tabs,
}: CommunitySectionProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTabDetail, setSelectedTabDetail] = useState(0);

  return (
    <Paper
      px={'xl'}
      py={'xl'}
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

              {subtext && (
                <Box maw={'100%'}>
                  <Title
                    order={5}
                    textWrap='wrap'
                  >
                    {subtext}
                  </Title>
                </Box>
              )}
            </Paper>
          </Center>
        </>
      )}

      {tabs && (
        <>
          <Space h={'lg'} />
          <ScrollableSegmentedControl
            segmentData={tabs.map((tab, index) => ({
              label: tab.name.toString(),
              value: index.toString(),
            }))}
            onChange={(value) => {
              setSelectedTabDetail(0);
              return setSelectedTab(Number(value));
            }}
          />
          <CarouselCard
            onSlideChange={(index) => setSelectedTabDetail(index)}
            carouselHeight={350}
            height={500}
            slideSize={'100%'}
            imageScr={[
              {
                primary:
                  tabs[selectedTab]?.details[selectedTabDetail]?.images[0],
                secondary:
                  tabs[selectedTab]?.details[selectedTabDetail]?.images[1],
              },
            ]}
            text={{
              heading: tabs[selectedTab]?.details[selectedTabDetail].name,
              description:
                tabs[selectedTab]?.details[selectedTabDetail]?.description,
              names: tabs[selectedTab]?.details[
                selectedTabDetail
              ]?.members.reduce((acc, member) => acc + member + ' | ', ''),
            }}
          />
          <Text>Image Carousel Goes Here instead!!!</Text>
          {/* TODO - Change to Work with Carousel and based on index */}
          <ScrollableSegmentedControl
            segmentData={tabs[selectedTab]?.details.map(
              (tabDetails, index) => ({
                label: tabDetails.name.toString(),
                value: index.toString(),
              }),
            )}
            onChange={(value) => setSelectedTabDetail(Number(value))}
            value={selectedTabDetail.toString()}
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
                {tabs[selectedTab]?.details[selectedTabDetail]?.name}
              </Text>
              <Text
                c={textColor}
                fz={textSize}
                fw={textWeight}
              >
                {tabs[selectedTab]?.details[selectedTabDetail]?.description}
              </Text>
              <Text
                c={textColor}
                fz={textSize}
                fw={textWeight}
              >
                {tabs[selectedTab]?.details[selectedTabDetail]?.images.reduce(
                  (acc, image) => acc + image + ', ',
                  '',
                )}
              </Text>
              {/* TODO - Display only is members available */}
              <Text
                c={textColor}
                fz={textSize}
                fw={textWeight}
              >
                {tabs[selectedTab]?.details[selectedTabDetail]?.members.reduce(
                  (acc, member) => acc + member + ', ',
                  '',
                )}
              </Text>
            </Paper>
          </Center>
        </>
      )}
    </Paper>
  );
}

export default CommunitySection;
