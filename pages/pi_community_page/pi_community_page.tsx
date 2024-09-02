'use client';

import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import SkeletonCard from '@/components/skeleton_card/skeleton_card';
import TabSection from '@/components/tab_section/tab_section';
import { PiMoraModel } from '@/models/pi_mora/pi_mora_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { Flex, Text } from '@mantine/core';

interface PiCommunityPageProps {
  piMoraData: PiMoraModel;
}

function PiCommunityClientPage({ piMoraData }: PiCommunityPageProps) {
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
          fz={'h2'}
        >
          SPARK Pi Community
        </Text>
        <Flex
          w={'100%'}
          direction={isMobile ? 'column' : 'row'}
          align={isMobile ? 'center' : 'flex-start'}
          gap={'xl'}
        >
          <Text>
            In making Raspberry Pis available within the department year on
            year; SPARK will encourage, facilitate and nurture innovation in the
            use of this technology. ENTC intend to build expertise over several
            years to fully support a vibrant and active Pi community and
            therefore become a contributor to the develop-ment of product and
            services associated with the Raspberry Pi; in time a being
            recognised centre of excellence of in the use of this device.
          </Text>
          <SkeletonCard
            height={300}
            width={isMobile ? 300 : 1600}
            text={'Raspberry Pi Image Goes Here'}
            bgColor={'grape'}
          />
        </Flex>
        <Flex
          w={isMobile ? '100%' : '80%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
          gap={'xl'}
        >
          <TabSection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'PI-MORA'}
            text={
              "Raspberry JAM's are independently organised community " +
              'events for people to come together to learn about ' +
              'digital making with Raspberry Pi. ' +
              'ENTC will undertake 3 Raspberry ' +
              "JAMs (Pi-MORA's) every academic year. Undertaking to " +
              'teach Pi enthusiasts about the capabilities of the ' +
              'Raspberry Pi platform.'
            }
            data={piMoraData}
          />
          <TabSection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'Technology Demonstrators'}
            text={
              'To demonstrate and showcase the student and Pi ' +
              'capabilities; a number of complex and challenging ' +
              'projects will be implemented throughout the year.'
            }
            description={'TABS AND IMAGES HERE'}
          />

          <TabSection
            width={isMobile ? '100%' : '80%'}
            height={'auto'}
            bgColor={'#343434'}
            radius={'lg'}
            heading={'Final Year Projects'}
            text={
              'As part of the curriculum, final year Pi based project will ' +
              'demonstrate the fantastic engineering capabilities ' +
              'of the students.'
            }
            description={'TABS AND IMAGES HERE'}
          />

          <TabSection
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

export default PiCommunityClientPage;
