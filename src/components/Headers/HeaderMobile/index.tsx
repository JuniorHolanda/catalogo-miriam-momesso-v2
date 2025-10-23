import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { TfiDropbox } from "react-icons/tfi";
import { Snav, Swrapper } from "./headerMobile.styles";

export default function HeaderMoblie() {
    return  (
        <Swrapper>
            <Snav>
                <HiOutlineHome />
                <FaWhatsapp />
                <TfiDropbox />
                <SlMenu />
            </Snav>
        </Swrapper>
    )
}