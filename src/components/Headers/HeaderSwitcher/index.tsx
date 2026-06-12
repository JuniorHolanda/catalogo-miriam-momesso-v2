
import HeaderDesktop from '@/components/Headers/HeaderDesktop';
import HeaderMobile from '@/components/Headers/HeaderMobile';
import { SContainerContent, SDesktop, SMobile } from './headerSwitch.styles';
import SearchMobile from '@/components/SearchMobile';
import Footer from '@/components/Footer';
import IntroAnimation from '@/components/IntroAnimation';

type Props = {
    children: React.ReactNode;
};

export default function HeaderSwitcher({ children }: Props) {

    return (
        <>
        <IntroAnimation />
            <SDesktop>
                <HeaderDesktop />
                    {children}
                <Footer />
            </SDesktop>

            <SMobile>
                <SearchMobile />
                <SContainerContent>
                    {children}
                </SContainerContent>
                <HeaderMobile />
            </SMobile>
        </>
    )
}
