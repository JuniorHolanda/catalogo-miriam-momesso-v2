import SearchSwitcher from "../SearchSwitcher";
import { SbrutalSymbol, Ssection } from "./searchSection.styled";


export default function () {
    return (
        <Ssection>
            <SbrutalSymbol>
                <img src='./symbols/star.png' alt="uma estrela azul de 7 pontas" />
            </SbrutalSymbol>
            <SearchSwitcher caller="section"/>
        </Ssection>
    );
}
