'use client'
import { useState } from "react";
import { SContainerMenu, SItemMenu, SLink, SList, Snav } from "./navDesktop.styles";
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
              <SContainerMenu
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <DropDawnMenu />
              </SContainerMenu>
            }
          </AnimatePresence>
        </SItemMenu>

        <SItemMenu>
          <SLink href={'/colecao'}>
            Meu Kit
          </SLink>
        </SItemMenu>
      </SList>
    </Snav>
  );
}