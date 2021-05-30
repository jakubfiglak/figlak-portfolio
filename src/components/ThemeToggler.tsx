import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button type="button" onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} theme
    </button>
  );
};
