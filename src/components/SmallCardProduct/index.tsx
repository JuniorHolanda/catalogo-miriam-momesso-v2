
import Image from "next/image";
import { SContainerImg, SContent, SWrapper } from "./smallCardProduct.style";
import { Product } from "@/utils/interfaces";
import truncateText from "@/utils/truncateText";

type ProductProps = {
  product: Product;
};

export default function SmallCardProduct({product} : ProductProps){
    
    const textProduct = truncateText(product.smalltext);
    
    return (
        
        <SWrapper href={`/produtos/${product.slug}`}>
            <SContainerImg>
                <Image 
                    src={product.thumbnail}
                    alt={product.altthumbnail}
                    width={200}
                    height={200}
                />
            </SContainerImg>
            <SContent>
                <h2>{product.title}</h2>
                <p>{textProduct}</p>
            </SContent>
        </SWrapper>
    );
}