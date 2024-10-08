import { Image, Burger, Button, Drawer, Flex, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import NextImage from 'next/image';
import { colors } from '@/utils/color_utils';
import { images } from '@/utils/image_utils';

function CustomDrawer() {
  const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Drawer
        opened={isDrawerOpen}
        onClose={closeDrawer}
        position={'right'}
        closeButtonProps={{ size: 'xl', c: colors.pink1 }}
        overlayProps={{ backgroundOpacity: 0.3, blur: 2.4 }}
        title={
          <Image
            h={40}
            w={'auto'}
            fit={'contain'}
            src={images.sparkLogoTransparent}
            alt={'My image'}
          />
        }
      >
        <Flex
          direction={'column'}
          justify={'flex-start'}
          align={'flex-start'}
          gap={'md'}
        >
          <Divider
            w={'100%'}
            my='md'
          />
          <Button
            fullWidth
            component={Link}
            href={'/'}
            radius={'md'}
            size={'md'}
            variant={'subtle'}
            // TODO - Show Active Page
            // c={'grape'}
            color={'gray'}
            justify={'flex-start'}
          >
            Home
          </Button>
          <Button
            fullWidth
            component={Link}
            href={'/challenge'}
            radius={'md'}
            size={'md'}
            variant={'subtle'}
            color={'gray'}
            justify={'flex-start'}
          >
            Challenge
          </Button>
          <Button
            fullWidth
            component={Link}
            href={'/pi_community'}
            radius={'md'}
            size={'md'}
            variant={'subtle'}
            color={'gray'}
            justify={'flex-start'}
          >
            PI Community
          </Button>
          <Button
            fullWidth
            component={Link}
            href={'/undergraduate'}
            radius={'md'}
            size={'md'}
            variant={'subtle'}
            color={'gray'}
            justify={'flex-start'}
          >
            Undergraduate Development
          </Button>
        </Flex>
      </Drawer>
      <Burger
        lineSize={3}
        color={colors.pink1}
        onClick={openDrawer}
      />
    </>
  );
}

export default CustomDrawer;
