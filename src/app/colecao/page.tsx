'use client'

import { Collection } from "@/utils/types";
import { useEffect, useState } from "react"
import { SBtnOptionsCard, SContainerCards, SContainerIcons, SContainerLottie, SContainerShareBtn, SContainerThumb, SContainerTitle, SContent, SShareButton, Stitle, SWrapper } from "./colecao.styles";
import { useProducts } from "@/contexts/Product.context";
import { Product } from "@/utils/interfaces";
import Image from "next/image";
import slugify from "@/utils/slugfyText";
import CreateProductsMap from "@/utils/productsMap";
import CreateListCollectionProducts from "@/utils/collectionWithProducts";
import { FaRegTrashCan } from "react-icons/fa6";
import getLocalStorage from "@/utils/getLocalStorage";
import animationData from "@/Lotties/gatinho-dos-erros.json"
import Lottie from "lottie-react";
import { emoji } from "@/utils/emojis";

type CollectionFull = Collection & {
  products: Product[];
}


export default function CollectionPage() {
  const [collectionFull, setCollectionFull] = useState<CollectionFull[] | null>(null);
  const products = useProducts();
  const negativeEmoji = emoji({ typeEmoji: 'negative' })


  useEffect(() => {
    const stored = getLocalStorage()
    // cria um mapa baseado nos id de cada produto. melhora o desempenho
    const productsMap = CreateProductsMap(products);
    const ListCollectionProducts = CreateListCollectionProducts(stored, productsMap)

    setCollectionFull(ListCollectionProducts)
  }, []);

  function deleteItemLocalstorage(id: string) {
    const stored = getLocalStorage()

    const update = stored.filter(item => id !== item.id);

    localStorage.setItem('collection', JSON.stringify(update));

    const productsMap = CreateProductsMap(products);
    const ListCollectionProducts = CreateListCollectionProducts(update, productsMap);
    setCollectionFull(ListCollectionProducts);
  }

  return (
    <SWrapper>
      <SContainerTitle>
        <h1>
          Suas Coleções
        </h1>
      </SContainerTitle>
      <SContainerCards>
        {
          collectionFull !== null && collectionFull?.length > 0 && (
            collectionFull?.map((collection, i) => (
              <SContent
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 13,
                  stiffness: 100,
                  delay: i * .05,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                {
                  collection.itensId.length > 0 ?
                    <SContainerThumb href={`/colecao/${slugify(collection.name)}?id=${collection.itensId}`}>
                      <Image
                        src={collection.products.at(-1)?.thumbnail ?? './favicon.png'}
                        alt={collection.products.at(-1)?.altthumbnail ?? 'Imagem do produto não encontrada'}
                        width={100}
                        height={100}
                        style={{
                          objectFit: 'cover',
                          height: '100%',
                          width: '100%',
                        }}
                      />
                    </SContainerThumb> :
                    <SContainerLottie>
                      <Lottie
                        animationData={animationData}
                        alt="uma gatinho com rabo balançando"
                        loop={true}
                        style={{
                          width: 150,
                          height: 150
                        }}
                      />
                      <span>nada por aqui {negativeEmoji}</span>
                    </SContainerLottie>
                }
                <Stitle>
                  <h2>{collection.name}</h2>
                </Stitle>
                <SContainerIcons>
                  <SBtnOptionsCard
                    onClick={() => deleteItemLocalstorage(collection.id)}>
                    <FaRegTrashCan />
                  </SBtnOptionsCard>

                  <SContainerShareBtn>
                    <SShareButton
                      idsProducts={collection.itensId}
                      idCollection={collection.id}
                      nameCollection={slugify(collection.name)} />
                  </SContainerShareBtn>

                </SContainerIcons>
              </SContent>
            ))
          )
        }
      </SContainerCards>
    </SWrapper>
  )
}