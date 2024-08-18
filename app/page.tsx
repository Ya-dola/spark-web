import { Button, Flex } from '@mantine/core';
import Link from 'next/link';

function HomePage() {
  return (
    <body>
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'flex-start'}
        gap={'xs'}
      >
        <Flex
          direction={'row'}
          justify={'flex-start'}
          align={'flex-start'}
          gap={'xl'}
          m={'auto'}
        >
          <Button
            component={Link}
            href='/home'
            radius={'md'}
            size={'md'}
          >
            Spark Home Page
          </Button>
          <Button
            component={Link}
            href='/challenge'
            radius={'md'}
            size={'md'}
          >
            Spark Challenge Page
          </Button>
          <Button
            component={Link}
            href='/pi_community'
            radius={'md'}
            size={'md'}
          >
            Spark Community Page
          </Button>
          <Button
            component={Link}
            href='/undergraduate'
            radius={'md'}
            size={'md'}
          >
            Spark Undergraduate Page
          </Button>
          <Button
            component={Link}
            href='/test'
            radius={'md'}
            size={'md'}
          >
            Test Page
          </Button>
        </Flex>
        <div>Test Hello this works</div>
        <div>Nice!!!</div>
      </Flex>
    </body>
  );
}

export default HomePage;
