import { SContainerItens, SContent, SInfo, SSection, SWrapper, STextContent, SBtnContent, SType, Stag, ScontainerTag, SContainerBtnContent, SArrows, SContainerContentTag } from "./page.styles";
import { notFound } from "next/navigation";
import { FaAngleLeft, FaAngleRight, FaBox, FaHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { getProducts } from "@/services/getProductMomesso";
import slugify from "@/utils/slugfyText";
import GalleryProduct from "@/components/GalleryProduct";

type ProductPageParams = {
    params: Promise<{
        slug: string
    }>
};


export default async function ProductPage({ params }: ProductPageParams) {

    const { slug } = await params;
    console.log("este é o slug " + slug)
    const products = await getProducts();
    const product = products.find(item =>
        slugify(item.slug) === slug
    );


    //validação
    if (!product) {
        notFound();
    }

    const allCategories = [
        ...product.category.holiday,
        ...product.category.main,
        ...product.category.imported
    ];


    return (
        <SWrapper>
            <SSection>
                <GalleryProduct $product={product} />
                <SContent>
                    <STextContent>
                        <h1>{product?.title}</h1>
                        <p>{product?.text}</p>
                    </STextContent>

                    <SContainerBtnContent>
                        <SArrows>
                            <FaAngleLeft />
                        </SArrows>
                        <SBtnContent>
                            <button>
                                <IoMdShare />
                                compartilhar
                            </button>
                            <button>
                                <FaHeart />
                                gostei
                            </button>
                            <button>
                                <FaBox />
                                coleção
                            </button>
                        </SBtnContent>
                        <SArrows>
                            <FaAngleRight />
                        </SArrows>
                    </SContainerBtnContent>
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
                            <SContainerContentTag>
                                <SArrows>
                                    <FaAngleLeft />
                                </SArrows>
                                <SContainerItens>
                                    {
                                        allCategories.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))
                                    }
                                </SContainerItens>
                                <SArrows>
                                    <FaAngleRight />
                                </SArrows>
                            </SContainerContentTag>
                        </Stag>
                        <Stag>
                            <h2>Medidas</h2>
                            <SContainerContentTag>
                                <SArrows>
                                    <FaAngleLeft />
                                </SArrows>
                                <SContainerItens>
                                    {
                                        product.measure?.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))
                                    }
                                </SContainerItens>
                                <SArrows>
                                    <FaAngleRight />
                                </SArrows>
                            </SContainerContentTag>
                        </Stag>
                    </ScontainerTag>
                </SInfo>
            </SSection>
        </SWrapper>
    );
}