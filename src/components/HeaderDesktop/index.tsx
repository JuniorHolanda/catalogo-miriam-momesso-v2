import { Scontainer, ScontainerLogo, SHeader, Snav } from "./header.styled";


export default function HeaderDesktop() {
  return (
    <SHeader>
        <Scontainer>
            <ScontainerLogo>
                <img src="./logo-momesso-brindes.svg" alt="Logo da empresa Miriam Momesso" />
            </ScontainerLogo>
            <Snav>
                <ul>
                    <li>Home</li>
                    <li>Categoria</li>
                    <li>Meu Kit</li>
                    <li>Favoritos</li>
                </ul>
            </Snav>
            <div></div>
        </Scontainer>
    </SHeader>
  );
}