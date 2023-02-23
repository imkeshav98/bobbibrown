import React from "react";
import { useEffect, useState } from "react";
import "./SearchDebouncing.css";

export default function SearchDebouncing() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://bobbibrown-api.onrender.com/product"
      ).then((d) => d.json());
      setProduct(data);
    }
    getData();
  }, []);
  return <div></div>;
}
