import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Products } from "../components/Products/Products";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
};
