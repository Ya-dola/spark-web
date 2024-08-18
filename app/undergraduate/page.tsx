'use client';

import { Button, Flex, Text } from '@mantine/core';
import Link from 'next/link';

function UndergraduatePage() {
  return (
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
      <Text>This is Spark Undergraduate Page</Text>
    </Flex>
  );
}

export default UndergraduatePage;
