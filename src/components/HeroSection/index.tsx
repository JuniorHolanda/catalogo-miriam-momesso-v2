"use client";
import SearchSection from "../SearchDesktop";
import StoriesMobile from "../stories";
import { Ssection } from "./heroSection.styles";
import { useViewport } from "@/hooks/useViewport";


export default function HeroSection() {
  const viewPort = useViewport();

  return (
    <Ssection $viewPortStyle={viewPort}>
      {
        viewPort !== 'sm' ? (
          <SearchSection/>
        ) : (
          <StoriesMobile />
        )
      }
    </Ssection>
  );
}
