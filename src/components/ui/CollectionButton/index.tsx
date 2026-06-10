"use client";

import {
  SBtnCollection,
  SCollection,
  SContainerBtn,
  SContainerCollection,
  SContainerThumb,
  SFeedbackCollection,
  STitleCollection,
  SWrapper,
  SWrapperCollection,
} from "./collectionButtom.styles";
import { useEffect, useState } from "react";
import InputSetCollection from "../InputSetCollection";
import { Collection } from "@/utils/types";
import { FaBox, FaFolderPlus } from "react-icons/fa";
import { RiFolderCloseFill } from "react-icons/ri";
import { useProducts } from "@/contexts/Product.context";
import CreateProductsMap from "@/utils/productsMap";
import CreateListCollectionProducts from "@/utils/collectionWithProducts";
import { Product } from "@/utils/interfaces";
import Image from "next/image";
import getLocalStorage from "@/utils/getLocalStorage";


type PropsCollectionButtom = {
  className?: string;
  idProduct: string;
};

type CollectionFull = Collection & {
  products: Product[];
}


export default function CollectionButtom({
  idProduct,
}: PropsCollectionButtom) {
  // guarda os dados da localStored
  const [collectionData, setCollectionData] = useState<Collection[]>([]);
  // mostra o componente de coleção
  const [showCollection, setShowCollection] = useState<boolean>(false);
  const [createNewCollection, setShowCreateNewCollection] = useState<boolean>(false);
  // condição para renderizar aviso de sucesso ao criar coleção
  const [collectionCreated, setCollectionCreated] = useState<boolean | string>(false);
  const [collectionFull, setCollectionFull] = useState<CollectionFull[] | []>([]);
  const products = useProducts();


  useEffect(() => {
    const stored = getLocalStorage()
    // cria um mapa baseado nos id de cada produto. melhora o desempenho
    const productsMap = CreateProductsMap(products);
    const list = CreateListCollectionProducts(stored, productsMap);
    setCollectionData(list);
    setCollectionFull(list); // gera coleções com produtos
  }, [showCollection]);

  // mostra mensagem de sucesso ao adicionar ou remover produtos das coleções e esconde o componente
  function hiddenCollection(text: string) {
    const stored = getLocalStorage()
    setCollectionData(stored);

    setShowCollection(false);
    setCollectionCreated(text);
    setTimeout(() => {
      setCollectionCreated(false)
    }, 3000);
  }

  function updateCollection(collection: Collection) {
    const iDCollectionSelected = collection.id; //id da coleção
    const nameCollection = collection.name
    const newItem = idProduct; //id do produto
    //lista de coleções na localStorage
    const stored = getLocalStorage()

    const updated = stored.map(item => {
      if (item.id === iDCollectionSelected) {
        return {
          ...item,
          itensId: [...item.itensId, newItem]
        };
      }
      return item;
    });

    localStorage.setItem("collection", JSON.stringify(updated));
    hiddenCollection(`Produto adicionado à lista ${nameCollection} 🙏​`);
    setShowCreateNewCollection(false)
  };

  function removeItemCollection(collection: Collection) {
    const stored = getLocalStorage()

    const iDCollectionSelected = collection.id;

    const updatedCollections = stored.map(item => {
      if (item.id === iDCollectionSelected) {
        return {
          ...item,
          itensId: item.itensId.filter(id => id !== idProduct)
        };
      }
      return item;
    });

    localStorage.setItem('collection', JSON.stringify(updatedCollections));
    hiddenCollection(`Produto removido da lista ${collection.name} ✌️`);
    setShowCreateNewCollection(false)
  }

  return (
    <>
      {/* feedback adicionar e remover localstorage */}
      {
        collectionCreated && (
          <SFeedbackCollection>
            <span>{collectionCreated}</span>
          </SFeedbackCollection>
        )
      }
      {
        showCollection && (

          <SWrapperCollection>
            <SContainerBtn >
              {
                collectionData.length > 0 ?
                  <h2>Adicione o produto à uma coleção  ou crie uma nova.</h2>
                  : <h2>Nenhuma coleção por aqui 😢 vamos criar uma nova?</h2>
              }

              <InputSetCollection
                idProduct={idProduct}
                placeholder="Criar nova coleção"
                children={'Confirmar'}
                onSuccess={hiddenCollection}
              />
            </SContainerBtn>



            <SContainerCollection>
              {
                collectionFull.map(item => {
                  const hasProduct = item.itensId.includes(idProduct);

                  return (
                    <SCollection $hasProduct={hasProduct} key={item.id}>
                      <SContainerThumb>
                        <Image
                          src={item.products.at(-1)?.thumbnail ?? '/favicon.png'}
                          alt={item.products.at(-1)?.altthumbnail ?? 'produto Miriam Momesso'}
                          width={100}
                          height={100}
                          style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                          }}
                        />
                      </SContainerThumb>
                      <STitleCollection>
                        {item.name}
                      </STitleCollection>
                      <SBtnCollection $hasProduct={hasProduct} onClick={() => {
                        if (hasProduct) {
                          removeItemCollection(item);
                        } else {
                          updateCollection(item);
                        }
                      }}>
                        {
                          hasProduct ?
                            <RiFolderCloseFill />
                            : <FaFolderPlus />
                        }
                      </SBtnCollection>
                    </SCollection>
                  )
                }
                )
              }
            </SContainerCollection>
          </ SWrapperCollection>
        )
      }
      <SWrapper onClick={() => setShowCollection(true)}>
        <FaBox className="icon" />
        <span>coleção</span>
      </SWrapper>
    </>
  );
}
