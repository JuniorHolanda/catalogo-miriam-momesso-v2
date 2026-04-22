'use client'
import { SContainerListCat, SContainerThumb, SContainerTitleCat, SLink, SNav, SWrapper } from "./dropDawnMenu";
import holiday from '@/data/holiday.json';
import Image from "next/image";
import { getProducts } from "@/services/getProductMomesso";
import { Product } from "@/utils/interfaces";
import slugify from "@/utils/slugfyText";
import { useProducts } from "@/contexts/Product.context";

type filterCategoriesParams = "imported" | "main";

type createCategories = {
	products: Product[]
	categories: string[]
	originFrom: "imported" | "main"
};



export default function DropDawnMenu() {

	const products = useProducts();

	function createCategories({ products, categories, originFrom }: createCategories) {

		const listCategories = categories.map(cat => {
			const productFiltered = products.find(product =>
				product.category?.[originFrom]?.includes(cat)
			);

			return {
				title: cat,
				thumbnail: productFiltered?.gallery[1]?.img ?? null,
				altThumbnail: productFiltered?.gallery[0]?.altimg ?? null,
				origin: originFrom
			}
		});

		return listCategories;

	}


	function filterCategories(origin: filterCategoriesParams) {
		const listProductFromCategory = products?.filter(
			product => product.category?.[origin]?.length > 0
		);

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
			categories: uniqueCategoriesImported,
			originFrom: origin
		});

		return categoriesFiltred;
	}

	const importedCategory = filterCategories("imported")
	const mainCategory = filterCategories("main")

	return (

		<SWrapper>
			<SNav>
				<SContainerTitleCat>
					<h2 >Costuráveis</h2>
				</SContainerTitleCat>
				<SContainerListCat>
					<ul>
						{
							mainCategory.map((item, i) => (
								<li key={i}>
									<SLink href={`/categoria/${slugify(item.origin)}/${slugify(item.title)}`}>
										<SContainerThumb>
											<Image
												src={item.thumbnail ?? ''}
												alt={item.altThumbnail ?? ''}
												width={1200}
												height={700}
												objectFit="couver"
											/>
										</SContainerThumb>
										<span>{item.title}</span>
									</SLink>
								</li>
							))
						}
					</ul>
				</SContainerListCat>
			</SNav>


			<SNav>
				<SContainerTitleCat>
					<h2>Importados</h2>
				</SContainerTitleCat>
				<SContainerListCat>
					<ul>
						{
							importedCategory.map((item, i) => (
								<li key={i}>
									<SLink href={`/categoria/${slugify(item.origin)}/${slugify(item.title)}`}>
										<SContainerThumb>
											<Image
												src={item.thumbnail ?? ''}
												alt={item.altThumbnail ?? ''}
												width={1200}
												height={700}
											/>
										</SContainerThumb>
										<span>{item.title}</span>
									</SLink>
								</li>
							))
						}
					</ul>
				</SContainerListCat>
			</SNav>

			<SNav>
					<SContainerTitleCat>
						<h2>Datas</h2>
					</SContainerTitleCat>
					<SContainerListCat>
						<ul>
							{
								holiday.map((item, i) => (
									<li key={i}>
										<SLink href={`/categoria/holiday/${item.slug}`}>
											<SContainerThumb>
												<Image
													src={item.icon}
													alt={item.altIcon}
													width={1200}
													height={700}
												/>
											</SContainerThumb>
											<span>{item.category}</span>
										</SLink>
									</li>
								))
							}
						</ul>
				</SContainerListCat>
			</SNav>
		</SWrapper>
	);
}