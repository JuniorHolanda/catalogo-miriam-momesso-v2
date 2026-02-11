'use client';

import { useProducts } from "@/contexts/Product.context";
import { SNav, SWrapper } from "./dropDawnMenu";
import { useEffect, useState } from "react";
import { Product } from "@/utils/interfaces";

export default function DropDawnMenu() {

	const products = useProducts();

	// agrupa os brindes de categoria brindes costuráveis
	const [internalCategory, setInternalCategory] = useState<Product[]>([]);
	// agrupa os brindes de categoria datas comemorativas
	const [holidayCategory, setHolidayCategory] = useState<Product[]>([]);
	// agrupa os brindes de categoria importados
	const [importedCategory, setimportedCategory] = useState<string[]>([]);

	// list é usado para identificar
	function filterCategories(categories: string[], products: Product[], list: string) {
		const filtered = categories.map(cat => 
		products.find(item => item.category.main.includes(cat))
			).filter((item): item is Product => item !== undefined);

		return filtered
	}

	useEffect(() => {
		const filterHoliday = () => {
			const holidayProducts = products.filter(product => product.category.holiday.length > 0);
			const holidayCategories = holidayProducts.map(item => item.category.holiday);
			const uniqueHolidays = [...new Set(holidayCategories.flat())];
			const filtered = filterCategories(uniqueHolidays, holidayProducts, 'holiday')
			setHolidayCategory(filtered)
		};

		const filterInternal = () => {
			const internalProducts = products.filter(product => product.category.main.length > 0 && !product.code);
			const internalCategories = internalProducts.map(item => item.category.main);
			const uniqueMain = [...new Set(internalCategories.flat())];

			// const filtered = filterCategories(uniqueMain, internalProducts )
			// setInternalCategory(filtered)
		};

		const filterIported = () => {
			const importedProducts = products.filter(product => product.category.main.length > 0 && product.code);
			const importedCategories = importedProducts.map(item => item.category.main);
			const uniqueMain = [...new Set(importedCategories.flat())]
			setimportedCategory(uniqueMain)
		};

		filterHoliday()
		filterInternal()
		filterIported()
	}, [] );

    return (
        <SWrapper>
			<SNav>
				<h2 >Costuráveis</h2>
				<ul>
					{
						internalCategory.map((item, i) => (
							<li key={i}>
								<img src={item.thumbnail} alt={item.altthumbnail} />
								<span>{item.category.main}</span>
							</li>
						))
					}
				</ul>
			</SNav>
			<SNav>
				<h2>Datas</h2>
				<ul>
					{
						holidayCategory.map((item, i) => (
							<li key={i}>
								<img src={item.thumbnail} alt={item.altthumbnail} />
								<span>{item.category.holiday}</span>
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
							<li key={i}>{item}</li>
						))
					}
				</ul>
			</SNav>
		</SWrapper>
    );
}