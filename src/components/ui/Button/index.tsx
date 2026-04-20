import { SButton } from "./button.styles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
}

export default function CustomButton({ children, ...rest }: Props) {
    return (
        <SButton {...rest}>{children}</SButton>
    )
}
