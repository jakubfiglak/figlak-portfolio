import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-stack: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-stack);
    font-size: 62.5%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  } 

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  body[data-theme='dark'] {
    --colors-primary: #8ACB88;
    --colors-secondary: #788AA3;
    --colors-background: #1F2041;
    --colors-text: #FCEFEF;
    --colors-tertiary: #FF6666;
  }

  body[data-theme='light'] {
    --colors-primary: #8ACB88;
    --colors-secondary: #788AA3;
    --colors-text: #1F2041;
    --colors-background: #FCEFEF;
    --colors-tertiary: #FF6666;
  }

  a {
    text-decoration: none;
    color: var(--colors-text);
  }

  button {
    font-family: var(--font-stack);
    cursor: pointer;
  }
`;
