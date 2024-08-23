import {
  MantineSize,
  ScrollArea,
  SegmentedControl,
  SegmentedControlItem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ScrollableSegmentedControlProps {
  segmentData: (string | SegmentedControlItem)[];
  scrollbars?: 'x' | 'y' | 'xy';
  scrollType?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';
  scrollSize?: number;
  offsetScrollbars?: boolean | 'x' | 'y';
  segmentWidth?: string | number;
  segmentSize?: MantineSize;
  segmentRadius?: string;
  segmentFgColor?: string;
  segmentBgColor?: string;
}

function ScrollableSegmentedControl({
  segmentData,
  scrollbars = 'x',
  scrollType = 'hover',
  offsetScrollbars = true,
  segmentRadius = 'md',
  segmentFgColor = 'grape',
  segmentBgColor = '#262626',
  scrollSize,
  segmentWidth,
  segmentSize,
}: ScrollableSegmentedControlProps) {
  const isMobile = useMediaQuery('(max-width: 48em)', true, {
    getInitialValueInEffect: false,
  });

  return (
    // TODO - Make Scrolling to Selection Smooth and Animated
    <ScrollArea
      scrollbars={scrollbars}
      type={scrollType}
      scrollbarSize={scrollSize ?? isMobile ? 6 : 10}
      offsetScrollbars={offsetScrollbars}
    >
      <SegmentedControl
        w={segmentWidth ?? isMobile ? '100%' : 'auto'}
        size={segmentSize ?? isMobile ? 'xs' : 'md'}
        radius={segmentRadius}
        color={segmentFgColor}
        bg={segmentBgColor}
        data={segmentData}
      />
    </ScrollArea>
  );
}

export default ScrollableSegmentedControl;
