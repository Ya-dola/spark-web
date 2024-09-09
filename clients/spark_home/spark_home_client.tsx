'use client';

import NextImage from 'next/image';
import { Image, Center, Flex, Text, Box } from '@mantine/core';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import SparkLogoSrc from '@/public/images/spark_logo_transparent.png';
import ButtonCard from '@/components/button_card/button_card';
import { useIsMobile } from '@/utils/breakpoint_utils';

function SparkHomeClient() {
  const isMobile = useIsMobile();

  return (
    <CustomAppShell
      height={1000}
      imageSrc={['/images/bg_1.png']}
    >
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        gap={'xl'}
      >
        <Image
          w={isMobile ? '100%' : '32%'}
          fit={'contain'}
          component={NextImage}
          src={SparkLogoSrc}
          alt={'Spark Logo'}
          priority
        />
        {/* TODO - Match with exact Theme */}
        <Text
          fz={'h3'}
          fs={'italic'}
          c={'#A61FD6'}
        >
          Making the Impossible Possible
        </Text>
        <Center maw={isMobile ? '100%' : '60%'}>
          <Text
            ta={'center'}
            fz={'h4'}
          >
            SPARK will expose ENTC undergraduates to a set of challenges not
            made available in any other university in Asia, Europe, or the
            Americas. This unique project will not only provide a platform to
            develop and nurture innovative ideas to solve real-world problems,
            but also develop some of the soft and hard skill sets required by
            undergraduates to be effective leaders and consummate professionals
            in the modern-day industry.
          </Text>
        </Center>
        <Box
          w={'100%'}
          h={'auto'}
          py={'xl'}
        >
          <Flex
            direction={isMobile ? 'column' : 'row'}
            align={'center'}
            justify={'center'}
            wrap={'wrap'}
            gap={isMobile ? 'md' : 'xl'}
          >
            {/* TODO - Make Height and Width % Based */}
            <ButtonCard
              heading={'Spark Challenge'}
              description={
                'A Challenge for students to produce unique, novel products and services that mitigate the detrimental impact of Climate Change. '
              }
              imageSrc={'/images/everest.png'}
              width={300}
              height={450}
              bgColor={'#262626'}
              headingColor={'#1f68d6'}
              href={'/challenge'}
              buttonColor={'#1f68d6'}
            />

            <ButtonCard
              heading={'Pi-Community'}
              description={
                'To build a Community; by exploiting the extensive Raspberry Pi resources available at ENTC.'
              }
              imageSrc={'/images/image_pi.png'}
              width={300}
              height={450}
              bgColor={'#262626'}
              headingColor={'#f4018b'}
              textColor={'white'}
              href={'/pi_community'}
              buttonColor={'#f4018b'}
            />
            <ButtonCard
              heading={'Undergraduate Development'}
              description={
                'Being a participant of this program undergraduates will develop important “life skills” required in the modern-day workplace.'
              }
              imageSrc={'/images/image_1.png'}
              width={300}
              height={450}
              bgColor={'#262626'}
              headingColor={'#a61fd6'}
              textColor={'white'}
              href={'/undergraduate'}
              buttonColor={'#a61fd6'}
            />
          </Flex>
        </Box>
      </Flex>
    </CustomAppShell>
  );
}

export default SparkHomeClient;
