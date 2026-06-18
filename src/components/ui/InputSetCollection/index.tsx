'use client'

import { InputHTMLAttributes, useEffect, useState } from "react";
import { SButtonCategory, SForm } from "./inputSetCollection.styles"
import { Collection } from "@/utils/types";
import getLocalStorage from "@/utils/getLocalStorage";
import { emoji } from "@/utils/emojis";
import { FaCheck } from "react-icons/fa";

type PropsSetForm = {
    children: React.ReactNode;
    className?: string;
    idProduct: string;
    onSuccess?: (text: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;


export default function InputSetCollection({
    idProduct,
    children,
    className,
    onSuccess,
    ...rest
}: PropsSetForm) {

    const [textInput, setTextInput] = useState<string>("");
    const positiveEmojis = emoji({ typeEmoji: 'positive' })

    function SetDataLocalStorage(e: React.FormEvent) {
        const stored = getLocalStorage();
        e.preventDefault();
        const data: Collection = {
            id: crypto.randomUUID(), // gera id dinâmico
            name: textInput,
            itensId: [idProduct],
        };
        const updated = [...stored, data]
        localStorage.setItem("collection", JSON.stringify(updated));

        //informa para o pai que o sucesso da tarefa e o pai atualiza a UI
        onSuccess?.(`Coleção ${textInput} criada com sucesso! ${positiveEmojis}`);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!textInput.trim()) return; // bloqueia submit vazio
        SetDataLocalStorage(e);
    };


    return (
        <SForm
            tabIndex={0}
            onSubmit={handleSubmit}
            className={className}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                damping: 13,
                stiffness: 100,
            }}
        >
            <input
                {...rest}
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                required
                maxLength={30}

            />
            <SButtonCategory
                type="submit"
                disabled={!textInput.trim()}
            >
                <FaCheck />
                <span>{children}</span>
            </SButtonCategory>
        </SForm>
    )
}