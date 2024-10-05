import { Image, Text, Space, List, Box, Flex } from '@mantine/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import theme from '@/components/carousel_card/carousel_card.module.css';
import { TabDetails } from '@/models/community/community_tabs_model';
import { useIsMobile } from '@/utils/breakpoint_utils';
import { colors } from '@/utils/color_utils';

interface CarouselTabProps {
  width?: number;
  carouselHeight?: string | number;
  slideSize?: string;
  headingColor?: string;
  descriptionColor?: string;
  autoPlayDelay?: number;
  events?: TabDetails[];
  onCarouselChange?: (index: number) => void;
  eventIndex?: number;
}

function CarouselTab({
  events = [],
  carouselHeight = 650,
  slideSize = '100%',
  headingColor = 'white',
  descriptionColor = '#cacaca',
  autoPlayDelay = 10000,
  onCarouselChange,
  eventIndex,
}: CarouselTabProps) {
  const autoplay = useRef(Autoplay({ delay: autoPlayDelay }));
  const isMobile = useIsMobile();
  const characterLimit = 500; // Set your desired character limit

  // Function to truncate string
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
      height={carouselHeight}
      slideSize={{ base: '100%', sm: '100%', md: slideSize }}
      slideGap={{ base: 0, sm: 'xs' }}
      loop
      align='center'
      draggable={events.length > 1}
      withControls={events.length > 1}
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
            p={'lg'}
            direction={isMobile ? 'column' : 'row'}
            gap={isMobile ? 'lg' : ''}
            justify={'center'}
            align={'flex-start'}
            bg={colors.black1}
            style={{
              transform: activeEventIndex === index ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.3s ease',
              zIndex: activeEventIndex === index ? 1 : 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {/* DESCRIPTIONS */}
            <Flex
              direction={'column'}
              justify={'center'}
              align={'flex-start'}
              px={'xl'}
              mr={'lg'}
              w={'60%'}
            >
              <Text
                fz={'h2'}
                fw={700}
                c={headingColor}
              >
                {event.name}
              </Text>

              <Space h={'lg'} />

              <Text
                fz={'lg'}
                fw={600}
                c={descriptionColor}
              >
                {truncateDescription(event.description)}
              </Text>
              <Space h={'lg'} />

              <Space h={'lg'} />

              {event.members?.length > 0 && (
                <>
                  <Text fz={'lg'}>Team Members</Text>

                  <List listStyleType={'disc'}>
                    {event.members.map((member, index) => (
                      <List.Item
                        key={index}
                        fz={'md'}
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
              gap={'xs'}
              w={'100%'}
            >
              {event.images.length === 1 ? (
                <div
                  style={{
                    width: '100%',
                    height: '450px', // Full height for one image
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={event.images[0]}
                    alt={`${event.name} | Image`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // Maintains aspect ratio and crops image
                      objectPosition: 'top',
                    }}
                  />
                </div>
              ) : (
                event.images.slice(0, 2).map((image, index) => (
                  <div
                    key={index}
                    style={{
                      width: '80%', // Full width for image container
                      height: 'calc(50% - 5px)', // Half height minus margin for two images
                      overflow: 'hidden',
                      marginBottom: index < 1 ? '5px' : '0', // Space between images
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${event.name} | Image: ${index}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Maintains aspect ratio and crops image
                        objectPosition: 'top',
                      }}
                    />
                  </div>
                ))
              )}
            </Flex>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default CarouselTab;
