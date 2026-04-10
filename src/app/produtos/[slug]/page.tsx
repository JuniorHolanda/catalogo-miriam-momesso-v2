'use client';

import { SContainerItens, SContent, SGallery, SInfo, SMainImg, SSection, SWrapper, STextContent, SBtnContent, SType, Stag, ScontainerTag } from "./page.styles";
import { useProducts } from "@/contexts/Product.context";
import { notFound } from "next/navigation";
import { useParams } from 'next/navigation';
import { FaBox, FaHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import Image from "next/image";
import { useViewport } from "@/hooks/useViewport";


export default function ProductPage () {

    const { slug } = useParams<{ slug: string }>();
    const products = useProducts();
    const product = products.find(item => item.slug === slug);
    const viewPort = useViewport()
    
    //validação
    if (!product) {
        notFound()
    }
    
    const allCategories = [
  ...product.category.holiday,
  ...product.category.main,
  ...product.category.imported
];

   
    return (
        <SWrapper $viewPortStyle={viewPort}>
            <SSection $viewPortStyle={viewPort}>
                <SGallery $viewPortStyle={viewPort}>
                    {
                        product && product.gallery.map(item => (
                            <div  key={item._id}>
                                <Image
                                    src={item.img}
                                    alt={item.altimg}
                                    width={1200}
                                    height={700}
                                />
                            </div>
                        ))
                    }
                </SGallery>
                <SMainImg>
                    <Image
                        src={product?.gallery[0].img}
                        alt={product?.gallery[0].altimg}
                        width={1200}
                        height={700}
                    />
                </SMainImg>
                <SContent>
                    <STextContent>
                        <h1>{product?.title}</h1>
                        <p>{product?.text}</p>
                    </STextContent>
                    
                    <SBtnContent>
                        <button>
                            <IoMdShare />
                            compartilhar
                        </button>
                        <button>
                            <FaHeart/>
                            gostei
                        </button>
                        <button>
                            <FaBox />
                            coleção
                        </button>
                    </SBtnContent>
                </SContent>
                <SInfo>
                    <SType>
                        {
                            product.category.imported.length > 0 ? <h2>Produto Importado</h2> : <h2>Produto Costurável</h2>
                        }
                    </SType>
                    <ScontainerTag>
                        <Stag>
                            <h2>Categorias</h2>
                            <SContainerItens>
                                {
                                    allCategories.map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))
                                }
                            </SContainerItens>
                        </Stag>
                        <Stag>
                            <h2>Medidas</h2>
                            <SContainerItens>
                                {
                                product.measure?.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                            </SContainerItens>
                        </Stag> 
                    </ScontainerTag>
                </SInfo>
            </SSection>
        </SWrapper>
    );
}