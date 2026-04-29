import { Product } from './interfaces'
import CreateProductsMap from './productsMap'
import { Collection } from './types'

export default function CreateListCollectionProducts(
  stored: Collection[],
  productsMap: ReturnType<typeof CreateProductsMap>
) {
  const listCollectionProducts = stored.map((col) => {
    const productsResolved = col.itensId
      .map((id) =>
        //usa o índice para pegar os produtos que atendem a condição
        productsMap.get(id)
      )
      .filter((item): item is Product => item !== undefined)

    return {
      //cria objeto com o valor espalhado da coleção e adiciona mais a propriedade products que guarda os produtos vindos do índice com base nos id.
      ...col,
      products: productsResolved,
    }
  });

  return listCollectionProducts;
}
