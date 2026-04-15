'use client'

import { useEffect } from "react";

export default function ColecaoPage() {

    useEffect(() => {
        const data = localStorage.getItem('colection')
    }, [])

    return (



    );
}