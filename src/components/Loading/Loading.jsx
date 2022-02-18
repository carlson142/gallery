import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  height: 85vh;

  font-size: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    font-size: 3.5rem;
    text-align: center;
  }
`;

const Loading = () => {
  return <Container>One Moment Please!</Container>;
};

export default Loading;
