'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import CommunitySection from '@/components/community_section/community_section';
import { CommunitySectionModel } from '@/models/community/community_section_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import React, { useState } from 'react';
import {
  Center,
  Image,
  BackgroundImage,
  Flex,
  Text,
  Box,
  Card,
  Space,
  Paper,
} from '@mantine/core';
import CustomImage from '@/components/custom_image/custom_image';
import ButtonCard from '@/components/button_card/button_card';

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

  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        gap={'md'}
      >
        <Text
          w={'100%'}
          fz={'h1'}
          fw={900}
          c={'#f4018b'}
        >
          SPARK Pi Community
        </Text>
        <Flex
          w={'100%'}
          direction={isMobile ? 'column' : 'row'}
          align={isMobile ? 'center' : 'flex-start'}
          justify={isMobile ? 'start' : 'space-between'}
          gap={'xl'}
        >
          <Box
            py={'md'}
            w={'70%'}
          >
            <Text>
              In making Raspberry Pis available within the department year on
              year; SPARK will encourage, facilitate and nurture innovation in
              the use of this technology. ENTC intend to build expertise over
              several years to fully support a vibrant and active Pi community
              and therefore become a contributor to the develop-ment of product
              and services associated with the Raspberry Pi; in time a being
              recognised centre of excellence of in the use of this device.
            </Text>
          </Box>
          <CustomImage
            imageSrc={'/images/pi_logo.png'}
            width={100}
            height={100}
          />
        </Flex>
        <Flex
          w={isMobile ? '100%' : '100%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <BackgroundImage
            src={'/images/image_3_1.png'}
            style={{
              width: '100%', // Full width
              height: 'auto', // Automatic height (can be set to fixed value)
              padding: '40px', // Adjust padding based on your design
              display: 'flex', // Allows centering the content
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically if needed
              backgroundSize: 'cover', // Ensures the image covers the entire area
              backgroundPosition: 'center', // Centers the image
            }}
          >
            <CommunitySection
              width={isMobile ? '100%' : '80%'}
              height={'auto'}
              bgColor={'#343434'}
              radius={'lg'}
              heading={piMoraData.title}
              headingColor={'#F4018b'}
              text={piMoraData.description}
              tabs={piMoraData.tabs}
            />
          </BackgroundImage>
          <BackgroundImage
            src={'/images/image_3_2.png'}
            style={{
              width: '100%', // Full width
              height: 'auto', // Automatic height (can be set to fixed value)
              padding: '40px', // Adjust padding based on your design
              display: 'flex', // Allows centering the content
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically if needed
              backgroundSize: 'cover', // Ensures the image covers the entire area
              backgroundPosition: 'center', // Centers the image
            }}
          >
            <CommunitySection
              width={isMobile ? '100%' : '80%'}
              height={'auto'}
              bgColor={'#343434'}
              radius={'lg'}
              heading={techDemoData.title}
              headingColor={'#1f68d6'}
              text={techDemoData.description}
              tabs={techDemoData.tabs}
            />
          </BackgroundImage>
          <BackgroundImage
            src={'/images/image_3_3.png'}
            style={{
              width: '100%', // Full width
              height: 'auto', // Automatic height (can be set to fixed value)
              padding: '40px', // Adjust padding based on your design
              display: 'flex', // Allows centering the content
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically if needed
              backgroundSize: 'cover', // Ensures the image covers the entire area
              backgroundPosition: 'center', // Centers the image
            }}
          >
            <CommunitySection
              width={isMobile ? '100%' : '80%'}
              height={'auto'}
              bgColor={'#343434'}
              radius={'lg'}
              heading={finalYearData.title}
              headingColor={'#751fd6'}
              text={finalYearData.description}
              tabs={finalYearData.tabs}
            />
          </BackgroundImage>

          <Box
            w={'100%'}
            h={'auto'}
            bg={'#343434'}
            p={'xl'}
          >
            <Center>
              <Card
                w={isMobile ? '100%' : '40%'}
                radius={'md'}
                shadow='sm'
                bg={'#1f68d6'}
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
                <Box w={'60%'}>
                  <Text
                    fw={1000}
                    fz={'h2'}
                    mt='md'
                    c={'#1e1e1e'}
                  >
                    PI Community Facebook Page
                  </Text>
                </Box>

                <Text
                  mt='xs'
                  py={'md'}
                  c={'#1e1e1e'}
                  fw={800}
                  fz={'sm'}
                >
                  Pi Community Facebook page inform all followers about all
                  Raspberry Pi related activities at ENTC as well as news about
                  the Raspberry Pi organisation.
                </Text>
                <Text
                  mt='xs'
                  c={'white'}
                  size='sm'
                >
                  Pi Community Facebook Page The Facebook group can be found
                  here
                </Text>
                <Flex
                  h={'100%'}
                  justify={'center'}
                  mt={'auto'}
                >
                  <Image
                    w={'10%'}
                    src={'/images/fb_logo.png'}
                    alt={'Fb logo'}
                  />
                </Flex>
                <Paper
                  w={'auto'}
                  h={'auto'}
                  py={'xs'}
                  px={'md'}
                  bg={'#1e1e1e'}
                  radius={'xl'}
                  mt={'auto'}
                  ml={'auto'}
                >
                  <Text
                    /*td={'underline'}*/ fw={900}
                    fz={'sm'}
                    c={'#1f68d6'}
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
