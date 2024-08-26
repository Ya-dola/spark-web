'use client';

import NextImage from 'next/image';
import {
  Container,
  Image,
  List,
  Paper,
  Flex,
  Text,
  Space,
  Box,
} from '@mantine/core';
import myImage from '@/public/images/image_1.png';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';
import { useIsMobile } from '@/utils/breakpoint_utils';

function UndergraduatePage() {
  const isMobile = useIsMobile();

  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        gap={'md'}
        px={'md'}
      >
        <Text
          w={'100%'}
          fz={'h2'}
        >
          UNDERGRADUATE DEVELOPMENT
        </Text>
        <Text
          w={isMobile ? '100%' : '60%'}
          mr={'auto'}
        >
          Students may excel academically; however, they will also need to
          practice effective &quot;life skills&quot; whilst in employment to
          become valued members in an organisation. Being able to discuss these
          during recruitment is crucial in demonstrating how they can add real
          value to an organisation.
        </Text>
        <Text
          w={isMobile ? '100%' : '60%'}
          mr={'auto'}
        >
          &quot;Between now and 2027, 60% of workers will need retraining due to
          global transformation and macrotrends.&quot; That&apos;s one of many
          findings in the World Economic Forum&apos;s (WEF) 2023 Future of Jobs
          Report.
        </Text>
        <Space h={'sm'} />
        <Paper
          w={isMobile ? '100%' : '70%'}
          h={'auto'}
          bg={'#343434'}
          radius={'lg'}
          px={isMobile ? 'md' : 'xl'}
          py={'xl'}
        >
          <Text>
            The report identifies the following top 10 &quot;life skills&quot;
            required by employees in 2023.
          </Text>
          <Space h={'xl'} />
          <Flex
            direction={isMobile ? 'column' : 'row'}
            justify={'center'}
            gap={isMobile ? '0' : '6rem'}
          >
            <List type={'ordered'}>
              <List.Item>1. Analytical thinking</List.Item>
              <List.Item>2. Creative thinking</List.Item>
              <List.Item>3. Resilience, flexibility and agility</List.Item>
              <List.Item>4. Motivation and self-awareness</List.Item>
              <List.Item>5. Curiosity and lifelong learning</List.Item>
            </List>
            <List type={'ordered'}>
              <List.Item>6. Technological literacy</List.Item>
              <List.Item>7. Dependability and attention to detail</List.Item>
              <List.Item>8. Empathy and active listening</List.Item>
              <List.Item>9. Leadership and social influence</List.Item>
              <List.Item>10. Quality control</List.Item>
            </List>
          </Flex>
          <Space h={60} />

          <Text>@ ENTC </Text>
          <Space h={'lg'} />
          <Box w={isMobile ? '85%' : '90%'}>
            <List listStyleType={'square'}>
              <List.Item>
                The skills identified in the above WEF report will not be
                actively developed by the SPARK programme, but it is expected
                that some of these qualities will develop naturally.
              </List.Item>
              <Space h={'lg'} />
              <List.Item>
                development of these skills will allowing a better
                &quot;class&quot; of undergraduates to enter the employment
                market.
                <Space h={'lg'} />
                <Text>The students will manage: </Text>
                <Space h={'lg'} />
                <List listStyleType={'disc'}>
                  <List.Item>
                    In developing solutions for the SPARK Challenge: Teams,
                    resources, ideas and timescales.
                  </List.Item>
                  <List.Item>
                    Programme events: scheduling, content creation and
                    associated marketing.
                  </List.Item>
                  <List.Item>Facebook pages: posts and contents.</List.Item>
                  <List.Item>
                    Raspberry JAMs: scheduling, broadcasts, contents and
                    speakers.
                  </List.Item>
                  <List.Item>Web Site: design and contents.</List.Item>
                </List>
              </List.Item>
            </List>
          </Box>

          <Space h={'xl'} />
          <Image
            w={isMobile ? '100%' : '50%'}
            m={'auto'}
            fit={'contain'}
            component={NextImage}
            src={myImage}
            alt={'My image'}
            radius={'xl'}
          />
        </Paper>
      </Flex>
    </CustomAppShell>
  );
}

export default UndergraduatePage;
