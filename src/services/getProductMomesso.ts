import axios from "axios";
import type { Product } from "@/utils/interfaces";

const API_URL = 'https://api-product-miriam-momesso-v2-next-2tly.onrender.com/produtos'

export async function getProducts(): Promise<Product[]> {

    try {
        const response = await axios.get<Product[]>(API_URL);
        return response.data;
    } catch (error) {
        console.log('Erro ao buscar produtos:', error);
        throw error
    };
}


export async function likeProduct(
    productId: string,
    value: boolean
): Promise<Product[]>{
	try {
		const response = await axios.patch<Product[]>(
        `${API_URL}/${productId}/like`,
        {like: value,}
    );
	return response.data;

	} catch (error: any) {
		console.error(
			'Erro ao atualizar like:',
			error.response?.data || error.message
		);
		throw error;
	}
}