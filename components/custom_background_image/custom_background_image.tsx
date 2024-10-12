import { BackgroundImage } from '@mantine/core';
import React from 'react';

interface CustomBackgroundImageProps {
  imageSrc: string; // image URLs
  height: number | string; // Height of each image
  bgSize?: string;
  pos?: string;
}

const CustomBackgroundImage: React.FC<CustomBackgroundImageProps> = ({
  height,
  imageSrc,
  bgSize = 'cover',
  pos = 'top center',
}) => {
  return (
    <div //container for background
      style={{
        position: 'absolute', // Position is absolute to cover the entire area of the component
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: height, // Set the height for each BackgroundImage
      }}
    >
      <BackgroundImage
        src={imageSrc} //url
        style={{
          height: '100%', //Fill the container's height
          backgroundSize: bgSize, // Crop the image (cover, contain, etc)
          backgroundPosition: pos, // Anchor position of the image
        }}
      />
      <div //overlay graident to blend in the bg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%)',
          pointerEvents: 'none',
          // Ensures the gradient overlay doesn't prevent interactions with the image
        }}
      />
    </div>
  );
};

export default CustomBackgroundImage;
