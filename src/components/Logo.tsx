import React from 'react';
import styled from 'styled-components';

export const Logo = () => (
  <StyledLogo>
    <span>{`< `}</span>
    figlak <span>{`/>`}</span>
  </StyledLogo>
);

const StyledLogo = styled.h1`
  transform: rotate(-5deg);

  span {
    color: var(--colors-primary);
  }
`;
