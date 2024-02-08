import styled from 'styled-components';

interface StyledFlexProps {
    $align?:string;
    $justify?:string;
    $col?:boolean;
    $flex?:boolean;
    $maxWidth?:number;
    $gap?:number;
    $bg?:string;
    $radius?:number;
    $padding?:string;
}

const StyledFlex = styled.div<StyledFlexProps>`
    display:flex;
    ${({$align}) => $align && `align-items:${$align};`}
    ${({$justify}) => $justify && `justify-content:${$justify};`}
    ${({$col}) => $col ? `flex-direction:column;` : `flex-direction:row;`}
    ${({$flex}) => $flex && `flex:1;`}
    ${({$maxWidth}) => $maxWidth && `max-width:${$maxWidth}rem;`}
    ${({$gap}) => $gap && `gap:${$gap}rem;`}
    ${({$bg}) => $bg && `background-color:${$bg};`}
    ${({$radius}) => $radius && `border-radius:${$radius}rem;`}
    ${({$padding}) => $padding && `padding:${$padding};`}
`

export default StyledFlex;