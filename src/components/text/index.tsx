import { ReactNode } from "react";
import StyledText from "./text.style";

interface TextProps {
    children: ReactNode;
    [key: string]: any;
    $level?:number;
}

export default function Text({ children, $level=3, ...rest }: TextProps) {
    return (
        <StyledText $level={$level} {...rest}>
            {
                children
            }
        </StyledText>
    )
}