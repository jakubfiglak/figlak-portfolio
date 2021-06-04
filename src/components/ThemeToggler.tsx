import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme | 'light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button type="button" onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} theme
    </button>
  );
};
