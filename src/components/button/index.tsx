import StyledButton from "./button.style";
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    [key: string]: any;
    refValue?:any;
}

export default function Button({ children, refValue, ...rest }: ButtonProps) {
    return (
        <StyledButton ref={refValue} {...rest}>
            {
                children
            }
        </StyledButton>
    )
}