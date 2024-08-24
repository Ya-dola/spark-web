import { Image, Text, Card, MantineSize } from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';

interface ButtonCardProps {
  heading: string;
  description: string;
  href?: string;
  imageSrc?: string;
  height?: number;
  width?: number;
  radius?: string;
  bgColor?: string;
  textColor?: string;
  headingSize?: MantineSize;
  headingWeight?: number;
  textSize?: MantineSize;
}

function ButtonCard({
  heading,
  description,
  href = '',
  imageSrc = '',
  height,
  width,
  radius = 'md',
  bgColor = 'purple',
  textColor = 'white',
  headingSize = 'lg',
  headingWeight = 700,
  textSize = 'sm',
}: ButtonCardProps) {
  const cardHeight = height ?? 200 * 2;

  return (
    <Card
      h={cardHeight}
      w={width}
      bg={bgColor}
      padding={'xl'}
      component={Link}
      href={href}
      radius={radius}
    >
      <Card.Section>
        <Image
          component={NextImage}
          height={height}
          width={width}
          src={imageSrc}
          alt={'My image'}
          fit={'contain'}
        />
      </Card.Section>

      <Text
        c={textColor}
        fw={headingWeight}
        size={headingSize}
        mt={'md'}
      >
        {heading}
      </Text>
      <Text
        c={textColor}
        size={textSize}
        mt={'md'}
      >
        {description}
      </Text>

      <Text
        td={'underline'}
        mt={'auto'}
        ml={'auto'}
      >
        Learn More
      </Text>
    </Card>
  );
}

export default ButtonCard;
