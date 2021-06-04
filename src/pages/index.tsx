import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Nav } from '../components/Nav';

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Nav />
    <StyledContainer>
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
