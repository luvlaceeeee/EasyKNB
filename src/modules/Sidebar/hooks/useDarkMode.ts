import { useEffect, useState } from 'react';

//TODO: Saved theme to localStorage

export const useDarkMode = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(
      theme === 'dark'
        ? (localStorage.theme = 'light')
        : (localStorage.theme = 'dark')
    );
  };

  return [theme, handleThemeSwitch] as const;
};
