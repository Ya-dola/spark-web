'use client';
import NextImage from 'next/image';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { Image, Center, Group, Flex, Text } from '@mantine/core';
import myImage from '@/public/images/spark_logo_transparent.png';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';

function SparkHomePage() {
  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        gap={'sm'}
      >
        <Image
          h={200}
          w={500}
          fit={'contain'}
          component={NextImage}
          src={myImage}
          alt={'My image'}
        />
        {/* TODO - Match with exact Theme */}
        <Text
          fz={'h3'}
          fs={'italic'}
          c={'grape'}
        >
          Making the Impossible Possible
        </Text>
        <Center
          maw={600}
          h={300}
        >
          {/* TODO - Make Text Center Aligned */}
          <Text>
            SPARK will expose ENTC undergraduates to a set of challenges not
            made available in any other university in Asia, Europe, or the
            Americas. This unique project will not only provide a platform to
            develop and nurture innovative ideas to solve real-world problems,
            but also develop some of the soft and hard skill sets required by
            undergraduates to be effective leaders and consummate professionals
            in the modern-day industry.”
          </Text>
        </Center>
        <Group gap={'xl'}>
          <SkeletonCard
            height={200}
            width={300}
            // TODO - Add Brand Colors to Theme
            bgColor={'#A61FD6'}
            textColor={'white'}
            text={'Spark Challenge'}
          />
          <SkeletonCard
            height={200}
            width={300}
            bgColor={'#A61FD6'}
            textColor={'white'}
            text={'Pi-Community'}
          />
          <SkeletonCard
            height={200}
            width={300}
            bgColor={'#A61FD6'}
            textColor={'white'}
            text={'Undergraduate Development'}
          />
        </Group>
      </Flex>
    </CustomAppShell>
  );
}

export default SparkHomePage;
