'use client'

import { InputHTMLAttributes, useEffect, useState } from "react";
import CustomButton from "../Button"
import { SForm } from "./inputSetCollection.styles"
import { Collection } from "@/utils/types";

type PropsSetForm = {
    children: React.ReactNode;
    className?: string;
    idProduct: string;
    onSuccess?: (text: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;


export default function InputSetCollection ({
    idProduct,
    children,
    className,
    onSuccess,
    ...rest
}: PropsSetForm) {

    const [textInput, setTextInput] = useState<string>("");

    function SetDataLocalStorage(e: React.FormEvent) {
        const stored = JSON.parse(localStorage.getItem("collection") || "[]");
        e.preventDefault();
        const data: Collection = {
            id: crypto.randomUUID(),
            name: textInput,
            itensId: [idProduct],
        };
        const updated = [...stored, data]
        localStorage.setItem("collection", JSON.stringify(updated));
        
        //informa para o pai que o sucesso da tarefa e o pai atualiza a UI
        onSuccess?.(`Coleção ${textInput} criada com sucesso!`);
    }


    return (
        <SForm onSubmit={SetDataLocalStorage}>
            <input
                {...rest}
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
            />
            <CustomButton type="submit">{children}</CustomButton>
        </SForm>
    )
}