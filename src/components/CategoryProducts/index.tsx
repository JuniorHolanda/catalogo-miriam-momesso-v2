import { Product } from "@/utils/interfaces";
import { SMotion, SWrapper } from "./categoryProducts.styles";
import CardProduct from "../Cards/CardProduct";

interface CategoryProductsProps {
  products: Product[];
}

export default function CategoryProducts({ products }: CategoryProductsProps) {
  return (
    <SWrapper>
      {products.map((product, i) => (
        <SMotion
          key={product._id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            damping: 13,
            stiffness: 100,
            delay: i * .02
          }}
        >
          <CardProduct
            product={product}
          />
        </SMotion>
      ))}
    </SWrapper>
  );
}