'use client';

import CarouselCard from '@/components/carousel_card/carousel_card';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import CustomImage from '@/components/custom_image/custom_image';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import TabSection from '@/components/tab_section/tab_section';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { Box, Center, Flex, Paper, Text } from '@mantine/core';

function PiCommunityPage() {
  const isMobile = useIsMobile();

  return (
    <CustomAppShell
      height={900}
      imageSrc={['/images/bg_1.png', '/images/everest.png', '/images/bg_1.png']}
    >
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        gap={'md'}
      >
        <Text
          w={'100%'}
          fz={'h2'}
        >
          SPARK Pi Community
        </Text>
        <Flex
          w={'100%'}
          direction={isMobile ? 'column' : 'row'}
          justify={'center'}
          align={isMobile ? 'center' : 'center'}
          gap={'xl'}
        >
          <Box w={'100%'}>
            <Text>
              In making Raspberry Pis available within the department year on
              year; SPARK will encourage, facilitate and nurture innovation in
              the use of this technology. ENTC intend to build expertise over
              several years to fully support a vibrant and active Pi community
              and therefore become a contributor to the develop-ment of product
              and services associated with the Raspberry Pi; in time a being
              recognised centre of excellence of in the use of this device.
            </Text>
          </Box>
          <Box
            ml={'xl'}
            mr={'xl'}
          >
            <CustomImage
              height={300}
              width={isMobile ? 300 : 1600}
              imageSrc={'/images/pi_logo.png'}
            />
          </Box>
        </Flex>
        <Flex
          w={isMobile ? '100%' : '80%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
          gap={'xl'}
        >
          <TabSection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'PI-MORA'}
            text="Raspberry JAM's are independently organised community events for
            people to come together to learn about digital making with Raspberry
            Pi. ENTC will undertake 3 Raspberry JAMs (Pi-MORA's) every
            academic year. Undertaking to teach Pi enthusiasts about the
            capabilities of the Raspberry Pi platform."
          >
            <ScrollableSegmentedControl
              segmentData={[
                'Celebration 2025/2026',
                'Celebration 2024/2025',
                'Celebration 2023/2024',
                'Celebration 2022/2023',
                'Celebration 2021/2022',
                'Celebration 2020/2021',
                'Celebration 2019/2020',
                'Celebration 2018/2019',
                'Celebration 2017/2018',
                'Celebration 2016/2017',
                'Celebration 2015/2016',
              ]}
            />
            <CarouselCard
              carouselHeight={250}
              imageScr={[
                '/images/image_1.png',
                '/images/image_2.png',
                '/images/image_3.png',
                '/images/image_4.png',
                '/images/image_5.png',
              ]}
              width={300}
              height={300}
              text={
                'text according to the selected project text according to the selected project text according to the selected project text according to the selected project text according to the selected project'
              }
            />
          </TabSection>

          <TabSection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'Technology Demonstrators'}
            text='To demonstrate and showcase the student and Pi capabilities; a
          number of complex and challenging projects will be implemented
          throughout the year.'
          >
            <ScrollableSegmentedControl
              segmentData={[
                'Celebration 2025/2026',
                'Celebration 2024/2025',
                'Celebration 2023/2024',
                'Celebration 2022/2023',
                'Celebration 2021/2022',
                'Celebration 2020/2021',
                'Celebration 2019/2020',
                'Celebration 2018/2019',
                'Celebration 2017/2018',
                'Celebration 2016/2017',
                'Celebration 2015/2016',
              ]}
            />
            <CarouselCard
              carouselHeight={250}
              imageScr={[
                '/images/image_1.png',
                '/images/image_2.png',
                '/images/image_3.png',
                '/images/image_4.png',
                '/images/image_5.png',
              ]}
              width={300}
              height={300}
              text={
                'text according to the selected project text according to the selected project text according to the selected project text according to the selected project text according to the selected project'
              }
            />
          </TabSection>

          <TabSection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'Final Year Projects'}
            text='As part of the curriculum, final year Pi based project will
            demonstrate the fantastic engineering capabilities of the students.'
          >
            <ScrollableSegmentedControl
              segmentData={[
                'Celebration 2025/2026',
                'Celebration 2024/2025',
                'Celebration 2023/2024',
                'Celebration 2022/2023',
                'Celebration 2021/2022',
                'Celebration 2020/2021',
                'Celebration 2019/2020',
                'Celebration 2018/2019',
                'Celebration 2017/2018',
                'Celebration 2016/2017',
                'Celebration 2015/2016',
              ]}
            />
            <CarouselCard
              carouselHeight={250}
              imageScr={[
                '/images/image_1.png',
                '/images/image_2.png',
                '/images/image_3.png',
                '/images/image_4.png',
                '/images/image_5.png',
              ]}
              width={300}
              height={300}
              text={
                'text according to the selected project text according to the selected project text according to the selected project text according to the selected project text according to the selected project'
              }
            />
          </TabSection>

          <TabSection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'PI Community Facebook Page'}
            text='Pi Community Facebook page inform all followers about all Raspberry
            Pi related activities at ENTC as well as news about the Raspberry Pi
            organisation.'
            description='Pi Community Facebook Page
The Facebook group can be found at :'
            subtext={'https://www.facebook.com/groups/raspberrypicommunitylk'}
          />
        </Flex>
      </Flex>
    </CustomAppShell>
  );
}

export default PiCommunityPage;
