'use client'

import { useState } from "react";
import { Scontainer, ScontainerLogo, Snav } from "./header.styled";
import DropDawnMenu from "@/components/DropDawnMenu";
import Image from "next/image";



export default function HeaderDesktop() {
  const [dropMenu, setDropMenu] = useState<boolean>(false);

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
        <Snav>
          <li>Home</li>
          <li className="liDropDown"
            onMouseEnter={() => setDropMenu(true)}
            onMouseLeave={() => setDropMenu(false)}>
            <button
              onClick={() => setDropMenu(prev => !prev)}>
              Category
            </button>
              {
                dropMenu && <DropDawnMenu />
              }
          </li>
          <li>Meu Kit</li>
          <li>Favoritos</li>
        </Snav>
      </Scontainer>
  );
}
