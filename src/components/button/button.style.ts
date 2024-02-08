import styled from "styled-components";

interface ButtonProps {
    $bg?: string;
    $color?: string;
}

const StyledButton = styled.button<ButtonProps>`
    border:none;
    color:white;
    padding:1rem;
    cursor:pointer;
    ${({ $bg }) => $bg ? `background-color:${$bg};` : `background-color:#000000;`}
    ${({ $color }) => $color ? `color:${$color};` : `color:#ffffff;`}
`

export default StyledButton;