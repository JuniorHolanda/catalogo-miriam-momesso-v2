"use client";

import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { Sform, ScontainerInput, Slink, Sul, ScontainerCategory, ScontainerImg, ScontainerText } from "./search.styles";
import { SButton } from "../ui/Button/button.styles";
import { Product } from "@/utils/interfaces";

type InptProps = InputHTMLAttributes<HTMLInputElement> & {
  products: Product[];
};

export default function InputSearch({ products, ...props }: InptProps) {
  const [text, setText] = useState<string>("");
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  const handleChangetext = (e: string) => {
    const value = e;
    setText(e);
  };

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setProductsFiltered(filtered);
  };

function controllerInput(e: ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;
  setText(value);

   if (value.trim() === "") {
    setProductsFiltered([]);
    return;
  }

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );
  setProductsFiltered(filtered);
}
  return (
    <Sform>
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
        <Sul>
          {productsFiltered
          .filter(product => product.gallery && product.gallery.length >= 2) //garante que só filtra os que tiverem mais de duas imagens na galeria
          .map((product) => (
            <li key={product._id}>
              <Slink href={"#"}>
                <ScontainerCategory>
                    {product.category.map((cat) => (
                      <span key={cat}>{cat}</span>
                    ))}
                </ScontainerCategory>

                <ScontainerText>
                  <h3>{product.title}</h3>
                  <p>{product.smallText}</p>
                  <SButton>Ver Produto</SButton>
                </ScontainerText>

                  <ScontainerImg>
                    <div>
                      <img
                        src={product.gallery[0].img}
                        alt={product.gallery[0].altImg}
                      />
                    </div>
                    <div className="imgContainer">
                      <img
                        src={product.gallery[1].img}
                        alt={product.gallery[1].altImg}
                      />
                    </div>
                  </ScontainerImg>
              </Slink>
            </li>
          ))}
        </Sul>
      )}
    </Sform>
  );
}
