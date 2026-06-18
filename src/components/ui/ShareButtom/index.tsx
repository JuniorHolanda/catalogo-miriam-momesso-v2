'use client';

import { Product } from "@/utils/interfaces";
import { IoMdShare } from "react-icons/io";
import { SWrapper } from "./shareButtom.styles";
import React, { useEffect, useState } from "react";
import slugify from "@/utils/slugfyText";

type propsCustomLink = {
    idsProducts?: string[]
    idCollection?: string
    nameCollection?: string
    product?: Product
    className?: string
    children?: React.ReactNode
}

// para compartilhar produtos únicos, o componente recebe o product, captura o id e armazena no dataID
// para compartilhar catgorias, coleções ou favoritos, o componente recebe um array de id, transforma em string e armazena no dataID

export default function ShareButtom({
    idsProducts,
    idCollection,
    product,
    className,
    children,
    nameCollection }: propsCustomLink) {
    //usado para decidor qual rota usar
    const [isProduct, setIsProduct] = useState<boolean>(false);

    useEffect(() => {
        if (product?.slug) setIsProduct(true);
    }, []);

    const getIds = () => {
        // array de ids
        if (idsProducts && idsProducts.length > 0) {
            return idsProducts;
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

        const slug = nameCollection ? slugify(nameCollection) : ''

        // monta rota colecao, categorias, ou produtos baseado state
        const url = !isProduct ? `${window.location.origin}/colecao/${slug}?id=${ids.join(",")}&idCollection=${idCollection}`
            : `${window.location.origin}/produtos/${ids.join()}`;
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
        <SWrapper className={className} onClick={handleShare}>
            <IoMdShare />
            {
                children && <span>{children}</span>
            }
        </SWrapper>
    )
} 