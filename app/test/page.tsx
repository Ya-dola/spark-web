'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import { Button, Flex, Text } from '@mantine/core';
import Link from 'next/link';

import CustomImage from '@/components/custom_image/custom_image';

function TestPage() {
  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'flex-start'}
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
        <Text>This is Test Page</Text>
        <SkeletonCard text={'This is a test card'} />
        <SkeletonCard
          height={200}
          width={300}
          bgColor={'orange'}
          textColor={'white'}
          text={'This is a test card'}
        />
        <SkeletonCard
          height={300}
          width={600}
          textSize={'36'}
          textWeight={200}
          bgColor={'red'}
          textColor={'black'}
          text={'This is also another test card'}
        />
        <SkeletonCard
          height={200}
          width={300}
          bgColor={'orange'}
          textColor={'white'}
          text={'This is a test card'}
        />
        <SkeletonCard
          height={200}
          width={300}
          bgColor={'orange'}
          textColor={'white'}
          text={'This is a test card'}
        />
        <SkeletonCard
          height={200}
          width={300}
          bgColor={'orange'}
          textColor={'white'}
          text={'This is a test card'}
        />
        <SkeletonCard
          height={200}
          width={300}
          bgColor={'orange'}
          textColor={'white'}
          text={'This is a test card'}
        />
        <CustomImage
          width={300}
          height={400}
          radius='xl'
          imageSrc={'/images/image_1.png'}
        />
      </Flex>
    </CustomAppShell>
  );
}

export default TestPage;
