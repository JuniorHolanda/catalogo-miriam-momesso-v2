import { SContainerProduct, SContainerTitle, SSection, SWrapper } from "./page.styles";
import CardProduct from "@/components/Cards/CardProduct";
import slugify from "@/utils/slugfyText";
import { getProducts } from "@/services/getProductMomesso";

type PageProps = {
    params: Promise<{
        origin: "imported" | "main" | "holiday"
        slug: string
    }>
}

export default async function CategoryPage({ params }: PageProps) {
    const { origin, slug } = await params;

    const products = await getProducts();

    function filteredProductsParams() {

        if (origin === "holiday") {
            const filtered = products.filter(product =>
                product.category?.[origin]?.some(item =>
                    slugify(item) === slug
                )
            );
            return filtered
        } else {
            const filtered = products.filter(product =>
                product.category?.[origin]?.includes(slug)
            );
            return filtered
        }
    }

    const productFiltered = filteredProductsParams()


    return (
        <SWrapper>
            <SContainerTitle>
                {/* expressão que troca "-" por " "  */}
                <h1>{slug.replace(/-/g, ' ')}</h1>
                {/* <p>{"lorem"}</p> */}
            </SContainerTitle>
            <SSection>
                {
                    productFiltered.map(product => (
                        <SContainerProduct key={product._id}>
                            <CardProduct product={product} />
                        </SContainerProduct>
                    ))
                }
            </SSection>
        </SWrapper>
    );
}