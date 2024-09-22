import { Anchor, Flex, Image, Text } from '@mantine/core';
import NextImage from 'next/image';
import logoTransparent from '@/public/images/spark_logo_transparent.png';
import Link from 'next/link';

interface CustomFooterProps {
  height?: number | string;
}

function CustomFooter({ height = '300' }: CustomFooterProps) {
  return (
    <Flex
      direction={'row'}
      align={'center'}
      gap={'xl'}
      p={'xl'}
      bg={'#1e1e1e'}
      justify={'space-evenly'}
      h={height}
    >
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'flex-start'}
        gap={'xs'}
      >
        <Image
          h={40}
          w={'auto'}
          fit={'contain'}
          component={NextImage}
          src={logoTransparent}
          alt={'My image'}
        />
        <Text
          fs={'italic'}
          c={'#d61fb3'}
        >
          Making the Impossibe Possible
        </Text>
      </Flex>
      <Flex
        direction={'row'}
        gap={'3rem'}
      >
        <Flex
          direction={'column'}
          justify={'flex-start'}
          align={'flex-start'}
          gap={'xs'}
        >
          <Text
            fw={800}
            fz={'lg'}
          >
            GENERAL
          </Text>
          <Text
            component={Link}
            href={'/home'}
            fz={'sm'}
          >
            Home
          </Text>
          <Text
            component={Link}
            href={'/challenge'}
            fz={'sm'}
          >
            Challenge
          </Text>
          <Text
            component={Link}
            href={'/pi_community'}
            fz={'sm'}
          >
            Pi-Community
          </Text>
          <Anchor
            href={'/undergraduate'}
            fz={'sm'}
          >
            Undergraduate Development
          </Anchor>
        </Flex>
        <Flex
          direction={'column'}
          justify={'flex-start'}
          align={'flex-start'}
          gap={'xs'}
        >
          <Text
            fw={800}
            fz={'lg'}
          >
            CONTACT US
          </Text>
          <Text fz={'sm'}>FB</Text>
          <Text fz={'sm'}>YT</Text>
          <Text fz={'sm'}>LinkedIn</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CustomFooter;
