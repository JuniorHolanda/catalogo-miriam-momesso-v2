'use client'
import { useViewportContext } from '@/contexts/ViewportContext';
import HeaderDesktop from '@/components/Headers/HeaderDesktop';
import HeaderMobile from '@/components/Headers/HeaderMobile';

export default function HeaderSwitcher() {

    const viewport = useViewportContext();

    if (!viewport) return null;

    if (viewport === 'lg') {
        return <HeaderDesktop />;
    } else {
        return <HeaderMobile />
    }
}
