import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import Flex from "@/components/flex"
import Heading from "@/components/heading"
import Button from "@/components/button"
import Text from "@/components/text"
import withWrapper from "@/hoc/withWrapper"

interface HeroSectionProps {
    currentPage: number
}

const HeroSection = ({ currentPage }: HeroSectionProps) => {

    const HeadingRef = useRef<HTMLLIElement>(null);
    const ButtonRef = useRef<HTMLElement>(null);

    const elements = [
        { ref: HeadingRef, delay: 0 },
        { ref: ButtonRef, delay: 0.3 }
    ];

    useEffect(() => {
        currentPage === 0 && animateElement();
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
        <Flex $flex $align="center" $justify="space-between">
            <Flex $align="flex-start" $col $maxWidth={40} $gap={3}>
                <Heading refValue={HeadingRef} $color="white" $level={1}>Dubai dominates as top choice for UHNW primary residents</Heading>
                <Button refValue={ButtonRef} $bg="white" $color="black">
                    <Text $level={7}>Get Started</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

HeroSection.displayName = 'HeroSection';

export default withWrapper(HeroSection);