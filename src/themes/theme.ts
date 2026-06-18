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
      md: 'clamp(1rem, 4rem, 6vw)'
  }
}

export const lightTheme = {
  ...defaultTheme,
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
      warning: '#f59e0b',
      info: '#3b82f6',
    },

    title: {
      primary: '#244cff',
      secondary: '#ffffff',
      reverse: '#232324',
    },

    text: {
      text: '#27252eff',
      textMain: '#151516ff',
      reverseText: '#ffffff',
    },

    link: {
      primary: '#244cff',
      activePrimary: '#3895ff',
      secondary: '#d68710',
      reverse: '#ffffff',
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
      inactive: '#27252eff'
    },

    opacity: {
      base: '#474f7c48',
      primary: '#244cff5b',
      reverse: '#ffffff44',
    },
  },
}

export const darkTheme = {
  ...defaultTheme,
  ...defaultTheme,
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
      warning: '#f59e0b',
      info: '#3b82f6',
    },

    title: {
      primary: '#244cff',
      secondary: '#ffffff',
      reverse: '#232324',
    },

    text: {
      text: '#27252eff',
      textMain: '#151516ff',
      reverseText: '#ffffff',
    },

    link: {
      primary: '#244cff',
      activePrimary: '#3895ff',
      secondary: '#d68710',
      reverse: '#ffffff',
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
      inactive: '#27252eff'
    },

    opacity: {
      base: '#6d78b848',
      primary: '#244cff5b',
      reverse: '#ffffff44',
    },
  },
}

export type Theme = typeof lightTheme
