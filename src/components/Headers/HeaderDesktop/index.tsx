import NavDesktop from "@/components/Navs/NavDesktop";
import { Scontainer, ScontainerLogo } from "./header.styled";
import Image from "next/image";
import DropDawnMenu from "@/components/DropDawnMenu";

export default function HeaderDesktop() {

  return (
      <Scontainer>
        <ScontainerLogo href={'/'}>
          <Image
            src="/main-logo.svg"
            alt="Logo da empresa Miriam Momesso"
            width={1200}
            height={700}
          />
        </ScontainerLogo>
        <NavDesktop/>
      </Scontainer>
  );
}
