import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { FeatureSectionSlideWrapper } from "../index.style";
import { FeatureSectionSlideGrid } from "../index.style";
import { Overlay } from "../index.style";

import Flex from "@/components/flex";
import Heading from "@/components/heading";
import Image from "next/image";
import Text from "@/components/text";
import Imgs from "@/constants/imgs";
import withWrapper from "@/hoc/withWrapper";

const { Bg, Bg2 } = Imgs;

interface FeaturedSectionProps {
    currentPage: number
}

const FeaturedSection = ({ currentPage }: FeaturedSectionProps) => {

    const HeadingRef = useRef<HTMLLIElement>(null);
    const DescriptionRef = useRef<HTMLElement>(null);
    const FirstCardRef = useRef<HTMLElement>(null);
    const SecondCardRef = useRef<HTMLElement>(null);
    const ThirdCardRef = useRef<HTMLElement>(null);

    const elements = [
        { ref: HeadingRef, delay: 0.3 },
        { ref: DescriptionRef, delay: 0.6 },
        { ref: FirstCardRef, delay: 0.9 },
        { ref: SecondCardRef, delay: 1.2 },
        { ref: ThirdCardRef, delay: 1.5 },
    ];

    useEffect(() => {
        currentPage === 1 && animateElement();
    }, [currentPage])

    const animateElement = () => {
        elements.forEach(({ ref, delay }, index) => {
            gsap.from(ref.current, {
                duration: 0.9,
                delay: delay + index * 0.05,
                autoAlpha: 0,
                y: -30,
            });
        });
    }

    return (
        <Flex $col $gap={3}>
            <Flex $justify="space-between">
                <Heading refValue={HeadingRef} $color="white">Featured Apartments</Heading>
                <Heading refValue={DescriptionRef} $color="white" $level={7} $maxWidth={30}>Delattio’s International Realty is excited to present the listing for this
                    bespoke 4-bedroom Garden Homes villa on Frond N, Palm Jumeirah.

                    As well as being positioned on one of the exclusive Fronds of Palm Jumeirah,
                    this exceptional Garden Homes villa has been expertly designed and fully
                    customised to create a dream luxury property.</Heading>
            </Flex>
            <FeatureSectionSlideGrid>
                <Flex $col $gap={2} refValue={FirstCardRef}>
                    <FeatureSectionSlideWrapper>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <Overlay />
                                <Image fill objectFit="cover" src={Bg.src} alt="slide-img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Overlay />
                                <Image fill objectFit="cover" src={Bg2.src} alt="slide-img" />
                            </SwiperSlide>
                        </Swiper>
                    </FeatureSectionSlideWrapper>
                    <Flex $col $gap={1}>
                        <Heading $color="white" $level={7}>DOWNTOWN DUBAI PENTHOUSE</Heading>
                        <Flex>
                            <Text $color="white" $level={7}>PENTHOUSE</Text>
                            <Text $color="white" $level={7}>3 BEDS</Text>
                            <Text $color="white" $level={7}>13,000 SQ.FT</Text>
                            <Text $color="white" $level={7}>READY</Text>
                        </Flex>
                        <Heading $color="white" level={7}>AED 144,220,00</Heading>
                    </Flex>
                </Flex>
                <Flex $col $gap={2} refValue={SecondCardRef}>
                    <FeatureSectionSlideWrapper>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <Overlay />
                                <Image fill objectFit="cover" src={Bg.src} alt="slide-img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Overlay />
                                <Image fill objectFit="cover" src={Bg2.src} alt="slide-img" />
                            </SwiperSlide>
                        </Swiper>
                    </FeatureSectionSlideWrapper>
                    <Flex $col $gap={1}>
                        <Heading $color="white" $level={7}>DOWNTOWN DUBAI PENTHOUSE</Heading>
                        <Flex>
                            <Text $color="white" $level={7}>PENTHOUSE</Text>
                            <Text $color="white" $level={7}>3 BEDS</Text>
                            <Text $color="white" $level={7}>13,000 SQ.FT</Text>
                            <Text $color="white" $level={7}>READY</Text>
                        </Flex>
                        <Heading $color="white" level={7}>AED 144,220,00</Heading>
                    </Flex>
                </Flex>
                <Flex $col $gap={2} refValue={ThirdCardRef}>
                    <FeatureSectionSlideWrapper>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <Overlay />
                                <Image fill objectFit="cover" src={Bg.src} alt="slide-img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Overlay />
                                <Image fill objectFit="cover" src={Bg2.src} alt="slide-img" />
                            </SwiperSlide>
                        </Swiper>
                    </FeatureSectionSlideWrapper>
                    <Flex $col $gap={1}>
                        <Heading $color="white" $level={7}>DOWNTOWN DUBAI PENTHOUSE</Heading>
                        <Flex>
                            <Text $color="white" $level={7}>PENTHOUSE</Text>
                            <Text $color="white" $level={7}>3 BEDS</Text>
                            <Text $color="white" $level={7}>13,000 SQ.FT</Text>
                            <Text $color="white" $level={7}>READY</Text>
                        </Flex>
                        <Heading $color="white" level={7}>AED 144,220,00</Heading>
                    </Flex>
                </Flex>
            </FeatureSectionSlideGrid>
        </Flex>
    )
}

FeaturedSection.displayName = 'FeaturedSection';

export default withWrapper(FeaturedSection);