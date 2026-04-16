'use client';

import { Product } from "@/utils/interfaces";
import { IoMdShare } from "react-icons/io";
import { SWrapper } from "./collectionButtom.styles";

type propsCollectionButtom = {
    children: React.ReactNode
    className?: string
    id?: string[]
    product?: Product
}

export default function CollectionButtom(
    { className, children, id, product }
    : propsCollectionButtom) {
    
    return (
        <SWrapper>
            <IoMdShare />
            <>{children}</>
        </SWrapper>
    )
} 