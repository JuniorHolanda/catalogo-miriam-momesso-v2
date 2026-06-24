import { SContainerTitle, SWrapper } from "./page.styles";
import slugify from "@/utils/slugfyText";
import { getProducts } from "@/services/getProductMomesso";
import CategoryProducts from "@/components/CategoryProducts";
import NotFoundAnimation from "@/components/NotFound";

type PageProps = {
    params: Promise<{
        origin: "imported" | "main" | "holiday"
        slug: string
    }>
}

export default async function CategoryPage({ params }: PageProps) {
    const { origin, slug } = await params;
    const products = await getProducts();


    const productFiltered = products.filter(product =>
        product.category?.[origin]?.some(item =>
            slugify(item) === slugify(slug)
        )
    );

    const title = slug.replace(/-/g, " ");

    return (
        <SWrapper>
            <SContainerTitle>
                <h1>{title}</h1>
            </SContainerTitle>
            {
                productFiltered.length > 0 ? 
                <CategoryProducts products={productFiltered} />
                : <NotFoundAnimation 
                subTitle="Nenhum produto aqui por enquanto, volte mais tarde."
                />
            }
        </SWrapper>
    );
}