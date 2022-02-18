import React from "react";
import styled from "styled-components";

import GalleriaCard from "../../GalleriaCard/GalleriaCard";

const Container = styled.div`
  width: 100%;

  padding: 5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 10rem);
  grid-gap: 2rem;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 40rem 30rem 40rem 30rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 40rem);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 40rem);
  }
`;

const ImgContainer = styled.div`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};

  @media (max-width: 1350px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const HomePage = ({ img, data }) => {
  return (
    <Container>
      <Grid>
        {/* 1 */}
        <ImgContainer column="1/2" row="1/4">
          <GalleriaCard
            src={img[0]}
            author={data[0].artist_display}
            title={data[0].title}
            id={data[0].id}
          />
        </ImgContainer>
        {/* 2 */}
        <ImgContainer column="2/3" row="1/5">
          <GalleriaCard
            src={img[1]}
            author={data[1].artist_display}
            title={data[1].title}
            id={data[1].id}
          />
        </ImgContainer>
        {/* 3 */}
        <ImgContainer column="3/4" row="1/4">
          <GalleriaCard
            src={img[2]}
            author={data[2].artist_display}
            title={data[2].title}
            id={data[2].id}
          />
        </ImgContainer>

        {/* 4 */}
        <ImgContainer column="4/5" row="1/3">
          <GalleriaCard
            src={img[3]}
            author={data[3].artist_display}
            title={data[3].title}
            id={data[3].id}
          />
        </ImgContainer>

        {/* 5 */}
        <ImgContainer column="1/2" row="4/8">
          <GalleriaCard
            src={img[4]}
            author={data[4].artist_display}
            title={data[4].title}
            id={data[4].id}
          />
        </ImgContainer>

        {/* 6 */}
        <ImgContainer column="2/3" row="5/7">
          <GalleriaCard
            src={img[5]}
            author={data[5].artist_display}
            title={data[5].title}
            id={data[5].id}
          />
        </ImgContainer>

        {/* 7 */}
        <ImgContainer column="3/4" row="4/8">
          <GalleriaCard
            src={img[6]}
            author={data[6].artist_display}
            title={data[6].title}
            id={data[6].id}
          />
        </ImgContainer>

        {/* 8 */}
        <ImgContainer column="4/5" row="3/7">
          <GalleriaCard
            src={img[7]}
            author={data[7].artist_display}
            title={data[7].title}
            id={data[7].id}
          />
        </ImgContainer>

        {/* 9 */}
        <ImgContainer column="1/2" row="8/-1">
          <GalleriaCard
            src={img[8]}
            author={data[8].artist_display}
            title={data[8].title}
            id={data[8].id}
          />
        </ImgContainer>

        {/* 10 */}
        <ImgContainer column="2/3" row="7/-1">
          <GalleriaCard
            src={img[9]}
            author={data[9].artist_display}
            title={data[9].title}
            id={data[9].id}
          />
        </ImgContainer>

        {/* 11 */}
        <ImgContainer column="3/4" row="8/-1">
          <GalleriaCard
            src={img[10]}
            author={data[10].artist_display}
            title={data[10].title}
            id={data[10].id}
          />
        </ImgContainer>

        {/* 12 */}
        <ImgContainer column="4/5" row="7/-1">
          <GalleriaCard
            src={img[11]}
            author={data[11].artist_display}
            title={data[11].title}
            id={data[11].id}
          />
        </ImgContainer>
      </Grid>
    </Container>
  );
};

export default HomePage;
