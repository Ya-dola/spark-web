import { ReactNode } from 'react';
import {
  AppShell,
  Box,
  Flex,
  Image,
  MantineSpacing,
  ScrollArea,
  UnstyledButton,
} from '@mantine/core';
import { useHeadroom, useViewportSize } from '@mantine/hooks';
import Link from 'next/link';
import NextImage from 'next/image';
import CustomDrawer from '@/components/custom_drawer/custom_drawer';
import logoTransparent from '@/public/images/spark_logo_transparent.png';
import { useIsMobile } from '@/utils/breakpoint_utils';
import ImageGrid from '@/components/image_grid/image_grid';
import CustomFooter from '@/components/custom_footer/custom_footer';

interface CustomAppShellProps {
  children: ReactNode;
  imageSrc?: string[];
  height?: number;
  width?: number | string;
  padding?: MantineSpacing;
}

function CustomAppShell({
  imageSrc = [],
  height = 900,
  width = '100%',
  padding = 0,
  children,
}: CustomAppShellProps) {
  const pinned = useHeadroom({ fixedAt: 30 });
  const { height: viewportHeight, width: viewportWidth } = useViewportSize();
  const isMobile = useIsMobile();
  const imageGrid = (
    <ImageGrid
      imageSrc={imageSrc}
      height={height}
      width={width}
    />
  );
  const headerHeight = 60;
  // TODO - Fix value for the footer height to be consistent across different devices
  const footerHeight = 350;

  return (
    <AppShell
      header={{
        height: headerHeight,
        collapsed: isMobile ? !pinned : false,
        offset: false,
      }}
      padding={padding}
    >
      <AppShell.Header zIndex={200}>
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

      {/* <ScrollArea
        style={{
          height: `calc(${viewportHeight}px) `,
        }}
        styles={{
          viewport: {
            position: 'relative', // Ensure it remains in flow
            zIndex: 1, // Custom z-index for viewport content
          },
          scrollbar: {
            zIndex: 10, // Ensure scrollbar is above the content
          },
          thumb: {
            zIndex: 20, // Ensure scrollbar thumb is above everything else
          },
        }}
      > */}
      <AppShell.Main
        style={{ position: 'relative', zIndex: 2 }}
        mt={headerHeight}
        mb={footerHeight}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
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

          <div
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            {children}
          </div>
        </div>
      </AppShell.Main>

      <AppShell.Footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0, // behind the main content
          pointerEvents: 'auto',
        }}
      >
        <CustomFooter />
      </AppShell.Footer>
      {/* </ScrollArea> */}
    </AppShell>
  );
}
{
}

export default CustomAppShell;
