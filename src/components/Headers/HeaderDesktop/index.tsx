import DropDawnMenu from "@/components/DropDawnMenu";
import { Scontainer, ScontainerLogo, SHeader, Snav } from "./header.styled";
import { useProducts } from "@/contexts/Product.context";


export default function HeaderDesktop() {
  const products = useProducts();

  return (
    <SHeader>
      <Scontainer>
        <ScontainerLogo>
          <img
            src="./logo-momesso-brindes.svg"
            alt="Logo da empresa Miriam Momesso"
          />
          
        </ScontainerLogo>
        <Snav>
          <li>Home</li>
          <li><button>Category</button></li>
          <DropDawnMenu/>
          <li>Meu Kit</li>
          <li>Favoritos</li>
        </Snav>
      </Scontainer>
    </SHeader>
  );
}
