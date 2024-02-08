import styled from "styled-components";

interface StyledListProps {
    $listStyle?: boolean;
    $row?:boolean;
    $gap?:number;
}

export const StyledList = styled.ul<StyledListProps>`
    ${({ $listStyle }) => $listStyle ? `list-style-type:circle;` : `list-style-type:none;`}
    ${({ $row }) => $row && `display:flex;`}
    ${({ $gap }) => $gap && `gap:${$gap}rem;`}
`

export const StyledItem = styled.li`
    font-family:Roboto;
    color:white;
`