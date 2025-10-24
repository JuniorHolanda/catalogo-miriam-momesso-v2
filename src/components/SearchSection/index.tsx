import { useProducts } from "@/contexts/Product.context";
import InputSearch from "../Search";
import { SbrutalSymbol, Ssection } from "./searchSection.styled";


export default function () {
    // const listproducts = useProducts();  

    return (
        <Ssection>
        <SbrutalSymbol>
            <img src='./symbols/star-1.svg' alt="" />
        </SbrutalSymbol>
        {/* <InputSearch products={listproducts} /> */}
        </Ssection>
    );
}
