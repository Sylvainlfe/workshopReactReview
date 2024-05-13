import { useState } from "react";
import Filter from "../components/Filter.jsx";

function Filters() {
  const [nameSeries, setNameSeries] = useState(" ");

  fetch("https://www.amiiboapi.com/api/amiiboseries/")
    .then((response) => response.json())
    .then((data) => {
      setNameSeries(data.amiibo.name);
    });
  console.log(nameSeries);
  return (
    <>
      <Filter />
      <Filter />
    </>
  );
}

export default Filters;
