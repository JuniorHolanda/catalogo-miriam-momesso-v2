
import 'styled-components';
import { lightTheme } from '@/themes/theme';

type ThemeType = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
