import { BackgroundImage } from '@mantine/core';
import React from 'react';

interface ImageGridProps {
  imageSrc: string[]; // Array of image URLs
  height: number; // Height of each image
}

const ImageGrid: React.FC<ImageGridProps> = ({
  height = 300,
  imageSrc = [],
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: height * imageSrc.length,
        display: 'flex',
        flexDirection: 'column', // Change to ‘row’ if you want a horizontal layout
      }}
    >
      {imageSrc.map((src, index) => (
        <BackgroundImage
          key={index} // Use index as key; consider unique identifiers
          src={src}
          style={{
            height: height, // Set the height for each BackgroundImage
            backgroundSize: 'cover', // Crop the image
            backgroundPosition: 'top center', // Center the image
            width: '100%', // Fill the container’s width
          }}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
