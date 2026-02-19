'use client';
import { SContainerItens, SContent, SGallery, SInfo, SMainImg, SSection, SStar, SWrapper } from "./page.styles";
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
            <SStar>
                <img src="/symbols/star.png" alt="" />
            </SStar>
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
                <h1>{product?.title}</h1>
                <hr />
                <p>{product?.text}</p>
                <hr />
                <div>
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
                </div>
            </SContent>
            <SInfo>
                   <div>
                    <h2>Categorias</h2>
                        <SContainerItens>
                            {
                                allCategories.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </SContainerItens>
                   </div>
                   <div>
                    <h2>Medidas</h2>
                    <SContainerItens>
                        {
                        product.measure?.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))
                    }
                    </SContainerItens>
                   </div>
            </SInfo>
            </SSection>
        </SWrapper>
    );
}