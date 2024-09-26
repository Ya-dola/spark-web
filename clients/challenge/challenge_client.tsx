'use client';

import CarouselCard from '@/components/carousel_card/carousel_card';
import ChallengeSection from '@/components/challenge_section/challenge_section';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { ChallengeTabsModel } from '@/models/challenge/challenge_tabs_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { colors } from '@/utils/color_utils';
import { images } from '@/utils/image_utils';
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
  MantineSize,
} from '@mantine/core';
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

interface ChallengeClientProps {
  challengeTabs: ChallengeTabsModel;
}

function ChallengeClient({ challengeTabs }: ChallengeClientProps) {
  const isMobile = useIsMobile();
  const pagePadding: MantineSize = isMobile ? 'sm' : 'md';
  const [selectedChallenge, setSelectedChallenge] = useState(0);
  const [selectedRunnerUp, setSelectedRunnerUp] = useState(0);

  return (
    <CustomAppShell
      backgroundHeight={'105%'}
      imageSrc={[images.bg4]}
      bgSize={'cover'}
      padding={0}
    >
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        gap={'md'}
      >
        <Text
          px={pagePadding}
          w={'100%'}
          fz={'h1'}
          fw={900}
          c={colors.blue1}
        >
          SPARK CHALLENGE
        </Text>
        <Flex
          w={'100%'}
          direction={isMobile ? 'column' : 'row'}
          align={isMobile ? 'center' : 'flex-start'}
          gap={'xl'}
          px={pagePadding}
        >
          <Text c={'white'}>
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
            segmentData={challengeTabs.tabs.map((tab, index) => ({
              label: tab.name.toString(),
              value: index.toString(),
            }))}
            onChange={(value) => {
              setSelectedRunnerUp(0);
              return setSelectedChallenge(Number(value));
            }}
          />

          <Text
            fz={'h1'}
            my={'lg'}
          >
            {challengeTabs.tabs[selectedChallenge].name}
          </Text>

          <ChallengeSection
            textWeight={500}
            text={challengeTabs.tabs[selectedChallenge].description}
          >
            {/* <ChallengeTabs
              text={'WINNER'}
              heading={'WINNING TEAM NAME'}
              description={
                'Coral population throughout the world is rapidly declining due to the prevailing climate crisis and toxic human activities. Team phantom presents a robot that collects coral gametes released by coral polyps during their spawning events, and safely stores them internally. The proposed robot will automate the current process which the scientists have to undergo diving and collecting the gametes by themselves. Once collected, the gametes will be provided with the proper conditions for growth, thus increasing the effective fertility rate from 0.2% to 90% before release in to the wild ensuring a higher coral population in the coming decades.'
              }
              icon={'/images/icon_cup.png'}
              images={['/images/image_1.png', '/images/image_1.png']}
              names={['name 1', 'name 2', 'name 3', 'name 4', 'name 5']}
              showIcon={true}
            /> */}

            <CarouselCard
              events={[challengeTabs.tabs[selectedChallenge]?.winnerTeam]}
              headingColor={'#A61FD6'}
            />
            <Divider my={'lg'} />
            {challengeTabs.tabs[selectedChallenge].runnerUpTeams && (
              <>
                <ScrollableSegmentedControl
                  offsetScrollbars={false}
                  segmentFgColor={'#A61FD6'}
                  segmentData={challengeTabs.tabs[
                    selectedChallenge
                  ].runnerUpTeams.map((tab, index) => ({
                    label: tab.name.toString(),
                    value: index.toString(),
                  }))}
                  onChange={(value) => {
                    setSelectedRunnerUp(Number(value));
                  }}
                  value={selectedRunnerUp.toString()}
                />
                <Paper
                  h={'100%'}
                  w={'100%'}
                  bg={'#262626'}
                  radius={'md'}
                >
                  <CarouselCard
                    events={
                      challengeTabs.tabs[selectedChallenge]?.runnerUpTeams
                    }
                    headingColor={'#A61FD6'}
                    onCarouselChange={(index) => {
                      setSelectedRunnerUp(index);
                    }}
                    eventIndex={selectedRunnerUp}
                  />
                </Paper>
              </>
            )}
          </ChallengeSection>
        </Paper>
      </Flex>
    </CustomAppShell>
  );
}

export default ChallengeClient;
