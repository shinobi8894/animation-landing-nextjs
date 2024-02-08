import Flex from "@/components/flex";
import { ContentWrapper } from "@/pages/global.style";
import { ComponentType } from "react";

export default function withWrapper(Component: ComponentType<any>) {
    return function WithWrapper (props: any) {
        return (
            <Flex $justify="center">
                <ContentWrapper>
                    <Component {...props} />
                </ContentWrapper>
            </Flex>
        )
    }
}