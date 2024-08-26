'use client';

import NextImage from 'next/image';
import { Image, Center, Flex, Text, Space } from '@mantine/core';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import SparkLogoSrc from '@/public/images/spark_logo_transparent.png';
import ButtonCard from '@/components/button_card/button_card';
import { useIsMobile } from '@/utils/breakpoint_utils';

function SparkHomePage() {
  const isMobile = useIsMobile();

  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        gap={'xl'}
      >
        <Image
          w={isMobile ? '100%' : '36%'}
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
          {/* TODO - Make Text Center Aligned */}
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
            in the modern-day industry.”
          </Text>
        </Center>
        <Space h={isMobile ? 'sm' : 'xl'} />
        <Flex
          direction={isMobile ? 'column' : 'row'}
          align={'center'}
          justify={'center'}
          gap={isMobile ? 'md' : 'xl'}
        >
          <ButtonCard
            heading={'Spark Challenge'}
            description={
              'A Challenge for students to produce unique, novel products and services that mitigate the detrimental impact of Climate Change. '
            }
            imageSrc={'/images/everest.png'}
            width={300}
            height={450}
            bgColor={
              'linear-gradient(to bottom right, #343434 0%, #545454 100%)'
            }
            textColor={'white'}
            href={'/challenge'}
          />

          <ButtonCard
            heading={'Pi-Community'}
            description={
              'To build a Community; by exploiting the extensive Raspberry Pi resources available at ENTC.'
            }
            imageSrc={'/images/image_pi.png'}
            width={300}
            height={450}
            bgColor={
              'linear-gradient(to bottom right, #343434 0%, #545454 100%)'
            }
            textColor={'white'}
            href={'/pi_community'}
          />
          <ButtonCard
            heading={'UnderGraduate Development'}
            description={
              'Being a participant of this program undergraduates will develop important “life skills” required in the modern-day workplace.'
            }
            imageSrc={'/images/image_1.png'}
            width={300}
            height={450}
            bgColor={
              'linear-gradient(to bottom right, #343434 0%, #545454 100%)'
            }
            textColor={'white'}
            href={'/undergraduate'}
          />
        </Flex>
      </Flex>
    </CustomAppShell>
  );
}

export default SparkHomePage;
