import { Image, Burger, Button, Drawer, Flex, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { colors } from '@/utils/color_utils';
import { images } from '@/utils/image_utils';


function CustomDrawer() {
  //Bool to check the state of the drawer
  const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Drawer
        opened={isDrawerOpen} //check if drawer is open 
        onClose={closeDrawer} //close drawer
        position={'right'}
        closeButtonProps={{ size: 'xl', c: colors.pink1 }}
        overlayProps={{ backgroundOpacity: 0.3, blur: 2.4 }}
        title={
          <Image
            h={'2.5rem'}
            w={'auto'}
            fit={'contain'}
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
        onClick={openDrawer} //open the drawer when clicked
      />
    </>
  );
}

export default CustomDrawer;
