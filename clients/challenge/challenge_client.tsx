'use client';

import ChallengeSection from '@/components/challenge_section/challenge_section';
import ChallengeTabs from '@/components/challenge_tabs/challenge_tabs';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { useIsMobile } from '@/utils/breakpoint_utils';
import {
  Box,
  Center,
  Divider,
  Flex,
  List,
  ListItem,
  Paper,
  Space,
  Text,
} from '@mantine/core';
import ReactPlayer from 'react-player/lazy';

function ChallengeClient() {
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
          c={'#1f68d6'}
        >
          Spark Challenge
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
          px={isMobile ? '' : 'xl'}
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
              <Space h={'lg'} />
              <Center>
                <ReactPlayer
                  url={'https://youtu.be/vc8-7VncIbA'}
                  loop={true}
                  controls={true}
                  light={true}
                  width={isMobile ? 320 : 640}
                />
              </Center>
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
          <ChallengeSection
            text='The year-long challenge is one of the fundamental parts of the SPARK programme, to be undertaken by the first/second-year undergraduates. In taking part, students were encouraged to step "outside the box" in developing unique solutions that would mitigate or rectify some of the environmental damage caused by human 
              excess. The 2021/22 academic year was unprecedented for undergraduate study in Sri Lanka; not only had students to contend with Covid but also the impact of the significant economic downturn of the country.
'
            textWeight={500}
          >
            <ChallengeTabs
              text={'WINNER'}
              heading={'WINNING TEAM NAME'}
              description={
                'Coral population throughout the world is rapidly declining due to the prevailing climate crisis and toxic human activities. Team phantom presents a robot that collects coral gametes released by coral polyps during their spawning events, and safely stores them internally. The proposed robot will automate the current process which the scientists have to undergo diving and collecting the gametes by themselves. Once collected, the gametes will be provided with the proper conditions for growth, thus increasing the effective fertility rate from 0.2% to 90% before release in to the wild ensuring a higher coral population in the coming decades.'
              }
              icon={'/images/icon_cup.png'}
              images={['/images/image_1.png', '/images/image_1.png']}
              names={['name 1', 'name 2', 'name 3', 'name 4', 'name 5']}
              showIcon={true}
            />
            <Space h={'lg'} />
            <Divider my='xl' />
            <ChallengeTabs
              heading={'TEAM NAME'}
              description={
                'Coral population throughout the world is rapidly declining due to the prevailing climate crisis and toxic human activities. Team phantom presents a robot that collects coral gametes released by coral polyps during their spawning events, and safely stores them internally. The proposed robot will automate the current process which the scientists have to undergo diving and collecting the gametes by themselves. Once collected, the gametes will be provided with the proper conditions for growth, thus increasing the effective fertility rate from 0.2% to 90% before release in to the wild ensuring a higher coral population in the coming decades.'
              }
              images={['/images/image_1.png']}
              names={['name 1', 'name 2', 'name 3', 'name 4', 'name 5']}
              showIcon={false}
            >
              <ScrollableSegmentedControl
                segmentData={[
                  '1st Runner Up',
                  '2nd Runner Up',
                  '3rd Runner Up',
                  '4th Runner Up',
                  '5th Runner Up',
                ]}
              />
            </ChallengeTabs>
          </ChallengeSection>

          <Space h={'lg'} />
        </Paper>
      </Flex>
    </CustomAppShell>
  );
}

export default ChallengeClient;
