'use client'
import { useState } from "react";
import { SItemMenu, SList, Snav } from "./navDesktop.styles";



export default function NavDesktop({ dropDown }: { dropDown: React.ReactNode }) {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <Snav>
      <SList>
        <SItemMenu>Home</SItemMenu>

        <SItemMenu
          className="liDropDown"
          onMouseEnter={() => setDropMenu(true)}
          onMouseLeave={() => setDropMenu(false)}
        >
          <button onClick={() => setDropMenu(prev => !prev)}>
            Categoria
          </button>

          {dropMenu && dropDown}
        </SItemMenu>

        <SItemMenu>Meu Kit</SItemMenu>
      </SList>
    </Snav>
  );
}