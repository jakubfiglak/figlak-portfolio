import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import { ThemeToggler } from '../components/ThemeToggler';
import { GlobalStyles } from '../styles/GlobalStyles';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

const IndexPage = () => (
  <>
    <GlobalStyles />
    <StyledContainer>
      <ThemeToggler />
      <LanguageSwitcher />
      <h1>
        <Trans>Hello</Trans>
      </h1>
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

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
