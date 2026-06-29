export const defaultTheme = {
  fonts: {
    primary: 'var(--font-primary), sans-serif',
    secondary: 'var(--font-secondary), sans-serif',
  },

  fontSize: {
    sm: 'clamp(1rem, 1vw, 1.5rem)',
    xsm: 'clamp(1.2rem, 1.5vw, 7rem)',
    md: 'clamp(1.5rem, 3vw, 5rem)',
    lg: 'clamp(3rem, 4vw, 8rem)',
    xlg: 'clamp(4rem, 6vw, 10rem)',
  },

  spaces: {
    msm: '3px',
    sm: '5px',
    md: '15px',
    lg: '20px',
    xlg: '35px',
  },

  iconSize: {
    sm: 'clamp(.5rem, 1.3rem, 3vw)',
    md: 'clamp(1rem, 4rem, 6vw)',
  },
}

export const lightTheme = {
  ...defaultTheme,
  mode: 'light',
  colors: {
    background: {
      high: '#ffffff',
      medium: '#f3f3f3',
      surface: '#e7e7e7ff',
      base: 'rgb(221, 221, 221)',
      reverse: '#27252eff',
    },

    pallet: {
      primary: '#244cff',
      primaryUp: '#99B2DD',
      secondary: '#d68710',
      secondaryUP: '#ff711f',
    },

    feedback: {
      success: '#22c55e',
      error: '#ef4444',
      warning: '#244cff',
      info: '#3b82f6',
    },

    title: {
      primary: '#f59e0b',
      secondary: '#ffffff',
      reverse: '#232324',
    },

    text: {
      text: '#27252eff',
      textMain: '#151516ff',
      secondaryText: '#747272',
      reverseText: '#ffffff',
    },

    link: {
      primary: '#e9e9e9',
      hover: '#244cff',
      activePrimary: '#8cc1fd',
      secondary: '#ffa010',
      reverse: '#1f1f1f',
    },

    border: {
      default: '#f3f3f3',
      active: '#244cff',
      error: '#e76060ff',
    },

    button: {
      default: '#244cff',
      hover: '#22c55e',
      active: '#d68710',
      focus: '#ff711f',
      inactive: '#27252eff',
    },

    opacity: {
      base: '#244cff5b',
      primary: '#474f7c48',
      reverse: '#ffffff44',
    },
  },
}

export const darkTheme = {
  ...defaultTheme,
  mode: 'dark',
  colors: {
    background: {
      high: '#0d0d11',
      medium: '#161616',
      surface: '#000000',
      base: '#2c2c2c',
      reverse: '#cacaca',
    },

    pallet: {
      primary: '#0d0d11',
      primaryUp: '#99B2DD',
      secondary: '#d68710',
      secondaryUP: '#ff711f',
    },

    feedback: {
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    },

    title: {
      primary: '#f59e0b',
      secondary: '#3b82f6',
      reverse: '#ffffff',
    },

    text: {
      text: '#c5c5c5',
      textMain: '#f59e0b',
      reverseText: '#131314',
      secondaryText: '#474747',
    },

    link: {
      primary: '#c5c5c5',
      hover: '#d68710',
      activePrimary: '#244cff',
      secondary: '#f59e0b',
      reverse: '#161616',
    },

    border: {
      default: '#f3f3f3',
      active: '#244cff',
      error: '#e76060ff',
    },

    button: {
      default: '#244cff',
      hover: '#22c55e',
      active: '#d68710',
      focus: '#ff711f',
      inactive: '#27252eff',
    },

    opacity: {
      base: '#11152ba1',
      primary: '#244cff5b',
      reverse: '#ffffff44',
    },
  },
}

export type Theme = typeof lightTheme
