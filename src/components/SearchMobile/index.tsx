'use client'

import { useProducts } from "@/contexts/Product.context";
import { ScontainerInput, SContainerProductsFinded, SLink } from "./searchMobile.styles";
import {  ChangeEvent, useState } from "react";
import slugify from "@/utils/slugfyText";
import { Product } from "@/utils/interfaces";
import Image from "next/image";


export default function SearchMobile() {

  const products = useProducts()
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [text, setText] = useState<string>("");


  function showFindedProducts(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setText(value);

    if(slugify(value) === ''){
      setProductsFiltered([]);
      return;
    }

    const productFinded = products.filter(product =>
      slugify(product.title)?.includes(slugify(text))
    );

    setProductsFiltered(productFinded); 
  }

  return (
    <>
    <ScontainerInput >
      <label htmlFor="search">Digite sua busca</label>
      <input
        type="text"
        name="q"
        id="search"
        placeholder="Pesquisar produtos 🔎"
        value={text}
        onChange={(e) => showFindedProducts(e)}
      />
    </ScontainerInput>
    {
      productsFiltered && productsFiltered.length > 0 && (
        <SContainerProductsFinded>
          {
            productsFiltered.map(product => (
              <li key={product._id}>
                <SLink href={`/produtos/${product.slug}`}>
                  <span>
                    <Image
                      src={product.thumbnail}
                      alt={product.altthumbnail}
                      width={80}
                      height={80}
                    />  
                  </span>
                  <div>
                    <h2>{product.title}</h2>
                  </div>
                </SLink>
              </li>
            ))
          }
        </SContainerProductsFinded>
      )
    }
    </>
  );
}