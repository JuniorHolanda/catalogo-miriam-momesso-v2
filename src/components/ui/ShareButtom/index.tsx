'use client';

import { Product } from "@/utils/interfaces";
import { IoMdShare } from "react-icons/io";
import { SWrapper } from "./shareButtom.styles";
import { useState } from "react";

type propsCustomLink = {
  children: React.ReactNode
  className?: string
  id?: string[]
  product?: Product
}

// para compartilhar produtos únicos, o componente recebe o product, captura o id e armazena no dataID
// para compartilhar catgorias, coleções ou favoritos, o componente recebe um array de id, transforma em string e armazena no dataID

export default function ShareButtom( {className, children, id, product} : propsCustomLink){

    const [isProduct, setIsProduct] = useState<boolean>(false);

    const getIds = () => {
        if (id && id.length > 0) {
            return id;
        }
        if (product?.slug) {
            setIsProduct(true)
            return [product.slug];
        }
        return [];
    }

    const handleShare = async () => {
        
        const ids = getIds();
        if (!ids.length) return;
        // passa os ids dos produtos via query para montar a coleção
        const url = !isProduct ? `${window.location.origin}/colecao?ids=${ids.join(",")}`
        : `${window.location.origin}/produtos/${ids.join()}`;


        try {
            // Web Share API (mobile principalmente)
            if (navigator.share) {
                await navigator.share({
                title: "Confira essa coleção",
                url,
                });
            } else {
                // fallback: copia pro clipboard
                await navigator.clipboard.writeText(url);
                alert("Link copiado!");
            }
            } catch (err) {
            console.error("Erro ao compartilhar:", err);
            }
        }


    return (
        <SWrapper onClick={handleShare}>
            <IoMdShare />
            <>{children}</>
        </SWrapper>
    )
} 