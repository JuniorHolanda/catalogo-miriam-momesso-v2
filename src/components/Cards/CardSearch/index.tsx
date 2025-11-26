import { Product } from "@/utils/interfaces";
import { InputHTMLAttributes } from "react";
import { ScontainerCategory, ScontainerImg, ScontainerText, Slink } from "./cardSearch.styles";
import { SButton } from "@/components/ui/Button/button.styles";


    type InptProps = InputHTMLAttributes<HTMLInputElement> & {
      product: Product;
    };

export default function  CardSearch({ product } : InptProps) {

    return (
        <>
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
        </>
    )
} 