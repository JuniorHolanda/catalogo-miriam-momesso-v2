'use client';
import { SContainerItens, SContent, SGallery, SInfo, SMainImg, SSection, SBrutalSymbol, SWrapper, STextContent, SBtnContent, SType, Stag, ScontainerTag } from "./page.styles";
import { useProducts } from "@/contexts/Product.context";
import { notFound } from "next/navigation";
import { useParams } from 'next/navigation';
import { FaBox, FaHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";


export default function ProductPage () {

    const { slug } = useParams<{ slug: string }>();
    const products = useProducts();
    const product = products.find(item => item.slug === slug);
    
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
        <SWrapper>
            <SBrutalSymbol>
                <img src="/symbols/star.png" alt="" />
            </SBrutalSymbol>
            <SSection>
                <SGallery>
                {
                    product && product.gallery.map(item => (
                        <div  key={item._id}>
                            <img src={item.img} alt={item.altimg}/>
                        </div>
                    ))
                }
            </SGallery>
            <SMainImg>
                <img src={product?.gallery[0].img} alt={product?.gallery[0].altimg} />
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