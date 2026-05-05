
import HeaderDesktop from '@/components/Headers/HeaderDesktop';
import HeaderMobile from '@/components/Headers/HeaderMobile';
import { SDesktop, SMobile } from './headerSwitch.styles';
import SearchMobile from '@/components/SearchMobile';

type Props = {
  children: React.ReactNode;
};

export default function HeaderSwitcher( {children} : Props) {

    return (
        <>
            <SDesktop>
                <HeaderDesktop />
                {children}
            </SDesktop>

            <SMobile>
                <SearchMobile />
                    {children}
                <HeaderMobile />
            </SMobile>
        </>
    )
}
