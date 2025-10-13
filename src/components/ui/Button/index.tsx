import { SButton } from "./button.styles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
}

export default function Button({ text, ...rest }: Props) {
    return (
        <SButton{...rest}>{text}</SButton>
    )
}
