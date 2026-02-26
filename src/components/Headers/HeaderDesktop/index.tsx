'use client'

import { useState } from "react";
import { Scontainer, ScontainerLogo, Snav } from "./header.styled";
import { useProducts } from "@/contexts/Product.context";
import DropDawnMenu from "@/components/DropDawnMenu";


export default function HeaderDesktop() {
  const products = useProducts();
  const [dropMenu, setDropMenu] = useState<Boolean>(false);

  return (
      <Scontainer>
        <ScontainerLogo>
          <img
            src="/main-logo.svg"
            alt="Logo da empresa Miriam Momesso"
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
