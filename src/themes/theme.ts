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
    xLarge: '35px',
  },

  fontSize: {
    microSmall: 'clamp(0.5rem, 1vw, 1rem)',
    small: 'clamp(0.9rem, 1vw, 2rem)',
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
    backgroundBase: '#ebebeb', // principal
    backgroundSurface: '#d6d6d6', // sessões
    backgroundMuted: '#ffffff', // neutro
    backgroundAccent: '#8daef2', // áreas de destaque

    text: '#1e152a',
    textAccent: '#ebebeb',
    textMuted: '#a3a3a3',
    textHover: '#f58415',
    btn: '#1c1c1dff',
    btnHover: '#f58415',

    border: '#ffffff49',

    primary: '#275af2',
    primaryHover: '#0031c4',
    secondary: '#F4E04D',
    secondaryHover: '#f58415',
  },

  transparence: {
    primary: '#ffffff42',
    secondary: '#ffffff86',
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

    border: '#0000001e',

    primary: '#275af2',
    primaryHover: '#0031c4ff',
    secondary: '#F4E04D',
    secondaryHover: '#f58415',
  },

  transparence: {
    primary: '#ffffff42',
    secondary: '#ffffff86',
  },
};

export type Theme = typeof lightTheme;
