
import HeaderDesktop from '@/components/Headers/HeaderDesktop';
import HeaderMobile from '@/components/Headers/HeaderMobile';
import { SDesktop, SMobile } from './headerSwitch.styles';
import SearchMobile from '@/components/SearchMobile';
import Footer from '@/components/Footer';

type Props = {
    children: React.ReactNode;
};

export default function HeaderSwitcher({ children }: Props) {

    return (
        <>
            <SDesktop>
                <HeaderDesktop />
                    {children}
                <Footer />
            </SDesktop>

            <SMobile>
                <SearchMobile />
                {children}
                <HeaderMobile />
            </SMobile>
        </>
    )
}
