'use client'
import { useViewportContext } from '@/contexts/ViewportContext';
import HeaderDesktop from '@/components/Headers/HeaderDesktop';
import HeaderMobile from '@/components/Headers/HeaderMobile';
import { Product } from "@/utils/interfaces";

type HeaderSwitcherProps = {
    products: Product[];
}

export default function HeaderSwitcher() {

    const viewport = useViewportContext();

    if (!viewport) return null;

    if (viewport === 'lg') {
        return <HeaderDesktop />;
    } else {
        return <HeaderMobile />
    }
}
