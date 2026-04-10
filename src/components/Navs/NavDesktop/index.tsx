'use client'
import { useState } from "react";
import { Snav } from "./navDesktop.styles";



export default function NavDesktop({ dropDown }: { dropDown: React.ReactNode }) {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <Snav>
      <li>Home</li>

      <li
        className="liDropDown"
        onMouseEnter={() => setDropMenu(true)}
        onMouseLeave={() => setDropMenu(false)}
      >
        <button onClick={() => setDropMenu(prev => !prev)}>
          Categoria
        </button>

        {dropMenu && dropDown}
      </li>

      <li>Meu Kit</li>
      <li>Favoritos</li>
    </Snav>
  );
}