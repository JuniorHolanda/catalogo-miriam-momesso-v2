'use client'

import { Collection } from "@/utils/types";
import { useEffect, useState } from "react"
import { SContainerCards, SContainerThumb, SContainerTitle, SContainerTitleCard, SContent, SWrapper } from "./colecao.styles";
import { useProducts } from "@/contexts/Product.context";
import { Product } from "@/utils/interfaces";
import Image from "next/image";
import slugify from "@/utils/slugfyText";
import CreateProductsMap from "@/utils/productsMap";
import CreateListCollectionProducts from "@/utils/collectionWithProducts";

type CollectionFull = Collection & {
  products: Product[];
}


export default function CollectionPage() {

  const [collectionFull, setCollectionFull] = useState<CollectionFull[] | null>(null);
  const products = useProducts();

  useEffect(() => {
    const stored: Collection[] = JSON.parse(
      localStorage.getItem("collection") || "[]"
    );

    // cria um mapa baseado nos id de cada produto. melhora o desempenho
    const productsMap = CreateProductsMap(products);
    const ListCollectionProducts = CreateListCollectionProducts(stored, productsMap)
    setCollectionFull(ListCollectionProducts)
  }, [products]);


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
                href={`/colecao/${slugify(collection.name)}`}
                key={collection.id}>
                <SContainerThumb>
                  {
                    collection.products.slice(0, 4)
                      .map((product, i) => (
                        <Image
                          priority
                          className="thumb"
                          key={product._id}
                          src={product.thumbnail}
                          alt={product.altthumbnail}
                          width={200}
                          height={200}
                          style={{
                            transform: `translateX(${-i * 10}px)`,
                            opacity: `${collection.products.length > 1
                              ? i + .3
                              : 1}`,
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            overflow: 'hidden',
                            boxShadow: '5px 0px 5px #0000001f'

                          }}
                        />
                      ))
                  }
                </SContainerThumb>
                <SContainerTitleCard>
                  <h2>{collection.name}</h2>
                </SContainerTitleCard>
              </SContent>
            ))
          )
        }
      </SContainerCards>
    </SWrapper>
  )
}