import { ChangeEvent, useState } from 'react'
import { Product } from '@/utils/interfaces'

export function useProductSearch(products: Product[]) {
  const [text, setText] = useState('')
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([])
  // usado para mostrar que o resultado da busca não foi encontrado.
  const [notFound, setNotFound] = useState(false)

  function controllerInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    setText(value)

    if (!value.trim()) {
      setProductsFiltered([])
      //torna o notFound falso porque se o productsFiltered for vazio e o notFound true, mostra o Lottie de busca não encontrada
      setNotFound(false)
      return
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    )

    setProductsFiltered(filtered)
    setNotFound(filtered.length === 0)
  }


  return {
    text,
    productsFiltered,
    notFound,
    controllerInput,
  }
}
