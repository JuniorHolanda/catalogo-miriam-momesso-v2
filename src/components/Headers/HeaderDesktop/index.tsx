import { Scontainer, ScontainerLogo, Snav } from "./header.styled";
import { useProducts } from "@/contexts/Product.context";


export default function HeaderDesktop() {
  const products = useProducts();

  return (
      <Scontainer>
        <ScontainerLogo>
          {/* <img
            src="./symbols/logo-momesso-brindes.svg"
            alt="Logo da empresa Miriam Momesso"
          /> */}
          
        </ScontainerLogo>
        <Snav>
          <li>Home</li>
          <li><button>Category</button></li>
          <li>Meu Kit</li>
          <li>Favoritos</li>
        </Snav>
      </Scontainer>
  );
}
