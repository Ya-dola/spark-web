import NextImage from 'next/image';
import { Image } from '@mantine/core';

interface CustomImageProps {
  imageSrc?: string;
  width?: number;
  height?: number;
  radius?: string;
  alt?: string;
}

function CustomImage({
  width,
  height,
  radius,
  imageSrc = '',
  alt = '',
}: CustomImageProps) {
  return (
    <Image
      component={NextImage}
      fit={'contain'}
      height={height}
      width={width}
      radius={radius}
      src={imageSrc}
      alt={alt}
    />
  );
}

export default CustomImage;
