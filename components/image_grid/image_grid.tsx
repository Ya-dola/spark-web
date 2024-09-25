import { BackgroundImage } from '@mantine/core';
import React from 'react';

interface ImageGridProps {
  imageSrc: string[]; // Array of image URLs
  height: number | string; // Height of each image
  width: string | number;
  bgSize?: string;
  pos? : string;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  height = '100%',
  imageSrc = [],
  width = '100%',
  bgSize = 'cover',
  pos = 'top center',
}) => {
  const containerHeight =
    typeof height === 'number'
      ? imageSrc.length * height
      : `calc(${imageSrc.length} * ${height})`;
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: containerHeight,
        display: 'flex',
        flexDirection: 'column', // Change to ‘row’ if you want a horizontal layout
      }}
    >
      {imageSrc.map((src, index) => (
        <>
          <BackgroundImage
            key={index} // Use index as key; consider unique identifiers
            src={src} //url
            style={{
              height: height, // Set the height for each BackgroundImage
              backgroundSize: bgSize, // Crop the image
              backgroundPosition: pos, // Center the image at the top
              width: width, // Fill the container’s width
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%)',
              pointerEvents: 'none', // Ensures the gradient overlay doesn't prevent interactions with the image
            }}
          />
        </>
      ))}
    </div>
  );
};

export default ImageGrid;
