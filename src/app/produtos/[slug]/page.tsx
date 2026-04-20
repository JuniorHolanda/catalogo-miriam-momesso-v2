import { SContainerItens, SContent, SInfo, SSection, SWrapper, STextContent, SBtnContent, SType, Stag, ScontainerTag, SContainerBtnContent, SArrows, SContainerContentTag } from "./page.styles";
import { notFound } from "next/navigation";
import { FaAngleLeft, FaAngleRight, FaBox, FaHeart } from "react-icons/fa";
import { getProducts } from "@/services/getProductMomesso";
import slugify from "@/utils/slugfyText";
import GalleryProduct from "@/components/GalleryProduct";
import { Metadata } from "next";
import ShareButtom from "@/components/ui/ShareButtom";
import CollectionButtom from "@/components/ui/CollectionButton";

type ProductPageParams = {
    params: Promise<{
        slug: string
    }>
};

export async function generateMetadata({
    params
} : ProductPageParams): Promise<Metadata> {
    const { slug } = await params;
    const products = await getProducts();
    const product = products.find(item => slugify(item.slug) === slug );
    
    if (!product) {
        return {
            title: "Produto não encontrado",
            description: "Infelizmente este produto não foi encontrado, no entanto possuimos diversos outros brindes, fique a vontade para procurar."
        };
    }
    const keywordFromCategory = [ ... new Set(Object.values(product.category).flat())];
    
    return {
        title: product.title,
        description: product.text.slice(0, 250),
        keywords: keywordFromCategory,
        alternates: {
            canonical: `https://seusite.com/produto/${product.slug}`,
        },

        openGraph: {
            title: product.title,
            description: product.text.slice(0, 250),
            siteName: 'Catálogo Miriam Momesso',
            type: "website",
            locale: "pt_BR",
            url: `https://seusite.com/produto/${product.slug}`,
            images: [
                {
                    url: product.thumbnail,
                    alt: product.title,
                    width: 1200,
                    height: 630,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: product.title,
            description: product.text.slice(0, 250),
            images: [product.thumbnail],
        },

        robots: {
            index: true,
            follow: true,
        },
    } 
}


export default async function ProductPage({ params }: ProductPageParams) {

    const { slug } = await params;
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
                            <ShareButtom product={product} >
                                Compartilhar
                            </ShareButtom>
                            <button>
                                <FaHeart />
                                gostei
                            </button>
                            <CollectionButtom idProduct={product._id}>
                                <FaBox />
                                coleção
                            </CollectionButtom>
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