import { notFound } from "next/navigation";
import categoryData from '@/data/holiday.json'
import { SContainerProduct, SContainerTitle, SSection, SWrapper } from "./page.styles";
import CardProduct from "@/components/Cards/CardProduct";
import slugify from "@/utils/slugfyText";
import type { Metadata } from "next";
import SwiperComponent from "@/components/Swiper";
import { getProducts } from "@/services/getProductMomesso";
import { generateCategoryMetadata } from "@/utils/generateCategoryMetadata";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateCategoryMetadata(params.slug);
}


export default async function CategoryPage({ params }: Props){
  const { slug } = params;
  const dataHoliday = categoryData.find( item => item.slug === slug);
  const products = await getProducts();

  const filteredProduct = products.filter(item =>
      item.category.holiday.some(holiday =>
          slugify(holiday).includes(slugify(slug))
      )
  )
  
  //validação
  if (!dataHoliday) {
      notFound()
  }

  return(
      <SWrapper>
          <SContainerTitle>
              <h1>{dataHoliday.category}</h1>
              <p>{dataHoliday.description}</p>
          </SContainerTitle>
          <SwiperComponent holiday={dataHoliday}  />
          <SSection>
              {
                  filteredProduct.map(product => (
                      <SContainerProduct key={product._id}>
                          <CardProduct product={product}/>
                      </SContainerProduct>
                  ))
              }
          </SSection>
      </SWrapper>
  );
}