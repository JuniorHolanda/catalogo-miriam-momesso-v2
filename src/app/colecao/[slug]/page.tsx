'use client'
import { useParams } from 'next/navigation';

export default function CollectionItens() {

  const params = useParams<{ slug: string }>();
  

  return(
    <h1>{params.slug}</h1>
  );
}