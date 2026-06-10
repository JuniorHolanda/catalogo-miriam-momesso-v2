import { Collection } from './types'

export default function getLocalStorage(recebido: string): Collection[] {
  try {
    console.log(`chamada com sucesso do ${recebido}`)
    return JSON.parse(localStorage.getItem('collection') || '[]');
  } catch {
    console.log(`erro recebido do ${recebido}`)
    return [];
  }
}