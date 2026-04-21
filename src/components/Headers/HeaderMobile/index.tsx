import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { TfiDropbox } from "react-icons/tfi";
import { SContainerBtnShowMenu, SLink, Snav, Swrapper } from "./headerMobile.styles";

export default function HeaderMoblie() {

    const txtWhatsApp = 'Olá! Tudo bem? Gostaria de saber mais sobre seus produtos do catálogo.';
    const numberWhatsApp = '551138070539';
    const linkWhatsApp = `https://wa.me/${numberWhatsApp}?text=${encodeURIComponent(txtWhatsApp)}`;
    return  (
        <Swrapper>
            <Snav>
                <SLink href={'/'}>
                    <HiOutlineHome />
                </SLink>
                <SLink href={linkWhatsApp}>
                    <FaWhatsapp />
                </SLink>
                <SLink href={'/colecao'}>
                    <TfiDropbox />
                </SLink>
                <SContainerBtnShowMenu >
                    <SlMenu />
                </SContainerBtnShowMenu>
            </Snav>
        </Swrapper>
    )
}