import { SContainerTitle, SSection, SWrapper } from "./page.styles";
import CardProduct from "@/components/Cards/CardProduct";
import slugify from "@/utils/slugfyText";
import { getProducts } from "@/services/getProductMomesso";
import SmallCardProduct from "@/components/SmallCardProduct";
import { Product } from "@/utils/interfaces";

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

    const renderProducts = (Component: React.FC<{ product: Product }>) =>
        productFiltered.map(product => (
            <Component key={product._id} product={product} />
        ));

    const title = slug.replace(/-/g, " ");

    return (
        <SWrapper>
            <SContainerTitle>
                <h1>{title}</h1>
            </SContainerTitle>
            <SSection>
                {renderProducts(SmallCardProduct)}
                {renderProducts(CardProduct)}
            </SSection>
        </SWrapper>
    );
}