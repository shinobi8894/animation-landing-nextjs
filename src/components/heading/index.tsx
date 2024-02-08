import { ReactNode } from "react";
import StyledHeading from "./heading.style"

interface HeadingProps {
    level?:number;
    children?:ReactNode;
    refValue?:any;
    [key: string]: any;
    
}

export default function Heading ({ level=3, children, refValue, ...rest }: HeadingProps) {
    return(
        <StyledHeading ref={refValue} $level={level} as={`h${level}`} {...rest}>
            {
                children
            }
        </StyledHeading>
    )
}