import { Product } from "@/utils/interfaces";
import { getProducts } from "@/services/getProductMomesso";

const listproducts: Product[] = await getProducts();

