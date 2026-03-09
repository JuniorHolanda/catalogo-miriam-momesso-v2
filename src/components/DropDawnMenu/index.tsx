'use client';

import { useProducts } from "@/contexts/Product.context";
import { SLink, SNav, SWrapper } from "./dropDawnMenu";
import { useEffect, useState } from "react";
import { Product } from "@/utils/interfaces";
import holiday from '@/data/holiday.json';
import Image from "next/image";


export default function DropDawnMenu() {

	const products = useProducts();

	// agrupa os brindes de categoria brindes costuráveis
	const [costuraveisCategory, setCosturaveisCategory] = useState<Product[]>([]);
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
			const setter = type === 'imported' ? setImportedCategory : setCosturaveisCategory;
			setter(filtered);
		};

		filterCategories("main")
		filterCategories("imported")
	}, [products] );

    return (
        <SWrapper>
			<SNav>
				<h2 >Costuráveis</h2>
				<ul>
					{
						costuraveisCategory.map((item, i) => (
							<li key={i}>
								<SLink href={`/categoria/${item.slug}`}>
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
								<SLink href={`/categoria/${item.slug}`}>
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