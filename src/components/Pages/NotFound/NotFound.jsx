import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  max-width: 144rem;
  width: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10rem;
`;

const NotFound = () => {
  return <Container>Not Found...</Container>;
};

export default NotFound;
