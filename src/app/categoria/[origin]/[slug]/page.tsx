import { notFound } from "next/navigation";
import categoryHolidayData from '@/data/holiday.json'
import { SContainerProduct, SContainerTitle, SSection, SWrapper } from "./page.styles";
import CardProduct from "@/components/Cards/CardProduct";
import slugify from "@/utils/slugfyText";
import SwiperComponent from "@/components/Swiper";
import { getProducts } from "@/services/getProductMomesso";

type PageProps = {
  params: Promise<{
    origin: string
    slug: string
  }>
}

export default async function CategoryPage({ params }: PageProps){
    const { slug, origin } = await params;

    const dataHoliday = categoryHolidayData.find( item => item.slug === slug);

    const products = await getProducts();

        // const category = item.category.main?.length
        //     ? item.category.main
        //     : item.category.imported || []
        // return category.some(cat => slugify(cat) === slug)
    });

    const filteredHoliday = products.filter(item =>
      item.category?.holiday?.some(holiday =>
          slugify(holiday).includes(slugify(slug))
      )
    );
       
    //validação
    if (filteredHoliday.length <= 0 && filteredProduct.length <= 0) {
        notFound();
    }

    const productSwith = filteredProduct !== undefined && filteredProduct.length > 0
        ? filteredProduct
        : filteredHoliday

    console.log(filteredProduct);


    return(
        <SWrapper>
            <SContainerTitle>
                <h1>{}</h1>
                <p>{}</p>
            </SContainerTitle>
            {
                dataHoliday && <SwiperComponent holiday={dataHoliday}  />
            }
            <SSection>
                {
                    productSwith.map(product => (
                        <SContainerProduct key={product._id}>
                            <CardProduct product={product}/>
                        </SContainerProduct>
                    ))
                }
            </SSection>
        </SWrapper>
    );
}