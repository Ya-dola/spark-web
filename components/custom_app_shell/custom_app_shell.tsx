import { ReactNode } from 'react';
import {
  AppShell,
  Flex,
  Image,
  MantineSpacing,
  rem,
  UnstyledButton,
} from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import Link from 'next/link';
import NextImage from 'next/image';
import CustomDrawer from '@/components/custom_drawer/custom_drawer';
import logoTransparent from '@/public/images/spark_logo_transparent.png';
import { useIsMobile } from '@/utils/breakpoint_utils';
import ImageGrid from '@/components/image_grid/image_grid';

interface CustomAppShellProps {
  children: ReactNode;
  imageSrc?: string[];
  backgroundHeight?: number | string;
  width?: number | string;
  padding?: MantineSpacing;
}

function CustomAppShell({
  imageSrc = [],
  backgroundHeight = 900,
  width = '100%',
  padding = 'md',
  children,
}: CustomAppShellProps) {
  const pinned = useHeadroom({ fixedAt: 30 });
  const isMobile = useIsMobile();
  const imageGrid = (
    <ImageGrid
      imageSrc={imageSrc}
      height={backgroundHeight}
      width={width}
    />
  );

  return (
    <AppShell
      header={{
        height: 60,
        collapsed: isMobile ? !pinned : false,
        offset: false,
      }}
      padding={padding}
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
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          {imageGrid}
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <AppShell.Main
            style={{ position: 'relative', zIndex: 1 }}
            pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}
          >
            {children}
          </AppShell.Main>
        </div>
      </div>
    </AppShell>
  );
}

export default CustomAppShell;
