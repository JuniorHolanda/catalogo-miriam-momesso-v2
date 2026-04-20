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
import { Product } from "@/utils/interfaces";

type Collection = {
  id?: string;
  name?: string;
  itensId: string[];
};

type PropsCollectionButtom = {
  children: React.ReactNode;
  className?: string;
  idProduct: string[];
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
  const [collectionCreated, setCollectionCreated] = useState<boolean>(false);


  function hiddenCollection(hiden: boolean) {
    setShowCollection(false);
    setCollectionCreated(true)
    setTimeout(() => {
      setCollectionCreated(false)
    }, 2000);
  }
  function updateCollection(item: Collection) {

    const stored: Collection[] = JSON.parse(
      localStorage.getItem("collection") || "[]"
    );

    const updated = stored.map(collection => {
      if (collection.id === item.id) {

        const novosItens = item.itensId.filter(
          newItem => !collection.itensId.includes(newItem)
        );

        return {
          ...collection,
          itensId: [...collection.itensId, ...novosItens]
        };
      }

      return collection;
    });

    localStorage.setItem("collection", JSON.stringify(updated));

  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("collection") || "[]");
    SetCollectionData(stored);
  }, []);

  return (
    <>
      {
        collectionCreated && (
          <SFeedbackCollection>
            Coleção criada com sucesso!
          </SFeedbackCollection>
        )
      }
      {
        showCollection && collectionData.length > 0 && (
          <SContainerCollection>
            {
              collectionData.map(item =>
                <div key={item.id}>
                  <button
                    onClick={() => updateCollection(item)}
                  >
                    {item.name}
                  </button>
                </div>
              )
            }
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
            {

            }
          </ SContainerCollection>

        )
      }
      {
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
