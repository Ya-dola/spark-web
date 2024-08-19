'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { Flex, Paper, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function PiCommunityPage() {
  const isMobile = useMediaQuery('(max-width: 48em)', true, {
    getInitialValueInEffect: false,
  });

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
          SPARK Pi Community
        </Text>
        <Flex
          w={'100%'}
          direction={isMobile ? 'column' : 'row'}
          align={isMobile ? 'center' : 'flex-start'}
          gap={'xl'}
        >
          <Text>
            SPARK will encourage, facilitate and nurture innovation in the use
            of Raspberry Pi in the distribution of hardware within the
            department year on year. ENTC intend to build expertise over several
            years to fully support a vibrant and active Pi community and
            therefore become a contributor to the development of product and
            services associated with the Raspberry Pi. Over time ENTC will seek
            to become a recognised centre of excellence of this subject.
          </Text>
          <SkeletonCard
            height={300}
            width={isMobile ? 300 : 1600}
            text={'Raspberry Pi Image Goes Here'}
            bgColor={'grape'}
          />
        </Flex>
        <Paper
          w={isMobile ? '100%' : '80%'}
          h={'auto'}
          bg={'#343434'}
          radius={'lg'}
          p={'sm'}
        >
          <SkeletonCard
            text={'PI - MORA Goes Here'}
            bgColor={'grape'}
            height={600}
          />
        </Paper>
        <Paper
          w={isMobile ? '100%' : '80%'}
          h={'auto'}
          bg={'#343434'}
          radius={'lg'}
          p={'sm'}
        >
          <SkeletonCard
            text={'Technology Demonstators Goes Here'}
            bgColor={'grape'}
            height={600}
          />
        </Paper>
        <Paper
          w={isMobile ? '100%' : '80%'}
          h={'auto'}
          bg={'#343434'}
          radius={'lg'}
          p={'sm'}
        >
          <SkeletonCard
            text={'Final Year Projects Go Here'}
            bgColor={'grape'}
            height={600}
          />
        </Paper>
        <Paper
          w={isMobile ? '100%' : '80%'}
          h={'auto'}
          bg={'#343434'}
          radius={'lg'}
          p={'sm'}
        >
          <SkeletonCard
            text={'PI Community Facebook Page Goes Here'}
            bgColor={'grape'}
            height={200}
          />
        </Paper>
      </Flex>
    </CustomAppShell>
  );
}

export default PiCommunityPage;
