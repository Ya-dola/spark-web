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
        <div>Test Hello this works</div>
        <div>Nice!!!</div>
      </Flex>
    </body>
  );
}

export default HomePage;
