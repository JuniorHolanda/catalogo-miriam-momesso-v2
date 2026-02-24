export const defaultTheme = {
  fonts: {
    primary: 'var(--font-primary), sans-serif',
    secondary: 'var(--font-secondary), sans-serif',
  },

  spaces: {
    msm: '3px',
    sm: '5px',
    md: '15px',
    lg: '20px',
    xlg: '35px',
  },

  border: {
    sm: '1px',
    md: '2px',
    lg: '5px',
  },

  fontSize: {
    sm: 'clamp(0.5rem, 1vw, 1rem)',
    md: 'clamp(0.9rem, 1vw, 2rem)',
    lg: 'clamp(2rem, 4vw, 8rem)',
    xlg: 'clamp(2rem, 8vw, 10rem)',
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    background: {
      high: '#ffffff',
      medium: '#f3f3f3',
      surface: '#e7e7e7ff',
      base: '#d3d3d3ff',
      reverse: '#27252eff',
    },

    pallet: {
      primary: '#244cff',
      primaryUp: '#111774',
      secondary: '#ffbb25ff',
    },

    title: {
      primary: '#',
      secondary: '#ffffff',
      reverse: '#232324',
    },

    text: {
      text: '#27252eff',
      textMain: '#151516ff',
      reverseText: '#d9d9d9ff',
    },

    link: {
      primary: '#244cff',
      activePrimary: '#3895ff',
      secondary: '#ffbb25ff',
      reverse: '#ffffff',
    },

    border: {
      default: '#f3f3f3',
      active: '#244cff',
      error: '#e76060ff',
    },

    button: {
      default: '#d3d3d3ff',
      defaultHover: '#706aa4ff',
      primary: '#4ed1adff',
      primaryHover: '#ffbb25ff',
    },

    opacity: {
      base: '#d3d3d357',
      primary: '#244cff5b',
      reverse: '#00000042',
    },
  },
}

export const darkTheme = {
  ...defaultTheme,
  colors: {
      background: {
      high: '#ffffffff',
      medium: '#f0f0f0ff',
      surface: '#e7e7e7ff',
      base: '#d3d3d3ff',
      reverse: '#27252eff',
    },

    pallet: {
      primary: '#244cff',
      secondary: '#ffbb25ff',
    },

    title: {
      primary: '#232324',
      secondary: '#244cff',
      reverse: '#ffffff'
    },

    text: {
      text: '#d3d3d3ff',
      textMain: '#ffffffff',
      reverseText: '#27252eff',
    },

    link: {
      primary: '#f0f0f0ff',
      secondary: '#706aa4ff',
      reverse: '#d9d9d9ff',
    },

    border: {
      default: '#414141ff',
      active: '#706aa4ff',
      error: '#e76060ff',
    },

    button: {
      default: '#d3d3d3ff',
      defaultHover: '#706aa4ff',
      primary: '#4ed1adff',
      primaryHover: '#ffbb25ff',
    },

    opacity: {
      base: '#00000042',
      primary: '#244cff5b',
      reverse: '#d3d3d357',
    },
  },
};


export type Theme = typeof lightTheme;