import { Image, Text, Space, List, Flex } from '@mantine/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import theme from '@/components/carousel_tab/carousel_tab.module.css';
import { TabDetails } from '@/models/tab_details/tab_details';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { colors } from '@/utils/color_utils';

interface CarouselTabProps {
  width?: number;
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

  // State to track which event is currently active in the carousel
  const [activeEventIndex, setActiveEventIndex] = useState(eventIndex ?? 0);
  // Callback to handle carousel index change
  const handleCarouselChange = useCallback(
    (index: number) => {
      setActiveEventIndex(index); // Update active event index
      onCarouselChange?.(index); // Call onCarouselChange handler if provided
    },
    [onCarouselChange],
  );

  // Effect to sync external eventIndex prop with internal state
  useEffect(() => {
    if (eventIndex !== undefined) {
      handleCarouselChange(eventIndex); // Update active index based on prop change
    }
  }, [eventIndex, handleCarouselChange]);

  return (
    <Carousel
      slideSize={'100%'}
      loop
      align={'center'} //Center slides in carousel
      draggable={events.length > 1} // Allow dragging if more than one event
      withControls={!isMobile && events.length > 1} // Show controls only on non-mobile devices with multiple events
      nextControlIcon={'Next'}
      previousControlIcon={'Previous'}
      controlsOffset={'12rem'}
      withIndicators={events.length > 1} // Show indicators if there's more than one event
      slidesToScroll={1} // Number of slides to scroll at a time
      onSlideChange={handleCarouselChange} // Handle slide change event
      initialSlide={eventIndex} // Set the initial slide based on the external index
      classNames={theme}
      style={{
        '--active-color': headingColor,
        '--default-color': colors.pink1,
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop} // Stop autoplay on mouse enter
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
                activeEventIndex === index // Scale effect based on active index
                  ? 'scale(1)'
                  : `scale(${isMobile ? 0.96 : 0.8})`,
              transition: 'transform 0.3s ease', // Smooth transition for scaling
              zIndex: activeEventIndex === index ? 1 : 0, // Bring active event to the front
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
              {/*DESCRIPTIONS*/}
              <Flex
                w={'100%'}
                direction={isMobile ? 'column' : 'column'}
                align={'center'}
              >
                {/* Display winner badge if applicable */}
                {isWinner && (
                  <svg //vector icon
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
                      d='M0 0h24v24H0z' // Clear path to prevent fill
                      fill='none'
                    />
                    <path d='M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' />{' '}
                    {/* Winner icon path */}
                  </svg>
                )}
                {/* Heading */}
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
              {/* Show members if there any */}
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
                    {/* Max 5 members */}
                    {event.members.slice(0, 5).map((member, index) => (
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
