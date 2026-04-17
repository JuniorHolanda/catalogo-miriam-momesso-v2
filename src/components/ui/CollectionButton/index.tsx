"use client";

import { IoMdShare } from "react-icons/io";
import {
  SContainerCollection,
  SContainerNewCollection,
  SForm,
  SWrapper,
} from "./collectionButtom.styles";
import { useEffect, useState } from "react";
import CustomButton from "../Button";

type Collection = {
  id: string;
  name: string;
  itens: string;
};

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
  //recebe o valor de collection se ja houver na localStorage, ou vazio
  const [collectionData, SetCollectionData] = useState<Collection[]>([]);
  const [showCollection, setShowCollection] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>("");

  function hadleCollection() {
    setShowCollection(true);
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("collection") || "[]");
    SetCollectionData(stored);
  }, []);

  function SetDataLocalStorage(e: React.FormEvent) {
    e.preventDefault;

    const data: Collection = {
      id: crypto.randomUUID(),
      name: textInput,
      itens: idProduct,
    };

    localStorage.setItem("collection", JSON.stringify(data));
  }

  return (
    <>
      {showCollection &&
        collectionData.length > 0 &&
        <SContainerCollection>
            {
                collectionData.map(item => (
                    <h1>{item.name}</h1>
                ))
            
            }
            
        </SContainerCollection>
    
    }

      {showCollection && collectionData.length <= 0 && (
        <SContainerCollection>
          <SContainerNewCollection>
            <p>
              Nenhuma coleção por aqui, clique em nova coleção para criar uma
              nova.
            </p>
            <SForm onSubmit={SetDataLocalStorage}>
              <input
                type="text"
                placeholder="insira o nome da coleção"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <CustomButton type="submit">Criar Coleção</CustomButton>
            </SForm>
          </SContainerNewCollection>
        </SContainerCollection>
      )}

      <SWrapper onClick={() => hadleCollection()}>
        <IoMdShare />
        <>{children}</>
      </SWrapper>
    </>
  );
}
