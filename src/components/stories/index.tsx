'use client'
import Stories from "react-insta-stories";
import { SBtnCategory, SContainerStories, SContent, SInfo, SStories } from "./stories.styles";
import holiday from "@/data/holiday.json"
import Image from "next/image";

export default function StoriesMobile() {

  const listStories = holiday.map((item) => ({
    content: () => (

      <>

        <SContent>
          <SInfo>
            <h1>{item.category}</h1>
            <p>{item.description}</p>
          </SInfo>
          <SBtnCategory link={`/categoria/holiday/${item.slug}`}>
            Ver produto
          </SBtnCategory>
        </SContent>

        <SStories>
          <Image
            src={item.icon ?? ''}
            alt={item.altImg ?? ''}
            width={400}
            height={900}
          />
        </SStories>
      </>
    ),
  }))


  return (
    <SContainerStories>
      <Stories
        stories={listStories}
        defaultInterval={7000}
        width={"100%"}
        height={"100%"}
        loop
      />
    </SContainerStories>
  )
}