import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';

type Theme = 'light' | 'dark';

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme | 'light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <StyledThemeToggler type="button" onClick={() => setTheme(nextTheme)} title={`Change to ${nextTheme} theme`}>
      {nextTheme === 'light' ? <WiDaySunny /> : <WiNightClear />}
    </StyledThemeToggler>
  );
};

const StyledThemeToggler = styled.button`
  display: flex;
  justify-items: center;
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
