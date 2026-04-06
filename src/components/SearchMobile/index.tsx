import { getProducts } from "@/services/getProductMomesso";
import { SWrapper } from "./searchMobile.styles";



export default async function SearchMobile() {

    const products = await getProducts();

    return (
        <>
        </>
    );
}