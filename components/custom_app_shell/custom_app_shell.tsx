import { ReactNode } from 'react';
import { AppShell, Flex, Image, rem, UnstyledButton } from '@mantine/core';
import { useHeadroom, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import NextImage from 'next/image';
import CustomDrawer from '@/components/custom_drawer/custom_drawer';
import logoTransparent from '@/public/images/spark_logo_transparent.png';

interface CustomAppShellProps {
  children: ReactNode;
}

function CustomAppShell({ children }: CustomAppShellProps) {
  const pinned = useHeadroom({ fixedAt: 30 });
  // TODO - Make it use breakpoint from theme
  const isMobile = useMediaQuery('(max-width: 48em)', true, {
    getInitialValueInEffect: false,
  });

  return (
    <AppShell
      header={{
        height: 60,
        collapsed: isMobile ? !pinned : false,
        offset: false,
      }}
      padding={'md'}
    >
      <AppShell.Header>
        <Flex
          direction={'row'}
          gap={'md'}
          px={'md'}
          py={'xs'}
          align={'center'}
        >
          <UnstyledButton
            component={Link}
            href={'/home'}
            mr={'auto'}
          >
            <Image
              h={40}
              w={'auto'}
              fit={'contain'}
              component={NextImage}
              src={logoTransparent}
              alt={'My image'}
            />
          </UnstyledButton>
          <CustomDrawer />
        </Flex>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default CustomAppShell;
