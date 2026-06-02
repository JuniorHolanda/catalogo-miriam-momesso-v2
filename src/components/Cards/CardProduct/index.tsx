import { InputHTMLAttributes, JSX } from "react";

import {
  Scard,
  ScontainerSlider,
  Scontent
} from "./card.styled";

import { Product } from "@/utils/interfaces";
import CustomLink from "@/components/ui/Link";
import ThumbCardDesktop from "../ThumbCardDesktop";

type InptProps = InputHTMLAttributes<HTMLInputElement> & {
  product: Product;
};

export default function CardProduct({ product }: InptProps): JSX.Element {
  const url = `/produtos/${product.slug}`
  const listImg = product.gallery;

  return (
    <Scard>
      <ScontainerSlider>
        {listImg.slice(0, 2)
          .map(item => (
            <ThumbCardDesktop
              key={item._id}
              item={item}
              title={product.title}
              url={url}
            />
          ))
        }
      </ScontainerSlider>
      <Scontent>
        <h1>{product.title}</h1>
        <p>{product.smalltext}</p>
        <CustomLink link={url}>
          Ver Produto
        </CustomLink>
      </Scontent>
    </Scard>
  );
}
