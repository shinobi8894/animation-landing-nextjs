import styled from "styled-components";

interface StyledTextProps {
    $level?:number,
    $color?:string
}

const StyledText = styled.p<StyledTextProps>`
    font-family:Roboto;
    font-size:${({$level}) => `var(--font-${$level})`};
    ${({ $color }) => $color && `color:${$color}`};
`

export default StyledText;