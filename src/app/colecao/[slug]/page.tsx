'use client'
import CardProduct from '@/components/Cards/CardProduct';
import { useProducts } from '@/contexts/Product.context';
import { Product } from '@/utils/interfaces';
import CreateProductsMap from '@/utils/productsMap';
import { useParams, useSearchParams } from 'next/navigation';
import { SSection, STitleContainer, SWrapper } from './collectionItens.styles';
import SmallCardProduct from '@/components/SmallCardProduct';
import { useEffect } from 'react';
import { Collection } from '@/utils/types';
import getLocalStorage from '@/utils/getLocalStorage';

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

  // cria um componente do tipo produto
  const renderProducts = (Component: React.FC<{ product: Product }>) =>
    listProductsFromId.map(product => (
      <Component key={product._id} product={product} />
    ));

  return (
    <SWrapper>
      <STitleContainer>
        <h1>{title}</h1>
      </STitleContainer>
      <SSection>
        {renderProducts(SmallCardProduct)};
        {renderProducts(CardProduct)};
      </SSection>
    </SWrapper>
  );
}