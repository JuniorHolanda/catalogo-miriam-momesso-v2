// src/styles/theme.ts
export const defaultTheme = {
  fonts: {
    // … outros
  },

  spaces: {

  }
};

export const lightTheme = {
    ...defaultTheme,
    colors: {
        background: '#e93a3aff',
        text: '#a33737ff',
        primary: '#c2deffff',
}
};

export const darkTheme = {
    ...defaultTheme,
    colors: {
        background: '#121212',
        text: '#ffffff',
        primary: '#0a84ff',
    }
};

export type Theme = typeof lightTheme; // se quiser tipagem
