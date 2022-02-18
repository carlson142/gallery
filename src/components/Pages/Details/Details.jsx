import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../Loading/Loading";

const Container = styled.div`
  width: 100%;

  height: 85vh;

  padding: 5rem;

  display: flex;

  @media (max-width: 1050px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 3rem;
  }

  @media (max-width: 450px) {
    padding: 2rem;
  }
`;

const Left = styled.div`
  flex: 0 0 50%;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

const Right = styled.div`
  flex: 1;

  padding: 2rem;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: var(--color-primary-dark-gray);

  margin-bottom: 2rem;

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
`;

const Item = styled.li`
  font-size: 2rem;

  width: 100%;
  display: flex;

  margin: 1rem 0;

  @media (max-width: 550px) {
    font-size: 1.6rem;
  }
`;

const Key = styled.span`
  color: var(--color-primary-dark-gray);
  font-weight: bold;

  flex: 0 0 30%;
`;

const Value = styled.span`
  flex: 1;
  color: var(--color-primary-gray);
`;

const Details = () => {
  const id = useParams();
  const newId = Number(id.id.replace(":", ""));

  const [pictureData, setPictureData] = useState([]);
  const [image, setImage] = useState("");
  const [load, setLoad] = useState(true);

  const fetchingPicture = async () => {
    // Данные о конкретной картине по ИД
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/${newId}?fields=title,artist_display,date_display,main_reference_number,image_id,place_of_origin,dimensions,date_start,copyright_notice,medium_display,alt_image_ids`
    );
    const data = await response.json();

    setPictureData(data.data);

    // Ссылка на изображение
    let imageID = data.data.image_id;

    const imageSrc = await fetch(
      `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`
    );

    setImage(imageSrc.url);

    setLoad(false);
  };

  useEffect(() => {
    fetchingPicture();
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <Container>
          <Left>
            <ImageContainer>
              <Image src={image} alt="hero" />
            </ImageContainer>
          </Left>

          <Right>
            <InfoContainer>
              <Title>{pictureData.title}</Title>

              <List>
                <Item>
                  <Key>Artist</Key>
                  <Value>{pictureData.artist_display}</Value>
                </Item>

                <Item>
                  <Key>Title</Key>
                  <Value>{pictureData.title}</Value>
                </Item>

                <Item>
                  <Key>Place</Key>
                  <Value>{pictureData.place_of_origin}</Value>
                </Item>

                <Item>
                  <Key>Date</Key>
                  <Value>{pictureData.date_start}</Value>
                </Item>

                <Item>
                  <Key>Medium</Key>
                  <Value>{pictureData.medium_display}</Value>
                </Item>

                <Item>
                  <Key>Dimensions</Key>
                  <Value>{pictureData.dimensions}</Value>
                </Item>

                <Item>
                  {pictureData.copyright_notice ? (
                    <>
                      {" "}
                      <Key>Copyright</Key>
                      <Value>{pictureData.copyright_notice}</Value>
                    </>
                  ) : null}
                </Item>
              </List>
            </InfoContainer>
          </Right>
        </Container>
      )}
    </>
  );
};

export default Details;
