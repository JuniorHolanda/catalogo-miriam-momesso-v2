import { Collection } from './types'

export default function getLocalStorage(): Collection[] {
  try {
    return JSON.parse(localStorage.getItem('collection') || '[]')
  } catch {
    return []
  }
}
