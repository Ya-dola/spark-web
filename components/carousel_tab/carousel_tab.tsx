import { Image, Text, Space, List, Flex } from '@mantine/core';
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
  const characterLimit = 500;

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
            gap={isMobile ? 'xs' : ''}
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
            <Flex
              direction={'column'}
              justify={'center'}
              align={'flex-start'}
              px={isMobile ? '' : 'xl'}
              mr={'lg'}
              w={isMobile ? '100%' : '60%'}
            >
              <Text
                fz={'h1'}
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

              {event.members?.length > 0 && (
                <>
                  <Space h={'2rem'} />

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
              style={{
                height: isMobile ? '26rem' : '36rem',
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
