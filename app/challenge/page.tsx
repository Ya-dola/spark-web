'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import { Flex, Text } from '@mantine/core';

function ChallengePage() {
  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'flex-start'}
        gap={'sm'}
      >
        <Text>This is Spark Challenge Page</Text>
      </Flex>
    </CustomAppShell>
  );
}

export default ChallengePage;
