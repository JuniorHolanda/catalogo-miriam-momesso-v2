export const defaultTheme = {
  fonts: {
    titleFont: 'var(--font-title), sans-serif',
    commonFont: 'var(--font-common), sans-serif',
  },

  spaces: {
    microSmall: '3px',
    small: '5px',
    medium: '15px',
    large: '20px',
    xLarge: '30px',
  },

  fontSize: {
    small: 'clamp(0.7rem, 1vw, 2rem)',
    medium: 'clamp(1rem, 2vw, 2rem)',
    large: 'clamp(2rem, 4vw, 4rem)',
  },

  borderRadios: {
    minimum: '3px',
    small: '5px',
    medium: '10px',
    large: '20px',
    Xlarge: '30px',
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    backgroundBase: '#ebebebff', // principal
    backgroundSurface: '#d6d6d6ff', // sessões
    backgroundMuted: '#ffffff', // neutro
    backgroundAccent: '#8daef2', // áreas de destaque

    text: '#1e152a',
    textAccent: '#ebebebff',
    textMuted: '#a3a3a3ff',
    textHover: '#f58415',
    btn: '#1c1c1dff',
    btnHover: '#f58415',

    primary: '#275af2',
    primaryHover: '#0031c4ff',
    secondary: '#F4E04D',
    secondaryHover: '#f58415',
  },

  gradient: {
    primary: 'linear-gradient(135deg, #ffffff86 0%, #275af22a 90%)',
    secondary: 'linear-gradient(135deg, #ffffff86 0%, #36363634 90%)',
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    backgroundBase: '#1c1c1dff', // principal
    backgroundSurface: '#343438ff', // sessões
    backgroundMuted: '#414141ff', // neutro
    backgroundAccent: '#1b142bff', // áreas de destaque

    text: '#cececeff',
    textAccent: '#ffffffff',
    textMuted: '#a3a3a3ff',
    textHover: '#f58415',
    btn: '#275af2',
    btnHover: '#0031c4ff',

    primary: '#275af2',
    primaryHover: '#0031c4ff',
    secondary: '#F4E04D',
    secondaryHover: '#f58415',
  },

  gradient: {
    primary: 'linear-gradient(135deg, #275af2 0%, #ffffffff 100%)',
    secondary: 'linear-gradient(135deg, #ffffff86 0%, #36363634 90%)',
  },
};

export type Theme = typeof lightTheme;
