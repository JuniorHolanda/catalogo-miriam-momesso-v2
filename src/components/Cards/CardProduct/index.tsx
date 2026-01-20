"use client";
import React, { InputHTMLAttributes, JSX, useRef, useState } from "react";
import {
  Scard,
  ScontainerImg,
  ScontainerSlider,
  Scontent,
  Sdialog,
  Ssection,
  SwrapperBtnClose,
} from "./card.styled";


import { IoClose } from "react-icons/io5";
import { Product } from "@/utils/interfaces";
import { useViewportContext } from "@/contexts/ViewportContext";
import CustomLink from "@/components/ui/Link";

type InptProps = InputHTMLAttributes<HTMLInputElement> & {
  product: Product;
};

export default function CardProduct({ product }: InptProps): JSX.Element {

  const width = useViewportContext();

  const dialogRef = useRef<HTMLDialogElement>(null);

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
      // larguras padrão
      return [randonInt(), randonInt(), randonInt()][index];
    }
    if (hovered === index) {
      // quem está hover, aumenta
      return 5;
    } else {
      // os outros diminuem proporcionalmente
      return index === 0 ? 2 : index === 1 ? 1.5 : 1;
    }
  };

  const listImg = product.gallery;

  return (
    <Scard>
      <Sdialog ref={dialogRef}>
        <SwrapperBtnClose>
          <button onClick={() => closePopup()}><IoClose /></button>
        </SwrapperBtnClose>
        <Ssection>
          {listImg
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
                    src={item.img}
                    alt={item.altImg}
                  />
                </ScontainerImg>
              );
            })}
        </Ssection>
        <CustomLink link="#">
          Ver Produto
        </CustomLink>
      </Sdialog>

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
                  alt={item.altImg}
                />
              </ScontainerImg>
            );
          })}
      </ScontainerSlider>
      <Scontent>
        <h1>{product.title}</h1>
        <p>{product.smallText}</p>
        <CustomLink link={`/produtos/${product._id}`}>
          Ver Produto
        </CustomLink>
      </Scontent>
    </Scard>
  );
}
