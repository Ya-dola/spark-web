'use client';
import NextImage from 'next/image';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { Image, Center, Flex, Text, Space } from '@mantine/core';
import myImage from '@/public/images/spark_logo_transparent.png';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import { useMediaQuery } from '@mantine/hooks';

function SparkHomePage() {
  const isMobile = useMediaQuery('(max-width: 48em)', true, {
    getInitialValueInEffect: false,
  });

  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        gap={'xl'}
      >
        <Image
          w={isMobile ? '100%' : '36%'}
          fit={'contain'}
          component={NextImage}
          src={myImage}
          alt={'My image'}
        />
        {/* TODO - Match with exact Theme */}
        <Text
          fz={'h3'}
          fs={'italic'}
          c={'#A61FD6'}
        >
          Making the Impossible Possible
        </Text>
        <Center maw={isMobile ? '100%' : '40%'}>
          {/* TODO - Make Text Center Aligned */}
          <Text fz={'h4'}>
            SPARK will expose ENTC undergraduates to a set of challenges not
            made available in any other university in Asia, Europe, or the
            Americas. This unique project will not only provide a platform to
            develop and nurture innovative ideas to solve real-world problems,
            but also develop some of the soft and hard skill sets required by
            undergraduates to be effective leaders and consummate professionals
            in the modern-day industry.”
          </Text>
        </Center>
        <Space h={isMobile ? 'sm' : 'xl'} />
        <Flex
          direction={isMobile ? 'column' : 'row'}
          align={'center'}
          justify={'center'}
          gap={isMobile ? 'md' : 'xl'}
        >
          <SkeletonCard
            height={250}
            width={300}
            // TODO - Add Brand Colors to Theme
            bgColor={'#A61FD6'}
            text={'Spark Challenge'}
          />
          <SkeletonCard
            height={250}
            width={300}
            bgColor={'#A61FD6'}
            text={'Pi-Community'}
          />
          <SkeletonCard
            height={250}
            width={300}
            bgColor={'#A61FD6'}
            text={'Undergraduate Development'}
          />
        </Flex>
      </Flex>
    </CustomAppShell>
  );
}

export default SparkHomePage;
