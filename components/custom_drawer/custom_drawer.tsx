import { Image, Burger, Button, Drawer, Flex, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { colors } from '@/utils/color_utils';
import { images } from '@/utils/image_utils';

function CustomDrawer() {
  // Bool to check the state of the drawer
  const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Drawer
        // Check if the drawer is open
        opened={isDrawerOpen}
        // Function to close the drawer
        onClose={closeDrawer}
        // Set drawer to appear on the right side of the screen
        position={'right'}
        // Customize the close button
        closeButtonProps={{ size: 'xl', c: colors.pink1 }}
        // Set background opacity and blur for the overlay
        overlayProps={{ backgroundOpacity: 0.3, blur: 2.4 }}
        title={
          <Image
            h={'2.5rem'}
            w={'auto'}
            fit={'contain'}
            // Spark Logo for the drawer header
            src={images.sparkLogoTransparent}
            alt={'Spark Logo'}
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
            mb={'md'}
          />
          {/* Navigation buttons linking to different routes */}
          <Button
            fullWidth
            component={Link}
            href={'/'}
            radius={'md'}
            size={'md'}
            variant={'subtle'}
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
        // Open the drawer when clicked
        onClick={openDrawer}
      />
    </>
  );
}

export default CustomDrawer;
