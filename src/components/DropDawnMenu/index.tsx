import { SLink, SNav, SWrapper } from "./dropDawnMenu";
import holiday from '@/data/holiday.json';
import Image from "next/image";
import { getProducts } from "@/services/getProductMomesso";
import { Product } from "@/utils/interfaces";

type filterCategoriesParams = "imported" | "main";

type createCategories = {
  	products: Product[]
  	categories: string[]
};



export default async function DropDawnMenu() {

	const products = await getProducts();

	function createCategories ({products, categories } : createCategories) {

		const categorieList = categories.map(item => ({
			nome: item,
			thumbNail: thumbNailCategories.
		}));
		
	}


	function filterCategories( origin : filterCategoriesParams ) {
		const listProductFromCategory = products?.filter(
			product => product.category?.[origin]?.length > 0);

		const uniqueCategoriesImported = [
			...new Set(
				listProductFromCategory.flatMap(
				item => item?.category?.[origin]
				)
			)
		];

		const resultProductCategories = uniqueCategoriesImported.map(item =>
			listProductFromCategory.find(product =>
				product.category?.[origin].includes(item)
			)
		).filter((item): item is Product => Boolean(item));

		const categoriesFiltred = createCategories({
			products: resultProductCategories,
			categories: uniqueCategoriesImported
		});

		// return resultProductCategories;
	}

	const importedCategory = filterCategories("imported")
	const mainCategory = filterCategories("main")

    return (

        <SWrapper>
			<SNav>
				<h2 >Costuráveis</h2>
				<ul>
					{
						mainCategory.map((item, i) => (
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
						importedCategory.map((item, i) => (
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