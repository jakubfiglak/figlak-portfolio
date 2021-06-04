import React from 'react';
import styled from 'styled-components';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from './Logo';
import { ThemeToggler } from './ThemeToggler';

export const Nav = () => (
  <StyledNav>
    <Logo />
    <ul>
      <li>
        <a href="#test">about</a>
      </li>
      <li>
        <a href="#test">projects</a>
      </li>
      <li>
        <a href="#test">tech stack</a>
      </li>
      <li>
        <a href="#test">contact</a>
      </li>
      <div>
        <li>
          <LanguageSwitcher />
        </li>
        <li>
          <ThemeToggler />
        </li>
      </div>
    </ul>
  </StyledNav>
);

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  border-bottom: 1px solid var(--colors-primary);

  ul {
    display: flex;
  }

  li {
    margin: 0 2rem;
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    justify-items: center;
  }

  div > li {
    margin: 0 1rem;
  }
`;
