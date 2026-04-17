import { SButton } from "./button.styles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string;
}

export default function CustomButton({ children, ...rest }: Props) {
    return (
        <SButton {...rest}>{children}</SButton>
    )
}
