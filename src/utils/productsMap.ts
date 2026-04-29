import { Product } from './interfaces'


// cria instância do Map para guardar um índice dos produtos baseado no id e melhorar a performance
export default function CreateProductsMap(products : Product[]) {
  const productsMap = new Map(products.map((product) => [product._id, product]));
  return productsMap;
}
