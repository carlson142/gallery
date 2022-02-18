import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 144rem;
  width: 100%;

  margin: 0 auto;
`;

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
