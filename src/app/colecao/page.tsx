'use client'

import { Collection } from "@/utils/types";
import { useEffect, useState } from "react"
import { SAnimationCardContainer, SBtnOptionsCard, SContainerCards, SContainerEmptyThumb, SContainerIcons, SContainerShareBtn, SContainerThumb, SContainerTitle, SContent, SShareButton, Stitle, SWrapper } from "./colecao.styles";
import { useProducts } from "@/contexts/Product.context";
import { Product } from "@/utils/interfaces";
import Image from "next/image";
import slugify from "@/utils/slugfyText";
import CreateProductsMap from "@/utils/productsMap";
import CreateListCollectionProducts from "@/utils/collectionWithProducts";
import { FaRegTrashCan } from "react-icons/fa6";
import getLocalStorage from "@/utils/getLocalStorage";
import { emoji } from "@/utils/emojis";

type CollectionFull = Collection & {
  products: Product[];
}


export default function CollectionPage() {
  const [collectionFull, setCollectionFull] = useState<CollectionFull[] | null>(null);
  const products = useProducts();
  const positiveEmojis = emoji({ typeEmoji: 'positive' })
  const negativeEmojis = emoji({ typeEmoji: 'negative' })
  const textToCollectionEmpty = [
    'Coleção vazia',
    'Tá meio vazio aqui',
    'Pra me excluir, clique na lixeira',
    'Vai me deixar vazio?',
    'Estou vazio, esqueceu de mim?',
    'Pra que me deixar vazio?'
  ]

  const randomicNumber = () => Math.floor(Math.random() * textToCollectionEmpty.length)

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
              <SAnimationCardContainer
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 13,
                  stiffness: 100,
                  delay: i * .05,
                }}
              >


                <SContent
                >
                  {
                    collection.itensId.length > 0 ?
                      <SContainerThumb href={`/colecao/${slugify(collection.name)}?id=${collection.itensId}`}
                      >
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
                      <SContainerEmptyThumb>
                        {/* chamar a função emoji direto no card e não em variavel para fazer uma chamada para cada card e gerar emojis diferentes*/}
                        <span>{emoji({ typeEmoji: 'negative' })}</span>
                        <p>{textToCollectionEmpty[randomicNumber()]}</p>
                      </SContainerEmptyThumb>
                  }
                  <Stitle href={`/colecao/${slugify(collection.name)}?id=${collection.itensId}`}>
                    <h2>{collection.name}</h2>
                  </Stitle>

                  <SContainerIcons>
                    <SBtnOptionsCard
                      onClick={() => deleteItemLocalstorage(collection.id)}>
                      <FaRegTrashCan />
                    </SBtnOptionsCard>
                    {
                      collection.itensId.length > 0 && (
                        <SContainerShareBtn>
                          <SShareButton
                            idsProducts={collection.itensId}
                            idCollection={collection.id}
                            nameCollection={slugify(collection.name)} />
                        </SContainerShareBtn>
                      )
                    }
                  </SContainerIcons>
                </SContent>
              </SAnimationCardContainer>

            ))
          )
        }
      </SContainerCards>
    </SWrapper>
  )
}