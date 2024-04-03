// components/Navbar.js

import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: blue;
  padding: 10px 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: lightgray;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <NavLink href="/auth">Auth</NavLink>
      <NavLink href="/tracker">Tracker</NavLink>
      <NavLink href="/chat">Message</NavLink>
    </Nav>
  );
};


