import StyledFlex from './flex.style';
import { ReactNode } from 'react';

interface FlexProps {
    children: ReactNode;
    [key: string]: any;
    refValue?:any;
}

export default function Flex({ children, refValue, ...rest }: FlexProps) {
    return (
        <StyledFlex ref={refValue} {...rest}>
            {
                children
            }
        </StyledFlex>
    )
}