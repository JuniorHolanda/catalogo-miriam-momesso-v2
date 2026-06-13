'use client'

import { motion } from 'framer-motion';
import CardProduct from '@/components/Cards/CardProduct';
import { Product } from '@/utils/interfaces';
import { SWrapper } from './productsCategory.styles';

type Props = {
  products: Product[];
};

export default function ProductsCategorys({ products }: Props) {
  return (
    <>
      {products.map((product, i) => (
        <SWrapper
          key={product._id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            damping: 13,
            stiffness: 100,
            delay: i * .01
          }}
        >
          <CardProduct product={product} />
        </SWrapper>
      ))}
    </>
  );
}