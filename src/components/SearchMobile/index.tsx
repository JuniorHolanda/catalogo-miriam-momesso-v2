'use client'

import { ScontainerInput, SLink } from "./searchMobile.styles";
import {  useState } from "react";


export default function SearchMobile() {

  const [text, setText] = useState<string>("");

  return (
    <ScontainerInput >
      <label htmlFor="search">Digite sua busca</label>
      <input
        type="text"
        name="q"
        id="search"
        placeholder="Pesquisar produtos"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SLink href={`/categoria/products/${text}`}>
        🔎
      </SLink>
    </ScontainerInput>
  );
}