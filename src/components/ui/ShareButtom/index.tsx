'use client';

import { Product } from "@/utils/interfaces";
import { IoMdShare } from "react-icons/io";
import { SWrapper } from "./shareButtom.styles";
import { useEffect, useState } from "react";

type propsCustomLink = {
    children: React.ReactNode
    className?: string
    id?: string[]
    product?: Product
}

// para compartilhar produtos únicos, o componente recebe o product, captura o id e armazena no dataID
// para compartilhar catgorias, coleções ou favoritos, o componente recebe um array de id, transforma em string e armazena no dataID

export default function ShareButtom({ className, children, id, product }: propsCustomLink) {
    //usado para decidor qual rota usar
    const [isProduct, setIsProduct] = useState<boolean>(false);

    useEffect(() => {
        if (product?.slug) setIsProduct(true);
    },[]);

    const getIds = () => {
        // array de ids
        if (id && id.length > 0) {
            return id;
        }
        // array com id individual
        if (product?.slug) {
            return [product.slug];
        }
        return [];
    }

    const handleShare = async () => {

        const ids = getIds();
        if (!ids.length) return;

        // monta rota colecao, categorias, ou produtos baseado state
        const url = !isProduct ? `${window.location.origin}/colecao?ids=${ids.join(",")}`
            : `https://catalogo.miriammomesso.com.br/produtos/${ids.join()}`;


        try {
            if (navigator.share) {
                await navigator.share({
                    title: "Produtos Miriam Momesso",
                    url,
                });
            } else {
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