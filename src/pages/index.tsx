import * as React from 'react';
import styled from 'styled-components';
import { ThemeToggler } from '../components/ThemeToggler';
import { GlobalStyles } from '../styles/GlobalStyles';

const IndexPage = () => (
  <>
    <GlobalStyles />
    <StyledContainer>
      <ThemeToggler />
      <h1>hello</h1>
    </StyledContainer>
  </>
);

const StyledContainer = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--colors-background);
  color: var(--colors-text);
`;

export default IndexPage;
