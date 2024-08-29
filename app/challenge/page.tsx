'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { Box, Flex, List, ListItem, Paper, Space, Text } from '@mantine/core';

function ChallengePage() {
  const isMobile = useIsMobile();

  return (
    <CustomAppShell>
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
          SPARK CHALLENGE
        </Text>
        <Flex
          w={'100%'}
          direction={isMobile ? 'column' : 'row'}
          align={isMobile ? 'center' : 'flex-start'}
          gap={'xl'}
        >
          <Text>
            The SPARK Challenge will reward groups of students that create
            unique, innovative, sustainable and socially/environmentally aware
            solutions; the results potentially having significant positive
            transformative impact on society, industry and the wider
            environment. The project will endeavour to nurture, drive and
            sustain innovation and originality by the introduction of Raspberry
            Pi into ENTC; creating an environment that allows for play, teamwork
            and experimentation.
          </Text>
          <SkeletonCard
            height={300}
            width={isMobile ? 300 : 1600}
            text={'Video Goes Here'}
            bgColor={'grape'}
          />
        </Flex>
        <Paper
          w={isMobile ? '100%' : '80%'}
          h={'auto'}
          bg={'#343434'}
          radius={'lg'}
          px={isMobile ? 'sm' : 'xl'}
          py={isMobile ? 'md' : 'xl'}
        >
          <Box
            py={'lg'}
            ml={'md'}
            w={isMobile ? '85%' : '90%'}
          >
            <Text
              size={'lg'}
              fw={700}
            >
              Main features of the SPARK challenge:
            </Text>
            <Space h={'lg'} />
            <List
              listStyleType={'disc'}
              withPadding
            >
              <ListItem>
                The challenge is expected to run in each academic year with
                teams&apos; under-graduates working together to deliver
                solutions.
              </ListItem>
              <ListItem>
                External industrial and commercial specialists will evaluate the
                proposals in a “Shark Tank/Dragons Den” environment.
              </ListItem>
              <ListItem>
                The most innovative and progressive solutions will be
                recognised, cele-brated and applauded as the culmination of the
                SPARK Challenge.
              </ListItem>
            </List>
          </Box>

          <Space h={'xl'} />
          <Box
            py={'lg'}
            ml={'md'}
            w={isMobile ? '85%' : '90%'}
          >
            <Text
              size={'lg'}
              fw={700}
            >
              Several supporting activities will be undertaken for a successful
              outcome for the Challenge:
            </Text>
            <Space h={'lg'} />
            <List
              listStyleType={'disc'}
              withPadding
            >
              <ListItem>
                A team of undergraduates from ENTC will manage the delivery of
                the SPARK programme.
              </ListItem>
              <ListItem>
                A marketing campaign will be undertaken to raise awareness and
                seeking long-term form within ENTC.
              </ListItem>
              <ListItem>
                Workshops on the subject of “Design Led Innovation” will be
                delivered in support of students developing Challenge solution.
              </ListItem>
              <ListItem>
                A series of lectures on United Nations – Sustainable Development
                Goals (SDG&apos;s) will be available to all students
              </ListItem>
              {/* TODO - UN Video here */}
            </List>
          </Box>
          <Space h={'lg'} />
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
          <Space h={'lg'} />
          <SkeletonCard
            text={'Winner Goes Here'}
            bgColor={'grape'}
            height={700}
          />
          <Space h={'lg'} />
          <ScrollableSegmentedControl
            segmentData={[
              '1st Runner Up',
              '2nd Runner Up',
              '3rd Runner Up',
              '4th Runner Up',
              '5th Runner Up',
            ]}
          />
          <Space h={'lg'} />
          <SkeletonCard
            text={'Runner Ups Go Here'}
            bgColor={'grape'}
            height={700}
          />
        </Paper>
      </Flex>
    </CustomAppShell>
  );
}

export default ChallengePage;
