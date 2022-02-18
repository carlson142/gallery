import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  max-width: 134rem;
  min-height: 15vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-primary-light-gray);

  @media (max-width: 1350px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;

const Logo = styled(Link).attrs({ to: "/" })`
  font-size: 6rem;
  font-weight: bold;
  color: var(--color-primary-dark-gray);

  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const CustomLink = styled.a.attrs({
  href: "https://www.artic.edu/",
  target: "_blank",
})`
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  font-weight: bold;

  background-color: transparent;
  border: none;

  font-size: 1.6rem;
  text-transform: uppercase;
  color: var(--color-primary-gray);

  letter-spacing: 2px;

  transition: all 0.1s ease-in;

  &:hover {
    color: var(--color-primary-dark-gray);
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

const MobileLink = styled(CustomLink)`
  display: none;

  @media (max-width: 550px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>galleria.</Logo>
      <CustomLink>Art Institute of Chicago</CustomLink>
      <MobileLink>artic</MobileLink>
    </Container>
  );
};

export default Header;
