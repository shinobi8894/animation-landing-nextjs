import { StyledItem, StyledList } from "./list.style";
import { ReactNode } from 'react';
import React from 'react';

interface ListProps {
    children: ReactNode;
    [key: string]: any;
}

export default function List({ children, ...rest }: ListProps) {
    return (
        <StyledList {...rest}>
            {
                children
            }
        </StyledList>
    )
}

export function Item ({ children, ...rest }: ListProps) {
    return (
        <StyledItem {...rest}>
            {
                children
            }
        </StyledItem>
    )
}

