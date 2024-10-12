import { Image, Text, Space, List, Flex } from '@mantine/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import theme from '@/components/carousel_tab/carousel_tab.module.css';
import { TabDetails } from '@/models/community/community_tabs_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { colors } from '@/utils/color_utils';

interface CarouselTabProps {
  width?: number;
  slideSize?: string;
  headingColor?: string;
  descriptionColor?: string;
  autoPlayDelay?: number;
  events?: TabDetails[];
  onCarouselChange?: (index: number) => void;
  eventIndex?: number;
  isWinner?: boolean;
}

function CarouselTab({
  events = [],
  slideSize = '100%',
  headingColor = 'white',
  descriptionColor = '#cacaca',
  autoPlayDelay = 8000,
  onCarouselChange,
  eventIndex,
  isWinner = false,
}: CarouselTabProps) {
  const autoplay = useRef(Autoplay({ delay: autoPlayDelay }));
  const isMobile = useIsMobile();
  const characterLimit = 800;

  // Truncate Description to Max Character Length
  const truncateDescription = (description: string): string => {
    if (description.length > characterLimit) {
      return description.slice(0, characterLimit) + '...';
    }
    return description;
  };

  // Events
  const [activeEventIndex, setActiveEventIndex] = useState(eventIndex ?? 0);
  const handleCarouselChange = useCallback(
    (index: number) => {
      setActiveEventIndex(index);
      onCarouselChange?.(index);
    },
    [onCarouselChange],
  );

  useEffect(() => {
    if (eventIndex !== undefined) {
      handleCarouselChange(eventIndex);
    }
  }, [eventIndex, handleCarouselChange]);

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '100%', md: slideSize }}
      slideGap={{ base: 0, sm: 'xs' }}
      loop
      align={'center'}
      draggable={events.length > 1}
      withControls={!isMobile && events.length > 1}
      nextControlIcon={'Next'}
      previousControlIcon={'Previous'}
      controlsOffset={'12rem'}
      withIndicators={events.length > 1}
      slidesToScroll={1}
      onSlideChange={handleCarouselChange}
      initialSlide={eventIndex}
      classNames={theme}
      style={{
        '--active-color': headingColor,
        '--default-color': colors.pink1,
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {events.map((event, index) => (
        <Carousel.Slide key={index}>
          <Flex
            p={isMobile ? 'sm' : 'lg'}
            direction={isMobile ? 'column' : 'row'}
            gap={isMobile ? 'md' : ''}
            justify={isMobile ? 'start' : 'center'}
            align={'flex-start'}
            bg={colors.black1 + '60'}
            style={{
              transform:
                activeEventIndex === index
                  ? 'scale(1)'
                  : `scale(${isMobile ? 0.96 : 0.8})`,
              transition: 'transform 0.3s ease',
              zIndex: activeEventIndex === index ? 1 : 0,
              width: '100%',
              height: '100%',
              borderRadius: '1.5rem',
              borderTopLeftRadius: '0',
              borderTopRightRadius: isMobile ? '0' : '1.5rem',
              overflow: 'hidden',
              marginBottom: '2rem',
            }}
          >
            <Flex
              direction={'column'}
              justify={'center'}
              align={'flex-start'}
              px={isMobile ? '' : 'xl'}
              w={isMobile ? '100%' : '90%'}
            >
              <Flex
                w={'100%'}
                direction={isMobile ? 'column' : 'column'}
                align={'center'}
              >
                {isWinner && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='80'
                    height='80'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#1f68d6'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path
                      stroke='none'
                      d='M0 0h24v24H0z'
                      fill='none'
                    />
                    <path d='M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' />
                  </svg>
                )}
                <Text
                  fz={isMobile ? 'h2' : 'h1'}
                  fw={700}
                  c={headingColor}
                >
                  {event.name}
                </Text>
              </Flex>
              <Space h={'lg'} />
              <Text
                fz={isMobile ? 'sm' : 'md'}
                fw={400}
                c={descriptionColor}
              >
                {truncateDescription(event.description)}
              </Text>
              {event.members?.length > 0 && (
                <>
                  <Space h={'2rem'} />
                  <Text
                    fz={isMobile ? 'md' : 'lg'}
                    fw={700}
                  >
                    Team Members
                  </Text>
                  <List listStyleType={'disc'}>
                    {event.members.map((member, index) => (
                      <List.Item
                        key={index}
                        fz={isMobile ? 'sm' : 'md'}
                      >
                        {member}
                      </List.Item>
                    ))}
                  </List>
                </>
              )}
            </Flex>

            {/* IMAGES */}
            <Flex
              direction={'column'}
              justify={'center'}
              align={'center'}
              gap={'sm'}
              w={'100%'}
              style={{
                height: isMobile ? '20rem' : '38rem',
                overflow: 'hidden',
              }}
            >
              {/* // Max of 2 Images for Carousel */}
              {event.images.slice(0, 2).map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${event.name} | Image: ${index}`}
                  style={{
                    height: event.images.length <= 1 ? '100%' : '50%',
                    // Maintains aspect ratio and crops image
                    objectFit: isMobile ? 'contain' : 'cover',
                    objectPosition: 'center',
                    borderRadius: '0.75rem',
                  }}
                />
              ))}
            </Flex>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default CarouselTab;
