"use client";
import React, { InputHTMLAttributes, JSX, useEffect, useRef, useState } from "react";
import {
  Scard,
  ScontainerImg,
  ScontainerSlider,
  Scontent
} from "./card.styled";

import { Product } from "@/utils/interfaces";
import { useViewportContext } from "@/contexts/ViewportContext";
import CustomLink from "@/components/ui/Link";

type InptProps = InputHTMLAttributes<HTMLInputElement> & {
  product: Product;
};

export default function CardProduct({ product }: InptProps): JSX.Element {

  const width = useViewportContext();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [randomFlex, setRandomFlex] = useState<number[]>([]);

  useEffect(() => {
    setRandomFlex([
      randonInt(),
      randonInt(),
      randonInt()
    ]);
  }, []);

  const openPopup = () => {
    dialogRef.current?.showModal();
  };

  const closePopup = () => {
    dialogRef.current?.close();
  };


  // controla a quantidade de img por card, 3 pra desktop e 1 pra mobile
  const maxImgs = width === undefined || width === "md" || width === "lg" ? 3 : 1;

  // gera números inteiros aleatórios entre 2 e 5 usados para definir os tamanhos das imagens do card
  const randonInt = () => {
    return Math.floor(Math.random() * 2) + 3;
  }

  const [hovered, setHovered] = useState<number | null>(null);

  const getFlex = (index: number, hovered: number | null) => {
    if (hovered === null) {
      return randomFlex[index] ?? 3;
    }

     if (hovered === index) {
    return 5;
  } else {
    return index === 0 ? 2 : index === 1 ? 1.5 : 1;
  }
  };

  const listImg = product.gallery;

  return (
    <Scard>
      <ScontainerSlider>
        {listImg
          .filter((_, index) => index < maxImgs)
          .map((item, index) => {
            const expand = getFlex(index, hovered);

            return (
              <ScontainerImg
                key={item._id}
                $expand={expand}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  onClick={(e) => openPopup()}
                  src={item.img}
                  alt={item.altimg}
                />
              </ScontainerImg>
            );
          })}
      </ScontainerSlider>
      <Scontent>
        <h1>{product.title}</h1>
        <p>{product.smalltext}</p>
        <CustomLink link={`/produtos/${product.slug}`}>
          Ver Produto
        </CustomLink>
      </Scontent>
    </Scard>
  );
}
