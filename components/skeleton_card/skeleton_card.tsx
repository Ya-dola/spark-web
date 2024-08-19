import { Center, Paper } from '@mantine/core';
import theme from './skeleton_card.module.css';

interface SkeletonCardProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  radius?: string;
  width?: number;
  height?: number;
  textSize?: string;
  textWeight?: number;
}

function SkeletonCard({
  text,
  width,
  height,
  bgColor = 'purple',
  textColor = 'white',
  radius = 'md',
  textSize = 'md',
  textWeight = 500,
}: SkeletonCardProps) {
  return (
    <Paper
      className={`${theme.SkeletonCard}`}
      px={'md'}
      py={'sm'}
      h={height}  
      w={width}
      radius={radius}
      bg={bgColor}
      c={textColor}
    >
      <Center
        fz={textSize}
        fw={textWeight}
        h={'100%'}
      >
        {text}
      </Center>
    </Paper>
  );
}

export default SkeletonCard;
