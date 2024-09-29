'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import CommunitySection from '@/components/community_section/community_section';
import { CommunitySectionModel } from '@/models/community/community_section_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import React, { useState } from 'react';
import {
  Center,
  Image,
  Flex,
  Text,
  Box,
  Card,
  Paper,
  MantineSize,
} from '@mantine/core';
import { oswald } from '@/utils/font_utils';
import { colors } from '@/utils/color_utils';

interface PiCommunityClientProps {
  piMoraData: CommunitySectionModel;
  techDemoData: CommunitySectionModel;
  finalYearData: CommunitySectionModel;
}

function PiCommunityClient({
  piMoraData,
  techDemoData,
  finalYearData,
}: PiCommunityClientProps) {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const pagePadding: MantineSize = isMobile ? 'sm' : 'md';

  return (
    <CustomAppShell
      backgroundHeight={'105%'}
      imageSrc={['/images/backgrounds/bg_1.png']}
      bgSize={'cover'}
      padding={0}
    >
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        gap={'xs'}
      >
        <Text
          w={'100%'}
          fz={'h1'}
          fw={900}
          c={colors.pink2}
          px={pagePadding}
          className={oswald.className}
        >
          SPARK PI COMMUNITY
        </Text>
        <Flex
          w={'100%'}
          px={pagePadding}
          direction={isMobile ? 'column' : 'row'}
          align={'center'}
          justify={isMobile ? 'start' : 'space-between'}
          gap={'xl'}
        >
          <Text w={isMobile ? '100%' : '70%'}>
            In making Raspberry Pis available within the department year on
            year; SPARK will encourage, facilitate and nurture innovation in the
            use of this technology. ENTC intend to build expertise over several
            years to fully support a vibrant and active Pi community and
            therefore become a contributor to the develop-ment of product and
            services associated with the Raspberry Pi; in time a being
            recognised centre of excellence of in the use of this device.
          </Text>
          <Box w={isMobile ? '30%' : '10%'}>
            <Image
              src={'/images/logo/pi_logo.png'}
              alt={'pi logo'}
              h={'auto'}
            />
          </Box>
        </Flex>
        <Flex
          w={isMobile ? '100%' : '100%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
          gap={'xl'}
        >
          <CommunitySection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={colors.darkGrey}
            radius={isMobile ? '' : 'lg'}
            heading={piMoraData.title}
            headingColor={colors.pink2}
            sectionColor={colors.pink2}
            text={piMoraData.description}
            tabs={piMoraData.tabs}
            slideSize={isMobile ? '100%' : '100%'}
          />

          <CommunitySection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={colors.darkGrey}
            radius={isMobile ? '' : 'lg'}
            heading={techDemoData.title}
            headingColor={colors.pink2}
            sectionColor={colors.pink2}
            text={techDemoData.description}
            tabs={techDemoData.tabs}
            slideSize={isMobile ? '100%' : '100%'}
          />

          <CommunitySection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={colors.darkGrey}
            radius={isMobile ? '' : 'lg'}
            heading={finalYearData.title}
            headingColor={colors.pink2}
            sectionColor={colors.pink2}
            text={finalYearData.description}
            tabs={finalYearData.tabs}
            slideSize={isMobile ? '100%' : '100%'}
          />

          <Box
            w={'100%'}
            h={'auto'}
            p={'xl'}
          >
            <Center>
              <Card
                w={isMobile ? '100%' : '40%'}
                radius={'md'}
                shadow='sm'
                bg={colors.blue1}
                padding='xl'
                component='a'
                href='https://www.facebook.com/groups/raspberrypicommunitylk'
                target='fb_page'
                style={{
                  transform:
                    isHovered && !isMobile ? 'scale(1.1) ' : 'scale(1)', // Scale card on hover
                  transition: 'transform 0.3s ease',
                  zIndex: isHovered && !isMobile ? 1 : 'auto', // Ensure hovered card is on top
                }}
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={() => !isMobile && setIsHovered(false)}
              >
                <Text
                  fw={1000}
                  fz={'h2'}
                  mt='md'
                  c={colors.black1}
                  w={'60%'}
                  className={oswald.className}
                >
                  PI Community Facebook Page
                </Text>
                <Text
                  mt='xs'
                  py={'md'}
                  c={colors.black1}
                  fw={800}
                  fz={'sm'}
                >
                  Pi Community Facebook page inform all followers about all
                  Raspberry Pi related activities at ENTC as well as news about
                  the Raspberry Pi organisation.
                </Text>
                <Flex
                  h={'100%'}
                  justify={'center'}
                  align={'center'}
                  mt={'auto'}
                  gap={'md'}
                >
                  <Image
                    w={'10%'}
                    src={'/images/logo/fb_logo.png'}
                    alt={'Fb logo'}
                  />
                  <Text
                    mt={'xs'}
                    c={colors.black1}
                    size={'md'}
                    fw={400}
                  >
                    The Facebook group can be found here
                  </Text>
                </Flex>
                <Paper
                  w={'auto'}
                  h={'auto'}
                  py={'xs'}
                  px={'md'}
                  bg={colors.black1}
                  radius={'xl'}
                  mt={'auto'}
                  ml={'auto'}
                >
                  <Text
                    /*td={'underline'}*/ fw={900}
                    fz={'sm'}
                    c={colors.blue1}
                  >
                    Learn More
                  </Text>
                </Paper>
              </Card>
            </Center>
          </Box>
        </Flex>
      </Flex>
    </CustomAppShell>
  );
}

export default PiCommunityClient;
