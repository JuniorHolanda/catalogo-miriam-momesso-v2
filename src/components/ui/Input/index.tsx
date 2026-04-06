"use client";

import CardProduct from "@/components/Cards/CardProduct";
import { useProducts } from "@/contexts/Product.context";
import { Product } from "@/utils/interfaces";
import { ChangeEvent, useEffect, useState } from "react";
import { ScontainerCardProduct } from "./input.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useViewport } from "@/hooks/useViewport";

export default function CustomInput() {
  const viewPort = useViewport();
  const [contentInput, setContentInput] = useState<boolean>(false);

  const products = useProducts();
  const [text, setText] = useState<string>("");
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  // usada para controlar a propriedade top do css do input

  //controla a propriedade top no css do input
  useEffect(() => {
    if (productsFiltered.length !== 0) {
      setContentInput(true);
    } else {
      setContentInput(false);
    }
  }, [productsFiltered]);

  function controllerInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setText(value);

    // se o input estiver vazio, limpa o productsFiltered
    if (value.trim() === "") {
      setProductsFiltered([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase()),
    );
    setProductsFiltered(filtered);
  }

  return (
    <>
      <label htmlFor="search">Digite sua busca</label>
      <input
        type="text"
        name="q"
        id="search"
        placeholder="Pesquisar produtos 🔎"
        value={text}
        onChange={controllerInput}
      />
      {productsFiltered.length > 0 && (
        <ScontainerCardProduct>
          <Swiper
            className="swiper-container"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={55}
            // controla a quantidade de slides com base na quantidade de produtos filtrados e tambem com base na tela se é molbile, ou tablet ou desktop
            slidesPerView={
              productsFiltered.length > 3 && viewPort == "lg"
                ? 3
                : productsFiltered.length > 3 && viewPort == "md"
                  ? 2
                  : 1
            }
            grabCursor={true}
          >
            {productsFiltered.map((item) => (
              <SwiperSlide className="swiper-itens" key={item._id}>
                <CardProduct product={item} />
              </SwiperSlide>
            ))}

            {/* Setas de navegação */}
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </Swiper>
        </ScontainerCardProduct>
      )}
    </>
  );
}
