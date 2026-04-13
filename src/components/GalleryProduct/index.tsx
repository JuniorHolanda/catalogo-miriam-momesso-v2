'use client'

import Image from "next/image"
import { SGallery, SMainImg, SWrapper } from "./galleryProduct.styles"
import { Product } from "@/utils/interfaces"
import { useEffect, useState } from "react"

type GalleryProductsProps = {
    $product : Product
}


export default function GalleryProduct({$product} : GalleryProductsProps) {

    const [mainImg, setMainImg] = useState($product.thumbnail);
    const [mainAltImg, setMainAltImg] = useState($product.altthumbnail);

    function changeMainImg(src : string, alt: string) {
        setMainImg(src);
        setMainAltImg(alt);
    }

    return (
        <SWrapper>
            <SGallery>
                {
                    $product && $product.gallery.map(item => (
                        <div key={item._id}>
                            <Image
                                src={item.img}
                                alt={item.altimg}
                                width={1200}
                                height={700}
                                onClick={() => changeMainImg(item.img, item.altimg)}
                            />
                        </div>
                    ))
                }
            </SGallery>
            <SMainImg>
                <Image
                    src={mainImg}
                    alt={mainAltImg}
                    width={1200}
                    height={700}
                />
            </SMainImg>
        </SWrapper>
    )
}