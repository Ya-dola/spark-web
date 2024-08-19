import { Burger, Button, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

function CustomDrawer() {
  const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Drawer
        opened={isDrawerOpen}
        onClose={closeDrawer}
        position={'right'}
        closeButtonProps={{ size: 'xl', c: 'grape' }}
        overlayProps={{ backgroundOpacity: 0.3, blur: 2.4 }}
      >
        <Flex
          direction={'column'}
          justify={'flex-start'}
          align={'flex-start'}
          gap={'md'}
        >
          <Button
            fullWidth
            component={Link}
            href={'/home'}
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
          </Button>{' '}
          <Button
            fullWidth
            component={Link}
            href={'/'}
            radius={'md'}
            size={'md'}
            variant={'subtle'}
            color={'red'}
            justify={'flex-start'}
          >
            Leave Spark Web App
          </Button>
        </Flex>
      </Drawer>
      <Burger
        lineSize={3}
        color={'grape'}
        onClick={openDrawer}
      />
    </>
  );
}

export default CustomDrawer;
