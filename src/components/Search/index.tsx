import { Product } from "@/utils/interfaces";
import { getProducts } from "@/services/getProductMomesso";
import InputSearch from "../InputSearch";

export default async function Search() {

const listproducts: Product[] = await getProducts();

  return (
    <InputSearch products={listproducts} />
  );
}
