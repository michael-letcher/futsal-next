'use client';

import NavBar from '@/components/nav-bar/nav-bar';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { createContext } from 'react';
import styles from '../app/layout.module.scss';

export const ThemeContext = createContext('');

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <header className={styles.header}>
        <NavBar />
      </header>

      {children}
    </FluentProvider>
  );
}
