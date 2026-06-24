'use client'
import { useState } from "react";
import { SItemMenu, SLink, SList, Snav } from "./navDesktop.styles";
import { AnimatePresence } from "framer-motion";
import DropDawnMenu from "@/components/DropDawnMenu";

export default function NavDesktop() {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <Snav>
      <SList>
        <SItemMenu>
          <SLink href={'/'}>
            Home
          </SLink>
        </SItemMenu>

        <SItemMenu
          className="liDropDown"
          onMouseEnter={() => setDropMenu(true)}
          onMouseLeave={() => setDropMenu(false)}
          onClick={() => setDropMenu(prev => !prev)}
        >
          <button>
            Categoria
          </button>

          <AnimatePresence>
            {dropMenu &&
              <DropDawnMenu />
            }
          </AnimatePresence>
        </SItemMenu>

        <SItemMenu>
          <SLink href={'/colecao'}>
            Coleções
          </SLink>
        </SItemMenu>
      </SList>
    </Snav>
  );
}