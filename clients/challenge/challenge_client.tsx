'use client';

import CarouselTab from '@/components/carousel_tab/carousel_tab';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import ScrollableSegmentedControl from '@/components/scrollable_segmented_control/scrollable_segmented_control';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import Transitions from '@/components/transitions_component/transitions';
import { ChallengeTabsModel } from '@/models/challenge/challenge_tabs_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { colors } from '@/utils/color_utils';
import { oswald } from '@/utils/font_utils';
import { images } from '@/utils/image_utils';
import {
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
  const pageWidth = isMobile ? '100%' : '70%';
  const [selectedChallenge, setSelectedChallenge] = useState(0);
  const [selectedRunnerUp, setSelectedRunnerUp] = useState(0);

  return (
    <CustomAppShell
      backgroundHeight={isMobile ? '260rem' : '190rem'}
      imageSrc={images.bg4}
      bgSize={'cover'}
      pos={'top center'}
    >
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        gap={'md'}
      >
        <Text
          px={pagePadding}
          w={pageWidth}
          fz={'h1'}
          fw={900}
          c={colors.blue1}
          className={oswald.className}
        >
          SPARK CHALLENGE
        </Text>
        <Flex
          w={pageWidth}
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
            width={isMobile ? 30 : 1600}
            text={'Video Goes Here'}
            bgColor={'grape'}
          />
        </Flex>

        <Transitions width={'100%'}>
          <Paper
            w={pageWidth}
            h={'auto'}
            bg={colors.darkGrey + '75'}
            radius={'lg'}
            px={'xl'}
            py={isMobile ? 'md' : 'xl'}
          >
            <Text
              fz={'h3'}
              fw={700}
            >
              Main features of the SPARK challenge:
            </Text>
            <Space h={'xl'} />
            <List
              w={'100%'}
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
          </Paper>
        </Transitions>

        {/* TODO - Fix and Make it Transition after first one on delay */}
        <Transitions
          width={'100%'}
          // delay={8000}
          // duration={2000}
        >
          <Paper
            w={pageWidth}
            h={'auto'}
            bg={colors.darkGrey + '75'}
            radius={'lg'}
            px={isMobile ? 'md' : 'xl'}
            py={isMobile ? 'md' : 'xl'}
          >
            <Text
              fz={'h3'}
              fw={700}
            >
              Several supporting activities will be undertaken for a successful
              outcome for the Challenge:
            </Text>

            <Space h={'xl'} />

            <Flex
              direction={isMobile ? 'column' : 'row'}
              justify={'center'}
              align={isMobile ? 'center' : 'flex-start'}
              gap={'xl'}
              ml={'auto'}
            >
              <List
                w={isMobile ? '100%' : '100%'}
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
                  delivered in support of students developing Challenge
                  solution.
                </ListItem>
                <ListItem>
                  A series of lectures on United Nations - Sustainable
                  Development Goals (SDG&apos;s) will be available to all
                  students
                </ListItem>
              </List>

              <ReactPlayer
                url={'https://youtu.be/vc8-7VncIbA'}
                loop={true}
                controls={true}
                light={true}
                width={isMobile ? 320 : 640}
              />
            </Flex>
          </Paper>
        </Transitions>

        <Space h={'sm'} />

        <Transitions width={'100%'}>
          <Flex
            justify={'flex-start'}
            align={'cebter'}
            w={pageWidth}
          >
            <ScrollableSegmentedControl
              segmentBgColor={colors.darkGrey + '75'}
              offsetScrollbars={false}
              segmentData={challengeTabs.tabs.map((tab, index) => ({
                label: tab.name.toString(),
                value: index.toString(),
              }))}
              onChange={(value) => {
                setSelectedRunnerUp(0);
                return setSelectedChallenge(Number(value));
              }}
              segmentFgColor={colors.blue1}
            />
          </Flex>
          <Paper
            w={pageWidth}
            h={'auto'}
            bg={colors.darkGrey + '75'}
            radius={'lg'}
            px={isMobile ? 'sm' : 'xl'}
            py={isMobile ? 'md' : 'xl'}
          >
            <Text
              fz={'h1'}
              my={'md'}
            >
              {challengeTabs.tabs[selectedChallenge].name}
            </Text>
            <Text
              fz={'h4'}
              mb={'lg'}
            >
              {challengeTabs.tabs[selectedChallenge].description}
            </Text>

            <CarouselTab
              events={[challengeTabs.tabs[selectedChallenge]?.winnerTeam]}
              headingColor={colors.blue1}
              isWinner={true}
            />
            <Divider my={'lg'} />
            {challengeTabs.tabs[selectedChallenge].runnerUpTeams && (
              <>
                <ScrollableSegmentedControl
                  offsetScrollbars={false}
                  segmentFgColor={colors.blue1}
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
                <CarouselTab
                  events={challengeTabs.tabs[selectedChallenge]?.runnerUpTeams}
                  headingColor={colors.blue1}
                  onCarouselChange={(index) => {
                    setSelectedRunnerUp(index);
                  }}
                  eventIndex={selectedRunnerUp}
                />
              </>
            )}
          </Paper>
        </Transitions>
      </Flex>
    </CustomAppShell>
  );
}

export default ChallengeClient;
