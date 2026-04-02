'use client'

import { useProducts } from "@/contexts/Product.context";
import { ScontainerCardProduct, SContainerHoliday, SContainerInfoHoliday, ScontainerInput, SformInSection, SLink, Ssection, Stitle } from "./searchSection.styled";
import { ChangeEvent, useEffect, useState } from "react";
import CardProduct from "../Cards/CardProduct";
import holiday from "@/data/holiday.json"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Product } from "@/utils/interfaces";
import { useViewport } from "@/hooks/useViewport";
import Image from "next/image";
import Stories from 'react-insta-stories';



export default function SearchSection() {
    const viewPort = useViewport()
    const products = useProducts();
    const [text, setText] = useState<string>("");
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
    // usada para controlar a propriedade top do css do input
    const [contentInput, setContentInput] = useState<boolean>(false);

    //controla a propriedade top no css do input 
    useEffect(() => {
        if (productsFiltered.length !== 0) {
            setContentInput(true);
        } else {
            setContentInput(false)
        }
    }, [productsFiltered])

    function controllerInput(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setText(value);

        // se o input estiver vazio, limpa o productsFiltered 
        if (value.trim() === "") {
            setProductsFiltered([]);
            return;
        }

        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        setProductsFiltered(filtered);
    }



    return (
        <Ssection $viewPortStyle={viewPort}>
            <SformInSection $viewPortStyle={viewPort} $props={contentInput}>
                <Stitle>Sim, Temos o seu brinde!</Stitle>
                <ScontainerInput $viewPortStyle={viewPort}>
                    <label htmlFor="search">Digite sua busca</label>
                    <input
                        type="text"
                        name="q"
                        id="search"
                        placeholder="Pesquisar produtos 🔎"
                        value={text}
                        onChange={controllerInput}
                    />
                </ScontainerInput>
        {
            holiday?.length > 0 && !contentInput && viewPort !== "sm" ? (
                <SContainerHoliday>
                            <Swiper
                                className="swiper-container-holiday"
                                spaceBetween={15}
                                loop={holiday.length > 5}
                                modules={[Autoplay, FreeMode]}
                                freeMode
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                speed={8000}
                                slidesPerView={
                                    viewPort === 'xl' || viewPort === 'lg'
                                    ? 5 : 2
                                }
                                grabCursor
                            >
                                {
                                    holiday.map(data =>
                                        <SwiperSlide
                                            className="swiper-item-holiday"
                                            key={data.id}
                                        >
                                        <SLink
                                            href={`categoria/holiday/${data.slug}`}
                                        >
                                            <Image className="container-img-holiday"
                                                src={data.icon ?? ''}
                                                alt={data.altImg ?? ''}
                                                width={1200}
                                                height={700}
                                            />
                                            <SContainerInfoHoliday>
                                                <h2>{data.category}</h2>
                                                {/* <p>{data.description}</p> */}
                                            </SContainerInfoHoliday>
                                        </SLink>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                </SContainerHoliday>
                ) : (
                    <div>
                        {
                            holiday?.length > 0 && !contentInput && viewPort === "sm" && (
                                holiday.map(data =>
                                    <Stories
                                        stories={data.icon}
                                        defaultInterval={1500}
                                        width={432}
                                        height={768}
                                    />
                                 )
                            )
                        } 
                    </div>
                )
            }

                {productsFiltered.length > 0 && (
                    <ScontainerCardProduct>
                        <Swiper className="swiper-container"
                            modules={[Navigation]}
                            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                            spaceBetween={55}
                            // controla a quantidade de slides com base na quantidade de produtos filtrados e tambem com base na tela se é molbile, ou tablet ou desktop
                            slidesPerView={
                                productsFiltered.length > 3 && viewPort == 'lg' ? 3
                                    : productsFiltered.length > 3 && viewPort == 'md' ? 2 : 1}
                            grabCursor={true}
                        >
                            {productsFiltered.map((item) => (
                                <SwiperSlide className="swiper-itens" key={item._id}>
                                    <CardProduct product={item} />
                                </SwiperSlide>
                            ))}

                            {/* Setas de navegação */}
                            <div className="swiper-button-prev" />
                            <div className="swiper-button-next" />
                        </Swiper>
                    </ScontainerCardProduct>
                )}
            </SformInSection>
        </Ssection>
    );
}
