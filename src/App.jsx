import React from "react";
import "./App.css";
import { Footer } from "./components/Global/Footer/Footer";
import { Routing } from "./routes/Routes";
import { useDispatch } from "react-redux";
import { handleData } from "./Redux/ProductData/actions";
import axios from "axios";
import { useEffect } from "react";
import { Navbar } from "./components/Global/Nav/NavComp/components/Navbar";
import { Auth } from "./components/Auth/Auth";
import { Logout } from "./components/Global/Nav/NavComp/components/Logout";
// import {Navbar} from "./components/Global/Nav/NavComp/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    axios.get("https://bobbi-brown-api.herokuapp.com/product").then((res) => {
      const data = res.data;
      dispatch(handleData(data));
    });
  };

  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
