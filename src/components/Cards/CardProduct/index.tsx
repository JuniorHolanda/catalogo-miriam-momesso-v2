import { InputHTMLAttributes, JSX } from "react";

import {
  SContainerThumb,
  STitle,
  SWrapper
} from "./card.styled";

import { Product } from "@/utils/interfaces";
import Image from "next/image";

type InptProps = InputHTMLAttributes<HTMLInputElement> & {
  product: Product;
};

export default function CardProduct({ product }: InptProps): JSX.Element {
  const url = `/produtos/${product.slug}`

  return (
    <SWrapper href={url}>
      <SContainerThumb>
        <Image
          src={product.thumbnail}
          alt={product.altthumbnail? product.altthumbnail : `imagem do produto ${product.title}`}
          width={150}
          height={150}
          style={{
            objectFit: 'cover',
            width: '100%'
          }}
        />
      </SContainerThumb>
      <STitle>
        <h1>{product.title}</h1>
      </STitle>
    </SWrapper>
  );
}
