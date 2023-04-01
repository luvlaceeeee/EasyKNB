import { useEffect, useState } from 'react';

//TODO: Saved theme to localStorage

const useDarkMode = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useDarkMode;
