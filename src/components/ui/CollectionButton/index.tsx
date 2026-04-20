"use client";

import { IoMdShare } from "react-icons/io";
import {
  SContainerCollection,
  SFeedbackCollection,
  SWrapper,
} from "./collectionButtom.styles";
import { useEffect, useState } from "react";
import InputSetCollection from "../InputSetCollection";
import CustomButton from "../Button";
import { Collection } from "@/utils/types";

type PropsCollectionButtom = {
  children: React.ReactNode;
  className?: string;
  idProduct: string;
};

export default function CollectionButtom({
  className,
  children,
  idProduct,
}: PropsCollectionButtom) {
  // guarda os dados da localStored
  const [collectionData, SetCollectionData] = useState<Collection[]>([]);
  // mostra o componente de coleção
  const [showCollection, setShowCollection] = useState<boolean>(false);
  const [createNewCollection, showCreateNewCollection] = useState<boolean>(false);
  // condição para renderizar aviso de sucesso ao criar coleção
  const [collectionCreated, setCollectionCreated] = useState<boolean | string>(false);


  function hiddenCollection(text : string) {
    //atualiza showCollection com novos dados inseridos
    const stored = JSON.parse(localStorage.getItem("collection") || "[]");
    SetCollectionData(stored);

    setShowCollection(false);
    setCollectionCreated(text);
    setTimeout(() => {
      setCollectionCreated(false)
    }, 2000);
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("collection") || "[]");
    SetCollectionData(stored);
  }, []);

  function updateCollection(collection : Collection) {
    const iDCollectionSelected = collection.id; //string
    const nameCollection = collection.name
    const newItem = idProduct; //string
    const stored: Collection[] = JSON.parse(localStorage.getItem("collection") || "[]"); //object
    
    
    const updated = stored.map(item => {
      if (item.id === iDCollectionSelected) {
        console.log(item.itensId);
          return {
              ...item,
              itensId: [...item.itensId, newItem]
          };
      }
      return item;
    });

    // salva de volta
    localStorage.setItem("collection", JSON.stringify(updated));
    hiddenCollection(`Produto adicionado à ${nameCollection}`);
  }

  return (
    <>
      {
        collectionCreated && (
          <SFeedbackCollection>
            {
              collectionCreated
            }
          </SFeedbackCollection>
        )
      }
      {
        showCollection && collectionData.length > 0 && (
          <SContainerCollection>
            {/* mostra lista de coleções */}
            {
              collectionData.map(item =>
                <div key={item.id}>
                  <button onClick={() => updateCollection(item)}
                  >
                    {item.name}
                  </button>
                </div>
              )
            }
            {/* cria nova coleção */}
            {
              !createNewCollection ?
                <CustomButton onClick={() => showCreateNewCollection(true)}>
                  Criar nova coleção
                </CustomButton>
                : <InputSetCollection
                    idProduct={idProduct}
                    placeholder="Nome da categoria"
                    children={'Criar categoria'}
                    onSuccess={hiddenCollection}
                />
            }
          </ SContainerCollection>

        )
      }
      {
        // quando não há coleções
        showCollection && collectionData.length <= 0 && (
          <SContainerCollection>
            <InputSetCollection
              idProduct={idProduct}
              placeholder="Nome da categoria"
              children={'Criar coleção'}
              onSuccess={hiddenCollection}
            />
          </SContainerCollection>
        )
      }

      <SWrapper onClick={() => setShowCollection(true)}>
        <IoMdShare />
        <>{children}</>
      </SWrapper>
    </>
  );
}
