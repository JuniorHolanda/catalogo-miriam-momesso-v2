'use client'

import { useProducts } from '@/contexts/Product.context';
import { Product } from '@/utils/interfaces';
import CreateProductsMap from '@/utils/productsMap';
import { useParams, useSearchParams } from 'next/navigation';
import { SMotionCard, SMotionContainerCards, STitleContainer, SWrapper } from './collectionItens.styles';
import { useEffect } from 'react';
import { Collection } from '@/utils/types';
import getLocalStorage from '@/utils/getLocalStorage';
import CardProduct from '@/components/Cards/CardProduct';

export default function CollectionItens() {
  const products = useProducts()
  // cria mapa com id dos produtos
  const productsMap = CreateProductsMap(products);
  const params = useParams<{ slug: string }>();
  const title = params.slug.replace(/-/g, " ");
  const searchParams = useSearchParams();
  const idProducs = searchParams.get("id");
  const listIdProducts = idProducs?.split(",") || [];
  const idCollectionReceived = searchParams.get("idCollection");

  useEffect(() => {
    const stored = getLocalStorage();
    if (idCollectionReceived) {
      const newCollection: Collection = {
        id: idCollectionReceived,
        name: title,
        itensId: listIdProducts,
      }

      const collectionExists = stored.some(item => item.id === newCollection.id);

      if (!collectionExists) {
        stored.push(newCollection);
        localStorage.setItem('collection', JSON.stringify(stored));
      }
    }

    console.log('deu certo');

  }, [])

  // cria array de ids com as querys

  //percorre listIdProducts e para cada id faz um get productsMap e filtra removendo os undefined.
  const listProductsFromId = listIdProducts
    .map(idProduct => productsMap.get(idProduct))
    .filter((product): product is Product => product !== undefined);


  return (
    <SWrapper>
      <STitleContainer>
        <h1>{title}</h1>
      </STitleContainer>
      <SMotionContainerCards>
        {listProductsFromId.map((product, i) => (
          <SMotionCard
            key={product._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 13,
              stiffness: 100,
              delay: i * .12
            }}
          >
            <CardProduct product={product} />
          </SMotionCard>
        ))}
      </SMotionContainerCards>
    </SWrapper>
  );
}