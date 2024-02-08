import { useRef, useEffect } from "react";
import Flex from "@/components/flex";
import Heading from "@/components/heading";
import Image from "next/image";
import Imgs from "@/constants/imgs";
import withWrapper from "@/hoc/withWrapper";
import { gsap } from "gsap";

interface PopularAreaSectionProps {
    currentPage: number
}

const PopularAreaSection = ({currentPage}:PopularAreaSectionProps) => {

    const HeadingRef = useRef<HTMLLIElement>(null);
    const FirstDescriptionRef = useRef<HTMLElement>(null);
    const SecondDescriptionRef = useRef<HTMLElement>(null);
    const FirstImageRef = useRef<HTMLImageElement>(null);
    const SecondImageRef = useRef<HTMLImageElement>(null);
    const ThirdImageRef = useRef<HTMLImageElement>(null);

    const elements = [
        { ref: HeadingRef, delay: 0.3 },
        { ref: FirstDescriptionRef, delay: 0.6 },
        { ref: SecondDescriptionRef, delay: 0.9 },
        { ref: FirstImageRef, delay: 0.9 },
        { ref: SecondImageRef, delay: 1.2 },
        { ref: ThirdImageRef, delay: 1.5 }
    ];

    useEffect(() => {
        currentPage === 2 && animateElement();
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
        <Flex $align="center" $justify="space-between">
            <Flex $col $gap={1} $maxWidth={25}>
                <Heading $color="white" refValue={HeadingRef}>Popluar Areas</Heading>
                <Flex $col $gap={1}>
                    <Heading refValue={FirstDescriptionRef} $level={7} $color="white">
                        As well as being positioned on one of the exclusive Fronds of Palm Jumerah.
                    </Heading>
                    <Heading refValue={SecondDescriptionRef} $level={7} $color="white">
                        It now features the architectural talents of Chakib Richani, att from the Tabari Gallery and a host of unique touches including Flos lighting and furniture from Minotti, Poltrona Frau, Bocci and Giorgetti.
                    </Heading>
                </Flex>
            </Flex>
            <Flex $gap={2} $align="center">
                <Image ref={FirstImageRef} width={200} height={400} src={Imgs.Card} alt="card-image" className="image" />
                <Image ref={SecondImageRef} width={250} height={500} src={Imgs.Card2} alt="card-image" className="image" />
                <Image ref={ThirdImageRef} width={200} height={400} src={Imgs.Card3} alt="card-image" className="image" />
            </Flex>
        </Flex>
    )
}

PopularAreaSection.displayName = 'PopularAreaSection';

export default withWrapper(PopularAreaSection);