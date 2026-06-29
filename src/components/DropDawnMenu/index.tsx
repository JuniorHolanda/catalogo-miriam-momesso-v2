'use client'
import { SContainerblockCategory, SContainerListCat, SContainerThumb, SContainerTitleCat, SContainerToglle, SLiCards, SLink, STitleCategory, SWrapper } from "./dropDawnMenu";
import holiday from '@/data/holiday.json';
import Image from "next/image";
import { Holiday, Product } from "@/utils/interfaces";
import slugify from "@/utils/slugfyText";
import { useProducts } from "@/contexts/Product.context";
import ToggleButton from "../ToglleButton";
type filterCategoriesParams = "imported" | "main";

type createCategories = {
	products: Product[]
	categories: string[]
	originFrom: "imported" | "main"
};

type CategoryItem = {
	title: string;
	thumbnail: string | null;
	altThumbnail: string | null;
	origin: string;
};
type RenderBlockProps =
	{
		title: string;
		type: 'category';
		category: CategoryItem[];
	}
	| {
		title: string;
		type: 'holiday';
		dataHoliday: Holiday[];
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
		// separa os produtos por  com base na origin imported ou main
		const listProductFromCategory = products?.filter(
			product => product.category?.[origin]?.length > 0
		);

		// junta todos os as categorias em um array sem repetições
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
	const mainCategory = filterCategories("main");

	// decide qual bloco de categoria retornar com base no type, 
	// type category aceita → mainCategory e importedCategory como valor da chave category
	// type holiday aceita → holiday como valor da chave dataHoliday

	function renderBlock(props: RenderBlockProps) {

		if (props.type === 'category') {
			return (
				<SContainerblockCategory>

					<SContainerTitleCat>
						<h2 >{props.title}</h2>
					</SContainerTitleCat>

					<SContainerListCat>
						{
							props.category.map((item, i) => (
								<SLiCards
									key={i}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										damping: 13,
										stiffness: 100,
										delay: i * .03
									}}
								>
									<SLink href={`/categoria/${slugify(item.origin)}/${slugify(item.title)}`}>
										<SContainerThumb

										>
											<Image
												src={item.thumbnail ?? ''}
												alt={item.altThumbnail ?? ''}
												width={100}
												height={100}

												style={{
													width: '50px',
													flex: 1,
													objectFit: 'cover',
													objectPosition: 'center',
												}}
											/>
										</SContainerThumb>
										<STitleCategory>
											<span>{item.title}</span>
										</STitleCategory>
									</SLink>
								</SLiCards>
							))
						}
					</SContainerListCat>

				</SContainerblockCategory>
			)
		} else {
			return (
				<SContainerblockCategory>
					<SContainerTitleCat>
						<h2>Datas</h2>
					</SContainerTitleCat>
					<SContainerListCat>
						{
							props.dataHoliday.map((item, i) => (
								<SLiCards
									key={i}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										damping: 13,
										stiffness: 100,
										delay: i * .03
									}}
								>
									<SLink href={`/categoria/holiday/${item.slug}`}>
										<SContainerThumb>
											<Image
												src={item.icon}
												alt={item.altIcon}
												width={100}
												height={100}
												style={{
													width: '50px',
													objectFit: 'cover',
													objectPosition: 'center',
												}}
											/>
										</SContainerThumb>
										<STitleCategory>
											<span>{item.category}</span>
										</STitleCategory>
									</SLink>
								</SLiCards>
							))
						}
					</SContainerListCat>
				</SContainerblockCategory>
			)
		}
	}
	return (
		<SWrapper
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: "spring",
				damping: 13,
				stiffness: 100,
			}}
			exit={
				{
					opacity: 0,
					y: 10,
					transition: {
						duration: 0.21
					}
				}}
		>
			<SContainerToglle>
				<ToggleButton />
			</SContainerToglle>
			{renderBlock({
				title: 'Costuráveis',
				type: 'category',
				category: mainCategory,
			})}

			{renderBlock({
				title: 'Importados',
				type: 'category',
				category: importedCategory,
			})}

			{renderBlock({
				title: 'Datas',
				type: 'holiday',
				dataHoliday: holiday,
			})}
		</SWrapper>
	);
}