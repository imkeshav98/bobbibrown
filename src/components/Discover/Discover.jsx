import { DiscoverComp } from "./DiscoverComponent";
import { useState, useEffect } from "react";
import axios from "axios";

export const Discover = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = () => {
    axios
      .get("https://bobbi-brown-api.herokuapp.com/discover")
      .then((res) => setData(res.data));
  };
  return (
    <>
      <div
        className="DiscoverDataMapping"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          width: "90vw",
          margin: "auto",
          textAlign: "start",
          gap: "20px",
        }}
      >
        {data.map((e) => (
          <DiscoverComp {...e} />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};
