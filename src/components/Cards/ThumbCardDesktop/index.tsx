'use cliente'

import Image from "next/image"
import { SWrapper } from "./thumbCardDesktop.styles"

type GalleryItem = {
  _id: string
  img: string
  altimg?: string
}

type PropsThumbCardDesktop = {
  item: GalleryItem
  url: string
  title: string
}

export default function ThumbCardDesktop({ item, url, title }: PropsThumbCardDesktop) {
  return (
    <SWrapper
      href={url}
      key={item._id}
    >
      {item.img && (
        <Image
          src={item.img}
          alt={item.altimg ? item.altimg : `foto do ${title}`}
          width={1200}
          height={700}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
            transition: 'all ease-in-out 0.2s',
          }}
        />
      )}
    </SWrapper>
  )
}