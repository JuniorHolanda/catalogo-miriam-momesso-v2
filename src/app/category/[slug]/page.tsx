'use client'
import { useProducts } from "@/contexts/Product.context";
import { notFound, useParams } from "next/navigation";
import categoryData from '@/data/holiday.json'
import { SBanner, SContainerProduct, SContainerTitle, SSection, SWrapper } from "./page.styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardProduct from "@/components/Cards/CardProduct";
import slugify from "@/utils/slugfyText";

export default function CategoryPage() {
        const { slug } = useParams<{ slug: string }>();
        const holiday = categoryData.find( item => item.slug === slug);
        const products = useProducts();
        const filteredProduct = products.filter(item =>
            item.category.holiday.some(holiday =>
                slugify(holiday).includes(slugify(slug))
            )
        )
        //validação
        if (!holiday) {
            notFound()
        }

    return(
        <SWrapper>

            <SContainerTitle>
                <h1>{holiday.category}</h1>
                <p>{holiday.description}</p>
            </SContainerTitle>

            <SBanner>
                <Swiper
                    className="swiper-container"
                    modules={[Navigation]}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    spaceBetween={20}
                    // controla a quantidade de slides com base na quantidade de produtos filtrados e tambem com base na tela se é molbile, ou tablet ou desktop
                    slidesPerView={1.5}
                    grabCursor={true}
                >
                    {holiday.gallery?.map((item, i) => (
                        <SwiperSlide className="swiper-itens" key={i}>
                            <img src={item.img} alt={item.altImg}/>
                        </SwiperSlide>
                    ))}

                    {/* Setas de navegação */}
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </Swiper>
            </SBanner>
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