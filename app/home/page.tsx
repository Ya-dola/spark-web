'use client';
import NextImage from 'next/image';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { Image, Center, Box, Group, Button, Flex, Text } from '@mantine/core';
import Link from 'next/link';
import myImage from '@/public/images/spark_logo_transparent.png';

function SparkHomePage() {
  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      gap={'sm'}
    >
      <Button
        component={Link}
        href='/'
        radius={'md'}
        size={'md'}
      >
        Home Page
      </Button>
      <Image
        h={200}
        w={500}
        fit={'contain'}
        component={NextImage}
        src={myImage}
        alt={'My image'}
      />
      <h1> Making the Impossible Possible</h1>
      <Center
        maw={600}
        h={300}
      >
        <Box>
          SPARK will expose ENTC undergraduates to a set of challenges not made
          available in any other university in Asia, Europe, or the Americas.
          This unique project will not only provide a platform to develop and
          nurture innovative ideas to solve real-world problems, but also
          develop some of the soft and hard skill sets required by
          undergraduates to be effective leaders and consummate professionals in
          the modern-day industry.”
        </Box>
      </Center>

      <Group className='cards'>
        <SkeletonCard
          height={200}
          width={300}
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
  );
}

export default SparkHomePage;
