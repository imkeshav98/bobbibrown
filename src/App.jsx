import React from "react";
import "./App.css";
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
