import { SContainerProduct, SContainerTitle, SSection, SWrapper } from "./page.styles";
import CardProduct from "@/components/Cards/CardProduct";
import slugify from "@/utils/slugfyText";
import { getProducts } from "@/services/getProductMomesso";
import SmallCardProduct from "@/components/SmallCardProduct";

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
                    slugify(item) === slugify(slug)
                )
            );
            return filtered
        } else {
            console.log('ainda funciona')
            const filtered = products.filter(product =>
                product.category?.[origin]?.some(item =>
                    slugify(item) === slugify(slug)
                )
            );
            return filtered
        }
    }

    const productFiltered = filteredProductsParams()
    const title = slug.replace(/-/g, " ");

    return (
        <SWrapper>
            <SContainerTitle>
                <h1>{title}</h1>
            </SContainerTitle>
            <SSection>
                {
                    productFiltered.map(product => (
                        <SContainerProduct key={product._id}>
                            <CardProduct product={product} />
                            <SmallCardProduct product={product} />
                        </SContainerProduct>
                    ))
                }
            </SSection>
        </SWrapper>
    );
}