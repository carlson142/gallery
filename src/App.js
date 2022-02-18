import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Main from "./components/Main/Main";
import Details from "./components/Pages/Details/Details";

import HomePage from "./components/Pages/HomePage/HomePage";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  const [img, setImg] = useState([]);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const fetchingData = async () => {
    // Данные из АПИ
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?page=1&fields=id,title,artist_display,date_display,main_reference_number,image_id,place_of_origin,dimensions,date_start,copyright_notice,medium_display,alt_image_ids"
    );

    const apiData = await response.json();
    setData(apiData.data);

    // Вытаскиваем имаги из отдельного АПИ
    const images = apiData.data.map((el) => {
      const test = `https://www.artic.edu/iiif/2/${el.image_id}/full/843,/0/default.jpg`;
      return test;
    });

    setImg(images);
    setLoad(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <Header></Header>
      <Main>
        {load ? (
          <Loading></Loading>
        ) : (
          <Routes>
            <Route
              path="/gallery/"
              element={<HomePage img={img} data={data} />}
            ></Route>
            <Route path="/galleria/:id" element={<Details />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        )}
      </Main>
    </>
  );
}

export default App;
