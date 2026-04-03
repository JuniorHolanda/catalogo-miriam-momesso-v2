
import HeaderDesktop from '@/components/Headers/HeaderDesktop';
import HeaderMobile from '@/components/Headers/HeaderMobile';
import { SDesktop, SMobile } from './headerSwitch.styles';

export default function HeaderSwitcher() {

    return (
        <>
            <SDesktop>
                <HeaderDesktop />
            </SDesktop>

            <SMobile>
                <HeaderMobile />
            </SMobile>
        </>
    )
}
