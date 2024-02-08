import { useRef, useEffect } from "react";
import Heading from "@/components/heading";
import Flex from "@/components/flex";
import Button from "@/components/button";
import Text from "@/components/text";
import withWrapper from "@/hoc/withWrapper";
import { gsap } from "gsap";

interface ViewDetailSectionProps {
    currentPage: number
}

const ViewDetailSection = ({currentPage}:ViewDetailSectionProps) => {

    const HeadingRef = useRef<HTMLElement>(null);
    const SecondHeadingRef = useRef<HTMLElement>(null);
    const ButtonRef = useRef<HTMLElement>(null);

    const elements = [
        { ref: HeadingRef, delay: 0.3 },
        { ref: SecondHeadingRef, delay: 0.6 },
        { ref: ButtonRef, delay: 0.9 }
    ];

    useEffect(() => {
        currentPage === 3 && animateElement();
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
        <Flex $col $align="flex-start" $gap={2}>
            <Flex $col $gap={1}>
                <Heading refValue={HeadingRef} $color="white" level={6}>Modern Architecture</Heading>
                <Heading refValue={SecondHeadingRef} $color="white">DOWNTOWN DUBAI VILLA</Heading>
            </Flex>
            <Button refValue={ButtonRef} $bg="white" $color="black">
                <Text $level={7}>VIEW DETAILS</Text>
            </Button>
        </Flex>
    )
}

ViewDetailSection.displayName = 'ViewDetailSection';

export default withWrapper(ViewDetailSection);