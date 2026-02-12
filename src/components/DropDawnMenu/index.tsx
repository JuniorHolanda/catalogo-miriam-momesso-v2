'use client';

import { useProducts } from "@/contexts/Product.context";
import { SNav, SWrapper } from "./dropDawnMenu";
import { useEffect, useState } from "react";
import { Product } from "@/utils/interfaces";
import holiday from '@/data/holiday.json'

export default function DropDawnMenu() {

	const products = useProducts();

	// agrupa os brindes de categoria brindes costuráveis
	const [costuraveisCategory, setCosturaveisCategory] = useState<Product[]>([]);
	// agrupa os brindes de categoria datas comemorativas
	const [holidayCategory, setHolidayCategory] = useState<Product[]>([]);
	// agrupa os brindes de categoria importados
	const [importedCategory, setImportedCategory] = useState<Product[]>([]);


	function filterProductsForCategories(categories: string[], products: Product[],  type: 'imported' | 'main') {
		return categories.map(cat =>
      products.find(item =>
        item.category[type].includes(cat)))
		.filter((item): item is Product => item !== undefined);
	}

	useEffect(() => {

		const filterCategories = ( type: 'imported' | 'main' ) => {
			// array de objetos produtos baseado no parâmetro type
			const productFilteredCategory = products.filter(product => product.category[type].length > 0);
			// array de strings com todas as categorias de productFilteredCategory
			const allCategories = productFilteredCategory.map(item => item.category[type]);
			// array de strings, elimina as categorias repetidas de allCategories 
			const uniqueCategories = [...new Set(allCategories.flat())];
			// recebe um objetmo de cada categoria
			const filtered = filterProductsForCategories(uniqueCategories, productFilteredCategory, type )
			type === 'imported' ? setImportedCategory(filtered) : setCosturaveisCategory(filtered)
		};

		filterCategories("main")
		filterCategories("imported")
	}, [] );

    return (
        <SWrapper>
			<SNav>
				<h2 >Costuráveis</h2>
				<ul>
					{
						costuraveisCategory.map((item, i) => (
							<li key={i}>
								<div>
									<img src={item.thumbnail} alt={item.altthumbnail} />
								</div>
								<span>{item.category.main}</span>
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
								<div>
									<img src={item.thumbnail} alt={item.altthumbnail} />
								</div>
								<span>{item.category.imported}</span>
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
								<div>
									<img src={item.img} alt={item.altImg} />
								</div>
								<span>{item.category}</span>
							</li>
						))
					}
				</ul>
			</SNav>
		</SWrapper>
    );
}