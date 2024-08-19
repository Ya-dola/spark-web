import { Button, Flex } from '@mantine/core';
import Link from 'next/link';

function HomePage() {
  return (
    <Flex
      direction={'column'}
      justify={'flex-start'}
      align={'flex-start'}
      gap={'xl'}
      p={'lg'}
    >
      <Button
        fullWidth
        h={'25vh'}
        color={'grape'}
        component={Link}
        size={'md'}
        radius={'md'}
        href={'/home'}
      >
        Spark Web App
      </Button>

      <Button
        fullWidth
        h={'15vh'}
        color={'blue'}
        component={Link}
        size={'md'}
        radius={'md'}
        href={'/test'}
      >
        Test Page
      </Button>
    </Flex>
  );
}

export default HomePage;
