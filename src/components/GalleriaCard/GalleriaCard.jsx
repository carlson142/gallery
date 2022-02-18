import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Caption = styled.figcaption`
  color: white;

  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);

  opacity: 0;

  transition: all 0.2s ease-in;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;

  transition: all 0.2s ease-in;
`;

const Figure = styled.figure`
  height: 100%;
  width: 100%;

  position: relative;

  cursor: pointer;

  &:hover ${Image} {
    filter: opacity(0.7);
  }

  &:hover ${Caption} {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Author = styled.h3`
  font-size: 1.6rem;
  text-align: center;
`;

const GalleriaCard = ({ src, author, title, id }) => {
  const nav = useNavigate();

  return (
    <Figure
      onClick={() => {
        nav(`/galleria/:${id}`);
      }}
    >
      <Image src={src} />
      <Caption>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Caption>
    </Figure>
  );
};

export default GalleriaCard;
