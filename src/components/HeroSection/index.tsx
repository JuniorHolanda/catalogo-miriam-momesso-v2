import SearchSection from "../SearchDesktop";
import SearchMobile from "../SearchMobile";
import StoriesMobile from "../stories";
import { SDesktop, SMobile, Ssection } from "./heroSection.styles";


export default function HeroSection() {

  return (
    <Ssection >

      <SDesktop>
        <SearchSection/>
      </SDesktop>

      <SMobile>
        <SearchMobile />
        <StoriesMobile />
      </SMobile>

    </Ssection>
  );
}
