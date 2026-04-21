'use client'

import { Collection } from "@/utils/types";
import { useEffect, useState } from "react"
import { SWrapper } from "./colecao.styles";
import { useProducts } from "@/contexts/Product.context";
import { Product } from "@/utils/interfaces";


export default function CollectionPage() {

    const [dataLocalStorage, setDataLocalStorage] = useState<Collection[] | null>(null);
    const [productFilterd, setProductFilterd] = useState<Product[] | null>(null);
    const products = useProducts();

    useEffect(() => {
        const stored : Collection[] = JSON.parse(localStorage.getItem("collection") || "[]");
        
        
        setDataLocalStorage(stored);
    }, []);


    return (
       <SWrapper>
        {
           dataLocalStorage !== null && dataLocalStorage?.length > 0 && (
                dataLocalStorage?.map((collection) => (
                <div key={collection.id}>
                    <h1>
                        {collection.name}
                    </h1>
                </div>
            ))
            )
        }
       </SWrapper>
    )
}