import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { TfiDropbox } from "react-icons/tfi";
import { Snav, Swrapper } from "./headerMobile.styles";
import Link from "next/link";

export default function HeaderMoblie() {

    const txtWhatsApp = 'Olá! Tudo bem? Gostaria de saber mais sobre seus produtos do catálogo.';
    const numberWhatsApp = '551138070539';
    const linkWhatsApp = `https://wa.me/${numberWhatsApp}?text=${encodeURIComponent(txtWhatsApp)}`;
    return  (
        <Swrapper>
            <Snav>
                <Link href={'/'}>
                    <HiOutlineHome />
                </Link>
                <Link href={linkWhatsApp}>
                    <FaWhatsapp />
                </Link>
                <Link href={'#'}>
                    <TfiDropbox />
                </Link>
                <Link href={'#'}>
                    <SlMenu />
                </Link>
            </Snav>
        </Swrapper>
    )
}