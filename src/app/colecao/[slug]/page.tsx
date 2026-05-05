'use client'
import CardProduct from '@/components/Cards/CardProduct';
import { useProducts } from '@/contexts/Product.context';
import { Product } from '@/utils/interfaces';
import CreateProductsMap from '@/utils/productsMap';
import { useParams, useSearchParams } from 'next/navigation';
import { SSection, STitle, SWrapper } from './collectionItens.styles';
import SmallCardProduct from '@/components/SmallCardProduct';

export default function CollectionItens() {
  const products = useProducts()
  const productsMap = CreateProductsMap(products);
  const params = useParams<{ slug: string }>();
  const title = params.slug.replace(/-/g, " ");
  const searchParams = useSearchParams();
  const idProducs = searchParams.get("id");
  const listIdProducts = idProducs?.split(",") || [];


  const listProductsFromId = listIdProducts
    .map(idProduct => productsMap.get(idProduct))
    .filter((product): product is Product => product !== undefined);

  // abordagem mais limpa e sem repetição
  const renderProducts = (Component: React.FC<{ product: Product }>) =>
    listProductsFromId.map(product => (
      <Component key={product._id} product={product} />
    ));

  return (
    <SWrapper>
      <STitle>
        <h1>{title}</h1>
      </STitle>
      <SSection>
        {renderProducts(SmallCardProduct)}
        {renderProducts(CardProduct)}
      </SSection>
    </SWrapper>
  );
}