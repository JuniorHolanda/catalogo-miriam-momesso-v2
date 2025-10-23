import Search from "@/components/Search";
import { Scontainer, ScontainerLogo, SHeader, Snav } from "./header.styled";
import { useProducts } from "@/contexts/Product.context";


export default function HeaderDesktop(){
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
          <li>Categoria</li>
          <li>Meu Kit</li>
          <li>Favoritos</li>
        </Snav>
        <Search products={products} />
      </Scontainer>
    </SHeader>
  );
}
