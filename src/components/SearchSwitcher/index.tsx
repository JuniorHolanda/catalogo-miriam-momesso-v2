"use client";

// Esse componente é um swite

import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { ScontainerInput, ScontainerCardSearch, ScontainerCardProduct, SformInHeader, SformInSection} from "./search.styles";
import { Product } from "@/utils/interfaces";
import { useProducts } from "@/contexts/Product.context";
import CardProduct from "../Cards/CardProduct";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SearchSwitcherProps = InputHTMLAttributes<HTMLInputElement> & {
  caller: 'section' | 'header';
};

//as duas props possíveis são 'section' ou 'header'
export default function SearchSwitcher({ caller } : SearchSwitcherProps) {

  const products = useProducts();
  const [text, setText] = useState<string>("");
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  // usada para controlar a propriedade top do css do input
  const [animationInput, setAnimationInput] = useState<boolean>(false);
  // a props 'header' chama um container de cards reduzidos de produtos da header, e a props 'section' chama os cards completos do buscador principal.
  const Container = caller === 'header' ? ScontainerCardSearch : ScontainerCardProduct
  // a props 'header' chama o form da header, e a props 'section' chama o form principal.
  const Form = caller === 'header' ? SformInHeader : SformInSection

  //controla a propriedade top no css do input 
  useEffect(() => {
    if (productsFiltered.length !== 0) {
      setAnimationInput(true);
    } else {
      setAnimationInput(false)
    }
  }, [productsFiltered])

  function controllerInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setText(value);

    // se o input estiver vazio, limpa o productsFiltered 
    if (value.trim() === "") {
      setProductsFiltered([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProductsFiltered(filtered);
  }

  function slidesPerView() {

  }

  return (
    <Form $props={animationInput}>
      <ScontainerInput>
        <label htmlFor="search">Digite sua busca</label>
        <input
          type="text"
          name="q"
          id="search"
          placeholder="Pesquisar produtos 🔎"
          value={text}
          onChange={controllerInput}
        />
      </ScontainerInput>

      {productsFiltered.length > 0 && (
        Container && (
          <Container>
            <Swiper
              spaceBetween={30}
              //controla a quantidade de slides por tela com base na quantidade de produtos filtrados
              slidesPerView={productsFiltered.length > 3 ? 3 : productsFiltered.length}
            >
              {productsFiltered.map((item) => (
                <SwiperSlide key={item._id}>
                  <CardProduct product={item}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        )
      )}
    </Form>
  );
}
