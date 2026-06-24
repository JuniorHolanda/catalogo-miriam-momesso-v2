import { SContainerItens, SContent, SInfo, SWrapper, STextContent, SType, Stag, ScontainerTag, SContainerContentTag, SContainerBtnActions, BtnBuget } from "./page.styles";
import { getProducts } from "@/services/getProductMomesso";
import slugify from "@/utils/slugfyText";
import GalleryProduct from "@/components/GalleryProduct";
import { Metadata } from "next";
import ShareButtom from "@/components/ui/ShareButtom";
import CollectionButtom from "@/components/ui/CollectionButton/CollectionButton";
import NotFoundAnimation from "@/components/NotFound";
import { FaMoneyBill1Wave } from "react-icons/fa6";


type ProductPageParams = {
  params: Promise<{
    slug: string
  }>
};

export async function generateMetadata({
  params
}: ProductPageParams): Promise<Metadata> {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find(item => slugify(item.slug) === slug);


  if (!product) {
    return {
      title: "Produto não encontrado",
      description: "Infelizmente este produto não foi encontrado, no entanto possuimos diversos outros brindes, fique a vontade para procurar."
    };
  }
  const keywordFromCategory = [... new Set(Object.values(product.category).flat())];

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
  const urlProduct = `http://catalogo.miriammomesso.com.br/produtos/${slug}`
  const whatsappText = `Olá! Gostaria de mais informações sobre o produto ${product?.title}`;
  const whatsappNumber = '551138070539';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)} ${urlProduct}`;


  //validação
  if (!product) {
    return (
      <NotFoundAnimation
        title="Nenhum produto encontrado"
        subTitle="Volte para o início e tente novamente"
      />
    )
  }

  const allCategories = [
    ...product.category.holiday,
    ...product.category.main,
    ...product.category.imported
  ];


  return (
    <SWrapper>
      <GalleryProduct $product={product} />
      <SContent>
        <STextContent>
          <h1>{product?.title}</h1>
          <p>{product?.text}</p>
        </STextContent>
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
              <SContainerItens>
                {
                  allCategories.map((item, index) => (
                    <li key={index}>
                      <span>{item}</span>
                    </li>
                  ))
                }
              </SContainerItens>
            </SContainerContentTag>
          </Stag>
          <hr />
          <Stag>
            <h2>Medidas</h2>
            <SContainerContentTag>
              <SContainerItens>
                {
                  product.measure?.map((item, index) => (
                    <li key={index}>
                      <span>
                        {item}
                      </span>
                    </li>
                  ))
                }
              </SContainerItens>
            </SContainerContentTag>
          </Stag>
        </ScontainerTag>
      </SInfo>
      <SContainerBtnActions
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: .5
        }}
      >
        <ShareButtom product={product}>
          compartilhar
        </ShareButtom>
        <CollectionButtom idProduct={product._id} />
        <BtnBuget
          link={whatsappLink}
        >
          <FaMoneyBill1Wave className="icon" />
          <span>Orçamento</span>
        </BtnBuget >
      </SContainerBtnActions>
    </SWrapper>
  );
}