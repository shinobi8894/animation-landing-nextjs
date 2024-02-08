import styled from "styled-components";

interface StyledHeadingProps {
    $level?: number;
    $cursor?: boolean;
    $color?: string;
    $maxWidth?:number;
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  font-family:'Cormorant Garamond';
  ${({ $level }) => `font-size: var(--font-${$level})`};
  ${({ $cursor }) => $cursor ? 'cursor: pointer' : 'cursor: default'};
  ${({ $color }) => $color && `color:${$color}`};
  ${({$maxWidth}) => $maxWidth && `max-width:${$maxWidth}rem;`}
`;

export default StyledHeading;