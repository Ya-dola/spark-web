import { useIsMobile } from '@/utils/breakpoint_utils';
import { colors } from '@/utils/color_utils';
import {
  MantineSize,
  ScrollArea,
  SegmentedControl,
  SegmentedControlItem,
} from '@mantine/core';

interface ScrollableSegmentedControlProps {
  segmentData: (string | SegmentedControlItem)[];
  scrollbars?: 'x' | 'y' | 'xy';
  scrollType?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';
  scrollSize?: number;
  offsetScrollbars?: boolean | 'x' | 'y';
  scrollWidth?: string | number;
  segmentWidth?: string | number;
  segmentSize?: MantineSize;
  segmentRadius?: string;
  segmentFgColor?: string;
  segmentBgColor?: string;
  onChange?: (value: string) => void;
  value?: string;
}

function ScrollableSegmentedControl({
  segmentData,
  scrollbars = 'x',
  scrollType = 'hover',
  offsetScrollbars = true,
  segmentRadius = 'md',
  segmentFgColor = colors.purple1,
  segmentBgColor = colors.black1,
  scrollSize,
  scrollWidth = '100%',
  segmentWidth,
  segmentSize,
  onChange,
  value,
}: ScrollableSegmentedControlProps) {
  const isMobile = useIsMobile();

  return (
    // TODO - Make Scrolling to Selection Smooth and Animated
    <ScrollArea
      w={scrollWidth}
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
        onChange={onChange}
        value={value}
      />
    </ScrollArea>
  );
}

export default ScrollableSegmentedControl;
