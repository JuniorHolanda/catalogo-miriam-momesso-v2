'use client'

import Image from "next/image"
import { SGallery, SMainImg, SMotionGalleryItem, SWrapper } from "./galleryProduct.styles"
import { Product } from "@/utils/interfaces"
import { useState } from "react"

type GalleryProductsProps = {
    $product: Product
}


export default function GalleryProduct({ $product }: GalleryProductsProps) {
    console.log($product);


    const [mainImg, setMainImg] = useState($product.thumbnail);
    const [mainAltImg, setMainAltImg] = useState($product.altthumbnail);

    function changeMainImg(src: string, alt: string) {
        setMainImg(src);
        setMainAltImg(alt);
    }

    return (
        <SWrapper>
            <SGallery>
                {
                    $product && $product.gallery.map((item, i) => (
                        item.img && (
                            <SMotionGalleryItem
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    damping: 13,
                                    stiffness: 100,
                                    delay: i * .1
                                }}
                                key={item._id}>
                                <Image
                                    src={item.img}
                                    alt={item.altimg}
                                    width={800}
                                    height={800}
                                    onClick={() => changeMainImg(item.img, item.altimg)}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',

                                    }}
                                />
                            </SMotionGalleryItem>
                        )
                    ))
                }
            </SGallery>
            <SMainImg
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    damping: 13,
                    stiffness: 100,
                    delay: .5
                }}
            >
                {
                    $product.thumbnail && (
                        <Image
                            src={mainImg}
                            alt={mainAltImg}
                            width={800}
                            height={800}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    )
                }
            </SMainImg>
        </SWrapper>
    )
}