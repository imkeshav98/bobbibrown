import React, { useLayoutEffect } from "react";
import "./App.css";
import { Footer } from "./components/Global/Footer/Footer";
import { Routing } from "./routes/Routes";
import { useDispatch } from "react-redux";
import { handleData } from "./Redux/ProductData/actions";
import axios from "axios";
// import { useEffect } from "react";
import { Navbar } from "./components/Global/Nav/NavComp/components/Navbar";
import { userLogin } from "./Redux/Login/action";

// import {Navbar} from "./components/Global/Nav/NavComp/Navbar";

function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    userData();
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

  const getNewUserData = (usertoken) => {
    axios
      .get("https://bobbi-brown-api.herokuapp.com/cart/getcart", {
        headers: { Authorization: `Bearer ${usertoken}` },
      })
      .then((res) => dispatch(userLogin(res.data)));
  };

  const userData = () => {
    const userInfo = JSON.parse(localStorage.getItem("UserToken"));
    if (userInfo == null) {
      dispatch(userLogin(false));
    } else {
      getNewUserData(userInfo);
      // dispatch(userLogin(userInfo));
    }
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
