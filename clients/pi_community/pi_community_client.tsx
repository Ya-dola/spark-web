'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import CommunitySection from '@/components/community_section/community_section';
import { CommunitySectionModel } from '@/models/community/community_section_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { Center, BackgroundImage, Flex, Text, Box } from '@mantine/core';
import CustomImage from '@/components/custom_image/custom_image';

interface PiCommunityClientProps {
  piMoraData: CommunitySectionModel;
}

function PiCommunityClient({ piMoraData }: PiCommunityClientProps) {
  const isMobile = useIsMobile();

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
              heading={'Technology Demonstrators'}
              headingColor={'#1f68d6'}
              text={
                'To demonstrate and showcase the student and Pi ' +
                'capabilities; a number of complex and challenging ' +
                'projects will be implemented throughout the year.'
              }
              description={'TABS AND IMAGES HERE'}
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
              heading={'Final Year Projects'}
              headingColor={'#751fd6'}
              text={
                'As part of the curriculum, final year Pi based project will ' +
                'demonstrate the fantastic engineering capabilities ' +
                'of the students.'
              }
              description={'TABS AND IMAGES HERE'}
            />
          </BackgroundImage>

          <CommunitySection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'PI Community Facebook Page'}
            text={
              'Pi Community Facebook page inform all followers about all ' +
              'Raspberry Pi related activities at ENTC as well as news ' +
              'about the Raspberry Pi organisation.'
            }
            description={
              'Pi Community Facebook Page ' +
              'The Facebook group can be found at :'
            }
            subtext={'https://www.facebook.com/groups/raspberrypicommunitylk'}
          />
        </Flex>
      </Flex>
    </CustomAppShell>
  );
}

export default PiCommunityClient;
