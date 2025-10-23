'use client';

import { createContext, ReactNode, useContext } from "react";
import type { Product } from "@/utils/interfaces";

type ProductsContextType = {
    products: Product[];
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ products, children } : {products: Product[]; children: ReactNode}) {
    return (
        <ProductsContext.Provider value={{ products }}>
            { children }
        </ProductsContext.Provider>
    )
};

export function useProducts() {
    const ctx = useContext(ProductsContext);

    if (!ctx) {
        throw new Error('useProducts deve ser usado dentro de um <ProductsProvider>')
    }
    return ctx.products;
}