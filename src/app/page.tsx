import { Scontainer, SDesktop, SMobile } from "./page.styles";
import SearchSection from "@/components/SearchDesktop";
import StoriesMobile from "@/components/stories";

export default function Home() {

  return (
    <Scontainer>
     <SDesktop>
        <SearchSection />
      </SDesktop>

      <SMobile>
        <StoriesMobile />
      </SMobile>
    </Scontainer>
  );
}