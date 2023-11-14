'use client';

import NavBar from '@/components/nav-bar/nav-bar';
import { FluentProvider, Theme, teamsLightTheme } from '@fluentui/react-components';
import { createContext, useState } from 'react';
import styles from '../app/layout.module.scss';

export const ThemeContext = createContext('');

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(teamsLightTheme);

  // if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //   setTheme(webDarkTheme);
  // }

  return (
    <FluentProvider theme={theme} style={{ height: '100%' }}>
      <header className={styles.header}>
        <NavBar />
      </header>

      {children}
    </FluentProvider>
  );
}
