'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/themes/theme';
import { GlobalStyle } from '@/styles/globals';

type ThemeMode = 'light' | 'dark';

interface ThemeContextData {
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<ThemeMode>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        // tenta recuperar tema salvo
        const storedTheme = localStorage.getItem(
            'theme'
        ) as ThemeMode | null;

        if (storedTheme) {
            setTheme(storedTheme);
        } else {

            // se não houver tema salvo, usa preferência do sistema
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;

            setTheme(
                prefersDark
                    ? 'dark'
                    : 'light'
            );
        }

        setMounted(true);

    }, []);

    useEffect(() => {

        // sempre que o estado theme mudar, salvao novo valor.
        localStorage.setItem('theme', theme);

    }, [theme]);


    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    const themeObject = theme === 'light' ? lightTheme : darkTheme;

    if (!mounted) {
        return null;
    }
    return (
        <ThemeProvider theme={themeObject}>
            <GlobalStyle />
            <ThemeContext.Provider value={{ themeMode: theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext deve ser usado dentro do AppThemeProvider');
    }
    return context;
}