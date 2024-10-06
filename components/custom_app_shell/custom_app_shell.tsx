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
import logoTransparent from '@/public/images/logo/spark_logo_transparent.png';
import { useIsMobile } from '@/utils/breakpoint_utils';
import ImageGrid from '@/components/image_grid/image_grid';
import { images } from '@/utils/image_utils';

interface CustomAppShellProps {
  children: ReactNode;
  imageSrc?: string;
  backgroundHeight?: number | string;
  width?: number | string;
  padding?: MantineSpacing;
  bgSize?: string;
  pos?: string;
}

function CustomAppShell({
  imageSrc = '',
  backgroundHeight = 900,
  padding = 'md',
  children,
  bgSize = 'cover',
  pos = 'top center',
}: CustomAppShellProps) {
  const pinned = useHeadroom({ fixedAt: 30 });
  const isMobile = useIsMobile();
  const imageGrid = (
    <ImageGrid
      imageSrc={imageSrc}
      height={backgroundHeight}
      bgSize={bgSize}
      pos={pos}
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
            href={'/'}
            mr={'auto'}
          >
            <Image
              h={40}
              w={'auto'}
              fit={'contain'}
              // component={NextImage}
              src={images.sparkLogoTransparent}
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
