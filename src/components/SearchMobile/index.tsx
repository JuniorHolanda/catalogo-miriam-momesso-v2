import { getProducts } from "@/services/getProductMomesso";
import { ScontainerInput, SLink } from "./searchMobile.styles";
import { ChangeEvent, useEffect, useState } from "react";
import { Product } from "@/utils/interfaces";



export default async function SearchMobile() {
    
    const [text, setText] = useState<string>("");
      const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

      function controllerInput(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setText(value);
    
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase()),
        );
        
        setProductsFiltered(filtered);
      }
    

    const products = await getProducts();

    return (
        <ScontainerInput >
            <label htmlFor="search">Digite sua busca</label>
            <input
            type="text"
            name="q"
            id="search"
            placeholder="Pesquisar produtos"
            value={text}
            onChange={controllerInput}
            />
            <SLink href={""}>
                🔎
            </SLink>
        </ScontainerInput>
    );
}