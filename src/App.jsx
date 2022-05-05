import React from "react";
import {ProductDetails} from './components/ProductDetails/ProductDetails'
import './App.css';
import 'antd/dist/antd.css'
import { Footer } from "./components/Global/Footer/Footer";
import { Routing } from "./routes/Routes";

function App() {
  return (
    <>
      <Routing />
      <Footer />
    </>
  );
}

export default App;
