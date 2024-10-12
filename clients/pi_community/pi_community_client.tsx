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
import Transitions from '@/components/transitions_component/transitions';
import { images } from '@/utils/image_utils';

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
  const pageWidth = isMobile ? '100%' : '70%';

  return (
    <CustomAppShell
      backgroundHeight={'200rem'}
      imageSrc={images.bg1}
      bgSize={'cover'}
      pos={'top center'}
    >
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        gap={'md'}
      >
        <Text
          w={pageWidth}
          fz={'h1'}
          fw={900}
          c={colors.pink2}
          px={pagePadding}
          className={oswald.className}
        >
          SPARK PI COMMUNITY
        </Text>
        <Flex
          w={pageWidth}
          direction={isMobile ? 'column' : 'row'}
          justify={isMobile ? 'start' : 'space-between'}
          align={'center'}
          gap={'xl'}
          px={pagePadding}
        >
          <Text w={pageWidth}>
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
              src={images.piLogo}
              alt={'pi logo'}
              style={{
                height: '10rem',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </Box>
        </Flex>
        <Flex
          w={'100%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
          gap={'xl'}
        >
          <CommunitySection
            width={pageWidth}
            height={'auto'}
            bgColor={colors.darkGrey}
            radius={isMobile ? '' : 'lg'}
            heading={piMoraData.title}
            headingColor={colors.pink2}
            sectionColor={colors.pink2}
            text={piMoraData.description}
            tabs={piMoraData.tabs}
          />
          <CommunitySection
            width={pageWidth}
            height={'auto'}
            bgColor={colors.darkGrey}
            radius={isMobile ? '' : 'lg'}
            heading={techDemoData.title}
            headingColor={colors.pink2}
            sectionColor={colors.pink2}
            text={techDemoData.description}
            tabs={techDemoData.tabs}
          />
          <CommunitySection
            width={pageWidth}
            height={'auto'}
            bgColor={colors.darkGrey}
            radius={isMobile ? '' : 'lg'}
            heading={finalYearData.title}
            headingColor={colors.pink2}
            sectionColor={colors.pink2}
            text={finalYearData.description}
            tabs={finalYearData.tabs}
          />

          <Box
            w={pageWidth}
            h={'auto'}
            pb={'xl'}
          >
            <Transitions>
              <Center>
                <Card
                  w={pageWidth}
                  radius={'md'}
                  bg={colors.blue1}
                  padding={'xl'}
                  component={'a'}
                  href={
                    'https://www.facebook.com/groups/raspberrypicommunitylk'
                  }
                  target={'fb_page'}
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
                    fw={700}
                    fz={'h1'}
                    c={colors.black1}
                    className={oswald.className}
                  >
                    PI Community Facebook Page
                  </Text>
                  <Text
                    py={'md'}
                    c={colors.black1}
                    fw={600}
                    fz={'h4'}
                  >
                    Pi Community Facebook page inform all followers about all
                    Raspberry Pi related activities at ENTC as well as news
                    about the Raspberry Pi organisation.
                  </Text>
                  <Flex
                    h={'100%'}
                    justify={'center'}
                    align={'center'}
                    mt={'auto'}
                    gap={'md'}
                  >
                    <Image
                      h={'5rem'}
                      src={images.fbLogo}
                      alt={'Fb logo'}
                    />
                    <Text
                      c={colors.black1}
                      size={'md'}
                      fw={500}
                      fz={'h5'}
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
                      fw={900}
                      fz={'sm'}
                      c={colors.blue1}
                    >
                      Learn More
                    </Text>
                  </Paper>
                </Card>
              </Center>
            </Transitions>
          </Box>
        </Flex>
      </Flex>
    </CustomAppShell>
  );
}

export default PiCommunityClient;
