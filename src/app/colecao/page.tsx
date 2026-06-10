'use client'

import { Collection } from "@/utils/types";
import { useEffect, useState } from "react"
import { SBtnOptionsCard, SContainerCards, SContainerIcons, SContainerShareBtn, SContainerThumb, SContainerTitle, SContent, SLink, SShareButton, SWrapper } from "./colecao.styles";
import { useProducts } from "@/contexts/Product.context";
import { Product } from "@/utils/interfaces";
import Image from "next/image";
import slugify from "@/utils/slugfyText";
import CreateProductsMap from "@/utils/productsMap";
import CreateListCollectionProducts from "@/utils/collectionWithProducts";
import { FaRegTrashCan } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import getLocalStorage from "@/utils/getLocalStorage";

type CollectionFull = Collection & {
  products: Product[];
}


export default function CollectionPage() {
  const [collectionFull, setCollectionFull] = useState<CollectionFull[] | null>(null);
  const products = useProducts();

  useEffect(() => {
    const stored = getLocalStorage('CollectionPage')
    // cria um mapa baseado nos id de cada produto. melhora o desempenho
    const productsMap = CreateProductsMap(products);
    const ListCollectionProducts = CreateListCollectionProducts(stored, productsMap)
    
    setCollectionFull(ListCollectionProducts)
  }, []);

  function deleteItemLocalstorage(id: string) {
    const stored = getLocalStorage('CollectionPage  no deleteItemLocalstorage')

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
        <AnimatePresence>
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
                    delay: i * .2,
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <SContainerThumb href={`/colecao/${slugify(collection.name)}?id=${collection.itensId}`}>
                    <Image
                      className="thumb"
                      src={collection.products.at(-1)?.thumbnail ?? './favicon.png'}
                      alt={collection.products.at(-1)?.altthumbnail ?? 'Imagem do produto não encontrada'}
                      width={100}
                      height={100}
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        overflow: 'hidden',
                      }}
                    />
                  </SContainerThumb>
                  <SLink href={`/colecao/${slugify(collection.name)}?id=${collection.itensId}`}>
                    <h2>{collection.name}</h2>
                  </SLink>
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
        </AnimatePresence>
      </SContainerCards>
    </SWrapper>
  )
}