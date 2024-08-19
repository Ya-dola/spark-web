'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import { Button, Flex, Text } from '@mantine/core';

function SparkCommunityPage() {
  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'flex-start'}
        gap={'sm'}
      >
        <Text>This is Spark Pi Community Page</Text>
      </Flex>
    </CustomAppShell>
  );
}

export default SparkCommunityPage;
