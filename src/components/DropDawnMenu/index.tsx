import { SLink, SNav, SWrapper } from "./dropDawnMenu";
import holiday from '@/data/holiday.json';
import Image from "next/image";
import { getProducts } from "@/services/getProductMomesso";


export default async function DropDawnMenu() {

	const products = await getProducts();

	const productsImportedCategory = products.filter( item => item.category?.imported.length > 0)

	const productsMainCategory = products.filter(item => item.category?.main.length > 0)

	//junta os itens dos array e elimina os repetidos
	const uniqueCategoriesImported = [
		...new Set(
			productsImportedCategory.flatMap(
			item => item?.category?.imported ?? []
			)
		)
	];

	const uniqueProductsCategory = uniqueCategoriesImported.map(item => 
		
	)

    return (

        <SWrapper>
			<SNav>
				<h2 >Costuráveis</h2>
				<ul>
					{
						productsMainCategory.map((item, i) => (
							<li key={i}>
								<SLink href={`/categoria/${item.category.main}`}>
									<div>
										<Image
											src={item.thumbnail}
											alt={item.altthumbnail}
											width={1200}
											height={700}
										/>
									</div>
									<span>{item.category.main}</span>
								</SLink>
							</li>
						))
					}
				</ul>
			</SNav>
			<SNav>
				<h2>Importados</h2>
				<ul>
					{
						productsMainCategory.map((item, i) => (
							<li key={i}>
								<SLink href={`/categoria/${item.category.imported}`}>
									<div>
										<Image
										src={item.thumbnail}
										alt={item.altthumbnail}
										width={1200}
										height={700}
										/>
									</div>
									<span>{item.category.imported}</span>
								</SLink>
							</li>
						))
					}
				</ul>
			</SNav>
			<SNav>
				<h2>Datas</h2>
				<ul>
					{
						holiday.map((item, i) => (
							<li key={i}>
								<SLink href={`/categoria/${item.slug}`}>
									<div>
										<Image
										src={item.icon}
										alt={item.altIcon}
										width={1200}
										height={700}
										/>
									</div>
									<span>{item.category}</span>
								</SLink>
							</li>
						))
					}
				</ul>
			</SNav>
		</SWrapper>
    );
}