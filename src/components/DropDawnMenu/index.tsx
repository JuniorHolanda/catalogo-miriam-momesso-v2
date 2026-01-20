'use client';

import { useProducts } from "@/contexts/Product.context";
import { SComemorativos, SCosturaveis, SImportados, SWrapper } from "./dropDawnMenu";
import { useEffect, useState } from "react";

export default function DropDawnMenu() {

	const products = useProducts();

	const [internalCategory, setInternalCategory] = useState<string[]>([]);

	const productsFiltered = () => {
		// Junta todas as categorias de todos os produtos em um único array
		const categoriesFromProducts = products.flatMap(product => product.category);
		// Remove categorias repetidas usando Set
		const uniqueCategories = Array.from( new Set(categoriesFromProducts));

		setInternalCategory(uniqueCategories);
	};

	useEffect(() => {
		productsFiltered();
	}, [] );

    return (
        <SWrapper>
			<SCosturaveis>
				<h2 >Brindes costuráveis</h2>
				<ul >
					{internalCategory};
				</ul>
			</SCosturaveis>
			<SImportados>
				<h2>Datas Comemorativas</h2>
				<ul>
				</ul>
			</SImportados>
			<SComemorativos>
				<h2>Brindes Importados</h2>
				<ul>
				</ul>
			</SComemorativos>
		</SWrapper>
    );
}