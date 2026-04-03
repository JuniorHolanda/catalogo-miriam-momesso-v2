import SearchSection from "../SearchDesktop";
import StoriesMobile from "../stories";
import { SDesktop, SMobile, Ssection } from "./heroSection.styles";


export default function HeroSection() {

  return (
    <Ssection >

      <SDesktop>
        <SearchSection/>
      </SDesktop>

      <SMobile>
        <StoriesMobile />
      </SMobile>

    </Ssection>
  );
}
