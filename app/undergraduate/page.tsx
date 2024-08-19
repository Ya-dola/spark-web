'use client';

import NextImage from 'next/image';
import { Image, List, Paper, Title, Flex, Text } from '@mantine/core';
import myImage from '@/public/images/image_1.png';
import CustomAppShell from '@/components/custom_app_shell/custom_app_shell';

function UndergraduatePage() {
  return (
    <CustomAppShell>
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        gap={'sm'}
      >
        <Flex
          direction={'column'}
          justify={'flex-start'}
          align={'flex-start'}
        >
          <Title
            px={100}
            py={20}
            order={1}
          >
            UNDERGRADUATE DEVELOPMENT
          </Title>

          <Text
            px={100}
            py={20}
          >
            Students may excel academically; however, they will also need to
            practice effective &quot;life skills&quot; whilst in employment to
            become valued members in an organisation. Being able to discuss
            these during recruitment is crucial in demonstrating how they can
            add real value to an organisation. &quot;Between now and 2027, 60%
            of workers will need retraining due to global transformation and
            macrotrends.&quot; That&apos;s one of many findings in the World
            Economic Forum&apos;s (WEF) 2023 Future of Jobs Report.
          </Text>
        </Flex>
        <Paper
          w={800}
          h={'auto'}
          bg={'#343434'}
          radius={'lg'}
          p={'xl'}
        >
          The report identifies the following top 10 &quot;life skills&quot;
          required by employees in 2023.
          <Flex
            py={50}
            direction={'row'}
            justify={'center'}
            gap={'xl'}
          >
            <List px={40}>
              <List.Item> Analytical thinking</List.Item>
              <List.Item>Creative thinking</List.Item>
              <List.Item>Resilience, flexibility and agility</List.Item>
              <List.Item>Motivation and self-awareness</List.Item>
              <List.Item>Curiosity and lifelong learning</List.Item>
            </List>
            <List px={40}>
              <List.Item> Technological literacy</List.Item>
              <List.Item>Dependability and attention to detail</List.Item>
              <List.Item>Empathy and active listening</List.Item>
              <List.Item>Leadership and social influence</List.Item>
              <List.Item>Quality control</List.Item>
            </List>
          </Flex>
          {/*TODO check if we should leave it as list of Text*/}
          <Text>@ ENTC </Text>
          <Text>
            The skills identified in the above WEF report will not be actively
            developed by the SPARK programme, but it is expected that some of
            these qualities will develop naturally.
          </Text>
          <Text>
            The development of these skills will allowing a better
            &quot;class&quot; of undergraduates to enter the employment market.
          </Text>
          <Text>The students will manage: </Text>
          <List
            px={40}
            py={20}
          >
            <List.Item>
              • In developing solutions for the SPARK Challenge: Teams,
              resources, ideas and timescales.
            </List.Item>
            <List.Item>
              • Programme events: scheduling, content creation and associated
              marketing.
            </List.Item>
            <List.Item>• Facebook pages: posts and contents.</List.Item>
            <List.Item>
              • Raspberry JAMs: scheduling, broadcasts, contents and speakers.
            </List.Item>
            <List.Item>• Web Site: design and contents.</List.Item>
          </List>
          <Image
            h={400}
            fit={'contain'}
            component={NextImage}
            src={myImage}
            alt={'My image'}
            radius='md'
          />
        </Paper>
      </Flex>
    </CustomAppShell>
  );
}

export default UndergraduatePage;
