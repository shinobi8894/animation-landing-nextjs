import StyledInput from "./input.style";

interface InputProps {
    [key: string]: any;
}

export default function Input({ ...rest }: InputProps) {
    return (
        <StyledInput {...rest} />
    )
}