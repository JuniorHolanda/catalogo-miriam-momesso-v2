'use client';

import { Product } from "@/utils/interfaces";
import { IoMdShare } from "react-icons/io";
import { SWrapper } from "./collectionButtom.styles";
import { useEffect, useState } from "react";

type ColleCtion = {
    id: string
    name : string
    itens : string[]
}

type propsCollectionButtom = {
    children: React.ReactNode
    className?: string
    idProduct: string
}

export default function CollectionButtom(
    { className, children, idProduct }
    : propsCollectionButtom) {
        
        const [collectionData, SetCollectionData] = useState<ColleCtion[]>([]);
        const [showCollection, setShowCollection] = useState<boolean>(false);


        useEffect(() => {
            const stored = JSON.parse(localStorage.getItem("collection") || "[]");
            SetCollectionData(stored);
        }, [])

        function hadleCollection(){

        }

    
    return (
        <SWrapper >
            {/* {
                collection && (
                    collection.map( item => (
                        <div>
                            {
                                item.name
                            }
                        </div>
                    ))
                )
            } */}
            <IoMdShare />
            <>{children}</>
        </SWrapper>
    )
} 