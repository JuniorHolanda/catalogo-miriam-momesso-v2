'use client'

import { useProducts } from "@/contexts/Product.context";
import { ScontainerInput, SContainerProductsFinded, SLink, SLottie } from "./searchMobile.styles";
import Image from "next/image";
import { useProductSearch } from "@/hooks/searchProducts";
import Lottie from "lottie-react";
import animationData from '@/Lotties/gatinho-corta-fio.json'



export default function SearchMobile() {

  const products = useProducts()
  const {
    text,
    productsFiltered,
    notFound,
    controllerInput,
  } = useProductSearch(products);
  const haveContent = productsFiltered.length > 0;



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
          onChange={(e) => controllerInput(e)}
        />
      </ScontainerInput>
      {
        (haveContent || notFound) && (
          <SContainerProductsFinded>
            {
              productsFiltered.map(product => (
                <li key={product._id}>
                  <SLink
                    href={`/produtos/${product.slug}`}
                  >
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
            {
              notFound && (
                <SLottie>
                  <h2>Não encontramos nada para {text}</h2>
                  <p>Procure algo como bolsa, mochila, necessaire... </p>
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    style={{
                      width: 250,
                      height: 250,
                    }}
                  />
                </SLottie>
              )
            }
          </SContainerProductsFinded>

        )
      }
    </>
  );
}