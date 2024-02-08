import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { OffPlanSectionImageWrapper } from "../index.style";
import Flex from "@/components/flex";
import Heading from "@/components/heading";
import Image from "next/image";
import Imgs from "@/constants/imgs";
import withWrapper from "@/hoc/withWrapper";

const { Card4, Card5, Card6, Card7, Card8 } = Imgs;

interface HeroSectionProps {
    currentPage: number
}

const OffPlanSection = ({ currentPage }: HeroSectionProps) => {

    const HeadingRef = useRef<HTMLLIElement>(null);
    const FirstImageRef = useRef<HTMLImageElement>(null);
    const SecondImageRef = useRef<HTMLImageElement>(null);
    const ThirdImageRef = useRef<HTMLImageElement>(null);
    const FourthImageRef = useRef<HTMLImageElement>(null);
    const FifthImageRef = useRef<HTMLImageElement>(null);

    const elements = [
        { ref: HeadingRef, delay: 0.3 },
        { ref: FirstImageRef, delay: 0.6 },
        { ref: SecondImageRef, delay: 0.9 },
        { ref: ThirdImageRef, delay: 1.2 },
        { ref: FourthImageRef, delay: 1.5 },
        { ref: FifthImageRef, delay: 1.8 },
    ];

    useEffect(() => {
        currentPage === 4 && animateElement();
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
        <Flex $col $align="center" $gap={3}>
            <Heading $color="white" refValue={HeadingRef}>Off-Plan properties</Heading>
            <Flex $gap={2}>
                <OffPlanSectionImageWrapper>
                    <Image ref={FirstImageRef} width={250} height={500} src={Card4.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image ref={SecondImageRef} width={250} height={500} src={Card5.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image ref={ThirdImageRef} width={250} height={500} src={Card6.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image ref={FourthImageRef} width={250} height={500} src={Card7.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image ref={FifthImageRef} width={250} height={500} src={Card8.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
            </Flex>
        </Flex>
    )
}

OffPlanSection.displayName = "OffPlanSection";

export default withWrapper(OffPlanSection);